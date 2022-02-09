import React from 'react';

import FoundersItem from './FoundersItem/FoundersItem.jsx';

const foundersData = [
	{
		name: 'Jón Jónsson',
		text: 'To complete our decentralization, a GovernanceDAO will be built from the ground up, giving the DBMU community',
		img: '/assets/img/founders1.webp'
	},
	{
		name: 'Jón Jónsson',
		text: 'To complete our decentralization, a GovernanceDAO will be built from the ground up, giving the DBMU community',
		img: '/assets/img/founders2.webp'
	},
	{
		name: 'Jón Jónsson',
		text: 'To complete our decentralization, a GovernanceDAO will be built from the ground up, giving the DBMU community',
		img: '/assets/img/founders3.webp'
	}
]

const Founders = () => {
	return(
		<section id="founders" className="founders">
			<div className="container">
				<div className="founders__inner">
					<h2 className="title center founders__title wow animate__animated animate__fadeIn">
						Founders
					</h2>

					<div className="founders__content wow animate__animated animate__fadeIn">
						{foundersData.map((d, id) => <FoundersItem key={id} name={d.name} text={d.text} img={d.img} />)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Founders;