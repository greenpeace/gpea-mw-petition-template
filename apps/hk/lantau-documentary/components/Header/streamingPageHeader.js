import React from 'react';
import { Image, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import logoChinese from '@common/images/logo/GP-logo-2019-TC-white-[web]-01.png';

const Header = () => {
  const router = useRouter();
  return (
    <div
      className={`px-4 bg-[#66CC00] w-full transition-all duration-500`}
      style={{ zIndex: 99 }}
    >
      <div
        className={`md:max-w-[1345px] mx-auto left-0 right-0`}
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
