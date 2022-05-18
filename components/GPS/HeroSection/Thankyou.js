import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import Form from '@components/GPS/GPSForm';
import { useWindowSize } from '@components/GPS/util';
import { headingProps } from '@common/styles/components/contentStyle';

const formWidth = 500;

function Content({ signup }) {
  const { FirstName = '綠色和平支持者' } = signup;
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const getSize = useWindowSize();
  const [readyToShow, setReadyToShow] = useState(false);

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
    setReadyToShow(true);
  }, []);

  return (
    <Box py={20} w={{ md: 'md', xl: 'xl' }}>
      <Box ref={ref} p="4" bg="var(--gps-primary)">
        <Heading
          {...headingProps}
          color={'white'}
          fontSize={{
            base: 'var(--text-xl)',
            md: 'var(--text-2xl)',
          }}
          textShadow="0 0 1px rgba(0,0,0, .2)"
          mb={4}
          dangerouslySetInnerHTML={{
            __html: `${FirstName}，您現在可以免費使用完整版走塑GPS！`,
          }}
        />
        <Text as="p" color={'white'} fontSize="md" fontWeight="bold">
          * WhatsApp對話將於1分鐘內顯示確認訊息。
        </Text>
      </Box>
      <Box pos={'relative'}>
        <Box
          {...formProps}
          d={{ base: 'none', md: readyToShow ? 'block' : 'none' }}
        >
          <Form />
        </Box>
      </Box>
    </Box>
  );
}

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Content);
