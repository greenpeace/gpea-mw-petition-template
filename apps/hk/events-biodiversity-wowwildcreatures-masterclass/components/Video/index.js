import { useVideoContext } from '../../context/video';
import React, { useEffect, useRef, useState } from 'react';
import { AspectRatio } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

const Video = ({ defaultEp }) => {
	const value = useVideoContext();
	const router = useRouter();
	const urlParams = new URLSearchParams(router.asPath);
	const [videoURL, setVideoURL] = useState(null);

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
		<AspectRatio ratio={16 / 9}>
			<AdvancedVideo
				cldVid={myVideo}
				controls
				autoPlay={defaultEp ? false : true}
				poster={value.selectedEp.banner}
			/>
		</AspectRatio>
	);
};

export default Video;
