import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers';
export default function configureStore (preloadedState) {
	const middlewares = [promise, thunkMiddleware];
	const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));
	const store = createStore(rootReducer, preloadedState, composedEnhancers);
	return store;
}
