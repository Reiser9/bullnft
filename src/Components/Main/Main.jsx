import React from 'react';

import Header from './Header/Header.jsx';

const Main = () => {
	return(
		<section className="main">
			<img src="/assets/img/pickaxe.webp" alt="Кирка" className="main__pick wow animate__animated animate__fadeIn" />
			<img src="/assets/img/main-shadow.png" alt="shadow" className="main__shadow" />

			<div className="container">
				<div className="main__inner">
					<div className="main__bull--inner wow animate__animated animate__fadeIn">
						<img src="/assets/img/main1.webp" alt="Картинка" className="main__bull main__bull1 active" />
						<img src="/assets/img/main2.webp" alt="Картинка" className="main__bull main__bull2" />
						<img src="/assets/img/main3.webp" alt="Картинка" className="main__bull main__bull3" />
					</div>

					<Header />

					<div className="main__content">
						<h1 className="main__title wow animate__animated animate__fadeIn">
							Dirty Bull Mining Union
						</h1>

						<p className="main__text wow animate__animated animate__fadeIn">
							9,999 Dirty Bulls mining their way on the Ethereum blockchain as ERC-721 NFTs.
						</p>

						<button className="button buy__button wow animate__animated animate__fadeIn">
							Buy on opensea
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Main;