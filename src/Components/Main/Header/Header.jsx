import React from 'react';

const Header = () => {
	return(
		<div className="header__inner wow animate__animated animate__fadeIn">
			<div className="header__wrapper">
				<a href="/" className="header__logo--inner">
					<img src="/assets/img/logo.webp" alt="Логотип" className="header__logo" />
				</a>

				<div className="header__nav">
					<a href="#" className="header__nav--link go" data-point="about">About</a>
					<a href="#" className="header__nav--link go" data-point="road">Roadmap</a>
					<a href="#" className="header__nav--link go" data-point="founders">Founders</a>
					<a href="#" className="header__nav--link go" data-point="faq">FAQ</a>
				</div>
			</div>

			<div className="header__wrapper">
				<div className="header__social--inner">
					<a href="https://twitter.com/DirtyBullNFT" target="_Blanc" className="header__social--link">
						<img src="/assets/img/twitter.svg" alt="Твитер" className="header__social--icon" />
					</a>

					<a href="https://discord.gg/P8QfmYtVka" target="_Blanc" className="header__social--link">
						<img src="/assets/img/discord.svg" alt="Дискорд" className="header__social--icon" />
					</a>
				</div>

				<button className="button main__button">
					Connect wallet
				</button>

				<img src="/assets/img/menu.svg" alt="Меню" className="menu" />
			</div>
		</div>
	)
}

export default Header;