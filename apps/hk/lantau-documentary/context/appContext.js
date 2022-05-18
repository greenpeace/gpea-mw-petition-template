import { createContext, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const AppContext = createContext();

export default function ThemeContext({ children }) {
  const [current, setCurrent] = useState(null);
  const router = useRouter();
  const heroSection = useRef(null);
  const visionSection = useRef(null);
  const swiperSection = useRef(null);
  const supportSection = useRef(null);
  const signupSection = useRef(null);

  useEffect(() => {
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
        signupSection
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const AppConsumer = AppContext.Consumer;

export { AppConsumer, AppContext };
