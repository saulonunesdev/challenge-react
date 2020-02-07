import axios from 'axios';

const getMachines = function () {
	return axios.get(process.env.REACT_APP_MACHINES_API + '/machines');
};

const getMachineById = function (id) {
	return axios.get(process.env.REACT_APP_MACHINES_API + '/machines/:' + id);
};

const updateMachine = function (id, data) {
	return axios.get(process.env.REACT_APP_MACHINES_API + '/machines/:' + id, data);
};

export { getMachines, getMachineById, updateMachine };
