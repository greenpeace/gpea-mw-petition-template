export const Input = {
  baseStyle: {
    /**
     * Styles set within { variants } will override base styles
     * Styles set within { sizes } will override base styles
     * The Input component uses "md" size and "outline" variant by default.
     *
     * You can unset those defaults by using null in defaultProps:
     *    defaultProps: {
     *      size: null,
     *      variant: null
     *    },
     *
     * You will lose all default styles this way, including things like focus.
     */
    field: {
      // Add custom base styles here
    },
  },
  sizes: {
    /**
     * Input component will receive "md" styles by default
     * Styles set within { variants } will override styles at all sizes
     *
     * The styles below are what Chakra will use unless replaced.
     */
    xs: {
      field: {
        borderRadius: 'sm',
        fontSize: 'xs',
        height: 6,
        paddingX: 2,
      },
    },
    sm: {
      field: {
        borderRadius: 'sm',
        fontSize: 'sm',
        height: 8,
        paddingX: 3,
      },
    },
    md: {
      field: {
        borderRadius: 'md',
        fontSize: 'md',
        height: 10,
        paddingX: 4,
      },
    },
    lg: {
      field: {
        borderRadius: 'md',
        fontSize: 'lg',
        height: 12,
        paddingX: 4,
      },
    },
  },
  variants: {
    /**
     * Input component will use "outline" styles by default.
     * Styles set here will override anything in { baseStyle } and { sizes }
     *
     * The styles below are what Chakra will use unless replaced.
     */
    outline: {
      field: {
        background: 'inherit',
        border: '1px solid',
        borderColor: 'inherit',
        _focus: {
          zIndex: 1,
          borderColor: '#3182ce',
          boxShadow: '0 0 0 1px #3182ce',
        },
        _hover: { borderColor: 'gray.300' },
      },
    },
    filled: {
      field: {
        background: 'gray.100',
        border: '2px solid',
        borderColor: 'transparent',
        _focus: {
          background: 'transparent',
          borderColor: '#3182ce',
        },
        _hover: {
          background: 'gray.300',
        },
      },
    },
    flushed: {
      field: {
        background: 'transparent',
        borderBottom: '1px solid',
        borderColor: 'inherit',
        borderRadius: 0,
        paddingX: 0,
        _focus: {
          borderColor: '#3182ce',
          boxShadow: '0 0 0 1px #3182ce',
        },
      },
    },
    unstyled: {
      field: {
        background: 'transparent',
        borderRadius: 'md',
        height: 'auto',
        paddingX: 0,
      },
    },
  },
  defaultProps: {
    /**
     * Set either or both of these to null to use only what's in { baseStyle }
     */
    size: 'md',
    variant: 'outline',
  },
};
