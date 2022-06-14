import React from 'react';
import { Image, Button, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import logoChinese from '@common/images/logo/GP-logo-2019-TC-white-[web]-01.png';

const Header = () => {
  const router = useRouter();
  return (
    <div
      className={`px-4 bg-[#66CC00] w-full transition-all duration-500`}
      style={{ zIndex: 99 }}
    >
      <div className={`md:max-w-[1345px] mx-auto left-0 right-0`}>
        <div className="flex flex-row space-x-0 items-center h-[64px]">
          <div className="flex-1">
            <Link isExternal href="https://www.greenpeace.org/hongkong/">
              <Image
                src={logoChinese}
                maxW="220px"
                alt={'Greenpeace 綠色和平'}
                cursor={'pointer'}
              />
            </Link>
          </div>
          <div>
            <div className="flex flex-row items-center gap-8">
              <Link
                isExternal
                href="https://supporter.ea.greenpeace.org/hk/s/donate/alt-layout-new?language=zh_HK&campaign=elm_mw&ref=streaming_page_header"
              >
                <Button
                  color="white"
                  bgColor={'orange.500'}
                  _hover={{ bg: 'orange.300' }}
                >
                  月捐支持
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
