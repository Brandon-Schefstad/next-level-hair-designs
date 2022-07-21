import React from 'react';
import image from '../images/cover.png';
import headerimage from '../images/header-image.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Header = (props) => {
	{
		props.route === '/'
			? console.log('on Booking')
			: console.log('on Home');
	}
	function handleButton() {
		if (props.route === '/booking') {
			return (
				<Link to={props.route}>
					<button className="header__cta">{props.button}</button>
				</Link>
			);
		} else {
			return (
				<Link to={props.route}>
					<button className="header__cta cta--option1">
						{props.button}
					</button>
				</Link>
			);
		}
	}
	if (props.route === '/') {
		return handleButton();
	} else {
		return (
			<div>
				{/* Header Information: Title, Contact, CTA */}
				<section className="header__wrapper grid">
					<div>
						<section className="header__info__wrapper grid">
							{/* <section className="header__margin"> */}
							<h1 className="title">Kenia Thompson</h1>
							<div className="header__text__wrapper flex">
								<h4 className="header__text">Tampa,FL</h4>
								<br></br>
								<h4 className="header__text">(813)-680-6374</h4>
							</div>
							<img src="" alt="" className="header__socials" />
							{handleButton()}
							{/* </section> */}
						</section>
					</div>
					{/* Imaged Section with Logo and Default Picture */}
					<section className="images__wrapper grid">
						<div className="logo__container">
							<img
								src={image}
								alt="screenreader"
								className="logo"
							/>
						</div>
						<img
							src={headerimage}
							alt="Image of young girl with Medium Size Feedins"
							className="header__image"
						/>
					</section>
				</section>
			</div>
		);
	}
};

export default Header;
