import React from 'react';
import { useSelector } from 'react-redux';

const Thankyou = () => {
  const strapi = useSelector((state) => state?.theme?.strapi);

  return (
    <>
      <div className="strapi-content">
        {strapi?.thankyouBlocks?.map((d) => {
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

export default Thankyou;
