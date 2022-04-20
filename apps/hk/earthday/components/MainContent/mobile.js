import { Box, Container } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Content from './Content';
import Thankyou from './Thankyou';

const MobileMainContent = () => {
  const isSubmitted = useSelector((state) => state.status?.submitted);
  return (
    <Container maxW="100%">
      <Box bgColor={'white'} border={'1px solid #E2E8F0'} borderRadius={'8px'}>
        <Box px="4" py="6">
          {isSubmitted ? <Thankyou /> : <Content />}
        </Box>
      </Box>
    </Container>
  );
};

export default MobileMainContent;
