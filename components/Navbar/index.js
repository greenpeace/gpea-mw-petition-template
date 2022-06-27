import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

import logoChinese from '@common/images/logo_zh.png';

export default function WithSubnavigation({ currentPage }) {
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
      w="100%"
      bgColor="#66cc00"
      py="2"
      ref={ref}
      minH={{ base: '50px', md: '60px' }}
      d="flex"
    >
      <Box pos="relative" w="100%" maxW="1200px" mx="auto">
        <Flex
          w="100%"
          px={{ base: 4 }}
          alignItems={'center'}
          justifyContent={'space-around'}
        >
          <Flex
            position="absolute"
            left="20px"
            display={{ base: 'block', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon color="white" w={5} h={5} />
                ) : (
                  <HamburgerIcon color="white" w={5} h={5} />
                )
              }
              variant={'unstyled'}
              aria-label={'Toggle Navigation'}
              sx={{
                ':focus:not(:focus-visible)': {
                  shadow: 'none',
                },
              }}
            />
          </Flex>

          <Flex
            flex="1"
            alignSelf="center"
            justify={{ base: 'center', md: 'start' }}
          >
            <Box>
              <Link
                href={'/'}
                sx={{
                  ':focus:not(:focus-visible)': {
                    shadow: 'none',
                  },
                }}
                cursor={'pointer'}
              >
                <Image
                  src={logoChinese}
                  maxW="220px"
                  padding="2px"
                  alt={'Greenpeace 綠色和平'}
                />
              </Link>
            </Box>
          </Flex>

          <Box d={{ base: 'none', md: 'block' }}>
            <DesktopNav currentPage={currentPage} />
          </Box>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav handleToggle={onToggle} currentPage={currentPage} />
        </Collapse>
      </Box>
    </Box>
  );
}

const DesktopNav = ({ href, currentPage }) => {
  return (
    <Box zIndex="1" d={{ base: 'flex' }} align={'center'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} px={4}>
          <Link href={navItem.href}>
            <Text
              p={2}
              fontSize={'md'}
              cursor={'pointer'}
              color="white"
              fontWeight={currentPage === navItem.href ? 'bold' : 400}
              sx={{
                ':focus:not(:focus-visible)': {
                  shadow: 'none',
                },
              }}
            >
              {navItem.label}
            </Text>
          </Link>
        </Box>
      ))}
      <Box cursor="pointer" d="inline-block">
        <Link
          href="https://supporter.ea.greenpeace.org/hk/s/donate/alt-layout-new?language=zh_HK&campaign=plastics_mw&ref=gps-header-donate-button"
          isExterna
        >
          <Text
            bgColor="orange.500"
            fontSize={'md'}
            px={4}
            py={2}
            color={'white'}
            borderRadius={'4px'}
          >
            捐款支持
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

const MobileNav = ({ handleToggle, currentPage }) => {
  return (
    <Stack
      zIndex="1"
      spacing="6"
      bg="white"
      mt="2"
      px="6"
      pt="6"
      pb="10"
      w="100%"
      display={{ md: 'none' }}
      borderBottom="1px"
      borderColor="gray.100"
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          handleToggle={handleToggle}
          key={navItem.label}
          {...navItem}
          currentPage={currentPage}
        />
      ))}
      <Box cursor="pointer" d="inline-block">
        <Link
          href="https://supporter.ea.greenpeace.org/hk/s/donate/alt-layout?language=zh_HK&campaign=plastics_mw&ref=gps-header-donate-button"
          isExternal
        >
          <Text
            bgColor="orange.500"
            fontSize={'md'}
            px={4}
            py={2}
            color={'white'}
            borderRadius={'4px'}
          >
            捐助支持
          </Text>
        </Link>
      </Box>
    </Stack>
  );
};

const MobileNavItem = ({ handleToggle, label, href, currentPage }) => {
  return (
    <Box>
      <Flex
        cursor="pointer"
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
            color={currentPage === href ? 'var(--gps-primary)' : 'gray.800'}
            fontWeight={currentPage === href ? 'bold' : 400}
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
    label: '登記使用完整版',
    href: '/registration',
    target: '_self',
  },
  {
    label: '常見問題',
    href: '/faq',
    target: '_self',
  },
];
