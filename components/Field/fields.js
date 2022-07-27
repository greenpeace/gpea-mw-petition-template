import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';

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
    bgColor = 'white',
    h,
  } = props;

  return (
    <FormControl id={name} isInvalid={errors && touched} pos="relative">
      <FormLabel d="none" fontSize="xs">
        {label}
      </FormLabel>
      <Input
        name={name}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={label}
        size={size}
        min={min}
        max={max}
        value={value}
        bgColor={bgColor}
        h={h}
      />
      <FormErrorMessage px={2} color="var(--error-900)">
        {errors}
      </FormErrorMessage>
    </FormControl>
  );
};
