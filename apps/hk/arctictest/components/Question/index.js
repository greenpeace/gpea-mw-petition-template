import React from 'react';
import { Container, Box, useMediaQuery } from '@chakra-ui/react';
import QuizTop from '../QuizTop';
import StickyHeader from '../StickyHeader';
import { useInView } from 'react-intersection-observer';

const Question = ({ quiz }) => {
  const { ref, inView } = useInView({ threshold: 0 });
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {isSmallerThan768 && !inView && (
        <Box style={{ position: 'fixed', top: '0', left: '0', zIndex: 99 }}>
          <Box bgColor={'#FFF'}>
            <Container maxW={'2xl'}>
              <StickyHeader quiz={quiz} />
            </Container>
          </Box>
        </Box>
      )}
      {/* <Box bgColor={'#025177'} borderRadius={'8px'} p={4}>
        <Heading
          fontSize={{ base: 'md', md: 'xl' }}
          color={'#FFF'}
          textAlign={{ base: 'left', md: 'center' }}
        >
          測出您的性格與習慣，找出隱藏在您潛意識中的極地動物！
        </Heading>
      </Box> */}
      <Box ref={ref}>
        <QuizTop quiz={quiz} />
      </Box>
    </>
  );
};

export default Question;
