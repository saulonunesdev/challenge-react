import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import { Link } from 'react-router-dom';
import './index.css';

class Header extends Component {
	render () {
		return (
			<div className='App-header'>
				<header className='Img-header'>
					<img alt='logo' src='https://i.imgur.com/jcvsFKh.png' />
				</header>
				<nav className='App-nav'>
					<Link className='App-links' to='/'><HomeIcon />Home</Link>
					<Link className='App-links' to='/machines' onClick={this.props.onHandleGetMachines}><ComputerIcon />Machines</Link>
				</nav>
			</div>
		);
	}
}

Header.propTypes ={
	onHandleGetMachines: PropTypes.func
};

export default Header;
