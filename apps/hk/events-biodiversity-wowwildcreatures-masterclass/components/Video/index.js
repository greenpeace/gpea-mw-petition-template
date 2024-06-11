import { useVideoContext } from '../../context/video';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import {useMediaQuery} from '@chakra-ui/react';

const Video = ({ defaultEp }) => {
	const value = useVideoContext();
	const router = useRouter();
	const urlParams = new URLSearchParams(router.asPath);
	const [videoURL, setVideoURL] = useState(null);

	const [isLargerThan960] = useMediaQuery('(min-width: 960px)', {
		ssr: true,
		fallback: false, // return false on the server, and re-evaluate on the client side
	  })

	const cld = new Cloudinary({
		cloud: {
			cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
		}
	});

	useEffect(() => {
		let video = '';
		if (defaultEp) {
			video = defaultEp;
		} else if (urlParams.get('ep')) {
			const selectedEP = value.EPISODES.find(
				(episode) => episode.ep === parseInt(urlParams.get('ep'))
			);
			video = selectedEP.url;
		} else {
			video = value.selectedEp.url;
		}

		setVideoURL(video);
	}, [urlParams]);

	const myVideo = cld.video(videoURL);
	return (
		<AdvancedVideo
			cldVid={myVideo}
			controls
			autoPlay={defaultEp ? false : true}
			poster={value.selectedEp.banner}
			webkit-playsinline
			playsinline
			style={{
				width: '100%',
				height: 'auto',
				backgroundColor: '#000',
			}}
		/>
	);
};

export default Video;
