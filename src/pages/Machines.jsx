import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MachinesContainer from '../components/MachinesContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchMachines, fetchMachine, updateMachine, updateMachineName } from '../reducers/machinesAction';

class Machines extends Component {
	constructor () {
		super();

		this.handleMachineUpdate = this.handleMachineUpdate.bind(this);
		this.handleGetMachine = this.handleGetMachine.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleGetMachines = this.handleGetMachines.bind(this);
	}

	handleGetMachines () {
		this.props.fetchMachines();
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
	updateMachineName: PropTypes.func
};

export default connect(mapStateToProps, {fetchMachines, fetchMachine, updateMachine, updateMachineName})(Machines);
