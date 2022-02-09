import React from 'react';

const FaqItem = ({question, answer}) => {
	return(
		<div className="faq__item wow animate__animated animate__fadeIn">
			<p className="faq__item--question">
				{question}
			</p>

			<p className="faq__item--answer">
				{answer}
			</p>
		</div>
	)
}

export default FaqItem;