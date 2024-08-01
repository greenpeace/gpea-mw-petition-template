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
			<Box w={'100%'}>
				<Text
					fontSize={"sm"}
					marginBottom={'.5em'}
				>
					{formContent.label_concern}
				</Text>
				<Text
					fontSize={"sm"}
					marginBottom={'.5em'}
					px={2}
					color="var(--error-900)"
				>
					{errors.Options_Concern}
				</Text>
				<Flex flexWrap={'wrap'}>
					{
						formContent.options_concern &&
						formContent.options_concern.map((d) => (
							<Checkbox name={formContent.name_concern} value={d.value} size={"sm"} w={'50%'} mb={'5px'} onChange={handleChange}>
								{d.label}
							</Checkbox>
						))
					}
				</Flex>
				
			</Box>
			<Box w={'100%'}>
				<Text
						fontSize={"sm"}
						marginBottom={'.5em'}
					>
						{formContent.label_opinion}
				</Text>
				<FormControl
					id={formContent.name_opinion}
					isInvalid={errors.Opinion && touched.CampaignData2__c }
				>
					<Input
						name={formContent.name_opinion}
						type="text"
						placeholder={formContent.placeholder_opinion}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.CampaignData2__c}
						size="md"
					/>
					<FormErrorMessage px={2} color="var(--error-900)">
						{errors.Opinion}
					</FormErrorMessage>
					
				</FormControl>

				{/* <Field
					errors={errors.Opinion}
					touched={touched.Opinion}
					label={formContent.placeholder_opinion}
					name={formContent.name_opinion ? formContent.name_opinion : 'CampaignData1__c'}
					type={'text'}
					handleChange={handleChange}
					handleBlur={handleBlur}
					// value={values.Opinion}
				/> */}
			</Box>
			
		</>
	);
};

export default CustomFields;
