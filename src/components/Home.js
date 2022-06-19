import React, { useState } from 'react';
import '../dist/main.css';
import Header from './Header';
import Pricing from './Pricing';
import Policies from './Policies';
import Gallery from './Gallery';

function Home() {
	const [loaded, setLoaded] = useState([false]);

	return (
		<div className="wrapper">
			<Header button="Book an Appointment" route="/booking" />
			<section className="section2 grid">
				<Pricing />
				<Policies />
			</section>
			<section className="section3 grid">
				<Gallery />
			</section>
		</div>
	);
}

export default Home;
