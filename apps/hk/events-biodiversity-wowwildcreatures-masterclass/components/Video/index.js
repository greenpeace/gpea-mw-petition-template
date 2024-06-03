import { useVideoContext } from "../../context/video";
import React, { useRef, useEffect } from "react";
import { AspectRatio } from "@chakra-ui/react";
import { CldVideoPlayer, getCldVideoUrl } from "next-cloudinary";
const Video = () => {
  const value = useVideoContext();
  const { selectedEp } = value;
  const videoRef = useRef(null);
  const selectedVideo = getCldVideoUrl({
    src: selectedEp?.url,
    width: 1620,
    height: 1080,
    aspectRatio: "16:9",
  });

  return (
    <AspectRatio w="100%" ratio={16 / 9}>
      <CldVideoPlayer
        width="1920"
        height="720"
        src={selectedVideo}
        autoplay={false}
        videoRef={videoRef}
        fluid={true}
      />
    </AspectRatio>
  );
};

export default Video;
