import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentB from './images/cd8ea365-cd8ea365-gp0sto55a_web_size_with_credit_line.jpg';

const Content = ({ theme }) => {
  return (
    <>
      <Heading {...headingProps}>Sign the petition</Heading>

      <Text as="p" {...paragraphProps}>
        Your signature here can help get a third of the world’s oceans protected
        in marine sanctuaries.
      </Text>

      <Text as="p" {...paragraphProps}>
        Greenpeace is urging governments around the world to agree to the Global
        Ocean Pact. It’s a breakthrough initiative that could put more than a
        third of the world’s oceans in a network of marine sanctuaries and
        ensure their long-term protection.
      </Text>

      <Heading {...headingProps}>
        Will you join us and help save our oceans?
        <br />
        SIGN HERE NOW.
      </Heading>

      <Box {...paragraphProps}>
        <Image src={contentB} />
      </Box>

      <Heading {...headingProps}>
        Be part of the solution. Help save our beautiful oceans.
      </Heading>

      <Text as="p" {...paragraphProps}>
        The ocean world is mysterious, beautiful, and home to countless
        creatures. Oceans clean our air and provide food and jobs for billions
        of people.
      </Text>

      <Text as="p" {...paragraphProps}>
        But oceans, and everything that depends on them are at risk from climate
        change, plastics, mining and overfishing.
      </Text>

      <Text as="p" {...paragraphProps}>
        If we don’t act now, it may be too late to save the world’s oceans from
        a comprehensive ecological catastrophe.
      </Text>

      <Text as="p" {...paragraphProps}>
        Please join Greenpeace supporters all over the world and add your name
        to the global call for a Global Ocean Pact.
      </Text>

      <Text as="p" {...paragraphProps}>
        You can help make at least 30% of the world’s oceans marine protected
        areas by 2030.
      </Text>

      <Text as="p" {...paragraphProps}>
        <b>
          Add your name here now and be part of the solution for the world’s
          magnificent oceans.
        </b>
      </Text>
    </>
  );
};

export default Content;
