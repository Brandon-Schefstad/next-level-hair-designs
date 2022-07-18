import React from 'react';
import Iframe from './Iframe';
import Header from './Header';
import Policies from './Policies';

const Booking = () => {
	return (
		<div className="wrapper">
			<Header button="Return Home" route="/" />
			<Policies />
			<Iframe />
		</div>
	);
};

export default Booking;
