import React from 'react';
import Iframe from './Iframe';
import Header from './Header';

const Booking = () => {
	return (
		<div className="wrapper">
			<Header button="Return Home" route="/" />
			<Iframe />
		</div>
	);
};

export default Booking;
