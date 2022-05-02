import React from 'react';
import { Image, Button } from '@chakra-ui/react';
import useScrollPosition from "./useScrollPosition";
import logoChinese from '@common/images/logo/GP-logo-2019-TC-white-[web]-01.png';

const Header = () => {

  const scrollPosition = useScrollPosition();
  const OFFSET = 10 

  const stickyStyle = {
    wrap: scrollPosition > OFFSET ? 'bg-[#66CC00]' : '',
    border : scrollPosition > OFFSET ? '' : 'border-b-[2px]',
  }

  return (
    <div className={`px-4 fixed top-0 z-20 ${stickyStyle.wrap} w-full transition-all duration-500`}>
      <div className={`${stickyStyle.border} md:max-w-[1345px] mx-auto left-0 right-0`}>
        <div className="flex flex-row space-x-0 items-center h-[64px]">
          <div className="flex-1">
            <Image src={logoChinese} maxW="220px" alt={'Greenpeace 綠色和平'} />
          </div>
          <div>
            <Button
              color="white"
              bgColor={'orange.500'}
              _hover={{ bg: 'orange.300' }}
            >
              捐款收看
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
