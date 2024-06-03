import React, { useEffect, useState, useRef } from 'react';
import { useGlobalContext } from '../../context/global';
import { useRouter } from 'next/router';

import {
	FormControl,
	Button,
	Box,
	Stack,
	Input,
	FormLabel
} from '@chakra-ui/react';

import { OrangeCTA } from '@common/styles/components/formStyle';
import PASS_CODE from '../../passcode.json';
import { useForm } from 'react-hook-form';

const LoinForm = (props) => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const value = useGlobalContext();
	const { passcode } = router.query;

	const passCode = passcode;

	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors, values }
	} = useForm({
		mode: 'onSubmit'
	});

	useEffect(() => {
		const memberType = value.userType();

		if (memberType !== 'guest') {
			router.push(`/?p=main`, `${window.location.href.split('?')[0]}/?p=main`, {
				shallow: true
			});
			return;
		}
	}, [value, router]);

	useEffect(() => {
		if (!router || !value || !passCode) {
			return;
		}

		if (passCode) {
			const loginResult = value.handleLogin(passCode);
			if (loginResult) {
				if (typeof window !== 'undefined' && window.localStorage) {
					// router.push("/episodes");
					router.push(
						`/?p=main`,
						`${window.location.href.split('?')[0]}/?p=main`,
						{
							shallow: true
						}
					);
					localStorage.setItem('gpea-project-passCode', passCode);
					localStorage.setItem('gpea-project', 'loggedIn');
				}
			} else {
				setError('Password', { type: 'custom', message: 'Invalid Password' });
			}
		}
	}, [router, value, passCode, setError]);

	const handleLinkClick = () => {
		router.push(
			`/?p=main`,
			`${window.location.href.split('?')[0]}/?p=main&s=signupSection`,
			{
				shallow: true
			}
		);
	};

	const onSubmit = async (data) => {
		const loginResult = await value.handleLogin(data.Password);

		if (loginResult) {
            router.push(
                `/?p=main`,
                `${window.location.href.split('?')[0]}/?p=main&s=signupSection`,
                {
                    shallow: true
                }
            );
			localStorage.setItem('gpea-project-passCode', data.Password);
			localStorage.setItem('gpea-project', 'loggedIn');
		} else {
			setError('Password', { type: 'custom', message: 'Invalid Password' });
		}
	};

	const btnRef = useRef(null);

	return (
		<Box
			pos={'relative'}
			bgColor={'#FFF'}
			mx="auto"
			w={'100%'}
			maxW={'md'}
			borderRadius={'xl'}
		>
			{loading && (
				<Box
					pos={'absolute'}
					top={0}
					right={0}
					left={0}
					bottom={0}
					bgColor={'rgba(255, 255, 255, 0.25)'}
					zIndex={9}
				/>
			)}
			<Box py={{ base: 4 }} px={{ base: 4 }}>
				<Stack spacing="4">
					<form onSubmit={handleSubmit(onSubmit)}>
						<Stack spacing="4">
							<Box flex={1}>
								<FormControl id="Password" isInvalid={!!errors?.Password}>
									<FormLabel fontSize={'sm'}>密碼 Password</FormLabel>
									<Input
										type="text"
										{...register('Password', {
											required: errors?.Password
										})}
										placeholder="請輸入密碼 Please enter your password"
									/>
								</FormControl>
							</Box>

							<Box>
								<Button
									{...OrangeCTA}
									isLoading={loading}
									type={'submit'}
									ref={btnRef}
								>
									登入 Log in
								</Button>
							</Box>
						</Stack>
					</form>
					{errors?.Password && (
						<Box color={'red.500'} fontSize={'sm'} pb={2}>
							錯誤的密碼 Wrong password, please check your password again.
						</Box>
					)}
				</Stack>
				<hr class="border-1" className="my-4 h-[4px]" />
				<div className="flex flex-col gap-4">
					<h2 className="text-sm">
						<span className="block pb-2">
							如沒有觀看密碼，請先
							<span
								className="cursor-pointer underline"
								onClick={handleLinkClick}
							>
								登記
							</span>
							以報名參與《相識香港野——生態探索及攝影大師班》。
						</span>
						<span className="text-sm">
							If you do not have a password, please{' '}
							<span
								className="cursor-pointer underline"
								onClick={handleLinkClick}
							>
								sign up
							</span>{' '}
							first to enjoy Wow Wild Creatures: Biodiversity Exploration and
							Photography Masterclass.
						</span>
					</h2>
				</div>
			</Box>
		</Box>
	);
};

export default LoinForm;
