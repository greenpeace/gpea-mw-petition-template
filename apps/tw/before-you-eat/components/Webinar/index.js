import React from 'react';
import { Box, Text, Stack, Circle, Icon } from '@chakra-ui/react';
import {
	headingProps,
	paragraphProps
} from '@common/styles/components/contentStyle';
import { connect } from 'react-redux';
import { BiTime } from 'react-icons/bi';
import { GoBook } from 'react-icons/go';
import { BiCalendar } from 'react-icons/bi';
import { MdOutlineOndemandVideo } from 'react-icons/md';

const Webinar = ({ content, theme }) => {
	const themeInterests = theme.interests;
	const subHeadline = headingProps;

	const triangle = {
		// borderBottom: '6px solid #66cc00',
		// borderLeft: '6px solid transparent',
		height: 14,
		width: 2,
		backgroundColor: '#66cc00',
		// borderRadius: '50%',
		position: 'absolute',
		right: -1,
		bottom: 12
	};

	const iconColor = themeInterests ? `theme.${themeInterests}` : 'brand.500';

	const Feature = ({ text, icon, iconBg }) => {
		return (
			<Stack direction={'row'} align={'center'}>
				<Box marginLeft={-2} pos={'relative'}>
					<Circle size="40px" color="white" bg={iconBg}>
						{icon}
					</Circle>
				</Box>
				<Text {...paragraphProps}>{text}</Text>
			</Stack>
		);
	};

	return (
		<Box>
			{/* {content.title && <Text {...subHeadline}>{content.title}</Text>} */}
			<Stack spacing={0}>
				<Feature
					icon={<Icon as={BiCalendar} color={'brand.500'} w={6} h={6} />}
					text={content.date}
				/>
				<Feature
					icon={<Icon as={BiTime} color={'brand.500'} w={6} h={6} />}
					text={content.time}
				/>
				<Feature
					icon={
						<Icon as={MdOutlineOndemandVideo} color={'brand.500'} w={6} h={6} />
					}
					text={content.description}
				/>
				{content.other && (
					<Feature
						icon={<Icon as={GoBook} color={'brand.500'} w={6} h={6} />}
						text={content.other}
					/>
				)}
			</Stack>
		</Box>
	);
};

const mapStateToProps = ({ theme }) => {
	return { theme: theme.data };
};

export default connect(mapStateToProps)(Webinar);
