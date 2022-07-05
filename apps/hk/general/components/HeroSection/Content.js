import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Stack } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import DonationModule from '@components/GP/DonationModule';
import { useWindowSize } from '@common/utils/index';
import { headingProps } from '@common/styles/components/contentStyle';
const formWidth = 500;

function Content({ children }) {
  const [readyToShow, setReadyToShow] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const getSize = useWindowSize();
  const formProps = inView // switch form position when TITLE inView
    ? {
        position: 'absolute',
        left: '100%',
        top: 0,
        width: `${formWidth}px`,
      }
    : {
        position: 'fixed',
        left: `${getSize?.width / 2}px`,
        top: '0px',
        width: `${formWidth}px`,
      };

  useEffect(() => {
    setTimeout(() => setReadyToShow(true), 200);
  }, []);

  return (
    <Stack spacing="4" py={'40px'} w={{ md: 'md', xl: 'xl' }}>
      <Box ref={ref}>
        <Heading
          as="h1"
          {...headingProps}
          color={'white'}
          fontSize={{
            base: 'var(--text-xl)',
            md: 'var(--text-2xl)',
          }}
          textShadow="0 0 1px rgba(0,0,0, .2)"
          mb={4}
          dangerouslySetInnerHTML={{
            __html: '請即捐款<br/>拯救脆弱的地球生態！',
          }}
        />
      </Box>
      <Box pos={'relative'}>
        <Box {...formProps} d={{ base: 'none', lg: 'block' }}>
          <Box
            mx="auto"
            bgColor="white"
            borderRadius={8}
            boxShadow="lg"
            overflow="hidden"
            pos="relative"
            zIndex={10}
          >
            <DonationModule
              market={'HK'}
              language={'zh_HK'}
              campaign={'general'}
              // campaignId={''}
              env={'production'}
            />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Content);
