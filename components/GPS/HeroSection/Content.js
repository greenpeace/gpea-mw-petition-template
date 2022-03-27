import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box, Heading } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import Form from '@components/GPS/GPSForm';
import { useWindowSize } from '@components/GPS/util';
import { headingProps } from '@common/styles/components/contentStyle';

const formWidth = 500;

function Content({ status, theme }) {
  const { scrollToTarget } = status;
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
    setTimeout(() => setReadyToShow(true), 500);
  }, []);

  return (
    <Box py={20} w={{ md: 'md', xl: 'xl' }}>
      <Box ref={ref}>
        <Heading
          {...headingProps}
          color={'white'}
          fontSize={{ base: '2xl', md: '4xl' }}
          dangerouslySetInnerHTML={{
            __html: '立即登記<br/>免費使用完整版！',
          }}
        />
      </Box>
      <Box pos={'relative'}>
        <Box {...formProps} d={{ base: 'none', lg: 'block' }}>
          <Form />
        </Box>
      </Box>
    </Box>
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
