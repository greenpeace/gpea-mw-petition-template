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
	setFieldTouched,
	setFieldValue
}) => {
	// console.log('touched', touched);
	useEffect(() => {
		formContent?.custom_default_values &&
			Object.keys(formContent.custom_default_values).forEach((key) => {
				if (touched[key] !== true && key == 'CampaignData3__c') {
					console.log('set default', key, formContent.custom_default_values[key]);
					setFieldTouched(key, true, false);
					values[key] = formContent.custom_default_values[key];
					// values[key] = formContent.custom_default_values[key];
				}
			});
	}, [formContent, touched]);
	return (
		<>
			<Box w={'100%'}>
				{/* <Text
					fontSize={"sm"}
					marginBottom={'.5em'}
				>
					{formContent.label_viewers}
				</Text>
				<Text
					fontSize={"sm"}
					marginBottom={'.5em'}
					px={2}
					color="var(--error-900)"
				>
					{errors.Options_viewers}
				</Text> */}

				<FormControl
					id={formContent.name_viewers}
					isInvalid={errors.Options_viewers}
				>
					<Select
						onChange={handleChange}
						placeholder={formContent.label_viewers}
						fontSize={'16px'}
						size={'lg'}
						name={formContent.name_viewers}
					>
						{formContent.options_viewers &&
							formContent.options_viewers.map((d) => (
								<option key={d.value} value={`${d.value}`}>
									{d.value}
								</option>
							))}
					</Select>
					<FormErrorMessage px={2} color="var(--error-900)">
						{errors.Options_viewers}
					</FormErrorMessage>
				</FormControl>

				{/*<Flex flexWrap={'wrap'}>
					{
						formContent.options_viewers &&
						formContent.options_viewers.map((d, i) => (
							<Checkbox 
							name={formContent.name_viewers} 
							key={i} 
							value={d.value} 
							size={"sm"} 
							w={'50%'} 
							mb={'5px'} 
							onChange={handleChange}
							>
								{d.label}
							</Checkbox>
						))
					}
				</Flex>*/}
				
			</Box>
			
			
		</>
	);
};

export default CustomFields;
