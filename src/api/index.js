import axios from 'axios';

export const machines = axios.create({
	baseURL: process.env.REACT_APP_MACHINES_API,
	headers: {
		'Content-Type': 'application/json'
	}
});
