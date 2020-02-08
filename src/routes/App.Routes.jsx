import React, { Suspense, lazy, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

const Home = lazy(() => import('../pages/Home'));
const Machines = lazy(() => import('../pages/Machines'));

class App extends Component {
	render () {
		return (
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Provider store={store}>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/machines' component={Machines} />
							<Route path="*">
								<Redirect to='/' />
							</Route>
						</Switch>
					</Provider>
				</Suspense>
			</Router>
		);
	}
}

export default App;
