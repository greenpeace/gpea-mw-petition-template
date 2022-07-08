import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from '@chakra-ui/react';

import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import data from './index.json';

const DonateFAQ = ({ locale = 'HKChinese' }) => {
  console.log(data);
  return (
    <Accordion my="4" allowToggle={true}>
      {data[locale].accordions.map((d, i) => {
        return (
          <AccordionItem key={i}>
            <AccordionButton
              _expanded={{ fontWeight: 'bold', bg: '', color: '' }}
            >
              <AccordionIcon mr="2" />
              <Box py="6" p="4" flex="1" textAlign="left">
                <Text as="p" fontSize="md">
                  {d.title}
                </Text>
              </Box>
            </AccordionButton>
            <AccordionPanel py="6" px="4">
              <Text
                as="p"
                mb="0"
                {...paragraphProps}
                dangerouslySetInnerHTML={{
                  __html: d.desc,
                }}
              ></Text>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default DonateFAQ;
