import React from 'react';

import FaqItem from './FaqItem/FaqItem.jsx';

const faqData = [
	{
		question: 'What is Dirty Bull Mining Union?',
		answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, eveniet temporibus vero, aspernatur pariatur dolorum cumque perspiciatis explicabo amet itaque consequuntur in quas! Impedit, at commodi sapiente dolores eligendi.'
	},
	{
		question: 'What’s the total supply?',
		answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, eveniet temporibus vero, aspernatur pariatur dolorum cumque perspiciatis explicabo amet itaque consequuntur in quas! Impedit, at commodi sapiente dolores eligendi.'
	},
	{
		question: 'When is the official launch?',
		answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, eveniet temporibus vero, aspernatur pariatur dolorum cumque perspiciatis explicabo amet itaque consequuntur in quas! Impedit, at commodi sapiente dolores eligendi.'
	},
	{
		question: 'How can I buy a Dirty Bull Mining Union NFT?',
		answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, eveniet temporibus vero, aspernatur pariatur dolorum cumque perspiciatis explicabo amet itaque consequuntur in quas! Impedit, at commodi sapiente dolores eligendi.'
	},
	{
		question: 'How can I join the whitelist?',
		answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, eveniet temporibus vero, aspernatur pariatur dolorum cumque perspiciatis explicabo amet itaque consequuntur in quas! Impedit, at commodi sapiente dolores eligendi.'
	},
	{
		question: 'What is the mint price?',
		answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, eveniet temporibus vero, aspernatur pariatur dolorum cumque perspiciatis explicabo amet itaque consequuntur in quas! Impedit, at commodi sapiente dolores eligendi.'
	},
	{
		question: 'How can I use my NFT?',
		answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, eveniet temporibus vero, aspernatur pariatur dolorum cumque perspiciatis explicabo amet itaque consequuntur in quas! Impedit, at commodi sapiente dolores eligendi.'
	},
	{
		question: 'Still have questions?',
		answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, eveniet temporibus vero, aspernatur pariatur dolorum cumque perspiciatis explicabo amet itaque consequuntur in quas! Impedit, at commodi sapiente dolores eligendi.'
	}
]

const Faq = () => {
	return(
		<section id="faq" className="faq">
			<img src="/assets/img/faq-shadow.png" alt="shadow" className="faq__shadow" />
			
			<div className="container">
				<div className="faq__inner">
					<h2 className="title center faq__title wow animate__animated animate__fadeIn">
						FAQ
					</h2>

					<div className="faq__content">
						{faqData.map((d, id) => <FaqItem key={id} question={d.question} answer={d.answer} />)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Faq;