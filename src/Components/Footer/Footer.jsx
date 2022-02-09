import React from 'react';

const Footer = () => {
	return(
		<footer className="footer">
			<div className="container">
				<div className="footer__inner">
					<a href="#" className="footer__discord wow animate__animated animate__fadeIn">
						Join Discord!
						<img src="/assets/img/discord-black.svg" alt="Дискорд" className="footer__discord--icon" />
					</a>

					<div className="footer__wrapper wow animate__animated animate__fadeIn">
						<div className="footer__box">
							<a href="/" className="footer__logo--inner">
								<img src="/assets/img/logo.webp" alt="Логотип" className="footer__logo" />
							</a>

							<div className="footer__link--inner">
								<a href="https://discord.gg/P8QfmYtVka" target="_Blanc" className="footer__link">Discord</a>
								<a href="https://twitter.com/DirtyBullNFT" target="_Blanc" className="footer__link">Twitter</a>
								<a href="#" target="_Blanc" className="footer__link">OpenSea</a>
								<a href="#" target="_Blanc" className="footer__link">Etherscan</a>
							</div>
						</div>

						<p className="footer__copy">
							&copy; Copyright 2022 DBMU
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;