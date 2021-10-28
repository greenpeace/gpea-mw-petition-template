import { Box, Button } from '@chakra-ui/react';

export const FixedCTA = ({ children, onClick }) => {
  return (
    <Box
      pos={`fixed`}
      px={6}
      py={2}
      bottom={0}
      left={0}
      zIndex={99}
      w={`100%`}
      bg="rgba(255,255,255,0.95)"
    >
      <Button
        width="100%"
        borderRadius="md"
        fontSize="xl"
        px={2}
        py={6}
        color="white"
        bg="orange.500"
        _hover={{ bg: 'orange.300' }}
        onClick={onClick}
      >
        {children}
      </Button>
    </Box>
  );
};
