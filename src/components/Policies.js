import React from 'react';

const Policies = () => {
	return (
		<section className="policies__wrapper">
			<h1 className="gallery__title policies__title  ">Policies</h1>
			<ol className="policies__list">
				<h1>PLEASE READ</h1>
				<li className="policies__listitems">
					<span>
						A $20 non-refundable deposit is required at the time of
						booking. Deposits made will go towards service.
					</span>
				</li>
				<li className="policies__listitems">
					<span>
						A $15 late fee will be applied after{' '}
						<span className="policies__text--emphasized">
							15 minutes
						</span>
						. After{' '}
						<span className="policies__text--emphasized">
							15 minutes
						</span>{' '}
						the appointment will be cancelled.
					</span>
				</li>
				<li className="policies__listitems">
					<span>
						Cancelled appointments should be cancelled pripr to
						appointment or{' '}
						<span className="policies__text--emphasized">
							within 24 hours
						</span>
						. You can reschedule with a tranfered deposit within a 7
						day period.
					</span>
				</li>
				<li className="policies__listitems">
					<span>
						Please come with your hair washed, pressed out, and with
						no chemicals.
					</span>
				</li>
				<li className="policies__listitems">
					<span>Please come picture ready</span>
				</li>
				<li className="policies__listitems">
					<span>
						No children at the appointment unless service is being
						rendered.
					</span>
				</li>
				<h1 className="policies__thanks">
					Thanks for booking the Next Level Way!
				</h1>
			</ol>
		</section>
	);
};

export default Policies;
