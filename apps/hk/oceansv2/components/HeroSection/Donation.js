import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { Box, Heading, Stack, } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { useWindowSize } from '@common/utils/index';
import { headingProps } from '@common/styles/components/contentStyle';
import DonationModule from '@components/GP/DonationModule';
const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
const formWidth = 500;

function Donation({ children, theme }) {
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
            md: 'var(--text-xl)',
          }}
          textShadow="0 0 1px rgba(0,0,0, .2)"
          mb={4}
          dangerouslySetInnerHTML={{
            __html: '感謝您加入守護海洋行列！<br/>為海洋多走一步，捐助支持保護海洋項目。',
          }}
        />
      </Box>
      <Box pos={'relative'}>
        {readyToShow && (
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
                market={theme.Market}
                language={'zh_HK'}
                campaign={'oceans'}
                // campaignId={''}
                env={'production'}
               />
            </Box>
          </Box>
        )}
      </Box>
    </Stack>
  );
}

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Donation);
