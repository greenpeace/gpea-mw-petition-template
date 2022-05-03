import React from 'react';
import { Image, Button } from '@chakra-ui/react';
import useScrollPosition from './useScrollPosition';
import logoChinese from '@common/images/logo/GP-logo-2019-TC-white-[web]-01.png';

const Header = ({handleMenuClick, MENU}) => {
  const OFFSET = 10;
  const scrollPosition = useScrollPosition();
  const stickyStyle = {
    wrap: scrollPosition > OFFSET ? 'bg-[#66CC00]' : '',
    border: scrollPosition > OFFSET ? '' : 'border-b-[2px]',
  };
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
            <Image src={logoChinese} maxW="220px" alt={'Greenpeace 綠色和平'} />
          </div>
          <div>
            <div className="flex flex-row items-center gap-8">
              {(MENU||[]).map((d) => (
                <div
                  className="cursor-pointer text-[16px] font-[500] text-[#FFF] hover:text-[#d2d2d2] hidden md:block"
                  key={d.label}
                  onClick={() => {
                    handleMenuClick(d.ref)
                  }}
                >
                  {d.label}
                </div>
              ))}
              <div
                  className="cursor-pointer text-[16px] font-[500] text-[#FFF] hover:text-[#d2d2d2] hidden md:block"
                >
                  立即聯署
                </div>
              <Button
                color="white"
                bgColor={'orange.500'}
                _hover={{ bg: 'orange.300' }}
              >
                立即支持
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
