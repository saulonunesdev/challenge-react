import { createStore } from 'redux';

const defaultState = {
	machines: [],
	// eslint-disable-next-line camelcase
	machine: {id: '', name: '', ip_address: '', health: ''},
	isWorking: false,
	message: {}
};

function machineReducer (state = defaultState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

const store = createStore(machineReducer);

export default store;
