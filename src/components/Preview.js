import React from 'react';
import backbraids from '../imagecompressor/large-straight-back-braids-min.jpg';
import braidedponytail from '../imagecompressor/braided-ponytail-min.png';
import knotlessplatts from '../imagecompressor/knotlessplatts-min.png';
import knotlessplatts2 from '../imagecompressor/knotlessplatts2-min.png';
import smalllemonade from '../imagecompressor/small-lemonade-braids-min.png';
import twofeedins from '../imagecompressor/two-feedins-min.jpg';
import straightbackfeedins from '../imagecompressor/straight-back-feedins-with-designs2-min.png';
import straightbackfeedins2 from '../imagecompressor/straight-back-feedins-min.png';
import braidsfrontplattback from '../imagecompressor/front-platts2-min.png';
import defaultprofile from '../images/defaultcover.png';
import placeholder from '../images/placeholder-image-nlhd.png';

const Preview = ({ title }) => {
  let sourceURL;
  let alt;
  switch (title) {
    case 'Pricing':
      sourceURL = defaultprofile;
      alt = 'Woman with black and blue brais facing away from the camera.';
      break;
    case 'Knotless Platts':
      sourceURL = knotlessplatts2;
      alt = 'Young girl with small knotless platts.';
      break;
    case 'Regular Platts':
      sourceURL = placeholder;
      alt =
        'Woman facing away from camera with small regular platts. Some platts are pulled back into two larger braids.';
      break;
    case 'Braided Ponytail':
      sourceURL = braidedponytail;
      alt = 'Young woman with a high ponytail made from braids';
      break;
    case 'Lemonade Braids':
      sourceURL = smalllemonade;
      alt = 'Young woman with braids laying close to her scalp. ';
      break;
    case 'Straight-Back Feedins':
      sourceURL = backbraids;
      alt =
        'Woman covering her face with four large butt-length straight-back feedins.';
      break;
    case 'Two-Feedins':
      sourceURL = twofeedins;
      alt = 'Young girl smiling with two long braids going down either side.';
      break;
  }
  console.log(sourceURL);
  return (
    <div className="preview__wrapper">
      <img className="preview" src={sourceURL} alt={alt} />
    </div>
  );
};

export default Preview;
