import React from 'react';

const FoundersItem = ({name, text, img}) => {
	return(
		<div className="founders__item">
			<div className="founders__item--img--inner">
				<img src={img} alt="Картинка" className="founders__item--img" />
			</div>

			<p className="founders__item--name">
				{name}

				<img src="/assets/img/circle.svg" alt="img" className="founders__name--img" />
			</p>

			<p className="founders__item--text">
				{text}
			</p>
		</div>
	)
}

export default FoundersItem;