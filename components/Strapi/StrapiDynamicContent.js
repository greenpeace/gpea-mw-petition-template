import React from 'react';
import { useSelector } from 'react-redux';

const StrapiDynamicBlocks = ({ blocks = 'contentBlocks', children }) => {
  const strapi = useSelector((state) => state?.theme?.strapi);
  const dynamicBlocks = strapi?.blocks;

  return (
    <>
      <div className="strapi-content">
        {dynamicBlocks.map((d) => {
          return (
            <div
              key={d.id}
              dangerouslySetInnerHTML={{ __html: d?.richContent }}
            />
          );
        })}
      </div>
      {children}
    </>
  );
};

export default StrapiDynamicBlocks;
