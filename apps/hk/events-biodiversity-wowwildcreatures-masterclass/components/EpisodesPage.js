import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
	Box,
	Center,
	Image,
	Text,
	Heading,
	UnorderedList,
	ListItem,
	AspectRatio
} from '@chakra-ui/react';
import NextImage from 'next/image';
// import SignupForm from '@components/GP/WebinarForm';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import formContent from '../form';
import * as formActions from 'store/actions/action-types/form-actions';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';
import { useGlobalContext } from '../context/global';
import {
	headingProps,
	paragraphProps
} from '@common/styles/components/contentStyle';
import RobertClassHero from './RobertClassHero';
import hero from '../images/robert-class/hero.webp';
import table from '../images/robert-class/list/06_non_donor_incentive_tier_t.png';
import thanks from '../images/robert-class/thanks/08_thank_you_with_hk_animals.png';
import DonationModule from '@components/GP/DonationModule';

import { scrollToRef } from '../util';
import { VideoProvider } from '../context/video';
import Episodes from './Episodes';
import EpisodeContent from './Episodes/content';
import Downloads from './Downloads';
const WRAPPER_CLASSES = 'container px-4 relative mx-auto md:max-w-[1345px]';

function EpisodesPage({
	status,
	setFormContent,
	theme,
	resetSubmitted,
	signup
}) {
	const WRAPPER_CLASSES = 'container px-4 relative mx-auto md:max-w-[1345px]';
	const router = useRouter();
	const themeInterests = theme.interests;
	const value = useGlobalContext();
	const downloadsRef = useRef(null);
	const { p, ep, s } = router.query;
	const { submitted } = status;

	const { FirstName } = signup;

	useEffect(() => {
		setFormContent(formContent);
		resetSubmitted();
		window.scrollTo({
			top: 0,
			behavior: 'auto'
		});
	}, []);

	useEffect(() => {
		console.log('submitted', submitted);
		window.__greenpeace__ = window.__greenpeace__ || {};
		if (window.__greenpeace__?.renderDonationModule && submitted) {
			window.__greenpeace__.renderDonationModule();
		}
	}, [submitted]);

	useEffect(() => {
		const REFS = {
			downloads: downloadsRef
		};

		if (!!s) {
			const ref = s
			if (ref) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				scrollToRef(REFS[ref]);
			}
		}
	}, [value, s]);

	const RenderForm = useCallback(() => {
		return value.isLoggedIn ? (
			<DonationModule
				market={'HK'}
				language={'zh_HK'}
				campaign={'elm_infopage'}
				campaignId={'7012u000000OtKJAA0'}
				env={'production'}
			/>
		) : (
			<DonationModule
				market={'HK'}
				language={'zh_HK'}
				campaign={'elm_infopage'}
				campaignId={'7012u000000OtKJAA0'}
				env={'production'}
			/>
		);
	}, [value.isLoggedIn]);

	return (
		<Box>
			<div className="relative pb-[60px]">
				<VideoProvider>
					<Episodes />

					{/* <div className="bg-[#FFF]" style={{ zIndex: 10 }}>
						<div className="relative z-10 flex flex-col-reverse gap-8 bg-[#FFF]  lg:flex-row">
							<div className="relative mx-auto w-[100%] flex-1 md:max-w-[1345px]">
								<div
									className={`${WRAPPER_CLASSES} mt-[30px] flex flex-col gap-24`}
									style={{ zIndex: 10 }}
								>
								
									<EpisodeContent />
								

									<div className="relative z-10 flex flex-col-reverse gap-8 lg:flex-row">
										<div className="relative w-[100%] flex-1">
											<Image
												src={`/robert-class/list/${
													!value.isRGUser
														? '06_non_donor_incentive_tier_t.png'
														: '06_donor_incentive_tier_t.png'
												}`}
												alt="06_donor_incentive_tier_t"
											/>
										</div>
										<div className="relative w-[100%] flex-1">
											<Box
												className="md:sticky md:top-[70px]"
												maxW="500px"
												mx="auto"
												bgColor="white"
												borderRadius={8}
												boxShadow="lg"
												overflow="hidden"
												minH={600}
											>
												<RenderForm />
											</Box>
										</div>
									</div>

				

									<div
										className={`relative w-full text-center`}
										ref={downloadsRef}
									>
										<Downloads />
									</div>


									<div className="relative mx-auto max-w-[640px] overflow-hidden">
										<NextImage
											alt={'main-01'}
											src={'/robert-class/logo-animals.webp'}
											width={0}
											height={0}
											sizes="100vw"
											style={{ width: '100%', height: 'auto' }}
										></NextImage>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</VideoProvider>
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

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesPage);
