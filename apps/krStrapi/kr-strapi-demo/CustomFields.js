import React, { useEffect, useRef, useState } from 'react';
import { Field } from '@components/Field/fields';
// import { validation } from '@components/GP/TWForm/validation';
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
	setFieldValue,
	setTouched
}) => {
	if(!formContent.options_mkt) return (<></>);
	const [checkedItems, setCheckedItems] = React.useState([false, false, false])
	const allChecked = checkedItems.every(Boolean)

	const handleCheckbox = async (e) => {
		// values[e.target.name] = e.target.checked;
		if (e.target.name === 'OptIn') {
			await setCheckedItems([e.target.checked, e.target.checked, e.target.checked])
			// setFieldValue(e.target.name, e.target.checked, true);
			for(let i = 1; i <= 3; i++){
				setFieldValue(`OptIn${i}`, e.target.checked, false);
			}
			setTouched({
				OptIn1: true,
				OptIn2: true,
				OptIn3: true
			},true);
		} else {
			const index = parseInt(e.target.name.replace('OptIn', '')) -1;
			const newCheckedItems = [...checkedItems];
			newCheckedItems[index] = e.target.checked;
			setCheckedItems(newCheckedItems);
			await setFieldValue(e.target.name, e.target.checked, true);
			setFieldValue('OptIn', newCheckedItems.every(Boolean), false);
			setTouched({
				OptIn1: true,
				OptIn2: true,
				OptIn3: true
			},true);
		}
		handleChange(e);
	}
	useEffect(() => {
		
	}, [values.OptIn]);
	return (
		<>
			<Box>
				<FormControl
						id={formContent.OptIn}
						isInvalid={errors.OptIn && touched.OptIn }
				>
					<Flex direction={{ base: 'row' }} align={'flex-start'}>
						<Box flex={0} mr={2} pt={1}>
							<Checkbox
								id="OptIn"
								name="OptIn"
								onChange={handleCheckbox}
								onBlur={handleBlur}
								isChecked={allChecked}
							/>
						</Box>
						<Text
							fontSize="xs"
							dangerouslySetInnerHTML={{
								__html: formContent.options_mkt[0].label
							}}
						></Text>
					</Flex>	
				</FormControl>
				<FormControl
						id={formContent.OptIn1}
						isInvalid={errors.OptIn1 && (touched.OptIn1 || touched.OptIn2 || touched.OptIn3) }
				>
					<Flex direction={{ base: 'row' }} align={'flex-start'}>
						<Box flex={0} mr={2} pt={1}>
							<Checkbox
								id="OptIn1"
								name="OptIn1"
								onChange={handleCheckbox}
								onBlur={handleBlur}
								isChecked={checkedItems[0]}
							/>
						</Box>
						<Text
							fontSize="xs"
							dangerouslySetInnerHTML={{
								__html: formContent.options_mkt[1].label
							}}
						></Text>
						<FormErrorMessage px={2} mt={0} fontSize="xs" color="var(--error-900)">
							{errors.OptIn1}
						</FormErrorMessage>
					</Flex>
				</FormControl>
				<FormControl
						id={formContent.OptIn2}
						isInvalid={errors.OptIn2 && (touched.OptIn1 || touched.OptIn2 || touched.OptIn3) }
				>
					<Flex direction={{ base: 'row' }} align={'flex-start'}>
						<Box flex={0} mr={2} pt={1}>
							<Checkbox
								id="OptIn2"
								name="OptIn2"
								onChange={handleCheckbox}
								onBlur={handleBlur}
								isChecked={checkedItems[1]}
							/>
						</Box>
						<Text
							fontSize="xs"
							dangerouslySetInnerHTML={{
								__html: formContent.options_mkt[2].label
							}}
						></Text>
						<FormErrorMessage px={2} mt={0} fontSize="xs" color="var(--error-900)">
							{errors.OptIn2}
						</FormErrorMessage>
					</Flex>
				</FormControl>
				<FormControl
						id={formContent.OptIn3}
						isInvalid={errors.OptIn3 && (touched.OptIn1 || touched.OptIn2 || touched.OptIn3) }
				>
					<Flex direction={{ base: 'row' }} align={'flex-start'}>
						<Box flex={0} mr={2} pt={1}>
							<Checkbox
								id="OptIn3"
								name="OptIn3"
								onChange={handleCheckbox}
								onBlur={handleBlur}
								isChecked={checkedItems[2]}
							/>
						</Box>
						<Text
							fontSize="xs"
							dangerouslySetInnerHTML={{
								__html: formContent.options_mkt[3].label
							}}
						></Text>
						<FormErrorMessage px={2} mt={0} fontSize="xs" color="var(--error-900)">
							{errors.OptIn3}
						</FormErrorMessage>
					</Flex>
				</FormControl>
			</Box>
			
			
		</>
	);
};

export default CustomFields;
