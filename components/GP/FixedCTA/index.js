import { Box, Button } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { connect } from 'react-redux';

const FixedCTA = ({ children, onClick, status, form }) => {
  const { submitted } = status;
  const [matches] = useMediaQuery('(max-width:600px)');

  if (matches) {
    return (
      <Box
        pos={'fixed'}
        px={2}
        py={2}
        bottom={0}
        left={0}
        zIndex={99}
        w={'100%'}
        bg="orange.500"
        borderTopRightRadius="4px"
        borderTopLeftRadius="4px"
      >
        <Button
          width="100%"
          borderRadius="md"
          fontSize="xl"
          px={2}
          py={6}
          color="white"
          bg="orange.500"
          _hover={{ bg: 'orange.300' }}
          onClick={onClick}
        >
          {!submitted
            ? form.submit_text
            : form.mobile_fixed_cta
            ? form.mobile_fixed_cta
            : '立即捐款'}
        </Button>
      </Box>
    );
  }

  return <Box></Box>;
};

const mapStateToProps = ({ status, form }) => {
  return { status, form };
};

export default connect(mapStateToProps)(FixedCTA);
