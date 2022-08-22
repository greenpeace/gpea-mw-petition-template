import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
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
      <Heading as="h2" textAlign="center" py="6" fontSize="2xl">
        常見問題
      </Heading>
      <DonateFAQ locale="TWChinese" />
    </>
  );
};

export default Donation;
