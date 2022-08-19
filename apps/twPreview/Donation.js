import React from 'react';
import { useSelector } from 'react-redux';
import DonateFAQ from '@components/DonateFAQ';

const Donation = () => {
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
      <DonateFAQ locale="TWChinese" />
    </>
  );
};

export default Donation;
