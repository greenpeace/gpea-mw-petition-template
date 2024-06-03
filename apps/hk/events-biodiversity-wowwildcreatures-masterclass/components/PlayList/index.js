import React from "react";
import { Box } from "@chakra-ui/react";
import DesktopSwiper from "./desktopSwiper";
import MobileSwiper from "./mobileSwiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const VisionGroup = ({isDetail}) => {
  return (
    <Box>
      <div className="container mx-auto pt-[36px] md:max-w-[100%]">
        <div className="hidden md:block">
          <DesktopSwiper isDetail={isDetail}/>
        </div>

        <div className="block md:hidden">
          <MobileSwiper isDetail={isDetail}/>
        </div>
      </div>
    </Box>
  );
};

export default VisionGroup;
