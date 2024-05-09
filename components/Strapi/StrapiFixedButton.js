import React from 'react';
import { useSelector } from 'react-redux';
import { Slide, Center, Button } from '@chakra-ui/react';
import { connect } from 'react-redux';

const StrapiFixedButton = ({ target, targetInView, status }) => {
	const { submitted } = status;
	const strapi = useSelector((state) => state?.theme?.strapi);
	const hiddenForm = useSelector((state) => state?.hiddenForm);
	// get utm_source
	const { utm_source } = hiddenForm?.data;
	const buttonText = submitted ? strapi?.fixedThankyouCta : strapi?.fixedCta;

	const handleScroll = (target) => {
		if (!target) {
			return;
		}
		target.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		(!(utm_source == 'dd' && submitted)) && (
			<Slide direction="bottom" in={!targetInView} style={{ zIndex: 10 }}>
				<Center {...styleProps}>
					<Button {...buttonStyleProps} onClick={() => handleScroll(target)}>
						{buttonText}
					</Button>
				</Center>
			</Slide>
		)
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
	d: { md: 'none' }
};

const buttonStyleProps = {
	width: '100%',
	borderRadius: '4px',
	fontSize: '20px',
	fontWeight: '500',
	minHeight: '56px',
	py: '12px',
	px: '4px',
	color: 'white',
	bg: 'orange.500',
	_hover: { bg: 'orange.300' }
};

const mapStateToProps = ({ status }) => {
	return { status };
};

export default connect(mapStateToProps)(StrapiFixedButton);
