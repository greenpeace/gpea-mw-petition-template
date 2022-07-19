import { extendTheme } from '@chakra-ui/react';

import styles from './styles';
import colors from './colors';
import { Button } from './components/Button';
import { Link } from './components/Link';

const theme = extendTheme({
  components: {
    Button,
    Link,
    Modal: {
      baseStyle: {
        dialogContainer: {
          '@supports(height: -webkit-fill-available)': {},
        },
      },
    },
  },
  fonts: {
    body: 'var(--font-family)',
    heading: 'var(--font-family)',
  },
  styles,
  colors,
});

export default theme;
