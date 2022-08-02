import React from 'react';
import { Heading, Box, Stack, Text, Image, Avatar, Center, Grid, GridItem } from '@chakra-ui/react';
import PageContainer from '@containers/pageContainer';
import useImage from '../../../useImage';

export default function Index({
    quizResult
}) {
    const { loading, error, image } = useImage(quizResult?.icon);
    return (
        <>
            <Box pos={'relative'} zIndex={2}>
                <Box pos={'relative'} zIndex={3}>
                    <PageContainer>
                        <Box py={4} px={2} maxW={{ base: '100%', md: '100%' }}>
                            <Grid
                                h='150px'
                                templateRows='repeat(3, 1fr)'
                                templateColumns='repeat(9, 1fr)'
                                gap={1}
                            >
                                <GridItem width={'min-content'} rowSpan={6} colSpan={2}>
                                    <Avatar
                                        size='xl'
                                        name={quizResult?.value}
                                        src={image}
                                        top="8px"
                                    />
                                </GridItem>
                                <GridItem rowSpan={1} colSpan={6}>
                                    <Text
                                        as="span"
                                        color={'#0075BA'}
                                        fontWeight="bold"
                                        fontSize={{ base: 'md' }}
                                    >
                                        綠色和平彩虹勇士號 {quizResult?.value} {quizResult?.character}
                                    </Text>
                                </GridItem>
                                <GridItem rowSpan={5} colSpan={6}>
                                    <Box
                                        borderRadius={'8px'}
                                        bg='gray.50'
                                        w='200px'
                                        h='60%'
                                        p={2}
                                    >
                                        <Text
                                            as="p"
                                            color={'#0075BA'}
                                            fontWeight="bold"
                                            fontSize={{ base: 'lg' }}
                                        >
                                            我有些話對您說⋯⋯
                                        </Text>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Box>
                    </PageContainer>
                </Box>
            </Box >
        </>
    );
}
