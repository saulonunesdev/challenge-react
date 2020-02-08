import React, { Component } from 'react';
import { getMachines, getMachineById, updateMachine } from '../api/machinesAPI';
import Header from '../components/Header';
import MachinesContainer from '../components/MachinesContainer';
import { BrowserRouter as Router } from 'react-router-dom';

class Machines extends Component {
	constructor () {
		super();
		this.state = {
			isWorking: false,
			message: '',
			machines: [],
			machine: {}
		};
		this.handleMachineUpdate = this.handleMachineUpdate.bind(this);
		this.handleGetMachine = this.handleGetMachine.bind(this);
		this.handleIpChange = this.handleIpChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleGetMachines = this.handleGetMachines.bind(this);
	}

	handleGetMachines () {
		this.setState({
			isWorking: true,
			message: '',
			machines: []
		});
		getMachines()
			.then((response) => {
				this.setState({ machines: response.data });
			})
			.catch((error) => {
				this.setState({
					message: 'Error: ' + error.message
				});
			})
			.finally(() => {
				this.setState({
					isWorking: false
				});
			});
	}

	handleNameChange (e) {
		this.setState({
			machine: {
				id: this.state.machine.id,
				name: e.currentTarget.value,
				// eslint-disable-next-line camelcase
				ip_address: this.state.machine.ip_address,
				health: this.state.machine.health
			}
		});
	}

	handleIpChange (e) {
		this.setState({
			machine: {
				id: this.state.machine.id,
				name: this.state.machine.name,
				// eslint-disable-next-line camelcase
				ip_address: e.currentTarget.value,
				health: this.state.machine.health
			}
		});
	}

	handleGetMachine (machineId) {
		this.setState({
			isWorking: true,
			message: '',
			machine: {}
		});

		getMachineById(machineId)
			.then((response) => {
				this.setState({ machine: response.data });
			})
			.catch((error) => {
				this.setState({
					message: 'Error: ' + error.message
				});
			})
			.finally(() => {
				this.setState({
					isWorking: false
				});
			});
	}

	handleMachineUpdate (e) {
		e.preventDefault();
		this.setState({
			isWorking: true,
			message: ''
		});

		updateMachine(this.state.machine)
			.then((response) => {
				this.setState({
					message: 'Success: ' + response.status
				});
			})
			.catch((error) => {
				this.setState({
					message: 'Error: ' + error.message
				});
			})
			.finally(() => {
				this.setState({
					isWorking: false
				});
			});
	}

	componentDidMount () {
		this.handleGetMachines();
	}

	render () {
		return (
			<Router>
				<Header
					onHandleGetMachines={this.handleGetMachines}
				/>
				<MachinesContainer
					{...this.state}
					onHandleMachineUpdate={this.handleMachineUpdate}
					onHandleGetMachine={this.handleGetMachine}
					onHandleIpChange={this.handleIpChange}
					onHandleNameChange={this.handleNameChange}
				/>
			</Router>
		);
	}
}

export default Machines;
