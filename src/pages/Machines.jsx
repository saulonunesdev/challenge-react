import React, { Component } from 'react';
import { getMachines } from '../api/machinesAPI';

class Machines extends Component {
	constructor () {
		super();
		this.state = {
			isFetching: false,
			machines: []
		};
	}

	componentDidMount () {
		this.setState({
			isFetching: true,
			message: '',
			machines: []
		});
		getMachines()
			.then((response) => {
				this.setState({ machines: response.data });
			})
			.catch((error) => {
				console.log('x', error.error);
				this.setState({
					message: error
				});
				console.log(this.state.message);
			})
			.finally(() => {
				this.setState({
					isFetching: false
				});
			});
	}

	render () {
		return <div>
			{this.state.isFetching && <div>Fetching...</div>}
			{this.state.machines.map((item, index) => (
				<div key={index} id={item.id}>
					<div>{item.name}</div>
					<div>{item.ip_address}</div>
					<div>{item.health}</div>
				</div>
			))}
		</div>;
	}
}

export default Machines;
