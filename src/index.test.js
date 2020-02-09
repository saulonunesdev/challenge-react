import React from 'react';
import { render } from '@testing-library/react';
import App from './Routes';
import Home from './pages/Home';
import Machines from './pages/Machines';

test('renders App', () => {
	const { getByText } = render(<App />);
	const loadingElement = getByText(/loading/i);
	expect(loadingElement).toBeInTheDocument();
});

test('renders /home link', () => {
	const { getByText } = render(<App><Home /></App>);
	const linkHomeElement = getByText(/home/i);
	const linkMachineElement = getByText(/machines/i);
	expect(linkHomeElement).toBeInTheDocument();
	expect(linkMachineElement).toBeInTheDocument();
});

test('renders /machines link', () => {
	const { getByText } = render(<App><Machines /></App>);
	const linkHomeElement = getByText(/home/i);
	const linkMachineElement = getByText(/machines/i);
	expect(linkHomeElement).toBeInTheDocument();
	expect(linkMachineElement).toBeInTheDocument();
});
