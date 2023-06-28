import React from 'react';
import { Slide, Center, Button } from '@chakra-ui/react';
import { connect } from 'react-redux';

const ScrollToTargetButton = ({ target, targetInView, status, form }) => {
  const { submitted } = status;
  const buttonText = !submitted
    ? form.submit_text
    : form.mobile_fixed_cta
    ? form.mobile_fixed_cta
    : '立即捐款';

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
          {buttonText}
        </Button>
      </Center>
    </Slide>
  );
};

const styleProps = {
	zIndex: 99,
	left: '0',
	bottom: '0',
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

export default connect(mapStateToProps)(ScrollToTargetButton);
