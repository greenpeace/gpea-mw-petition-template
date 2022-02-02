import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { usePrevious } from 'common/utils';

function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let currentRef = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );
    if (ref.current) {
      currentRef = ref.current;
      observer.observe(currentRef);
    }
    return () => {
      observer.unobserve(currentRef);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

const LazyShow = ({ children, duration = 1, initial, reTrigger }) => {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);

  const sequence = async () => {
    await controls.start({
      opacity: 0,
      transition: {
        duration: 0,
        ease: 'easeIn',
      },
    });

    return await controls.start({
      opacity: 1,
      transition: {
        duration,
        ease: 'easeIn',
      },
    });
  };

  useEffect(() => {
    if (onScreen) {
      controls.start({
        opacity: 1,
        transition: {
          duration,
          ease: 'easeIn',
        },
      });
    } else {
      controls.start({
        opacity: 0,
        transition: {
          duration,
          ease: 'easeOut',
        },
      });
    }
  }, [onScreen, controls]);

  useEffect(() => {
    sequence();
  }, [reTrigger]);

  return (
    <motion.div
      className="lazy-div"
      ref={rootRef}
      initial={initial}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default LazyShow;
