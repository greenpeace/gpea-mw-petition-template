import React from 'react';
import { Button, Center } from '@chakra-ui/react';
import { connect } from 'react-redux';

const FixedCTA = ({ onClick, text = '立即捐款' }) => {
  return (
    <Center
      zIndex={99}
      d={{ base: 'block', lg: 'none' }}
      width="100%"
      borderTopRightRadius="4px"
      borderTopLeftRadius="4px"
      borderBottomLeftRadius="0"
      borderBottomRightRadius="0"
      bg="white"
      p="4"
      paddingBottom={'calc(1rem + env(safe-area-inset-bottom))'}
    >
      <Button
        fontSize="xl"
        px={2}
        py={8}
        width="100%"
        color="white"
        borderRadius="4px"
        bg="orange.500"
        _hover={{ bg: 'orange.300' }}
        onClick={onClick}
      >
        {text}
      </Button>
    </Center>
  );
};

const mapStateToProps = ({ status, form }) => {
  return { status, form: form.content };
};

export default connect(mapStateToProps)(FixedCTA);
