import { Link } from 'react-router-dom';
import './App.css';
import { LinkSection } from './App.styles';

function App({ counter, setCounter }: any) {
	return (
		<>
			<h1>This is from Userrr service app</h1>
			<LinkSection>
				<Link to="/">Home page</Link>
				<br />
				<Link to="/analytics">Analytics page</Link>
			</LinkSection>
			<div className="card">
				<button onClick={() => setCounter(() => counter + 1)}>Increase count</button>
			</div>
			count is {counter}
		</>
	);
}

export default App;
