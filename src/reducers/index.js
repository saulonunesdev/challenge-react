import { combineReducers } from 'redux';
import MachineReducer from './machine-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
	machineStore: MachineReducer,
	form: formReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
