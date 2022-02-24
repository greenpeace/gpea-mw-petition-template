import React, { useEffect, useState } from 'react';
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
import speaker1 from '../../images/gurugurulogo.jpg';
import speaker2 from '../../images/MilMilllogo.jpg';
import speaker3 from '../../images/campaigner-leanne-03.jpg';
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
    <Box py={20} w={{ md: 'md', xl: 'xl' }}>
      <Box ref={ref}>
        <Heading
          {...headingProps}
          color={'white'}
          fontSize={{ base: '2xl', md: '4xl' }}
          dangerouslySetInnerHTML={{
            __html: `${FirstName}<br/>感謝您報名減廢回收免費講座！`,
          }}
        />
      </Box>
      <Box pos={'relative'}>
        <Flex zIndex="2" py={4} flexDirection="column">
          <Text fontSize="xl" px="2" mb="4" fontWeight="bold" color="white">
            嘉賓講者：
          </Text>
          <AvatarGroup size="xl" max={4}>
            <Avatar name="回收廠Mil Mill代表" src={speaker2} />
            <Avatar name="環保網店Guruguru創辦人阿晴" src={speaker1} />
            <Avatar name="綠色和平項目主任 譚穎琳 Leanne" src={speaker3} />
          </AvatarGroup>
        </Flex>
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
