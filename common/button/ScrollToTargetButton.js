import React from 'react';
import { Slide, Center, Button } from '@chakra-ui/react';

const ScrollToTargetButton = ({ target, text, targetInView }) => {
  const handleScroll = (target) => {
    if (!target) {
      return;
    }
    target.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Slide direction="bottom" in={!targetInView} style={{ zIndex: 10 }}>
      <Center {...styleProps}>
        <Button {...buttonStyleProps} onClick={() => handleScroll(target)}>
          {text}
        </Button>
      </Center>
    </Slide>
  );
};

const styleProps = {
  zIndex: 99,
  left: '0',
  bottom: '0',
  borderTopRightRadius: '4px',
  borderTopLeftRadius: '4px',
  borderBottomLeftRadius: '0',
  borderBottomRightRadius: '0',
  bg: 'white',
  width: '100%',
  p: '4',
  paddingBottom: `calc(1rem + env(safe-area-inset-bottom))`,
  d: {md: 'none'}
};

const buttonStyleProps = {
  fontSize: 'xl',
  px: 2,
  py: 8,
  width: '100%',
  color: 'white',
  borderRadius: '4px',
  bg: 'orange.500',
  _hover: { bg: 'orange.300' },
};

export default ScrollToTargetButton;
