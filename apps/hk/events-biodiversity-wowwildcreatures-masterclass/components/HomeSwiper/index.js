import React from "react";
import DesktopSwiper from "./desktopSwiper";
import MobileSwiper from "./mobileSwiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const VisionGroup = () => {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopSwiper />
      </div>

      <div className="block md:hidden">
        <MobileSwiper />
      </div>
    </div>
  );
};

export default VisionGroup;
