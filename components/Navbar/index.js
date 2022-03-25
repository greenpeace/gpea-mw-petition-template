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
      bgColor="white"
      py={{ base: 2, md: 4 }}
      ref={ref}
      borderBottom="1px"
      borderColor="gray.100"
    >
      <Box maxW="1200px" mx="auto">
        <Flex px={{ base: 4 }} align={'center'} justifyContent={'space-around'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
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
            <DesktopNav currentPage={currentPage} />
          </Box>
          <Box d={{ base: 'block', md: 'none' }} flex={1} />
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav handleToggle={onToggle} currentPage={currentPage} />
        </Collapse>
      </Box>
    </Box>
  );
}

const DesktopNav = ({ href, currentPage }) => {
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Box zIndex="1" d={{ base: 'flex' }} align={'center'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} px={4}>
          <Link href={navItem.href}>
            <Text
              p={2}
              fontSize={'md'}
              cursor={'pointer'}
              color={
                currentPage === navItem.href ? 'var(--gps-primary)' : 'gray.500'
              }
              fontWeight={currentPage === navItem.href ? 'bold' : 300}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
              }}
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
          href="https://supporter.ea.greenpeace.org/hk/s/donate/alt-layout?language=zh_HK&campaign=plastics_mw&ref=gps-header-donate-button"
          isExterna
        >
          <Text
            bgColor="orange.500"
            fontSize={'md'}
            fontWeight={700}
            px={4}
            py={2}
            color={'white'}
            borderRadius={'4px'}
          >
            捐助支持
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
      px="6"
      pt="6"
      pb="10"
      w="100vw"
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
            fontWeight={700}
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
            color={currentPage === href ? 'var(--gps-primary)' : 'gray.500'}
            fontWeight={currentPage === href ? 'bold' : 300}
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
];
