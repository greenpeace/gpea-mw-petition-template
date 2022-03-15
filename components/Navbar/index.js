import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { imageLoader } from 'common/utils';
import Image from 'next/image';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <Box
      zIndex="9"
      pos={'fixed'}
      top={0}
      w={'100%'}
      h={{ base: '50px', md: '60px' }}
      bgColor={'#FFF'}
      py={1}
      ref={ref}
    >
      <Flex px={{ base: 4 }} align={'center'} justifyContent={'space-around'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            sx={{
              ':focus:not(:focus-visible)': {
                shadow: 'none',
              },
            }}
          />
        </Flex>
        <Link
          href={'/'}
          sx={{
            ':focus:not(:focus-visible)': {
              shadow: 'none',
            },
          }}
          cursor={'pointer'}
        >
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Image
              loader={imageLoader}
              src={`/images/greenpeace_logo.svg`}
              layout="intrinsic"
              width={'160px'}
              height={'30px'}
            />
          </Flex>
        </Link>

        <Box d={{ base: 'none', md: 'block' }}>
          <DesktopNav />
        </Box>
        <Box d={{ base: 'block', md: 'none' }} flex={1} />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav handleToggle={onToggle} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Flex zIndex="1" d={{ base: 'flex' }} h={'50px'} align={'center'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} px={2}>
          {navItem.target === '_blank' ? (
            <a href={navItem.href} target={navItem.target}>
              <Text
                bgColor="orange.500"
                fontSize={'md'}
                fontWeight={700}
                p={2}
                color={'#FFF'}
                borderRadius={'8px'}
              >
                {navItem.label}
              </Text>
            </a>
          ) : (
            <Link href={navItem.href ?? '#'}>
              <Text
                p={2}
                fontSize={'md'}
                fontWeight={700}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
                sx={{
                  ':focus:not(:focus-visible)': {
                    shadow: 'none',
                  },
                }}
                cursor={'pointer'}
              >
                {navItem.label}
              </Text>
            </Link>
          )}
        </Box>
      ))}
    </Flex>
  );
};

const MobileNav = ({ handleToggle }) => {
  return (
    <Stack
      zIndex="1"
      spacing="6"
      bg="white"
      px="6"
      pt="6"
      pb="10"
      display={{ md: 'none' }}
      borderBottom="1px"
      borderColor="gray.100"
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          handleToggle={handleToggle}
          key={navItem.label}
          {...navItem}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ handleToggle, label, children, href }) => {
  return (
    <Box>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
        onClick={() => handleToggle()}
      >
        <Link href={href}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            {label}
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

const NAV_ITEMS = [
  {
    label: '主頁',
    href: '/',
    target: '_self',
  },
  {
    label: '使用教學',
    href: '/tutorial',
    target: '_self',
  },
  {
    label: '免費登記使用',
    href: '/registration',
    target: '_self',
  },
  {
    label: '常見問題',
    href: '/faq',
    target: '_self',
  },
  {
    label: '捐助支持',
    href: 'https://supporter.ea.greenpeace.org/hk/s/donate/alt-layout?language=zh_HK&campaign=plastics_mw',
    target: '_blank',
  },
];
