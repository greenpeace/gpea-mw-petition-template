import React from 'react';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

export const Field = (props) => {
  const {
    name,
    type,
    errors,
    touched,
    label,
    handleChange,
    handleBlur,
    min,
    max,
    size = 'lg',
    value,
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
        min={min}
        max={max}
        value={value}
      />
      <FormErrorMessage color="red">{errors}</FormErrorMessage>
    </FormControl>
  );
};
