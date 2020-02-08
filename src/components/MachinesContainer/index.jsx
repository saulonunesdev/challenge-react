import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import MachineItem from './MachineItem';
import MachineItems from './MachineItems';
import './index.css';

class MachinesContainer extends Component {
	render () {
		return (
			<div>
				{this.props.message && <div>{this.props.message}</div>}
				{this.props.isWorking && <div>Working...</div>}
				<Switch>
					<Route exact path="/machines">
						<MachineItems {...this.props} />
					</Route>
					<Route path="/machines/:machineId" render={
						props =>
							<MachineItem
								{...props}
								onHandleMachineUpdate={this.props.onHandleMachineUpdate}
								onHandleGetMachine={this.props.onHandleGetMachine}
								onHandleIpChange={this.props.onHandleIpChange}
								onHandleNameChange={this.props.onHandleNameChange}
								machine={this.props.machine}
							/>
					}/>
				</Switch>
			</div>
		);
	}
}

MachinesContainer.propTypes ={
	message: PropTypes.string,
	isWorking: PropTypes.bool,
	machines: PropTypes.array,
	machine: PropTypes.object,
	onHandleMachineUpdate: PropTypes.func,
	onHandleGetMachine: PropTypes.func,
	onHandleIpChange: PropTypes.func,
	onHandleNameChange: PropTypes.func
};

export default MachinesContainer;

