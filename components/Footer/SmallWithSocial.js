import { Container, Stack, Text } from '@chakra-ui/react';
import SocialButton from './socialButton';
import { FooterBGDarkBlue } from './footer.style';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function SmallWithSocial() {
  return (
    <FooterBGDarkBlue>
      <Container
        as={Stack}
        color={'white'}
        maxW={'1200px'}
        py={8}
        px={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={2}>
          <Text as="span">© GREENPEACE {new Date().getFullYear()}</Text>
        </Stack>
        <Stack direction={'row'} spacing={8}>
          <SocialButton
            label={'Facebook'}
            href={'https://www.facebook.com/greenpeacehk/'}
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={'YouTube'}
            href={'https://www.instagram.com/greenpeace_hk'}
          >
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label={'Instagram'}
            href={'https://www.youtube.com/user/GreenpeaceChina'}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label={'Twitter'}
            href={'https://twitter.com/greenpeace_hk'}
          >
            <FaTwitter />
          </SocialButton>
        </Stack>
      </Container>
    </FooterBGDarkBlue>
  );
}
