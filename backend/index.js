import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';

const app = express();

app.get('/', (request, response) => {
	return response.status(234).send('Welcome');
});

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
