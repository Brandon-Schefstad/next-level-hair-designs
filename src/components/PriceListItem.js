import React from 'react';

const PriceListItem = ({ length, size, price }) => {
	return (
		<div className="pricing__listitems__container grid">
			<span className="style">{length} </span>

			<span className="decoration"></span>
			<span className="price">${price}</span>
		</div>
	);
};

export default PriceListItem;
