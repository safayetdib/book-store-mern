import express, { request, response } from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import { Book } from './models/bookModel.js';

const app = express();

// middleware for parsing request body
app.use(express.json());

app.get('/', (request, response) => {
	return response.status(234).send('Welcome');
});

// route for save a new book
app.post('/books', async (request, response) => {
	try {
		if (
			!request.body.title ||
			!request.body.author ||
			!request.body.publishYear
		) {
			return response.status(400).send({
				message: 'Send all required fields: title, author, publishYear',
			});
		}

		const newBook = {
			title: request.body.title,
			author: request.body.author,
			publishYear: request.body.publishYear,
		};

		const book = await Book.create(newBook);
		return response.status(201).send(book);
	} catch (error) {
		console.log(error);
		response.status(500).send({ message: error.message });
	}
});

// route for get all books from database
app.get('/books', (request, response) => {});

mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log('app connected to database');

		app.listen(PORT, () => {
			console.log(`App is listening to port: ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
