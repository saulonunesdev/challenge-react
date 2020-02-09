import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MachinesContainer from '../components/MachinesContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchMachines, fetchMachine, updateMachine, updateMachineName } from '../reducers/machinesAction';
import { updateMachinesHealth, updateMachineHealth } from '../reducers/healthAction';

class Machines extends Component {
	constructor () {
		super();

		this.handleMachineUpdate = this.handleMachineUpdate.bind(this);
		this.handleGetMachine = this.handleGetMachine.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleGetMachines = this.handleGetMachines.bind(this);
	}

	startWebSocket = (type) => {
		let socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_API);
		socket.onmessage = type === 'machines' ? this.getMachinesSocketMessage : this.getMachineSocketMessage;
	};

	getMachinesSocketMessage = (event) => {
		const data = JSON.parse(event.data);

		if (data.type === 'HEALTH_UPDATE') {
			if (this.props.machines && this.props.machines.length > 0) {
				const machines = this.props.machines.map(machine => {
					if (machine.id === data.id) {
						machine.health = data.health;
					}
					return machine;
				});
				this.props.updateMachinesHealth(machines);
			}
		}
	};

	getMachineSocketMessage = (event) => {
		const data = JSON.parse(event.data);
		const machine = this.props.machine;

		if (this.props.machine.id === data.id) {
			machine.health = data.health;
			this.props.updateMachineHealth(machine);
		}
	}


	handleGetMachines () {
		this.props.fetchMachines();
		this.startWebSocket('machines');
	}

	handleNameChange (e) {
		let machineChange = {
			...this.props.machine,
			name: e.target.value
		};
		this.props.updateMachineName(machineChange);
	}

	handleGetMachine (machineId) {
		this.props.fetchMachine(machineId);
		this.startWebSocket('machine');
	}

	handleMachineUpdate (e) {
		e.preventDefault();
		this.props.updateMachine(this.props.machine);
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
					onHandleMachineUpdate={this.handleMachineUpdate}
					onHandleGetMachine={this.handleGetMachine}
					onHandleNameChange={this.handleNameChange}
					machines={this.props.machines}
					machine={this.props.machine}
					loading={this.props.loading}
					errors={this.props.errors}
				/>
			</Router>
		);
	}
}

function mapStateToProps (state) {
	return {
		machines: state.machineStore.machines,
		machine: state.machineStore.machine,
		loading: state.machineStore.loading,
		errors: state.machineStore.errors
	};
}

Machines.propTypes ={
	machines: PropTypes.array,
	machine: PropTypes.object,
	loading: PropTypes.bool,
	errors: PropTypes.object,
	fetchMachines: PropTypes.func,
	fetchMachine: PropTypes.func,
	updateMachine: PropTypes.func,
	updateMachineName: PropTypes.func,
	updateMachinesHealth: PropTypes.func,
	updateMachineHealth: PropTypes.func
};

export default connect(mapStateToProps, {
	fetchMachines,
	fetchMachine,
	updateMachine,
	updateMachineName,
	updateMachinesHealth,
	updateMachineHealth
})(Machines);
