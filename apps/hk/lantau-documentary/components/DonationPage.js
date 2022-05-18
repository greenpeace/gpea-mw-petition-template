import React, { useRef, useEffect, useState } from 'react';
import PetitionFooter from '@containers/petitionFooter';
import { Box, Center, Image, Divider, AspectRatio } from '@chakra-ui/react';
import Header from '../components/Header';
import MobileHero from '../images/mobile/hero.png';
import MobileHeroFront from '../images/mobile/hero_front.png';
import DesktopHero from '../images/hero_v2.jpg';
import DesktopHeroFront from '../images/hero_front_v2.png';

import PlayButton from '../images/donate/play_button.png';

import Icon01 from '../images/donate/icon01.svg';
import Icon02 from '../images/donate/icon02.svg';
import Icon03 from '../images/donate/icon03.svg';

import Step01 from '../images/donate/step01.svg';
import Step02 from '../images/donate/step02.svg';
import Step03 from '../images/donate/step03.svg';
import Step04 from '../images/donate/step04.svg';

import Stepb01 from '../images/donate/stepb01.svg';
import Stepb02 from '../images/donate/stepb02.svg';
import Stepb03 from '../images/donate/stepb03.svg';
import Stepb04 from '../images/donate/stepb04.svg';

import Item from '../images/donate/item.png';

// import DonateForm from '../components/Form/DonateForm';

import DonateForm from '@components/GP/DonateForm';

import { connect } from 'react-redux';
import formContent from '../form';
import * as formActions from 'store/actions/action-types/form-actions';

