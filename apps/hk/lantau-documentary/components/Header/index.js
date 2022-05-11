import React from 'react';
import { Image, Button } from '@chakra-ui/react';
import useScrollPosition from './useScrollPosition';
import { useRouter } from 'next/router';
import logoChinese from '@common/images/logo/GP-logo-2019-TC-white-[web]-01.png';

const Header = ({handleShowDonate, MENU}) => {
  const router = useRouter()
  const OFFSET = 10;
  const scrollPosition = useScrollPosition();
  const stickyStyle = {
    wrap: scrollPosition > OFFSET ? 'bg-[#66CC00]' : '',
    border: scrollPosition > OFFSET ? '' : 'border-b-[2px]',
  };

  const handleMenuOnClick = (main, link, refName) => {
    router.push(`/?s=${refName}`, undefined, { shallow: true })
  }

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
                  className="cursor-pointer text-[16px] font-[400] text-[#FFF] hover:font-[700] hidden lg:block"
                  key={d.label}
                  onClick={() => {
                    handleMenuOnClick(d.value, d.label, d.refName)
                    handleShowDonate(false)
                  }}
                >
                  {d.label}
                </div>
              ))}
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
