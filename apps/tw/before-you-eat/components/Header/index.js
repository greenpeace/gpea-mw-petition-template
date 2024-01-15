import { Box, Flex, Image, Container, Link, Button } from '@chakra-ui/react';
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
						<Link
							href="https://cloud.greentw.greenpeace.org/petition-oceans-beforeyoueat"
							isExternal
						>
							<Image
								src={logoChinese}
								maxW="220px"
								padding="2px"
								alt={'Greenpeace 綠色和平'}
							/>
						</Link>
					</Box>
				</Container>
				<Container>
					<Flex w="100%" align="center" justify="right">
						<div
							className="mr-8 hidden cursor-pointer text-[16px] text-[#FFF] hover:font-bold lg:block"
							key="紀錄片介紹"
							onClick={() => {
								window.open(
									`https://cloud.greentw.greenpeace.org/petition-oceans-beforeyoueat`,
									'_blank'
								);
							}}
						>
							紀錄片介紹
						</div>
						<div
							className="mr-8 hidden cursor-pointer text-[16px] text-[#FFF] hover:font-bold lg:block"
							key="索取密碼"
							onClick={() => {
								window.open(
									`https://cloud.greentw.greenpeace.org/petition-oceans-beforeyoueat`,
									'_blank'
								);
							}}
						>
							索取密碼
						</div>
						<Button
							color="white"
							bgColor={'orange.500'}
							_hover={{ bg: 'orange.300' }}
							onClick={() =>
								window.open(
									`https://cloud.greentw.greenpeace.org/donation-cwf-seafood-handbook`,
									'_blank'
								)
							}
						>
							捐款支持
						</Button>
					</Flex>
				</Container>
			</Flex>
		</Box>
	);
};

export default WithSubnavigation;
