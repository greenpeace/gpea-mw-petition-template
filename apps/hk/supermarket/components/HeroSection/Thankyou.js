import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Stack } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import Form from '../Form';
import { useWindowSize } from '../../util';
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
            __html: `${FirstName}，<br/>感謝您聯署推動超市走塑！`,
          }}
        />
      </Box>
      <Box pos={'relative'}>
        <Box
          {...formProps}
          d={{ base: 'none', md: readyToShow ? 'block' : 'none' }}
        >
          <Form />
        </Box>
      </Box>
    </Stack>
  );
}

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Content);
