// import { startWebSocket } from '../api/healthAPI';

export function updateMachinesHealth (machines) {
	return dispatch => {
		return dispatch({
			type: 'UPDATE_MACHINES_HEALTH',
			payload: machines
		});
	};
}

export function updateMachineHealth (machine) {
	return dispatch => {
		return dispatch({
			type: 'UPDATE_MACHINE_HEALTH',
			payload: machine
		});
	};
}
