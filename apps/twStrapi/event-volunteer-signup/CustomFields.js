import React, { useEffect, useRef, useState } from 'react';
import { Field } from '@components/Field/fields';
import { validation } from '@components/GP/TWForm/validation';
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
			<Box>
				<FormControl
					id="CampaignData2__c"
					isInvalid={errors.CampaignData2__c && touched.CampaignData2__c }
				>
					<Select
						onChange={handleChange}
						onBlur={handleBlur}
						fontSize={'16px'}
						placeholder={formContent.label_gender}
						name={'CampaignData2__c'}
						size={'lg'}
					>
						{formContent.options_gender.map((d, index) => (
							<option
								key={index}
								value={`${d.value}`}
								disabled={d.disabled ? true : null}
							>
								{d.value}
							</option>
						))}
					</Select>
					<FormErrorMessage fontSize={'sm'} px={2} color="var(--error-900)">
						{errors.CampaignData2__c}
					</FormErrorMessage>
				</FormControl>				
			</Box>
			<Box>
				<FormControl
					id={'CampaignData3__c'}
					isInvalid={errors.CampaignData3__c && touched.CampaignData3__c}
				>
					<Select
						onChange={handleChange}
						onBlur={handleBlur}
						fontSize={'16px'}
						placeholder={formContent.label_counties}
						name={'CampaignData3__c'}
						size={'lg'}
					>
						{formContent.options_counties.options.map((d, index) => (
							<option
								key={index}
								value={`${d.value}`}
								disabled={d.disabled ? true : null}
							>
								{d.value}
							</option>
						))}
					</Select>
					<FormErrorMessage px={2} color="var(--error-900)">
						{errors.CampaignData3__c}
					</FormErrorMessage>
				</FormControl>
			</Box>
			
		</>
	);
};

export default CustomFields;
