import React, { useCallback } from 'react';

import { useVideoContext } from '../../context/video';
import { useGlobalContext } from '../../context/global';
import { Image, Box } from '@chakra-ui/react';
import GeneralCarousel from '../GeneralCarousel';
import robertIntro from '../../images/robert-class/robert-intro.webp';
import { useRouter } from 'next/router';
export default function EpisodeContent() {
	const value = useGlobalContext();
	const videoValue = useVideoContext();
	const router = useRouter();
	const urlParams = new URLSearchParams(router.asPath);
	const selectedEp = videoValue.EPISODES.find(
		(episode) => episode.ep === parseInt(urlParams.get('ep'))
	);

	const EPContent = useCallback(() => {
		return (
			<div className={`container relative mx-auto px-4 md:max-w-[1200px]`}>
				<div className="flex flex-col items-center md:flex-row">
					<div className="flex w-full md:w-1/2">
						<div className="relative overflow-hidden">
							<Image
								alt={'robertIntro'}
								src={robertIntro}
								w={'full'}
								h={'auto'}
							></Image>
						</div>
					</div>
					<div className="flex w-full flex-col gap-4 md:w-1/2">
						<h1 className="text-2xl font-bold text-[#007c00] md:text-3xl">
							{selectedEp?.name}
						</h1>
						<p>{selectedEp?.content}</p>
						{selectedEp?.message && (
							<p>
								{selectedEp?.message[value.isRGUser ? 'donor' : 'non-donor']}
							</p>
						)}
					</div>
				</div>
			</div>
		);
	}, [value, videoValue, urlParams]);

	if (value.isRGUser) {
		return (
			<>
				<EPContent />
				<div className="relative z-10 flex flex-col-reverse gap-8 lg:flex-row">
					<div className="relative w-[100%] flex-1">
						<div className="flex w-full flex-col gap-4">
							<h1 className="text-2xl font-bold text-[#007c00] md:text-3xl">
								齊心守護香港「野」，延續自然之美
							</h1>
							<p className="">
								多謝您多行一步，參與由綠色和平與生態攝影師 Robert Ferguson
								合辦的生態探索及攝影大師班。
								希望這些畫面能讓您感受到香港「野」的獨特韻味和生命力。
							</p>

							<p>
								然而，您是否意識到，香港「野」正面臨多重威脅？隨着郊野因所謂的績效而盲目發展、環境被持續污染，以及人類活動，許多本土野生動植物正面臨巨大的生存威脅。這些獨特的香港自然景觀並非永恆不變，它們正遭受以上各種的挑戰；倘若我們不採取措施加以保護，這些珍貴而獨特的自然風貌一旦消逝，將永遠無法挽回。
							</p>
							<p>
								除了本地的生態保育工作外，在國際層面上我們亦致力於敦促各國政府履行他們在《昆明-蒙特利爾生物多樣性框架》下的承諾，停止並扭轉自然環境的損失。
							</p>

							<h1 className="text-2xl font-bold text-[#007c00] md:text-3xl">
								我們急需您的援手，共同守護這些寶貴的自然生態
							</h1>
							<p>
								您的慷慨捐助將支持我們開展更多本土生態保護項目，推動生態教育的普及，並協助綠色和平積極推動政策倡議，共同為香港「野」發聲。
							</p>
							<p>
								每一分捐贈都是至關重要的支持，您的善款將直接用於保護香港的自然環境，確保香港「野」的景緻得以延續。懇請您與我們攜手，以實際行動守護我們深愛的自然家園。
							</p>
						</div>
					</div>
					<div className="relative w-[100%] flex-1 rounded-md text-center">
						<GeneralCarousel />
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<EPContent />
			<div className="relative z-10 flex flex-col-reverse gap-8 lg:flex-row">
				<div className="relative w-[100%] flex-1">
					<div className="flex w-full flex-col gap-4">
						<h1 className="text-2xl font-bold text-[#007c00] md:text-3xl">
							齊心守護香港「野」，延續自然之美
						</h1>
						<p className="">
							多謝您踏出第一步，參與由綠色和平與生態攝影師 Robert Ferguson
							合辦的生態探索及攝影大師班。
							希望這些畫面能夠讓您感受到香港「野」的獨特韻味和生命力。
						</p>

						<p>
							然而，您是否意識到，香港「野」正面臨多重威脅？隨着郊野因所謂的 KPI
							而盲目發展、環境的持續污染，以及人類活動的頻繁干擾，許多本土野生動植物正面臨巨大的生存威脅。這些獨特的香港自然景觀並非永恆不變，它們正遭受以上各種的挑戰；倘若我們不採取措施加以保護，這些珍貴而獨特的自然風貌一旦消逝，將永遠無法挽回。
						</p>
						<p>
							除了本地的生態保育工作外，在國際層面上我們亦致力於敦促各國政府履行他們在《昆明-蒙特利爾生物多樣性框架》下的承諾，停止並扭轉自然環境的損失。
						</p>

						<h1 className="text-2xl font-bold text-[#007c00] md:text-3xl">
							我們急需您的援手，共同守護這些寶貴的自然生態
						</h1>
						<p>
							您的慷慨捐助將支持我們開展更多本土生態保護項目，推動生態教育的普及，並協助綠色和平積極推動政策倡議，共同為香港「野」發聲。
						</p>
						<p>
							每一分捐贈都是至關重要的支持，您的善款將直接用於保護香港的自然環境，確保香港「野」的景緻得以延續。懇請您與我們攜手，以實際行動守護我們深愛的自然家園。
						</p>
					</div>
				</div>
				<div className="relative w-[100%] flex-1 rounded-md text-center">
					<GeneralCarousel />
				</div>
			</div>
		</>
	);
}
