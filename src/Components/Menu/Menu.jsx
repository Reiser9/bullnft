import React from 'react';

import './Menu.css';

const Menu = () => {
	return(
		<div className="modal__menu">
			<img src="/assets/img/cross.svg" alt="закрыть" className="cross" />

			<div className="modal__content">
				<a href="#" className="header__nav--link go" data-point="about">About</a>
				<a href="#" className="header__nav--link go" data-point="road">Roadmap</a>
				<a href="#" className="header__nav--link go" data-point="founders">Founders</a>
				<a href="#" className="header__nav--link go" data-point="faq">FAQ</a>

				<button className="button main__button mobile__button">
					Connect wallet
				</button>
			</div>
		</div>
	)
}

export default Menu;