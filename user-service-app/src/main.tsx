import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

function RouterWrapper() {
	try {
		useLocation(); // Will throw an error if no router is available
		return <App />; // Router already exists, so return as is
	} catch {
		return (
			<BrowserRouter>
				<App />
			</BrowserRouter>
		); // Wrap in a new Router
	}
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterWrapper />
	</StrictMode>
);
