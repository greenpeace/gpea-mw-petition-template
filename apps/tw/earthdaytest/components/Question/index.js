import React from 'react';
import { Box, Heading, useMediaQuery } from '@chakra-ui/react';
import QuizTop from '../QuizTop';
import StickyHeader from '../StickyHeader';
import { useInView } from 'react-intersection-observer';

const Question = ({ quiz }) => {
  const { ref, inView } = useInView({ threshold: 0 });
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {/* {isSmallerThan768 && !inView && (
        <Box style={{ position: 'fixed', top: '0', left: '0', zIndex: 99 }}>
          <Box bgColor={'#FFF'}>
            <Container maxW={'2xl'}>
              <StickyHeader quiz={quiz} />
            </Container>
          </Box>
        </Box>
      )} */}
      <Box ref={ref}>
        <QuizTop quiz={quiz} />
      </Box>
    </>
  );
};

export default Question;
