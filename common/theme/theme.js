import { extendTheme } from '@chakra-ui/react';
import { ProgressStyles as Progress } from '@common/styles/components/progressStyles';

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
  colors: {
    brand: {
      100: 'var(--green-100)',
      300: 'var(--green-300)',
      400: 'var(--green-400)',
      500: 'var(--green-500)', // Default GP
      600: 'var(--green-600)',
      700: 'var(--green-700)',
      900: '#133300',
    },
    gray: {
      100: '#f1f3f5',
      300: '#dee2e6',
      500: '#adb5bd',
      700: '#495057',
      900: '#212529',
    },
    orange: {
      300: 'var(--orange-300)',
      500: 'var(--orange-500)',
      700: 'var(--orange-700)',
    },
    blue: {
      100: 'var(--blue-100)',
      300: 'var(--blue-300)',
      500: 'var(--blue-500)',
      900: 'var(--blue-900)',
    },
    default: {
      100: 'var(--green-100)',
      300: 'var(--green-300)',
      500: 'var(--green-500)',
    },
    general: {
      100: 'var(--green-100)',
      300: 'var(--green-300)',
      500: 'var(--green-500)',
    },
    arctic: {
      100: 'var(--arctic-100)',
      300: 'var(--arctic-300)',
      500: 'var(--arctic)',
    },
    health: {
      100: 'var(--health-100)',
      300: 'var(--health-300)',
      500: 'var(--health)',
    },
    climate: {
      100: 'var(--climate-100)',
      300: 'var(--climate-300)',
      500: 'var(--climate)',
    },
    plastics: {
      100: 'var(--plastics-100)',
      300: 'var(--plastics-300)',
      500: 'var(--plastics)',
    },
    forests: {
      100: 'var(--forests-100)',
      300: 'var(--forests-300)',
      500: 'var(--forests)',
    },
    oceans: {
      100: 'var(--oceans-100)',
      300: 'var(--oceans-300)',
      500: 'var(--oceans)',
    },
    theme: {
      default: 'var(--brand)',
      general: 'var(--brand)',
      arctic: 'var(--arctic)',
      health: 'var(--health)',
      climate: 'var(--climate)',
      plastics: 'var(--plastics)',
      forests: 'var(--forests)',
      oceans: 'var(--oceans)',
    },
  },
  styles: {
    global: {
      'html, #__next': {
        height: '100%',
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
      },
      '.body': {
        // todo check how to do this without breaking the site
        // height: '100%', // Push footer to bottom
        overflowY: 'scroll', // Always show scrollbar to avoid flickering
      },
      html: {
        scrollBehavior: 'smooth',
      },
      '#nprogress': {
        pointerEvents: 'none',
      },
      '#nprogress .bar': {
        background: 'brand.400',
        position: 'fixed',
        zIndex: '1031',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
      },
    },
  },
});

export default theme;
