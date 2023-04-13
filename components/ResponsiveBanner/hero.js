import React, {useEffect, useState } from 'react';
import { Heading, Box, Stack, Text, Image } from '@chakra-ui/react';
import PageContainer from '@containers/pageContainer';

export default function Index({
	content,
	imageSrcset,
	removeMask,
	children,
	defaultImage,
	objectPosition = 'center top',
	minH = { base: 'lg', md: 'xl' }
}) {
	const [customColor, setCustomColor] = useState('white');
  useEffect(() => {
    console.log(content)
    const html = document.createElement('html');
    html.innerHTML = content.title;
    const spans = html.querySelectorAll('span');
    spans.forEach((span)=>{
      if(span.style.color !== '' && customColor === 'white') setCustomColor(span.style.color);
    });
  }, [content])
	return (
		<>
			<Box minH={minH} pos={'relative'} zIndex={2} paddingBottom={'4rem'}>
				<Box pos={'relative'} zIndex={3}>
					<PageContainer>
						<Box py={8} px={4} maxW={{ base: '100%', md: '50%' }}>
							<Stack spacing="4">
								{content?.title && (
									<Heading
										as="div"
										fontSize={{
											base: 'var(--text-xl)',
											md: 'var(--text-2xl)'
										}}
										color={customColor}
										textShadow="0 0 1px rgba(0,0,0, .2)"
										mb={4}
									>
										<span
											dangerouslySetInnerHTML={{ __html: content?.title }}
										/>
									</Heading>
								)}
								{content?.description && (
									<Stack spacing="4">
										<Text fontSize="var(--text-base)" color="white">
											<span
												dangerouslySetInnerHTML={{
													__html: content?.description
												}}
											/>
										</Text>
									</Stack>
								)}
								{children && <Box>{children}</Box>}
							</Stack>
						</Box>
					</PageContainer>
				</Box>

				{defaultImage && (
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
								alt="Background Image"
							/>
						</picture>
					</Box>
				)}

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
