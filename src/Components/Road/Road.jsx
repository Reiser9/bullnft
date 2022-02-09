import React from 'react';

import RoadItem from './RoadItem/RoadItem.jsx';

const roadData = [
	{
		title: 'Exploration & Community Whitelist',
		text: 'As Dirty Bulls, we’re getting our hands dirty, digging our ways through the blockchain in order to set new ATHs (All-Time Highs). With amazing artwork, rocket-fueled community growth, and expert marketing expertise, We’re aiming to give back to our community with a whitelist opportunity! Please join our Discord channel to find out how you can get whitelisted and for community giveaways!',
		current: false
	},
	{
		title: 'Minting, Reveal, and Verification',
		text: 'Once our project meets our quality standards, we can move forward with the next phase, our minting & reveal. This will include our public sale for a price of [.15 ETH]. 24 hours after a successful sale concludes, we will update the metadata on OpenSea to reveal the amazing Dirty Bull Mining Union NFTs. We will also work alongside the Opensea team to get verified!',
		current: true
	},
	{
		title: 'Community & Charity Giveaway',
		text: 'The fun doesn’t stop just yet after a successful sale! Nothing is possible without an amazing community supporting us so we’re aiming to allocate $100,000 for a handful of lucky NFT holders and a charity of the community’s choice. That’s right! $100,000 will be gifted to our wonderful community and a really good cause. Every mint is a possibility for your chance to win this amazing prize.',
		current: false
	},
	{
		title: 'Community Challenges',
		text: 'Giveaways and community challenges are coming in HOT! We are working on bringing the fun to all DBMU hodlers and community members. Keep an eye out for the latest on our Twitter and Discord (as well as some fun collaborative giveaways that are based on specific traits).',
		current: false
	},
	{
		title: 'Staking and Utility Token',
		text: 't more than just hodling an amazing Dirty Bull NFT on the blockchain, right? We’re building an on-site staking platform where you can stake your DBMU NFTs for $MINE tokens. You’ll soon have utility for both your DBMU NFTs and $MINE tokens in our next phases.',
		current: false
	},
	{
		title: 'Governance',
		text: 'To complete our decentralization, a GovernanceDAO will be built from the ground up, giving the DBMU community the right to vote and decide the fate of the Dirty Bull Mining Union.',
		current: false
	},
	{
		title: 'Breeding, Prediction Markets, & Much More!',
		text: 'We want to provide insane NFT and token utility for all Dirty Bull Mining Union holders moving forward. We have plans to start a breeding function (stayed tuned for Dirty Bears NFTs), prediction markets, and much more! More to come!',
		current: false
	}
]

const Road = () => {
	return(
		<section id="road" className="road">
			<img src="/assets/img/road-shadow.png" alt="shadow" className="road__shadow" />

			<img src="/assets/img/road-img1.webp" loading="lazy" alt="img" className="road__img road__img1" />
			<img src="/assets/img/road-img2.webp" loading="lazy" alt="img" className="road__img road__img2" />
			<img src="/assets/img/road-img3.webp" loading="lazy" alt="img" className="road__img road__img3" />
			<img src="/assets/img/road-img4.webp" loading="lazy" alt="img" className="road__img road__img4" />

			<div className="container">
				<div className="road__inner">
					<div className="road__text--inner">
						<h2 className="title road__title wow animate__animated animate__fadeIn">
							Roadmap
						</h2>

						<div className="road__text wow animate__animated animate__fadeIn">
							The community will always come first for our project. That means, owning a Dirty Bull Mining Union NFT goes far beyond simply owning a valuable piece of digital artwork. With instant NFT and token utility, your Dirty Bull Mining Union NFTs will go a long way than just art.
						</div>
					</div>

					<div className="road__img--box">
						<img src="/assets/img/road-img1.webp" loading="lazy" alt="img" className="road__img--img" />
						<img src="/assets/img/road-img2.webp" loading="lazy" alt="img" className="road__img--img" />
						<img src="/assets/img/road-img3.webp" loading="lazy" alt="img" className="road__img--img" />
						<img src="/assets/img/road-img4.webp" loading="lazy" alt="img" className="road__img--img" />
					</div>

					<div className="road__content wow animate__animated animate__fadeIn">
						{roadData.map((d, id) => <RoadItem key={id} title={d.title} text={d.text} current={d.current} phase={id} />)}

						<div className="road__line"></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Road;