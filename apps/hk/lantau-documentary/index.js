import React, { useEffect, useState, useRef } from 'react';
import PetitionFooter from '@containers/petitionFooter';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Image, Button } from '@chakra-ui/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AvatarGroup from './components/Avatar';
import VisionGroup from './components/Vision';
import SwiperGroup from './components/Swiper';
import Information from './components/Information';
import Support from './components/Support';
import { OrangeCTA } from '@common/styles/components/formStyle';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';
import subBanner from './images/sub_banner.jpeg';
import sectionBackground from './images/section_background.jpeg';

import contentCardBackground from './images/content_card_background.jpeg';

import contentDonateBackground from './images/mobile/content_donate_background.jpeg';

import joinBackground from './images/mobile/join_background.jpeg';

function Index() {
  return (
    <>
      <SEO />
      <Box>
        <HeroSection />

        <div className="container mx-auto px-[30px] md:hidden">
          <div className="pt-[107px]">
            <Image src={subBanner} />
          </div>
        </div>

        <div className="md:hidden">
          <AvatarGroup />
        </div>

        <div>
          <Box
            backgroundImage={sectionBackground}
            bgSize={'cover'}
            bgPosition={'center'}
            h={{ base: '200px', md: '410px' }}
          />
          {/* <Image src={sectionBackground} w={'full'}/> */}
        </div>

        <VisionGroup />

        <SwiperGroup />

        <Support/>

        <Information />

        <PetitionFooter />
      </Box>
    </>
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
