import React from 'react';

const Title = ({ title }) => {
	console.log(`title is ${title}`);

	if (title == 'Straight-Back Feedins') {
		return (
			<h1
				className="pricing__title"
				style={{ letterSpacing: '-2px', fontSize: '2rem' }}
			>
				{title}
			</h1>
		);
	} else if (title == 'Pricing') {
		return (
			<h1
				className="pricing__title"
				style={{ fontSize: '3rem', marginTop: '2rem' }}
			>
				{title}
			</h1>
		);
	} else {
		return <h1 className="pricing__title"> {title}</h1>;
	}
};

export default Title;
