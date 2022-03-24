import { extendTheme } from '@chakra-ui/react';

import styles from './styles';
import colors from './colors';
import { Button } from './components/Button';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
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
  },
  fonts: {
    body: 'var(--font-family)',
    heading: 'var(--font-family)',
  },
  textStyles: {
    heading: {
      fontSize: { base: '2xl', md: '4xl' },
      fontWeight: 'bold',
      color: 'var(--gps-primary)',
      mb: 6,
    },
    subTitle: {
      fontSize: { base: 'xl', md: '2xl' },
      fontWeight: 700,
      color: 'var(--gps-primary)',
      mb: 4,
    },
    content: {
      fontSize: { base: 'md', md: 'lg' },
      lineHeight: 1.7,
      mb: 4,
      textAlign: 'justify',
    },
  },
  styles,
  colors,
});

export default theme;
