import { extendTheme } from '@chakra-ui/react';
import { ProgressStyles as Progress } from '@common/styles/components/progressStyles';

import styles from './styles';
import colors from './colors';
import { Button } from './components/Button';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  components: {
    Progress,
    Button,
  },
  fonts: {
    body: 'var(--font-family)',
    heading: 'var(--font-family)',
  },
  textStyles: {
    heading: {
      fontSize: { base: '3xl', md: '4xl' },
      fontWeight: 900,
      color: '#77C1D3',
    },
    content: {
      fontSize: { base: 'md', md: 'lg' },
      lineHeight: 1.7,
      py: 2,
      mb: 2,
    },
  },
  styles,
  colors,
});

export default theme;
