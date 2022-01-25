import React, { useEffect } from 'react';
import { Button, Center } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { connect } from 'react-redux';

let mounted = false;

const FixedCTA = ({ onClick, status, form }) => {
  useEffect(() => {
    mounted = true;
  }, []);

  const { submitted } = status;
  const [matches] = useMediaQuery('(max-width:600px)');
  const buttonText = !submitted
    ? form.submit_text
    : form.mobile_fixed_cta
    ? form.mobile_fixed_cta
    : '立即捐款';

  if (matches && mounted) {
    return (
      <Center
        zIndex={99}
        pos={'fixed'}
        left="0"
        bottom="0"
        // bottom="env(safe-area-inset-bottom)"
        borderTopRightRadius="4px"
        borderTopLeftRadius="4px"
        borderBottomLeftRadius="0"
        borderBottomRightRadius="0"
        bg="white"
        width="100%"
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
          {buttonText}
        </Button>
      </Center>
    );
  }

  return null;
};

const mapStateToProps = ({ status, form }) => {
  return { status, form: form.content };
};

export default connect(mapStateToProps)(FixedCTA);
