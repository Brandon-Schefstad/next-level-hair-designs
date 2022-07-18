import React from 'react';
import Iframe from './Iframe';
import Header from './Header';
import Policies from './Policies';

const Booking = () => {
	return (
		<div className="wrapper">
			<div className="booking__button grid">
				<Header
					className="booking__button"
					button="Return Home"
					route="/"
				/>
			</div>
			<h1 className="booking__cta">
				Please review our policies and book below!
			</h1>
			<Policies />
			<Iframe />
		</div>
	);
};

export default Booking;
