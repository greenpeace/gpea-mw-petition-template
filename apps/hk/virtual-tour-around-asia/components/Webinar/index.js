import React from 'react';
import { Box, Text, Stack, Circle, Icon } from '@chakra-ui/react';
import {
    headingProps,
    paragraphProps,
} from '@common/styles/components/contentStyle';
import { connect } from 'react-redux';
import { BiTime } from 'react-icons/bi';
import { GoBook } from 'react-icons/go';
import { BiCalendar } from 'react-icons/bi';
import { MdOutlineOndemandVideo } from 'react-icons/md';

const Webinar = ({ showTitle, content, theme }) => {
    const themeInterests = theme.interests;
    const subHeadline = headingProps;

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
            {showTitle &&
                <Text fontWeight="bold" {...subHeadline}>
                    {content.title}
                </Text>
            }
            <Stack spacing={0}>
                <Feature
                    icon={<Icon as={BiCalendar} color={iconColor} w={6} h={6} />}
                    text={content.date}
                />
                <Feature
                    icon={<Icon as={BiTime} color={iconColor} w={6} h={6} />}
                    text={content.time}
                />
                <Feature
                    icon={
                        <Icon as={MdOutlineOndemandVideo} color={iconColor} w={6} h={6} />
                    }
                    text={content.description}
                />
                <Feature
                    icon={<Icon as={GoBook} color={iconColor} w={6} h={6} />}
                    text={content.other[0]}
                />
                <Feature
                    icon={<Icon as={GoBook} color={iconColor} w={6} h={6} />}
                    text={content.other[1]}
                />
            </Stack>
        </Box>
    );
};

const mapStateToProps = ({ theme }) => {
    return { theme: theme.data };
};

export default connect(mapStateToProps)(Webinar);
