import { Link } from 'react-router-dom';
import './App.css';
import { LinkSection } from './App.styles.ts';

function App({ counter, setCounter }: any) {
	return (
		<>
			<h1>Analytics App</h1>
			<LinkSection>
				<Link to="/">Home page</Link>
				<br />
				<Link to="/user">User page</Link>
			</LinkSection>
			<div className="card">
				<button onClick={() => setCounter(() => counter - 1)}>Decrease counter</button>
			</div>
			Counter is {counter}
		</>
	);
}

export default App;
