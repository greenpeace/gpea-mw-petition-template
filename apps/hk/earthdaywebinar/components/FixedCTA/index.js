import React, { useEffect } from 'react';
import { Button, Center } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { useMediaQuery } from '@chakra-ui/react';

const FixedCTA = ({ onClick, status, form }) => {
  const { submitted } = status;
  const [matches] = useMediaQuery('(max-width:600px)');
  const buttonText = !submitted
    ? form.submit_text
    : form.mobile_fixed_cta
    ? form.mobile_fixed_cta
    : '立即捐款';

  return (
    <Center
      zIndex={99}
      d={{ base: 'block', lg: 'none' }}
      {...styleProps}
    >
      <Button
        {...buttonStyleProps}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </Center>
  );
};

const styleProps = {
	borderTopRightRadius: '0',
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
	borderBottomRightRadius: '0',
	bg: 'white',
	width: '100%',
	p: '4',
	padding: '0',
	paddingBottom: `0`,
	d: { md: 'none' }
};

const buttonStyleProps = {
	width: '100%',
	borderRadius: '4px 4px 0 0 ',
	fontSize: '20px',
	fontWeight: '400',
	minHeight: '48px',
	py: '12px',
	px: '4px',
	color: 'white',
	bg: 'orange.500',
	_hover: { bg: 'orange.300' }
};


const mapStateToProps = ({ status, form }) => {
  return { status, form: form.content };
};

export default connect(mapStateToProps)(FixedCTA);
