import { extendTheme } from '@chakra-ui/react';

import styles from './styles';
import colors from './colors';
import { Button } from './components/Button';

const theme = extendTheme({
  components: {
    Button,
  },
  fonts: {
    body: 'var(--font-family)',
    heading: 'var(--font-family)',
  },
  styles,
  colors,
});

export default theme;
