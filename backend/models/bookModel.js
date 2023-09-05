import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: string,
			required: true,
		},
		publishYear: {
			type: Number,
			required: true,
		},
	},
	{
		timeStamps: true,
	}
);

export const book = mongoose.model(book, bookSchema);
