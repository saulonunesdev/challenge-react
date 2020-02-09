import { machines } from './';

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
