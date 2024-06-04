import React, { useRef, useState } from "react";
import { Box, Icon, Center } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import CONTENT from "./swiperData";
import { Mousewheel, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const DesktopSwiper = () => {
  const swiperRef = useRef(null);
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <div>
      <Swiper
        freeMode={true}
        slidesPerView={"auto"}
        centeredSlides={false}
        keyboard={true}
        spaceBetween={20}
        className="mySwiper"
        ref={swiperRef}
        mousewheel={{ forceToAxis: true }}
        modules={[Mousewheel, Scrollbar]}
        onSlideChange={(data) => setSwiperIndex(data.activeIndex)}
        preventInteractionOnTransition={true}
        scrollbar={{ el: ".swiper-scrollbar", hide: false, draggable: true }}
      >
        {(CONTENT || []).map((d, i) => {
          if (d.type === "group") {
            return (
              <SwiperSlide key={`${d.title}-${i}`} style={{ width: "530px" }}>
                <div className="flex flex-col gap-[30px]">
                  {d.items.map((item, i) => (
                    <div
                      className={`relative h-[250px] w-full max-w-[100%] overflow-hidden rounded-[20px] shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl`}
                      key={`${item}-${i}`}
                    >
                      <Box
                        backgroundImage={item?.url}
                        backgroundRepeat="no-repeat"
                        backgroundSize={"cover"}
                        backgroundPosition={"center center"}
                        pos={"absolute"}
                        top={0}
                        bottom={0}
                        w={"full"}
                      >
                        <div className="absolute left-4 top-4 z-10">
                          <p className="text-[24px]  text-[#FFF]">
                            {item.name}
                          </p>
                          <p className="text-[16px] text-[#FFF]">{item.role}</p>
                        </div>

                        <div className="absolute left-6 right-6 bottom-6 z-10">
                          <p className="text-[#FFF]">{item.content}</p>
                        </div>
                      </Box>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            );
          }

          return (
            <SwiperSlide
              key={`${d.title}-${i}`}
              style={{ width: d.width === "full" ? "480px" : "360px", padding: "10px 0" }}
            >
              <div
                className={`relative w-full ${
                  d.height === "full" ? "h-[530px]" : "h-[320px]"
                }  max-w-[100%] overflow-hidden rounded-[20px] shadow-md transition-shadow duration-300 ease-in-out`}
              >
                <Box
                  backgroundImage={d?.url}
                  backgroundRepeat="no-repeat"
                  backgroundSize={"cover"}
                  backgroundPosition={"center center"}
                  pos={"absolute"}
                  top={0}
                  bottom={0}
                  w={"full"}
                >
                  <div className="absolute left-4 top-4 z-10">
                    <p className="text-[20px] font-bold text-[#FFF]">
                      {d.name}
                    </p>
                    <p className="text-[16px] text-[#FFF]">{d.role}</p>
                  </div>

                  <div className="absolute left-6 right-6 bottom-6 z-10">
                    <p className="text-[#FFF]">{d.content}</p>
                  </div>
                </Box>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="mx-2 mt-[30px] w-fit flex flex-row items-center gap-4 md:mx-auto justify-center">
        <div className="flex-1">
          <div className="swiper-scrollbar h-[12px]"></div>
        </div>
        <div className="px-4">
          <div className="flex flex-row gap-4">
            <div
              id="previousButton"
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className={"h-[40px] w-[40px] cursor-pointer rounded-lg"}
            >
              <Center h={"100%"}>
                <Icon as={RiArrowLeftLine} w={6} h={6} />
              </Center>
            </div>
            <div
              id="nextButton"
              onClick={() => swiperRef.current.swiper.slideNext()}
              className={"h-[40px] w-[40px] cursor-pointer rounded-lg"}
            >
              <Center h={"100%"}>
                <Icon as={RiArrowRightLine} w={6} h={6} />
              </Center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSwiper;
