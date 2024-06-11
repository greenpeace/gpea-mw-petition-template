import React, { Component, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { Box } from "@chakra-ui/react";

import slide01Image from "../../images/robert-class/list/carousel/carousel_1.jpg";
import slide02Image from "../../images/robert-class/list/carousel/carousel_2.jpg";
import slide03Image from "../../images/robert-class/list/carousel/carousel_3.jpg";
import slide04Image from "../../images/robert-class/list/carousel/carousel_4.jpg";
import slide05Image from "../../images/robert-class/list/carousel/carousel_5.jpg";
import slide06Image from "../../images/robert-class/list/carousel/carousel_6.jpg";
import slide07Image from "../../images/robert-class/list/carousel/carousel_7.jpg";
import slide08Image from "../../images/robert-class/list/carousel/carousel_8.jpg";
const GeneralCarousel = () => {
  const SLIDES = [
    {
      key: 0,
      image: slide01Image
    },
    {
      key: 1,
      image:slide02Image,
    },
    {
      key: 2,
      image: slide03Image,
    },
    {
      key: 3,
      image: slide04Image,
    },
    {
      key: 4,
      image: slide05Image,
    },
    {
      key: 5,
      image: slide06Image,
    },
    {
      key: 6,
      image: slide07Image,
    },
    {
      key: 7,
      image: slide08Image,
    }
  ];

  const mainCarousel = useRef(null);
  return (
    <div className="w-full  overflow-hidden">
      <Carousel
        ref={mainCarousel}
        showThumbs={false}
        showIndicators={false}
        showArrows={true}
        infiniteLoop={true}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        swipeable={true}
        autoPlay={true}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <BsArrowLeftCircleFill className="w-9 h-9 text-white" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <BsArrowRightCircleFill className="w-9 h-9 text-white" />
            </div>
          );
        }}
      >
        {SLIDES.map((slide) => (
          <Box
            key={slide.key}
            className="aspect-[1.41/1]"
            backgroundImage={slide.image}
            bgSize={"cover"}
            bgPosition={"center"}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default GeneralCarousel;
