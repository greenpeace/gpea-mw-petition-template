import { createContext, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const AppContext = createContext();

export default function ThemeContext({ children }) {
  const [current, setCurrent] = useState('main');
  const router = useRouter();
  const heroSection = useRef(null);
  const visionSection = useRef(null);
  const swiperSection = useRef(null);
  const supportSection = useRef(null);
  const signupSection = useRef(null);

  useEffect(() => {
    const { p } = router.query;
    if (p) {
      setCurrent(p);
    }
  }, [router]);

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
