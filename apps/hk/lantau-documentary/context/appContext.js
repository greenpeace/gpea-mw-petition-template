import { createContext, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import * as themeActions from 'store/actions/action-types/theme-actions';

const AppContext = createContext();

function ThemeContext({ children, showGlobalHeader }) {
  const [current, setCurrent] = useState(null);
  const [videoSectionMocked, setVideoSectionMocked] = useState(false);
  const router = useRouter();
  const videoSection = useRef(null);
  const heroSection = useRef(null);
  const visionSection = useRef(null);
  const swiperSection = useRef(null);
  const supportSection = useRef(null);
  const signupSection = useRef(null);
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    showGlobalHeader(false);
    if(router.isReady){
      const { p } = router.query;
      if (p) {
        setCurrent(p);
      } else {
        setCurrent('main')
      }      
    }
  }, [router.isReady, router.query]);
  
  return (
    <AppContext.Provider
      value={{
        page: current,
        heroSection,
        visionSection,
        swiperSection,
        supportSection,
        signupSection,
        videoSection,
        videoSectionMocked,
        setVideoSectionMocked,
        heroSectionInView: inView,
        heroSectionInViewTrigger: ref
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    showGlobalHeader: (data) => {
      dispatch({ type: themeActions.SET_SHOW_GLOBAL_HEADER, data });
    },
  };
};

export default connect(null, mapDispatchToProps)(ThemeContext);

const AppConsumer = AppContext.Consumer;

export { AppConsumer, AppContext };
