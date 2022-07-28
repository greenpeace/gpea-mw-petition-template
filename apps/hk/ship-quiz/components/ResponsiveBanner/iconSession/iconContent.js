import React from 'react';
import { Heading, Box, Stack, Text, Image, Avatar, Center } from '@chakra-ui/react';
import PageContainer from '@containers/pageContainer';
import useImage from '../../../useImage';

export default function Index({
    quizResult
}) {
    const { loading, error, image } = useImage(quizResult?.icon);
    return (
        <>
            <Box pos={'relative'} zIndex={2} paddingBottom={'4rem'}>
                <Box pos={'relative'} zIndex={3}>
                    <PageContainer>
                        <Box py={4} px={2} maxW={{ base: '100%', md: '50%' }}>
                            <Stack spacing="1" direction='row'>
                                <Box>
                                    <Avatar size='xl' name={quizResult?.value} src={image} />
                                </Box>
                                <Box maxW={{ base: '280px', md: '380px' }} py={4}>
                                    <Box
                                        borderRadius={'8px'}
                                        bg='gray.50'
                                        w='200px'
                                        h='60%'
                                        p={2}
                                    >
                                        <Text
                                            as="span"
                                            color={'#0075BA'}
                                            fontWeight="bold"
                                            fontSize={{ base: 'md' }}
                                        >
                                            我有些話對您說⋯⋯
                                        </Text>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    </PageContainer>
                </Box>
            </Box>
        </>
    );
}
