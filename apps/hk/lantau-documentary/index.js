import React, { useEffect, useState, useRef } from 'react';
import PetitionFooter from '@containers/petitionFooter';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import {
  Box,
  Container,
  Image,
  useMediaQuery,
  Slide,
  Button,
  Avatar,
} from '@chakra-ui/react';
import AvatarGroup from './components/Avatar';
import VisionGroup from './components/Vision';
import SwiperGroup from './components/Swiper';
import { OrangeCTA } from '@common/styles/components/formStyle';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';

import FixedCTA from './components/FixedCTA';
const maxWSize = 1200;

import logoChinese from '@common/images/logo/GP-logo-2019-TC-white-[web]-01.png';
import mobileHero from './images/mobile/hero.png';
import subBanner from './images/sub_banner.jpeg';
import sectionBackground from './images/section_background.jpeg';

import contentCard from './images/content_card.jpeg';
import contentCardBackground from './images/content_card_background.jpeg';

function Index() {
  return (
    <Box>
      <Box
        backgroundImage={mobileHero}
        backgroundPosition={'top center'}
        backgroundRepeat="no-repeat"
        backgroundSize={'100%'}
      >
        {/** Header */}
        <div className="container mx-auto px-4">
          <div className="border-b-[2px]">
            <div className="flex flex-row space-x-0 items-center h-[64px]">
              <div className="flex-1">
                <Image
                  src={logoChinese}
                  maxW="220px"
                  alt={'Greenpeace 綠色和平'}
                />
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
        {/** Hero */}
        <div className="container mx-auto max-w-[244px]">
          <div className="flex flex-col pt-[248px] pb-[67px]">
            <div className="text-center text-[#FFF]">
              <div className="pb-[28px]">
                <h1 className="text-[24px] font-[700] leading-[36px]">
                  香港第一部
                </h1>
                <h1 className="text-[24px] font-[700] leading-[36px]">
                  大嶼山生態紀錄長片
                </h1>
              </div>

              <div>
                <h2 className="text-[20px] font-[500] leading-[30px]">
                  單次捐款100元 收看記錄片
                </h2>
              </div>

              <div className="flex flex-row gap-4 pt-[28px]">
                <div className="flex-1">
                  <Button
                    fontWeight={500}
                    color="white"
                    w={'100%'}
                    bgColor={'orange.500'}
                    _hover={{ bg: 'orange.300' }}
                  >
                    捐款收看
                  </Button>
                </div>
                <div className="flex-1">
                  <Button
                    color="orange.500"
                    fontWeight={500}
                    w={'100%'}
                    bgColor={'transparent'}
                    border={'2px solid'}
                    borderColor={'orange.500'}
                    _hover={{ bg: 'orange.300' }}
                  >
                    紀錄片預告
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** Main content */}
        <div className="container mx-auto px-[30px]">
          <div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[24px] font-[700] leading-[36px]">
                大嶼山生態紀錄長片
              </h1>
              <p className="text-[16px] font-[500]">
                綠色和平與本地生態團隊耗時大半年製作
              </p>

              <div className="grid grid-cols-3 divide-x">
                <div>片長:25分鐘</div>
                <div>編導：馮漢城</div>
                <div>配音：陳志雲</div>
              </div>

              <p className="text-[16px] font-[500]">
                山海大嶼是由綠色和平歷時大半年製作，與本地得獎製作班底合作出品的香港第一部大嶼山生態紀錄長片。製作團隊曾多次上山下海、通宵逗留野外拍攝物種的珍貴時刻，多角度呈現大嶼生態面貌。
              </p>

              <p className="text-[16px] font-[500]">
                全片不但以4K超高清拍攝，更包含航拍、水底拍攝、夜視拍攝等，務求將大嶼山生態最真實一面搬到螢幕上。我們亦邀請到本地資深傳媒人陳志雲先生為本片配音，全方位帶領大眾了解大嶼山富生物多樣性、值得香港人驕傲的一面。
              </p>
            </div>
          </div>
        </div>
      </Box>

      <div className="container mx-auto px-[30px]">
        <div className="pt-[107px]">
          <Image src={subBanner} />
        </div>
      </div>

      <div className="container mx-auto px-[30px] py-[36px]">
        <h1 className="text-[20px] font-[700] leading-[36px] pb-[26px]">
          製作與配音團隊
        </h1>
        <AvatarGroup />
      </div>

      <div>
        <Box
          backgroundImage={sectionBackground}
          bgSize={'cover'}
          bgPosition={'center'}
          h={'200px'}
        />
      </div>

      <Box
        backgroundImage={contentCardBackground}
        backgroundPosition={'bottom center'}
        backgroundRepeat="no-repeat"
        backgroundSize={'100%'}
      >
        <div className="container mx-auto py-[36px]">
          <h1 className="text-[24px] font-[700] leading-[36px] text-center pb-[26px]">
            我們的理念
          </h1>

          <div className="pl-4">
            <VisionGroup/>
          </div>

        </div>
      </Box>

      <div>
        <div className="container mx-auto py-[36px]">
          <h1 className="text-[24px] font-[700] leading-[36px] text-center pb-[12px]">
          大嶼有我
          </h1>

          <p className="text-[16px] font-[500] text-center pb-[26px]">
          以行動守護大嶼的「保衛者們」介紹
          </p>

          <div className="pl-4">
            <SwiperGroup/>
          </div>

        </div>
      </div>

      <PetitionFooter />
    </Box>
  );
}

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
