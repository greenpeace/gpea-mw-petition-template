import React from 'react';

const StrapiDynamicBlocks = ({ content }) => {
	switch (content?.__component) {
		case 'blocks.rich-content':
			return (
				<div className="strapi-content">
					<div dangerouslySetInnerHTML={{ __html: content?.richContent }} />
				</div>
			);
		case 'blocks.card-swiper':
			return (
				<div className="strapi-content">
					<div>'blocks.card-swiper' {content?.title}:{content?.text}</div>
				</div>
			);

		case 'blocks.testimonial-swiper':
			return (
				<div className="strapi-content">
					<div>'blocks.testimonial-swiper' {content?.title}:{content?.text}</div>
				</div>
			);

		default:
			return '';
	}

	// return (
	// 	<div className="strapi-content">
	// 		{strapi?.[blocks]?.map((d, i) => {
	// 			return (
	// 				<div key={i} dangerouslySetInnerHTML={{ __html: d?.richContent }} />
	// 			);
	// 		})}
	// 	</div>
	// );
};

export default StrapiDynamicBlocks;
