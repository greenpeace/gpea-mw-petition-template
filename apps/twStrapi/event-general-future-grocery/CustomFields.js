import React, { useEffect, useRef, useState } from 'react';
import {
	FormControl,
	FormErrorMessage,
	Button,
	Box,
	Flex,
	Text,
	HStack,
	Stack,
	Select,
	Input,
	Checkbox,
	Radio,
	RadioGroup,
	Heading
} from '@chakra-ui/react';

const CustomFields = ({
	errors,
	touched,
	values,
	formContent,
	handleChange,
	handleBlur,
	handleSubmit,
	setFieldValue
}) => {

	return (
		<>
			<Box w={'100%'}>
				<Text
					fontSize={"sm"}
					marginBottom={'.5em'}
				>
					{formContent.label_products}
				</Text>
				<Text
					fontSize={"sm"}
					marginBottom={'.5em'}
					px={2}
					color="var(--error-900)"
				>
					{errors.Options_products}
				</Text>
				<Flex flexWrap={'wrap'}>
					{
						formContent.options_products &&
						formContent.options_products.map((d, i) => (
							<Checkbox 
							name={formContent.name_products} 
							key={i} 
							value={d.value} 
							size={"sm"} 
							w={'50%'} 
							mb={'5px'} 
							onChange={handleChange}
							isDisabled={values[formContent.name_products]?.length >= 3 && !values[formContent.name_products]?.includes(d.value)}
							>
								{d.label}
							</Checkbox>
						))
					}
				</Flex>
				
			</Box>
			
			
		</>
	);
};

export default CustomFields;
