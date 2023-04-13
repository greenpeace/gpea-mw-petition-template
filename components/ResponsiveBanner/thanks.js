import React, {useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Heading, Box, Flex, Text, Image, Stack } from '@chakra-ui/react';
import PageContainer from '@containers/pageContainer';
import SocialButton from '@components/SocialButton/socialButton';

const iconWrapProps = {
	bgColor: '#FFF',
	borderRadius: '50%',
	w: 10,
	h: 10,
	fontSize: '20px'
};

export default function Index({
	content,
	imageSrcset,
	removeMask,
	defaultImage,
	objectPosition = 'center top',
	minH = { base: 'lg', md: 'xl' }
}) {
	const signup = useSelector((state) => state?.signup);
	const [customColor, setCustomColor] = useState('white');
  useEffect(() => {
    console.log(content)
    const html = document.createElement('html');
    html.innerHTML = content.title;
    const spans = html.querySelectorAll('span');
    spans.forEach((span)=>{
      if(span.style.color !== '' && customColor === 'white') setCustomColor(span.style.color);
    });
		console.log(removeMask)
  }, [content])
	return (
		<>
			<Box minH={minH} pos={'relative'} zIndex={2} paddingBottom={'4rem'}>
				<Box pos={'relative'} zIndex={4}>
					<div>
						<span className="custEmail hidden">{signup?.data?.Email}</span>
						<span className="custMobile hidden">
							{signup?.data?.MobilePhone}
						</span>
					</div>
					<PageContainer>
						<Box py={8} px={4} height="100%" maxW={{ base: '100%', md: '50%' }}>
							<Flex
								height="100%"
								direction="column"
								justifyContent="space-between"
							>
								<Stack spacing={4}>
									{content?.title && (
										<Heading
											as="div"
											fontSize={{
												base: 'var(--text-xl)',
												md: 'var(--text-2xl)'
											}}
											color={customColor}
											textShadow="0 0 1px rgba(0,0,0, .2)"
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
									{content.inviteMessage && (
										<Stack direction="row" spacing={6}>
											{content.inviteMessage &&
												content.shareLink.map((d, i) => (
													<Box key={i} {...iconWrapProps}>
														<SocialButton href={d.link}>
															{d.shareComponent}
														</SocialButton>
													</Box>
												))}
										</Stack>
									)}
								</Stack>
							</Flex>
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
