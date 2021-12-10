import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
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
      <Button
        pos={'fixed'}
        px={2}
        py={2}
        bottom={0}
        left={0}
        zIndex={99}
        width="100%"
        fontSize="xl"
        px={2}
        py={6}
        color="white"
        bg="orange.500"
        _hover={{ bg: 'orange.300' }}
        onClick={onClick}
        borderRadius={0}
      >
        {buttonText}
      </Button>
    );
  }

  return null;
};

const mapStateToProps = ({ status, form }) => {
  return { status, form: form.content };
};

export default connect(mapStateToProps)(FixedCTA);
