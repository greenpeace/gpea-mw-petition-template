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
	console.log(touched)

	return (
		<>
			<Box w={'100%'}>
				<FormControl
					id="CampaignData2__c"
					isInvalid={errors.CampaignData2__c && touched.CampaignData2__c }
				>
					<Input
						name="CampaignData2__c"
						type="text"
						placeholder={formContent.label_school}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.CampaignData2__c}
						size="md"
					/>
					<FormErrorMessage px={2} color="var(--error-900)">
						{errors.CampaignData2__c}
					</FormErrorMessage>
					
				</FormControl>
			</Box>
			<Box w={'100%'}>
				<FormControl
					id="CampaignData3__c"
					isInvalid={errors.CampaignData3__c && touched.CampaignData3__c }
				>
					<Text fontSize={'sm'} marginBottom={'.5em'}>
						{formContent.label_school_type}
					</Text>
					{/* <Text fontSize={'sm'}>{formContent.label_plus_kids}</Text> */}
					<FormErrorMessage fontSize={'sm'} px={2} color="var(--error-900)">
						{errors.CampaignData3__c}
					</FormErrorMessage>
					{/* <Input type="text" name="CampaignData2__c" onChange={handleChange} hidden />
					<Input type="text" name="CampaignData3__c" onChange={handleChange} hidden /> */}
					<RadioGroup
						onChange={handleChange}
						onBlur={handleBlur}
					>
						{formContent.options_school_type &&
							formContent.options_school_type.map((d, index) => (
								<Radio
									name="CampaignData3__c"
									key={index}
									value={d.value}
									size={'sm'}
									w={'auto'}
									mr={'10px'}
									onChange={handleChange}
									onBlur={handleBlur}
								>
									{d.label}
								</Radio>
							))}
					</RadioGroup>
				</FormControl>				
				<Text fontSize={'sm'} mt={'1em'}>{formContent.addition_description}</Text>
			</Box>
		</>
	);
};

export default CustomFields;
