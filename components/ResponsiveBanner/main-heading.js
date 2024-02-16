import React, {useEffect, useState } from 'react';
import { Heading, Box, Stack, Text, Image } from '@chakra-ui/react';
import PageContainer from '@containers/pageContainer';

export default function Index({
	content,
	imageSrcset,
	defaultImage,
  minH = { base: 'sm', md: 'sm' },
}) {
	const [customColor, setCustomColor] = useState('black');
  useEffect(() => {
    // console.log(content)
    const html = document.createElement('html');
    html.innerHTML = content.title;
    const spans = html.querySelectorAll('span');
    spans.forEach((span)=>{
      if(span.style.color !== '' && customColor === 'black') setCustomColor(span.style.color);
    });
  }, [content])
	return (
		<>
			<Box minH={minH} pos={'relative'} zIndex={2}>
				<Box pos={'relative'} zIndex={3}>
					<PageContainer>
						<Box py={6} px={2} textAlign={'center'}>
							<Stack spacing="4" minH={'220px'} alignItems={'center'} justifyContent={'center'}>
								{content?.title && (
									<Heading
										as="div"
										fontSize={{
											base: '1.7rem',
											md: 'var(--text-xl)'
										}}
										lineHeight={{
											base: '1.3',
											md: '3.4rem'
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
								
							</Stack>
						</Box>

            <Box minH={minH} pos={'relative'} zIndex={2}>
              {defaultImage && (
                <Box position={'absolute'} top={0} right={0} left={0} bottom={0}>
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
                      alt="Background Image"
                    />
                  </picture>
                </Box>
              )}
            </Box>
            
					</PageContainer>
				</Box>

				

				
			</Box>
		</>
	);
}
