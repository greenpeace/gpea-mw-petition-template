import React, { useRef } from 'react';
import { connect } from 'react-redux';
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Text,
  Heading,
} from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import Form from '../Form';
import { useWindowSize } from '../../util';
import { headingProps } from '@common/styles/components/contentStyle';

import speaker1 from '../../images/gurugurulogo.jpg';
import speaker2 from '../../images/MilMilllogo.jpg';
import speaker3 from '../../images/campaigner-leanne-03.jpg';

const formWidth = 500;

function Content() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const scrollToRef = (ref) =>
    ref.current?.scrollIntoView({ behavior: 'smooth' });

  const speaker1Ref = useRef(null);
  const speaker2Ref = useRef(null);
  const speaker3Ref = useRef(null);
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

  return (
    <Box py={20} w={{ md: 'md', xl: 'xl' }}>
      <Box ref={ref}>
        <Heading
          {...headingProps}
          color={'white'}
          fontSize={{ base: '2xl', md: '4xl' }}
          dangerouslySetInnerHTML={{
            __html: '請即報名<br/>惜物慳家101<br/>家居減廢與回收講座',
          }}
        />
      </Box>
      <Box pos={'relative'}>
        <Flex zIndex="2" py={4} flexDirection="column">
          <Text fontSize="xl" px="2" mb="4" fontWeight="bold" color="white">
            嘉賓講者：
          </Text>
          <AvatarGroup size="xl" max={4}>
            <Avatar
              name="回收廠Mil Mill代表"
              src={speaker2}
              onClick={() => scrollToRef(speaker2Ref)}
            />
            <Avatar
              name="環保網店Guruguru創辦人阿晴"
              src={speaker1}
              onClick={() => scrollToRef(speaker1Ref)}
            />
            <Avatar
              name="綠色和平項目主任 譚穎琳 Leanne"
              src={speaker3}
              onClick={() => scrollToRef(speaker3Ref)}
            />
          </AvatarGroup>
        </Flex>
        <Box {...formProps} d={{ base: 'none', md: 'block' }}>
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
