import React from 'react';
import { connect } from 'react-redux';
import { Heading, Box, Text, Image, AspectRatio, Center } from '@chakra-ui/react';
import {
    headingProps,
    paragraphProps,
} from '@common/styles/components/contentStyle';
import useImage from '../useImage';
// Import custom components
import IconContent from './iconSession/iconContent.js';

const Content = ({ theme, quizResult }) => {
    const themeInterests = theme.interests;
    const { loading, error, image } = useImage(quizResult?.image);
    return (
        <>
            <IconContent quizResult={quizResult} />
            <Box>
                <Text
                    as="p"
                    fontSize={{
                        base: 'var(--text-mg)',
                        md: 'var(--text-lg)',
                    }}
                    color="#0075BA"
                    fontWeight="bold"
                >
                    立即登記獲取完整測驗結果與<br />{quizResult?.character}的獨家彩蛋片段！
                </Text>
            </Box>
        </>
    );
};

const mapStateToProps = ({ status, theme }) => {
    return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
