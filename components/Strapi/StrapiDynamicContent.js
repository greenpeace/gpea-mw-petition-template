import React from 'react';

const StrapiDynamicBlocks = ({ blocks = 'contentBlocks', strapi }) => {
	return (
		<div className="strapi-content">
			{strapi?.[blocks]?.map((d, i) => {
				return (
					<div key={i} dangerouslySetInnerHTML={{ __html: d?.richContent }} />
				);
			})}
		</div>
	);
};

export default StrapiDynamicBlocks;
