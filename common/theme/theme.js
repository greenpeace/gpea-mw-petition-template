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
    Input: {
      baseStyle: {
        field: {
          fontSize: 'md',
          minHeight: '48px',
          background: 'white',
          borderWidth: 1,
          _hover: {
            borderColor: '#66cc00',
          },
          _focus: {
            borderColor: '#66cc00',
          },
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          fontSize: 'md',
          minHeight: '48px',
          background: 'white',
          borderWidth: 1,
          _hover: {
            borderColor: '#66cc00',
          },
          _focus: {
            borderColor: '#66cc00',
          },
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
