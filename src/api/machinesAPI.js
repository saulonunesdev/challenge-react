import axios from 'axios';

const getMachines = function () {
	return axios.get(process.env.REACT_APP_MACHINES_API + '/machines');
};

const getMachineById = function (id) {
	return axios.get(process.env.REACT_APP_MACHINES_API + '/machines/' + id);
};

const updateMachine = function (machine) {
	return axios.put(process.env.REACT_APP_MACHINES_API + '/machine/' + machine.id, machine);
};

export { getMachines, getMachineById, updateMachine };
