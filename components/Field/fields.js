import React from 'react';
import {
	Box,
	Flex,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input
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
		submitType,
		setSubmitType,
		donating
	} = props;

	return (
		<FormControl id={name} isInvalid={errors && touched} pos="relative">
			{donating ? (
				<Flex justifyContent="space-evenly">
					<FormLabel
						fontSize="md"
						minW="80px"
						lineHeight="48px"
						textAlign="center"
						color="#676767"
					>
						{label}
					</FormLabel>
					<Input
						name={name}
						type={type}
						onChange={handleChange}
						onBlur={handleBlur}
						placeholder="其他金額"
						size={size}
						min={min}
						max={max}
						value={value}
						bgColor={bgColor}
						h={h}
						onClick={() => {
							setSubmitType('other');
						}}
					/>
				</Flex>
			) : (
				<Box>
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
				</Box>
			)}
			<FormErrorMessage px={2} color="var(--error-900)">
				{errors}
			</FormErrorMessage>
		</FormControl>
	);
};
