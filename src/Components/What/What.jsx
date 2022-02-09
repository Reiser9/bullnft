import React from 'react';

const What = () => {
	return(
		<section id="about" className="what wow animate__animated animate__fadeIn">
			<div className="container">
				<div className="what__inner">
					<div className="what__img--inner">
						<img src="/assets/img/1.gif" loading="lazy" alt="img" className="what__img" />
						<img src="/assets/img/hammer.webp" alt="hammer" className="img__img" />
					</div>

					<div className="what__text--inner">
						<h2 className="title what__text--title">
							What is Dirty Bull Mining Union?
							<img src="/assets/img/hammer.webp" alt="hammer" className="title__img" />
							<img src="/assets/img/circle.svg" alt="circle" className="circle__img" />
						</h2>

						<p className="what__text--text">
							he Dirty Bull Mining Union represents 9,999 dirty bull miners, mainly focused on mining their way to new All-Time-Highs within the Ethereum blockchain.
						</p>

						<p className="what__text--text">
							Each Dirty Bull Mining Union NFT is uniquely generated from over 100 traits and will have instant NFT & token utility to help you mine your way to price discovery.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default What;