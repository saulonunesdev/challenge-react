import React, { Suspense, lazy, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import './App.Routes.css';

const Machines = lazy(() => import('../pages/Machines'));

class App extends Component {
	render () {
		return (
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
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
				</Suspense>
			</Router>
		);
	}
}

export default App;
