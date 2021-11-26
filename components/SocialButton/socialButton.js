import { chakra, VisuallyHidden } from '@chakra-ui/react';

export default function SocialButton({ children, label, href }) {
  return (
    <chakra.button
      className={'social-share'}
      zIndex={1}
      bg={'white'}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={'_blank'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}
