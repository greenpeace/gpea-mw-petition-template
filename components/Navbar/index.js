import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      pos={'absolute'}
      w={'100%'}
      h={{ base: '50px', md: '60px' }}
      zIndex={9}
      py={1}
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
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href={'/'}>
            <Image
              src={'/images/greenpeace_logo.svg'}
              maxW={{ base: '120px', md: '160px' }}
            />
          </Link>
        </Flex>

        <Box d={{ base: 'none', md: 'block' }}>
          <DesktopNav />
        </Box>
        <Box d={{ base: 'block', md: 'none' }} flex={1} />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Flex d={{ base: 'flex' }} h={'50px'} align={'center'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} px={2}>
          {navItem.target === '_blank' ? (
            <a href={navItem.href} target={navItem.target}>
              <Text
                bgGradient="linear(to-l, #F2994A, #F2994A)"
                bgClip="text"
                fontSize={'md'}
                fontWeight={700}
                pl={2}
              >
                {navItem.label}
              </Text>
            </a>
          ) : (
            <Link
              p={2}
              href={navItem.href ?? '#'}
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
            >
              {navItem.label}
            </Link>
          )}
        </Box>
      ))}
    </Flex>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
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
