import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './app';
import './index.css';

createRoot(document.getElementById('app')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
