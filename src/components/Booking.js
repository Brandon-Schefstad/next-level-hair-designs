import React from 'react';
import Iframe from './Iframe';
import Header from './Header';
import Policies from './Policies';

const Booking = () => {
	return (
		<div className="wrapper">
			<h1 className="booking__cta">
				Please review our policies and book below!
			</h1>
			<Policies />
			<Iframe />
			<Header button="Return Home" route="/" />
		</div>
	);
};

export default Booking;
