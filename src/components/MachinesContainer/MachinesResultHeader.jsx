import React, { Component } from 'react';

class MachinesResultHeader extends Component {
	render () {
		return (
			<div className='Machines-result'>
				<label className='Machines-item-title'>Name</label>
				<label className='Machines-item-title -ip'>IP</label>
				<label className='Machines-item-title -health'>Health</label>
			</div>
		);
	}
}

export default MachinesResultHeader
;
