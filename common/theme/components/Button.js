export const Button = {
  variants: {
    roundedCTA: {
      width: '100%',
      borderRadius: '4px',
      fontSize: '20px',
      fontWeight: '500',
      minHeight: '56px',
      py: '12px',
      px: '4px',
      color: 'white',
      bg: 'orange.500',
      _hover: { bg: 'orange.300' },
    },
    subCTA: {
      color: 'white',
      bg: 'orange.500',
      borderRadius: 'full',
      size: 'lg',
      px: 4,
      py: 6,
      minWidth: '120px',
      _hover: {
        bg: 'orange.300',
        _disabled: {
          bgColor: 'orange.300',
        },
      },
      _disabled: { bg: 'orange.300' },
    },
    survey: {
      color: 'white',
      px: 8,
      py: 8,
      bg: 'orange.500',
      rounded: 'full',
      fontWeight: 'bold',
      fontSize: { base: 'xl', md: '2xl' },
      letterSpacing: '2px',
      _hover: { bg: 'orange.300' },
    },
    quiz: {
      rounded: 'full',
      transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)',
      colorScheme: 'orange',
      letterSpacing: '2px',
      borderWidth: '4px',
      background:
        'linear-gradient(150deg, rgba(244,223,96,1) 0%, rgba(255,129,0,1) 100%)',
      borderColor: 'white',
      color: 'white',
      fontWeight: 'bold',
    },
    quizSquare: {
      borderRadius: '4px',
      transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)',
      colorScheme: 'orange',
      letterSpacing: '2px',
      borderWidth: '4px',
      background: '#FF8100',
      color: 'white',
      fontWeight: 'bold',
      borderWidth: '0',
      boxShadow: '3px 3px 5px rgba(0, 0, 0, .3)',
    },
  },
};
