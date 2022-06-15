import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import {
  useViewportScroll,
  motion,
  useTransform,
} from 'framer-motion';
const AnimationBox = ({ children, refInView }) => {
  const { scrollY, scrollYProgress } = useViewportScroll();

  const y = useTransform(scrollY, [0, 400], [0, 0]);
  const yDesktop = useTransform(scrollY, [0, 200], [0, 50]);
  const opacity = useTransform(scrollYProgress, (value) => 1 - value * 2);
  const scale = useTransform(scrollYProgress, (value) => 1 - value * 0.75);
  const scaleDesktop = useTransform(scrollYProgress, (value) => 1 - value * 1.25);

  return (
    <div>
      <Box d={{base: 'block', md: 'none'}}>
      {!refInView && (
          <motion.div
            className="box"
            style={{ y: y, opacity: opacity, scale: scale}}
          >
            {children}
          </motion.div>
        )}
      </Box>
      <Box d={{base: 'none', md: 'block'}}>
      {!refInView && (
          <motion.div
            className="box"
            style={{ y: yDesktop, opacity: opacity, scale: scaleDesktop}}
          >
            {children}
          </motion.div>
        )}
      </Box>
      
    </div>
  );
};

export default AnimationBox;
