import React from 'react';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

const labelStyle = {
  fontSize: 'xs',
  color: 'gray.400',
};

export const Field = (props) => {
  const {
    name,
    type,
    errors,
    touched,
    label,
    handleChange,
    handleBlur,
    size = 'lg',
  } = props;

  return (
    <FormControl id={name} isInvalid={errors && touched}>
      {/* <FormLabel {...labelStyle}>{label}</FormLabel> */}
      <Input
        name={name}
        type={type}
        placeholder={label}
        onChange={handleChange}
        onBlur={handleBlur}
        _placeholder={{ fontSize: 16 }}
        size={size}
      />
      <FormErrorMessage color="red">{errors}</FormErrorMessage>
    </FormControl>
  );
};
