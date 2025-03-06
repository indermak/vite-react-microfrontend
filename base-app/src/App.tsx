import { lazy } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { LinkSection } from './App.styles.ts';

const AnalyticsApp = lazy(
	// @ts-ignore
	async () => import('analyticsApp/remote-app')
);

function App({ counter, setCounter }: any) {
	return (
		<>
			<h1>Host App</h1>
			<LinkSection>
				<Link to="/analytics">Analytics page</Link>
				<br />
				<Link to="/user">User page</Link>
			</LinkSection>
			<div className="card">
				<button onClick={() => setCounter(() => counter + 1)}>Increase count</button>
				<p>count is {counter}</p>
			</div>
			<div>
				<AnalyticsApp counter={counter} setCounter={setCounter} />
			</div>
		</>
	);
}

export default App;
