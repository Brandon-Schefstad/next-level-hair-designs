import React, { useState } from 'react';

const PricingTest = ({ title }) => {
  let [priceArray, setPriceArray] = useState([]);
  switch (title) {
    case 'Pricing':
      return (
        <div className="pricing__list">
          <div className="default__pricing">
            <h1>
              Check out my{' '}
              <a
                href="https://www.instagram.com/Next_Level_Hair_Designs/"
                className="href"
              >
                Instagram
              </a>
              !
            </h1>
            <h1>
              Scroll through the different styles and see the pictures above.
            </h1>
            <h1>I accept cash or CashApp</h1>
            <h1>
              CashApp: <a href="https://cash.app/$misskeniat">$Misskeniat</a>
            </h1>
          </div>
        </div>
      );
      break;
    case 'Knotless Platts':
      priceArray = [220, 200, 175, 160, 110, 100];

      break;
    case 'Regular Platts':
      priceArray = [220, 160, 200, 180, 160, 140];

      break;
    case 'Braided Ponytail':
      priceArray = [200, 175, 175, 150, 150, 120];

      break;
    case 'Lemonade Braids':
      priceArray = [210, 180, 140, 120, 110, 100];

      break;
    case 'Straight-Back Feedins':
      priceArray = [160, '180*', '160*', 120, '120*', '100*', 100];
      break;
    case 'Two-Feedins':
      break;
  }
  function handleCaveat() {
    if (title === 'Straight-Back Feedins') {
      return <span className="pricing__caveat">* = with design</span>;
    }
  }
  return (
    <div className="grid pricing__grid">
      <section className="pricing__grid__item hidden"></section>
      <section className="pricing__grid__item dark-bg">
        <span className="">Small</span>
      </section>
      <section className="pricing__grid__item dark-bg">Medium</section>
      <section className="pricing__grid__item dark-bg">Large</section>
      <section className="pricing__grid__item dark-bg">Mid-Back</section>
      <section className="pricing__grid__item number">${priceArray[3]}</section>
      <section className="pricing__grid__item number">${priceArray[4]}</section>
      <section className="pricing__grid__item number">${priceArray[5]}</section>
      <section className="pricing__grid__item dark-bg">Butt</section>
      <section className="pricing__grid__item number">${priceArray[0]}</section>
      <section className="pricing__grid__item number">${priceArray[1]}</section>
      <section className="pricing__grid__item number">${priceArray[2]}</section>
      {handleCaveat()}
    </div>
  );
};

export default PricingTest;
