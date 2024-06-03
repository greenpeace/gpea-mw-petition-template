import React, { useEffect } from 'react';
import {
	Box,
} from '@chakra-ui/react';

import { connect } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';

import bg from '../images/robert-class/hero/01e-background-colour.png';

import LoginForm from './LoginForm';

const WRAPPER_CLASSES = 'container px-4 relative mx-auto md:max-w-[1345px]';

function LoginPage({ status, setFormContent, theme, resetSubmitted, signup }) {
	const themeInterests = theme.interests;
	const { submitted } = status;

	const { FirstName } = signup;

	useEffect(() => {
		resetSubmitted();
		window.scrollTo({
			top: 0,
			behavior: 'auto'
		});
	}, []);

	return (
		<Box>
			<div className="relative pb-16">
				<Box
					backgroundImage={{
						base: bg
					}}
					backgroundPosition={'top center'}
					backgroundRepeat="no-repeat"
					backgroundSize={'cover'}
					w={'100%'}
					position="absolute"
					top={0}
					bottom={0}
					backgroundAttachment={'fixed'}
				/>
				<div
					className="container relative mx-auto px-[20px]"
					style={{ zIndex: 11 }}
				>
					<div className="flex flex-col pb-[40px] pt-[140px] md:py-0 md:pt-[80px] lg:pt-[200px]">
						<div className="text-center text-[#FFF]">
							<div>
								<h2
									className="text-3xl font-bold md:text-4xl"
									style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}
								>
									<span className="block">
										請登入以觀看《相識香港野——生態探索及攝影大師班》影片
									</span>
									<span className="text-xl">
										Please log in to enjoy Wow Wild Creatures: Biodiversity
										Exploration and Photography Masterclass
									</span>
								</h2>
							</div>
						</div>
					</div>
				</div>

				<div
					className="container relative mx-auto px-[20px] pb-[40px] pt-[20px] md:max-w-[1345px]"
					style={{ zIndex: 10 }}
				>
					<div className="relative z-10 flex flex-col-reverse gap-8 lg:flex-row">
						<LoginForm />
					</div>
				</div>
			</div>
		</Box>
	);
}

const mapStateToProps = ({ status, theme, form, signup }) => {
	return { status, theme: theme.data, form, signup: signup.data };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setFormContent: (data) => {
			dispatch({ type: formActions.SET_FORM, data });
		},
		resetSubmitted: () => {
			dispatch({ type: signupActions.RESET_SUBMITTED });
			dispatch({ type: statusActions.SET_FORM_SUBMITTED, data: false });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
