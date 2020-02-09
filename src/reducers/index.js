import { combineReducers } from 'redux';
import machineStore from './machinesReducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
	machineStore: machineStore,
	form: formReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
