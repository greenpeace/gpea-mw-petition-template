import { Box, Flex, Image, Container, Link } from '@chakra-ui/react';
import React from 'react';

const WithSubnavigation = ({ href }) => {
	const logoChinese =
		'https://www.greenpeace.org/static/planet4-hongkong-stateless/2020/05/aa123dcd-gp-logo-2019-tc-white-web-01.png';

	return (
		<Box
			bgColor={'brand.500'}
			// borderBottom={'1px solid var(--shades-100)'}
			// boxShadow={'var(--shadow-1)'}
			pos={'relative'}
			zIndex={3}
		>
			<Flex py={'12px'} align={'center'}>
				<Container maxW={'1200px'}>
					<Box>
						{href ? (
							<Link href={href} isExternal="true">
								<Image
									src={logoChinese}
									maxW="220px"
									padding="2px"
									alt={'Greenpeace 綠色和平'}
								/>
							</Link>
						) : (
							<Image
								src={logoChinese}
								maxW="220px"
								padding="2px"
								alt={'Greenpeace 綠色和平'}
							/>
						)}
					</Box>
				</Container>
			</Flex>
		</Box>
	);
};

export default WithSubnavigation;
