import React from 'react';
import { useSelector } from 'react-redux';

const Content = () => {
  const strapi = useSelector((state) => state?.theme?.strapi);

  return (
    <>
      <div className="strapi-content">
        {strapi?.contentBlocks?.map((d) => {
          return (
            <div
              key={d.id}
              dangerouslySetInnerHTML={{ __html: d?.richContent }}
            />
          );
        })}
      </div>
    </>
  );
};

export default Content;
