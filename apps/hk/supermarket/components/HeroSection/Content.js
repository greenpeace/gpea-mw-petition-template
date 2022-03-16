import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Stack } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import Form from '../Form';
import { useWindowSize } from '../../util';
import { headingProps } from '@common/styles/components/contentStyle';

const formWidth = 500;

function Content() {
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
            __html: '請即聯署<br/>超市走塑 要有得揀',
          }}
        />
      </Box>
      <Box pos={'relative'}>
        {readyToShow && (
          <Box {...formProps} d={{ base: 'none', lg: 'block' }}>
            <Form />
          </Box>
        )}
      </Box>
    </Stack>
  );
}

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
