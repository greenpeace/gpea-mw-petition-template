import React from 'react';
import {
    useAnimation,
    useViewportScroll,
    motion,
    useTransform,
  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const AnimationBox = ({ children }) => {
    const { scrollY, scrollYProgress } = useViewportScroll();

    const y = useTransform(scrollY, [0, 400], [0, -200]);
    const opacity = useTransform(scrollYProgress, (value) => 1 - value * 30);
    const scale = useTransform(scrollYProgress, (value) => 1 - value * 10);
    // const control = useAnimation();
    const [ref, inView] = useInView({
      /* Optional options */
      threshold: 0.5,
      triggerOnce: false
    });

    console.log('trigger')

    return (
      <div>
        <div className="absolute top-[100px] md:top-[180px]" ref={ref}></div> {/** InView point */}
        {inView && <motion.div
          className="box"
          style={{ y: y, opacity: opacity, scale: scale}}
        >
          {children}
        </motion.div>}
      </div>
    );
  };

export default AnimationBox;
