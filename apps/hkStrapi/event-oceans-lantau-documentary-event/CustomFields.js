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
	handleSubmit
}) => {
	const [plusKids, setPlusKids] = useState('');
	const [plusFriends, setPlusFriends] = useState('');
	return (
		<>
			<Box w={'100%'}>
				<Text fontSize={'sm'} marginBottom={'.5em'}>
					{formContent.label_time}
				</Text>
				<Text fontSize={'sm'} px={2} color="var(--error-900)">
					{errors.Options_Time}
				</Text>
				<RadioGroup>
					{formContent.options_time &&
						formContent.options_time.map((d, index) => (
							<Radio
								name="CampaignData1__c"
								key={index}
								value={d.value}
								size={'sm'}
								w={'100%'}
								onChange={handleChange}
							>
								{d.label}
							</Radio>
						))}
				</RadioGroup>
			</Box>
			<Box w={'100%'}>
				<Text fontSize={'sm'} marginBottom={'.5em'}>
					{formContent.label_plus}
				</Text>
				<Text fontSize={'sm'}>{formContent.label_plus_kids}</Text>
				<Text fontSize={'sm'} px={2} color="var(--error-900)">
					{errors.Options_Kids}
				</Text>
				<RadioGroup>
					{formContent.options_kids &&
						formContent.options_kids.map((d, index) => (
							<Radio
								name="CampaignData2__c"
								key={index}
								value={d.value}
								size={'sm'}
								w={'auto'}
								mr={'10px'}
								onChange={handleChange}
							>
								{d.label}
							</Radio>
						))}
				</RadioGroup>

				<Text fontSize={'sm'}>{formContent.label_plus_friends}</Text>
				<Text fontSize={'sm'} px={2} color="var(--error-900)">
					{errors.Options_Friends}
				</Text>

				<RadioGroup>
					{formContent.options_friends &&
						formContent.options_friends.map((d, index) => (
							<Radio
								key={index}
								name="CampaignData3__c"
								value={d.value}
								size={'sm'}
								w={'auto'}
								mr={'10px'}
								onChange={handleChange}
							>
								{d.label}
							</Radio>
						))}
				</RadioGroup>
			</Box>
		</>
	);
};

export default CustomFields;
