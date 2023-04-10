import React from 'react';
import { Box, Heading, useMediaQuery } from '@chakra-ui/react';
import QuizTop from '../QuizTop';
import { useInView } from 'react-intersection-observer';

const Question = ({ quiz }) => {
  const { ref, inView } = useInView({ threshold: 0 });
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Box ref={ref}>
        <QuizTop quiz={quiz} />
      </Box>
    </>
  );
};

export default Question;
