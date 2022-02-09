import React from 'react';

const RoadItem = ({phase, title, text, current}) => {
	return(
		<div className="road__item">
			<div className="road__item--text--inner">
				<p className="road__item--text--title">
					Phase {phase + 1}
				</p>

				<p className="road__item--text--text">
					{title}
				</p>

				{current && <div className="current__phase">
					current phase

					<img src="/assets/img/diamond.webp" alt="img" className="current__img" />
				</div>}
			</div>

			<p className="road__item--text">
				{text}
			</p>
		</div>
	)
}

export default RoadItem;