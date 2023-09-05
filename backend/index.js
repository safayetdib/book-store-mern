import express, { request, response } from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// middleware for parsing request body
app.use(express.json());

// middleware for cors
// option 1: allow all origins with default of cors(*)
// app.use(cors());
// option 2: allow specific origins
app.use(
	cors({
		origin: 'http://localhost:5555',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type'],
	})
);

app.get('/', (request, response) => {
	return response.status(234).send('Welcome');
});

app.use('/books', booksRoute);

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
