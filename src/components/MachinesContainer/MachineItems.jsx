import React, { Component } from 'react';
import MachinesResultHeader from './MachinesResultHeader';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MachineItems extends Component {
	render () {
		return (
			<div className='Machines-container'>
				<div className='Machines-result-container'>
					<MachinesResultHeader />
					{this.props.machines.map((item, index) => (
						<Link key={index} className='Machines-result -items' to={'/machines/' + item.id}>
							<div className='Machines-item'>{item.name}</div>
							<div className='Machines-item -ip'>{item.ip_address}</div>
							<div className='Machines-item -health'>{item.health}</div>
						</Link>
					))}
				</div>
			</div>
		);
	}
}

MachineItems.propTypes ={
	match: PropTypes.any,
	machines: PropTypes.array
};

export default MachineItems;
