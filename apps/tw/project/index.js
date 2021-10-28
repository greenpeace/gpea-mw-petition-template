import React, { useEffect } from 'react';
import HeroBanner from '@components/Banner/hero';
import ThanksBanner from '@components/Banner/thanks';
import PageContainer from '@containers/pageContainer';
import Message from '@components/Footer/message';
import OtherInformation from '@components/Footer/otherInformation';
import SignupForm from '@components/TWForm';
import DonateForm from '@components/TWForm/donate';
import { connect } from 'react-redux';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import SEO from './SEO';
import formContent from './form';
import * as formActions from 'store/actions/action-types/form-actions';

function Index({ status, theme, setFormContent }) {
  const { submitted } = status;
  const headingProps = {
    color: `theme.${theme.ProjectName}`,
    pb: 2,
    fontSize: { base: 20, md: 24 },
  };
  const paragraphProps = {
    pb: 6,
  };

  useEffect(() => {
    setFormContent(formContent);
  }, []);

  return (
    <>
      <SEO />
      {!submitted ? (
        <HeroBanner
          bgImage={`/images/arctic/GP04Z2Q_Web_size-4_r.jpg`}
          content={{
            title: 'TW: 守護北極 全球行動！',
            description: [
              '過去數十年，北極在全球暖化下，已損失三分之二的海冰體積，北極熊的數量亦減少近一半。',
              '失去海冰屏障，加上北極海洋不到1.5%範圍得到正式保護，石油公司、工業捕漁船可以不分季節，直入北極奪取資源。',
              '綠色和平正爭取訂立「全球海洋公約」，將北極地區設為優先保護區，以嚴格管制、禁止各國進行鑽油、捕魚等活動，同時推動全球氣候改革以控制升溫於 1.5℃ 內。守護北極生態、北極熊的唯一棲所，請即加入聯署，為北極發聲！',
            ],
          }}
        />
      ) : (
        <ThanksBanner
          bgImage={`https://www.greenpeace.org/static/planet4-hongkong-stateless/2020/02/e2bf64c3-dji_0431-scaled.jpg`}
          content={{
            title: '感謝您的加入！',
            description: [
              '綠色和平堅持以行動守護北極，揭露並制止企業與政府，在北極鑽油與過度捕撈惡行、推動全球攜手淘汰化石能源，將升溫控制至1.5°C，守護北極，減輕北極熊生存壓力。',
              '綠色和平堅持不接受政商界捐助，因為您，綠色和平得以維持環境工作的公正獨立性，懇請您今天就以每月$100（約每日$3）小額捐助，支持守護北極全球行動！',
            ],
            inviteMessage: '邀請您的朋友一同參與:',
            shareLink: [
              {
                shareComponent: <FaInstagram fontSize={12} color={`#66cc00`} />,
                link: '#',
              },
              {
                shareComponent: <FaFacebookF fontSize={12} color={`#66cc00`} />,
                link: '#',
              },
              {
                shareComponent: <FaWhatsapp fontSize={12} color={`#66cc00`} />,
                link: '#',
              },
              {
                shareComponent: <FaTwitter fontSize={12} color={`#66cc00`} />,
                link: '#',
              },
            ],
            inviteInfo: '點擊預覽分享內容',
          }}
        />
      )}
      <PageContainer>
        <Box>
          <Flex flexDirection={{ base: 'column-reverse', sm: 'row' }}>
            <Box flex={1} pr={{ base: 0, sm: 12 }} mt={{ base: 10, sm: 60 }}>
              <Box>
                <Heading {...headingProps}>
                  放任氣候危機惡化，北極熊或將於 2100 年滅絕
                </Heading>
                <Text as="p" {...paragraphProps}>
                  全球暖化下，北極海冰已損失三分之二的體積，放任氣候危機惡化，北極熊將失去唯一棲所，難以狩獵、尋找另一半以及養育幼熊。
                </Text>

                <Box {...paragraphProps}>
                  <Image src={`/images/arctic/GP04Z2Q_Web_size-4_r.jpg`} />
                </Box>

                <Heading {...headingProps}>北極危機，與您我攸關</Heading>

                <Text as="p" {...paragraphProps}>
                  北極與地球氣候息息相關，許多地區已遭受海平面上升，熱浪、颱風、洪水等異常氣候現象影響，這一切災難是全球人類、動植物及生態共同承受，無一倖免。
                </Text>

                <Box {...paragraphProps}>
                  <Image src={`/images/arctic/GP04Z2Q_Web_size-4_r.jpg`} />
                </Box>

                <Heading {...headingProps}>群眾力量，創造無限可能</Heading>

                <Text as="p" {...paragraphProps}>
                  目前，全球有超過 800
                  萬人參加守護北極聯署，繼成功令法院裁定蜆殼石油（SHELL）要為氣候危機負責，
                  我們急需您擴大守護北極的聲音力量，以推動各國領袖宣布承諾減碳排目標、
                  在2030 前將受保護海洋擴大至 30%
                  。守護北極路上有您加入，綠色和平將努力創造更多改變！
                </Text>

                <Box {...paragraphProps}>
                  <Image src={`/images/arctic/GP04Z2Q_Web_size-4_r.jpg`} />
                </Box>
              </Box>
            </Box>

            <Box flex={1}>
              <Box
                boxShadow="lg"
                p="6"
                bgColor="#FFF"
                sx={{ position: 'sticky', top: '0' }}
                borderRadius={8}
              >
                {submitted ? <DonateForm /> : <SignupForm />}
              </Box>
            </Box>
          </Flex>
        </Box>
      </PageContainer>
      <Message
        content={{
          title: 'Greenpeace 綠色和平 | 香港',
          messageTitle: 'Do you have any questions, please call or mail us!',
          messageContact: ['Phone number: xxxx-xxxxxx', 'Email: mail@mail.com'],
        }}
      />
      <OtherInformation
        content={{
          footerContent: [
            'Despite an official ban on protests, demonstrators marched through Berlin city center in various groups against the current measures being imposed by the German government.<br/><br/>Despite an official ban on protests',
            'Despite an official ban on protests, demonstrators marched through Berlin city center in various groups against the current measures being imposed by the German government.',
            'Demonstrators marched through Berlin city center in various groups against the current measures being imposed by the German government.',
          ],
        }}
      />
    </>
  );
}

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
