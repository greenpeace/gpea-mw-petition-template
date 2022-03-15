const styles = {
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
      background: 'brand.500',
      position: 'fixed',
      zIndex: '1031',
      top: 0,
      left: 0,
      width: '100%',
      height: '2px',
    },
    '#nprogress .spinner': {
      display: 'none',
    },
  },
};

export default styles;
