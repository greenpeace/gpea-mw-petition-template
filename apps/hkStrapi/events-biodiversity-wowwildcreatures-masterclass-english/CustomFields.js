import React, { useEffect, useRef, useState } from 'react';
import { Field } from '@components/Field/fields';
import { validation } from '@components/GP/HKForm/validation';
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
			<Box mt={'0!important'}>
				<input type="text" name="Preferred_Language__c" value="English" onChange={handleChange} hidden />
			</Box>
		</>
	);
};

export default CustomFields;
