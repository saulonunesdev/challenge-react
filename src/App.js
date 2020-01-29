import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import Machines from './Machines';
import './App.css';

function App () {
	return (
		<Router>
			<Provider store={store}>
				<div className='App'>
					<header className='App-header'>
						<img alt='logo' height='272' width='800' src='https://i.imgur.com/jcvsFKh.png' />
					</header>

					<nav className='App-nav'>
						<Link to='/'>Home</Link>
						<Link to='/machines'>Machines</Link>
					</nav>

					<Switch>
						<Route path='/machines'>
							<Machines />
						</Route>
					</Switch>
				</div>
			</Provider>
		</Router>
	);
}

export default App;
