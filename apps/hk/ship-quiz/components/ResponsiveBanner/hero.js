import React from 'react';
import { Heading, Box, Stack, Text, Image, Center, Flex } from '@chakra-ui/react';
import PageContainer from '@containers/pageContainer';
import useImage from '../../useImage';
// Import custom components
import IconContent from './iconSession/iconContent.js';

export default function Index({
    content,
    imageSrcset,
    removeMask,
    children,
    defaultImage,
    objectPosition = 'center top',
    minH = { base: 'lg', md: 'xl' },
    quizResult
}) {
    const { loading, error, image } = useImage(quizResult?.image);
    return (
        <>
            <Box minH={minH} pos={'relative'} zIndex={2} paddingBottom={'4rem'}>
                <Box pos={'relative'} zIndex={3}>
                    <PageContainer>
                        <Box py={8} px={4} maxW={{ base: '100%', md: '50%' }}>
                            <Stack spacing="4">
                                {content.title && (
                                    <Heading
                                        as="h1"
                                        fontSize={{
                                            base: 'var(--text-xl)',
                                            md: 'var(--text-2xl)',
                                        }}
                                        color="#0075BA"
                                        textShadow="0 0 1px rgba(0,0,0, .2)"
                                        mb={4}
                                        dangerouslySetInnerHTML={{ __html: content.title }}
                                    />
                                )}
                                {content.description && (
                                    <Box>
                                        <Stack spacing="4">
                                            {content.description.map((d, i) => (
                                                <Text
                                                    key={i}
                                                    fontSize="var(--text-base)"
                                                    color="#0075BA"
                                                    dangerouslySetInnerHTML={{ __html: d }}
                                                />
                                            ))}
                                        </Stack>
                                    </Box>
                                )}
                                {children && <Box>{children}</Box>}
                                <Center h="100%">
                                    <Box position="relative">
                                        <Image
                                            src={image}
                                            pos={'relative'}
                                            w="90%"
                                            p={4}
                                            maxW={{ base: '280px', md: '380px' }}
                                        />
                                    </Box>
                                </Center>
                                <Flex color='white'>
                                    <Box py='2'>
                                        <Text
                                            fontSize={{
                                                base: 'var(--text-mg)',
                                                md: 'var(--text-lg)',
                                            }}
                                            color="#0075BA"
                                            fontWeight="bold"
                                        >
                                            原來您是
                                        </Text>
                                    </Box>
                                    <Box px='4'>
                                        <Text
                                            fontSize={{
                                                base: 'var(--text-lg)',
                                                md: 'var(--text-xl)',
                                            }}
                                            color="#0075BA"
                                            fontWeight="bold"
                                        >
                                            {quizResult?.value}
                                        </Text>
                                    </Box>
                                </Flex>

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
                                        {quizResult?.title}
                                    </Text>
                                </Box>
                                <Box>
                                    <Text
                                        as="p"
                                        color={'#0075BA'}
                                    >
                                        {quizResult?.content}
                                    </Text>
                                </Box>
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
                                        認識現實中與您匹配的船隊成員
                                    </Text>
                                </Box>
                            </Stack>
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
                        </Box>
                    </PageContainer>
                </Box>

                <Box pos={'absolute'} top={0} right={0} left={0} bottom={0}>
                    <picture>
                        {imageSrcset?.map((item, index) => {
                            return (
                                <source media={item.media} srcSet={item.srcset} key={index} />
                            );
                        })}

                        <Image
                            src={defaultImage}
                            height="100%"
                            width="100%"
                            objectFit="cover"
                            objectPosition={objectPosition}
                        />
                    </picture>
                </Box>

                {!removeMask && (
                    <Box
                        pos={'absolute'}
                        top={0}
                        right={0}
                        left={0}
                        bottom={0}
                        bgColor={'rgba(0,0,0,0.5)'}
                    />
                )}
            </Box>
        </>
    );
}
