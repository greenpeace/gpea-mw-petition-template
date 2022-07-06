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
    size = 'md',
    value,
    bgColor = 'transparent',
    h = '48px',
  } = props;

  return (
    <FormControl id={name} isInvalid={errors && touched}>
      {/* <FormLabel {...labelStyle}>{label}</FormLabel> */}
      <Input
        name={name}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={label}
        _placeholder={{ color: 'gray.500' }}
        size={size}
        min={min}
        max={max}
        value={value}
        errorBorderColor="var(--error-900)"
        bgColor={bgColor}
        h={h}
      />
      <FormErrorMessage color="red">{errors}</FormErrorMessage>
    </FormControl>
  );
};
