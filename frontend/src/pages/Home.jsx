import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get('http://localhost:5555/books')
			.then((response) => {
				setBooks(response.data.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="p-4">
			<div className="flex items-center justify-between"></div>
		</div>
	);
};

export default Home;
