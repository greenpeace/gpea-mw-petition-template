import { extendTheme } from '@chakra-ui/react';

import styles from './styles';
import colors from './colors';
import { Button } from './components/Button';

const theme = extendTheme({
  components: {
    Button,
    Switch: {
      baseStyle: {
        track: {
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'blue.500',
      },
    },
  },
  fonts: {
    body: 'var(--font-family)',
    heading: 'var(--font-family)',
  },
  textStyles: {
    heading: {
      color: 'gray.900',
      fontSize: { base: '2xl', md: '4xl' },
      fontWeight: 'bold',
      mt: 2,
      mb: 4,
    },
    subTitle: {
      color: 'gray.900',
      fontSize: { base: 'xl', md: '2xl' },
      fontWeight: 'bold',
      mt: 2,
      mb: 4,
    },
    content: {
      color: 'gray.700',
      fontSize: { base: 'base', md: 'lg' },
      lineHeight: 2,
      mt: 2,
      mb: 4,
      textAlign: 'justify',
    },
  },
  styles,
  colors,
});

export default theme;
