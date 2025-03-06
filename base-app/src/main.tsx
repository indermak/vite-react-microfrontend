import { StrictMode, lazy, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';

const App = lazy(
	// @ts-ignore
	async () => import('./App.tsx')
);

const UserServiceApp = lazy(
	// @ts-ignore
	async () => import('userServiceApp/remote-app')
);

const AnalyticsApp = lazy(
	// @ts-ignore
	async () => import('analyticsApp/remote-app')
);

const RoutesWithContext = () => {
	const [counter, setCounter] = useState(0);
	return (
		<Router>
			<Routes>
				<Route path="/" element={<App counter={counter} setCounter={setCounter} />} />
				<Route path="/analytics" element={<AnalyticsApp counter={counter} setCounter={setCounter} />} />
				<Route path="/user" element={<UserServiceApp counter={counter} setCounter={setCounter} />} />
			</Routes>
		</Router>
	);
};

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RoutesWithContext />
	</StrictMode>
);
