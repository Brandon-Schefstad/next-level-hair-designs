import React, { useState } from 'react';
import { ReactDOM } from 'react';
// import { useState } from 'react';
import './dist/main.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Booking from './components/Booking';
import Home from './components/Home';
import Iframe from './components/Iframe';
// import PricingTest from './components/PricingTest';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/booking" element={<Booking />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
//Test
