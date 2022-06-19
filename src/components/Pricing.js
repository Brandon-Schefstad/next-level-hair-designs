import React, { useState } from 'react';
import Preview from './Preview';
import PricingTest from './PricingTest';
import Title from './Title';

const Pricing = () => {
	const [title, setTitle] = useState('Pricing');
	const titleArray = [
		'Pricing',
		'Knotless Platts',
		'Regular Platts',
		'Braided Ponytail',
		'Lemonade Braids',
		'Straight-Back Feedins',
		'Two-Feedins',
	];
	function incrementTitles() {
		const index = moveTitlesUp();
		if (index) {
			setTitle(titleArray[index]);
		} else {
			setTitle('Two-Feedins');
		}
	}
	function decrementTitles() {
		const index2 = moveTitlesDown();
		if (index2) {
			setTitle(titleArray[index2]);
		} else {
			setTitle('Pricing');
		}
	}
	function moveTitlesDown() {
		if (titleArray.indexOf(title) > 1) {
			return titleArray.indexOf(title) - 1;
		}
	}
	function moveTitlesUp() {
		if (titleArray.indexOf(title) <= 5) {
			return titleArray.indexOf(title) + 1;
		}
	}
	// switch/case for title and image?

	return (
		<section className="pricing  grid pricing-wrapper">
			<Preview title={title} />
			<div className="menuWrapper">
				<Title title={title} />

				<button
					onClick={decrementTitles}
					className="pricing__change-price"
				>
					{'<'}
				</button>
				<div></div>
				<div></div>
				<div></div>
				{/* has an after */}
				<button
					onClick={incrementTitles}
					className="pricing__change-price"
				>
					{'>'}
				</button>
				{/* <PriceList title={title} /> */}
				<PricingTest title={title} />
			</div>
		</section>
	);
};

export default Pricing;
