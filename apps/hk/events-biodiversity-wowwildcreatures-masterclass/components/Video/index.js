import { useVideoContext } from '../../context/video';
import React, { useEffect, useRef } from 'react';
import { AspectRatio } from '@chakra-ui/react';

import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

import { fill } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';
import { Gravity } from '@cloudinary/url-gen/qualifiers';
import { AutoFocus } from '@cloudinary/url-gen/qualifiers/autoFocus';

const Video = () => {
	const value = useVideoContext();

	const cld = new Cloudinary({
		cloud: {
			cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
		}
	});

	const { selectedEp } = value;
	const videoRef = useRef(null);

	const myVideo = cld.video(
		'RobertMasterClass/Video/ep0_trailer_20240602_NEW_f1tvis'
	);
	return (
		<AspectRatio ratio={16 / 9}>
			<AdvancedVideo cldVid={myVideo} controls />
		</AspectRatio>
	);
};

export default Video;
