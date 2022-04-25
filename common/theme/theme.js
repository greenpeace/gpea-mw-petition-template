import { extendTheme } from '@chakra-ui/react';
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

import styles from './styles';
import colors from './colors';
import { Button } from './components/Button';

const tailwind = resolveConfig(tailwindConfig);

const theme = extendTheme({
  components: {
    Button,
    Link: {
      baseStyle: {
        color: 'blue.500',
      },
    },
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
