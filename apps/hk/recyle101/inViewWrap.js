import React, { useRef, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

function Component({ setMobileFormInView, children }) {
  const ref = useRef();
  const [inViewRef, inView] = useInView({
    threshold: 1,
  });

  // useEffect(() => {
  //   // setMobileFormInView(inView);
  // }, [inView]);

  console.log('inView-', inView);

  // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop
  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef],
  );

  return <div ref={setRefs}>{children}</div>;
}

export default Component;
