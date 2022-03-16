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
      fontWeight: 900,
      color: '#77C1D3',
      mb: 4,
    },
    subTitle: {
      fontSize: { base: 'xl', md: '2xl' },
      fontWeight: 700,
      color: '#77C1D3',
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
