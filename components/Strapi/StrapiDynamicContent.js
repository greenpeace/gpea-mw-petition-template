import React from 'react';
import { useSelector } from 'react-redux';

const StrapiDynamicBlocks = ({ blocks = 'contentBlocks', strapi }) => {
  return (
    <div className="strapi-content">
      {strapi?.[blocks]?.map((d) => {
        return (
          <div
            key={d.id}
            dangerouslySetInnerHTML={{ __html: d?.richContent }}
          />
        );
      })}
    </div>
  );
};

export default StrapiDynamicBlocks;
