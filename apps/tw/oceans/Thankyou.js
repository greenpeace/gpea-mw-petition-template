import React from 'react';
import { Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const Thankyou = () => {
  return (
    <>
      <Heading {...headingProps}>
        Thank you for signing the petition to support a Global Oceans Pact.
      </Heading>

      <Text as="p" {...paragraphProps}>
        You’ve joined tens of thousands of Greenpeace supporters fighting to
        protect a third of the world’s oceans through marine sanctuaries.
      </Text>

      <Text as="p" {...paragraphProps}>
        Will you take your care for our oceans a step further? Donate here now
        and help protect them in other powerful ways.
      </Text>

      <Text as="p" {...paragraphProps}>
        If ever the world’s oceans needed you it’s now. They’re under threat
        from climate change, overfishing, plastic pollution and more. Countless
        marine species are at risk – and fragile ecosystems are close to
        collapse.
      </Text>

      <Text as="p" {...paragraphProps}>
        But with your help, and a donation to Greenpeace, we can create a
        healthy, sustainable future for our oceans and everything that depends
        on them.
      </Text>

      <Text as="p" {...paragraphProps}>
        <b>Be part of the solution for our beautiful oceans.</b>
      </Text>
    </>
  );
};

export default Thankyou;