function Index({ setFormContent }) {
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setFormContent(formContent);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <div className="relative pb-[80px]">
        <Box
          backgroundImage={{ base: MobileHero, lg: DesktopHero }}
          backgroundPosition={'top center'}
          backgroundRepeat="no-repeat"
          backgroundSize={'100%'}
          w={'100%'}
          position="absolute"
          top={0}
          bottom={0}
          backgroundAttachment={'fixed'}
        />
        <Box
          backgroundImage={{ base: MobileHeroFront, lg: DesktopHeroFront }}
          backgroundPosition={'top center'}
          backgroundRepeat="no-repeat"
          backgroundSize={'100%'}
          w={'100%'}
          position="absolute"
          top={0}
          bottom={0}
          zIndex={2}
          className="frontHero"
        />
        <div
          className="container mx-auto px-[20px] relative"
          style={{ zIndex: 11 }}
        >
          <div className="flex flex-col pt-[165px] md:pt-[100px] lg:pt-[226px] pb-[50px] md:py-0">
            <div className="text-center text-[#FFF]">
              <div>
                <h1
                  className="text-[32px] md:text-[36px] font-[900] leading-[48px] md:leading-[54px]"
                  style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}
                >
                  <span className="block">立即單次捐款100元</span>
                  <span className="md:inline-block">
                    收看「山海大嶼」紀錄片
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container mx-auto pt-[40px] md:pt-[140px] md:max-w-[1345px] relative"
          style={{ zIndex: 10 }}
        >
          <div className="flex flex-col-reverse lg:flex-row gap-8 relative z-10 px-[20px]">
            <div className="w-[100%] flex-1">
              <div className="mb-[30px] rounded-lg bg-[#000] w-full overflow-hidden">
                <AspectRatio w="100%" ratio={16 / 9}>
                  <iframe
                    src="https://www.youtube.com/embed/n1Tk6VHVfK0"
                    allowFullScreen
                  />
                </AspectRatio>
              </div>
              <div className="rounded-xl bg-white pt-[40px] pb-[40px]">
                <div className="flex flex-row items-center">
                  {TABS.map((d, i) => {
                    const isActive =
                      tab === d.value
                        ? 'border-b-[#FF8100] border-solid border-b-[2px]'
                        : 'border-b-[#000] border-solid border-b-[1px]';
                    return (
                      <div
                        className="flex-1 cursor-pointer"
                        key={`${d.value}-${i}`}
                        onClick={() => setTab(d.value)}
                      >
                        <div
                          className={`mx-auto h-[40px] flex flex-row items-center gap-2 ${isActive} pb-2 mb-2`}
                        >
                          <Center pb="4" w="100%">
                            <Image src={d.icon} alt={d.label} px={'10px'} />
                            <p
                              className={`text-[18px] ${
                                tab === d.value ? 'font-[500]' : 'font-[400]'
                              }`}
                            >
                              {d.label}
                            </p>
                          </Center>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {tab === 0 && <CONTENT01 />}
                {tab === 1 && <CONTENT02 />}
                {tab === 2 && <CONTENT03 />}
              </div>
            </div>
            <div className="w-[100%] flex-1">
              <Box
                maxW="500px"
                mx="auto"
                bgColor="white"
                borderRadius={8}
                boxShadow="lg"
                overflow="hidden"
              >
                <DonateForm />
              </Box>
            </div>
          </div>
        </div>
      </div>
      <PetitionFooter />
    </>
  );
}

const CONTENT01 = () => (
  <div className="flex flex-col py-6">
    {STEPS.map((d, i) => (
      <div key={`${d.content}-${i}`} className="flex flex-row">
        <div>
          <div className="flex flex-row items-center">
            <div className="mx-[30px] rounded-[50%] border-[#000] border-solid border-[1px] w-[70px] h-[70px]">
              <Center h={'100%'}>
                <Image src={d.icon} alt={''} />
              </Center>
            </div>
            <p className="flex-1">{d.content}</p>
          </div>
          {i + 1 !== STEPS.length && (
            <div className="w-[70px] mx-[30px]">
              <Center w={'100%'}>
                <Divider orientation="vertical" borderColor="#000" h={'50px'} />
              </Center>
            </div>
          )}
        </div>
      </div>
    ))}
    <p className="px-[20px] mt-[40px]">
      * 綠色和平月捐會員將有限量免費名額收看，詳情請參閱會員服務部電郵。
    </p>
  </div>
);

const CONTENT02 = () => (
  <div className="flex flex-col py-6">
    <p className="mx-[30px] text-[16px] pb-[30px]">
      由現時起，成功登記捐助「山海大嶼」紀錄片項目者，即可邀請 2
      位朋友免費觀看紀錄片！步驟如下：
    </p>
    {STEPS2.map((d, i) => (
      <div key={`${d.content}-${i}`} className="flex flex-row">
        <div>
          <div className="flex flex-row items-center">
            <div className="mx-[30px] rounded-[50%] border-[#000] border-solid border-[1px] w-[70px] h-[70px]">
              <Center h={'100%'}>
                <Image src={d.icon} alt={''} />
              </Center>
            </div>
            <p className="flex-1">{d.content}</p>
          </div>
          {i + 1 !== STEPS2.length && (
            <div className="w-[70px] mx-[30px]">
              <Center w={'100%'}>
                <Divider orientation="vertical" borderColor="#000" h={'50px'} />
              </Center>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);

const CONTENT03 = () => (
  <div className="flex flex-col py-6">
    <div className="flex flex-col mx-[30px] text-[16px] font-[400]">
      <p>
        為了維持公正和中立，綠色和平從不接受任何政府、企業或政治團體的資助，只接受市民和獨立基金的直接捐款。因此，您的捐款對我們尤為重要。有了您的支持，綠色和平將有更多資源與力量執行守護大嶼工作，推動政府優先發展棕地，守護香港自然環境與生物多樣性。
      </p>
      <div className="flex flex-row pt-[30px]">
        <p>
          現時在此網頁進行單次捐款500元，我們更會送你
          「山海大嶼」限定明信片一套與「堅守大嶼」旗幟一面， 以示謝意。
        </p>
        <Image src={Item} alt={'Greenpeace 綠色和平'} />
      </div>
    </div>
  </div>
);

const TABS = [
  {
    label: '如何收看',
    value: 0,
    icon: Icon01,
  },
  {
    label: '與朋友同看紀錄片',
    value: 1,
    icon: Icon02,
  },
  {
    label: '支持我們',
    value: 2,
    icon: Icon03,
  },
];

const STEPS = [
  {
    content: '填妥捐助表格',
    icon: Step01,
  },
  {
    content: '幾分鐘內，您將會收到確認電郵與短訊',
    icon: Step02,
  },
  {
    content: '點開電郵或短訊中的收看連結，並輸入您的收看密碼',
    icon: Step03,
  },
  {
    content: '準備好欣賞紀錄片吧！',
    icon: Step04,
  },
];

const STEPS2 = [
  {
    content: '成功捐款後，您會收到一封確認電郵',
    icon: Stepb01,
  },
  {
    content: '查看電郵內附的「推薦朋友觀看」連結',
    icon: Stepb02,
  },
  {
    content: '複製該連結並發送給2位朋友',
    icon: Stepb03,
  },
  {
    content: '朋友填妥連結內的登記表格，即可觀看電影！',
    icon: Stepb04,
  },
];

const mapStateToProps = ({ status, theme, form }) => {
  return { status, theme: theme.data, form };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
