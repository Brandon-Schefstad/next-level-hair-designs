// TEST
import React from 'react';
import { useState } from 'react';
import backbraids from '../imagecompressor/large-straight-back-braids-min.jpg';
import braidedponytail from '../imagecompressor/braided-ponytail-min.png';
import knotlessplatts from '../imagecompressor/knotlessplatts-min.png';
import knotlessplatts2 from '../imagecompressor/knotlessplatts2-min.png';
import smalllemonade from '../imagecompressor/small-lemonade-braids-min.png';
import twofeedins from '../imagecompressor/two-feedins-min.jpg';
import straightbackfeedins from '../imagecompressor/straight-back-feedins-with-designs2-min.png';
import straightbackfeedins2 from '../imagecompressor/straight-back-feedins-min.png';
import braidsfrontplattback from '../imagecompressor/front-platts2-min.png';

const Gallery = () => {
	const [index, setIndex] = useState(1);
	const GalleryObject = function (
		indexURL,
		hairstyle,
		size,
		price,
		title,
		time,
		styling
	) {
		return { indexURL, hairstyle, size, price, title, time, styling };
	};

	let indexURL;
	let galleryObj;
	let finalGalleryObject;
	console.log(index);
	switch (index) {
		case 1:
			finalGalleryObject = new GalleryObject(
				knotlessplatts,
				'*Knotless Platts*',
				'Small',
				200,
				'Knotless Platts',
				'3 hours',
				{}
			);

			break;
		case 2:
			finalGalleryObject = new GalleryObject(
				knotlessplatts2,
				'Knotless Platts',
				'Medium',
				110,
				'Knotless Platts',
				'3 hours',
				{}
			);
			break;
		case 3:
			finalGalleryObject = new GalleryObject(
				smalllemonade,
				'Lemonade Braids',
				'Small',
				210,
				'Lemonade Braids',
				'___',
				{}
			);
			break;
		case 4:
			finalGalleryObject = new GalleryObject(
				twofeedins,
				'Two Feedins',
				'Large',
				45,
				'Two Feedins',
				'___',
				{}
			);
			break;
		case 5:
			finalGalleryObject = new GalleryObject(
				braidedponytail,
				'Braided Ponytail',
				'Medium',
				150,
				'Braided Ponytail',
				'',
				{}
			);
			break;
		case 6:
			finalGalleryObject = new GalleryObject(
				backbraids,
				'Straight-Back Feedins',
				'Large',
				'___',
				'Straight-Back Feedins',
				'___',
				{}
			);
			break;
		case 7:
			finalGalleryObject = new GalleryObject(
				straightbackfeedins,
				'Straight-Back Feedins w/ Design',
				'Medium',
				'180',
				'Straight-Back Feedins',
				'3 Hours',
				{}
			);
			break;
		case 8:
			finalGalleryObject = new GalleryObject(
				straightbackfeedins2,
				'Straight-Back Feedins',
				'Small',
				120,
				'Straight-Back Feedins',
				'4.5 Hours',
				{}
			);
			break;
		case 9:
			finalGalleryObject = new GalleryObject(
				braidsfrontplattback,
				'Braids Front, Platts Back',
				'Small',
				160,
				'Regular Platts',
				'6.5 Hours',
				{}
			);
			break;
		// case 11:
		//   indexURL = backbraids;
		//   break;
		// case 12:
		//   indexURL = backbraids;
		//   break;
		// case 13:
		//   indexURL = backbraids;
		//   break;
		// case 14:
		//   indexURL = backbraids;
		//   break;
		default:
			setIndex(1);
			finalGalleryObject = new GalleryObject(
				knotlessplatts,
				'Knotless Platts',
				'Medium',
				200,
				'Knotless Platts',
				'3 hours',
				{}
			);
			break;
	}
	return (
		<div className="gallery__wrapper">
			<h1 style={finalGalleryObject.style} className="gallery__title">
				Gallery
			</h1>
			<button
				className="prev gallery__button"
				onClick={() => setIndex(index - 1)}
			>
				Prev
			</button>
			<div className="image__wrapper">
				<img
					className="gallery__image"
					src={finalGalleryObject.indexURL}
				/>
				<h2 className="gallery__text">
					<div className="gallery__text1">
						{finalGalleryObject.hairstyle}
					</div>
					<div className="gallery__text2">
						{' '}
						Size:{finalGalleryObject.size}
					</div>
					<div className="gallery__text3">
						{' '}
						Price:${finalGalleryObject.price}
					</div>
					<div className="gallery__text4">
						{' '}
						Time:{finalGalleryObject.time}
					</div>
				</h2>
			</div>

			<button
				className="next gallery__button"
				onClick={() => setIndex(index + 1)}
			>
				Next
			</button>
		</div>
	);
};

export default Gallery;
