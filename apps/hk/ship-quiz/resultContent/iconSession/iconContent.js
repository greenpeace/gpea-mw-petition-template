import React from 'react';
import { Heading, Box, Stack, Text, Image, Avatar, Center, Grid, GridItem } from '@chakra-ui/react';
import PageContainer from '@containers/pageContainer';
import useImage from '../../useImage';

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
                            <Stack spacing="1" direction='row'>
                                <Box>
                                    <Avatar size='2xl' name={quizResult?.value} src={image} />
                                </Box>
                                <Box maxW={{ base: '280px', md: '380px' }} py={4}>
                                    <Box
                                        borderRadius={'8px'}
                                        bg='#F7FAFC'
                                        w='330px'
                                        h='60%'
                                        p={2}
                                    >
                                        <Text
                                            as="p"
                                            color={'#0075BA'}
                                            fontWeight="bold"
                                            fontSize={{ base: 'lg' }}
                                        >
                                            您好，很高興認識您，我是與您匹配、現實中的{quizResult?.value} {quizResult?.character}
                                        </Text>
                                    </Box>

                                </Box>
                            </Stack>
                            {/* <Grid
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
                                        bg='#F7FAFC'
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
                                            您好，很高興認識您，我是與您匹配、現實中的{quizResult?.value} {quizResult?.character}
                                        </Text>
                                    </Box>
                                </GridItem>
                            </Grid> */}
                        </Box>
                    </PageContainer>
                </Box>
            </Box >
        </>
    );
}
