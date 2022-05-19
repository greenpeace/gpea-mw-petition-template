import React, {useContext} from 'react';
import { AppContext } from "../../context/appContext";
import { Image, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useScrollPosition from './useScrollPosition';
import logoChinese from '@common/images/logo/GP-logo-2019-TC-white-[web]-01.png';

const Header = () => {
  const data = useContext(AppContext)
  const router = useRouter();
  const OFFSET = 10;
  const scrollPosition = useScrollPosition();
  const stickyStyle = {
    wrap: scrollPosition > OFFSET ? 'bg-[#66CC00]' : '',
    border: scrollPosition > OFFSET ? '' : 'border-b-[1px]',
  };
  const handleMenuOnClick = (main, link, refName, page) => {
    // let url = new URL(window.location);
    // console.log('params-',url)
    // history.pushState({}, null, `${url.origin}/?p=${page}&s=${refName}`)
    router.push(`${router.basePath}/?p=${page}&s=${refName}`, undefined, { shallow: true });
  };

  const {heroSection, visionSection, swiperSection, supportSection, signupSection} = data;

  const MENU = [
    {
      label: '紀錄片介紹',
      page: 'main',
      refName: 'heroSection',
      ref: heroSection,
    },
    {
      label: '我們的理念',
      page: 'main',
      refName: 'visionSection',
      ref: visionSection,
    },
    {
      label: '大嶼有我',
      page: 'main',
      refName: 'swiperSection',
      ref: swiperSection,
    },
    {
      label: '細看大嶼',
      page: 'main',
      refName: 'supportSection',
      ref: supportSection,
    },
    {
      label: '立即聯署',
      page: 'main',
      refName: 'signupSection',
      ref: signupSection,
    },
  ];

  return (
    <div
      className={`px-4 fixed top-0 ${stickyStyle.wrap} w-full transition-all duration-500`}
      style={{ zIndex: 99 }}
    >
      <div
        className={`${stickyStyle.border} md:max-w-[1345px] mx-auto left-0 right-0`}
      >
        <div className="flex flex-row space-x-0 items-center h-[64px]">
          <div className="flex-1">
            <Image
              src={logoChinese}
              maxW="220px"
              alt={'Greenpeace 綠色和平'}
              onClick={() => {
                router.push(`?p=main`, undefined, { shallow: true });
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
              cursor={'pointer'}
            />
          </div>
          <div>
            <div className="flex flex-row items-center gap-8">
              {(MENU || []).map((d) => (
                <div
                  className="cursor-pointer text-[16px] font-[400] text-[#FFF] hover:font-[700] hidden lg:block"
                  key={d.label}
                  onClick={() => {
                    handleMenuOnClick(d.value, d.label, d.refName, d.page);
                  }}
                >
                  {d.label}
                </div>
              ))}
              <Button
                color="white"
                bgColor={'orange.500'}
                _hover={{ bg: 'orange.300' }}
                onClick={() =>
                  router.push(`/?p=donation`, undefined, { shallow: true })
                }
              >
                捐款收看
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
