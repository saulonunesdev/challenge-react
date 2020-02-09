import { machines } from '../api/machinesApi';

const url = '/machines';

export function fetchMachines () {
	return dispatch => {
		dispatch({
			type: 'FETCH_MACHINES',
			payload: machines.get(url)
		});
	};
}

export function fetchMachine (id) {
	return dispatch => {
		return dispatch({
			type: 'FETCH_MACHINE',
			payload: machines.get(`${url}/${id}`)
		});
	};
}

export function updateMachine (machine) {
	return dispatch => {
		return dispatch({
			type: 'UPDATE_MACHINE',
			payload: machines.put(`${url}/${machine.id}`, machine)
		});
	};
}

export function updateMachineName (machine) {
	return dispatch => {
		return dispatch({
			type: 'UPDATE_MACHINE_NAME',
			payload: machine
		});
	};
}
