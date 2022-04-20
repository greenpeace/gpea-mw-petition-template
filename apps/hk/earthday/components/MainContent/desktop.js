import { Box, Container, Flex } from '@chakra-ui/react';
import Content from './Content';
import Thankyou from './Thankyou';
import { useSelector } from 'react-redux';

const DesktopMainContent = ({ children }) => {
  const isSubmitted = useSelector((state) => state.status?.submitted);
  return (
    <Box mt={{ md: '-20px' }} pos={'relative'} zIndex={2}>
      <Container maxW={{ base: '100%', lg: '1200px' }}>
        <Box
          py="4"
          bgColor={'white'}
          border={'1px solid #E2E8F0'}
          borderRadius={'8px'}
        >
          <Flex direction={{ base: 'column-reverse', md: 'row' }}>
            <Box px="4" py="6" flex={1}>
              {isSubmitted ? <Thankyou /> : <Content />}
            </Box>
            <Box px="4" py="6" flex={1} pos={'relative'}>
              <Box
                sx={{
                  position: '-webkit-sticky',
                  /* Safari */ position: 'sticky',
                  top: '0',
                }}
              >
                {children}
                {/* <Form/> */}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default DesktopMainContent;
