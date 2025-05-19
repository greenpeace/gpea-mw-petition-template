import React, { useEffect, useRef, useState } from 'react';
import { Field } from '@components/Field/fields';
import {
	Box,
	Flex,
	Text,
	Stack,
	Input,
	Checkbox,
	InputGroup,
	FormControl,
	FormErrorMessage,
	InputLeftAddon
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
	const [selectedOptions, setSelectedOptions] = useState({
		question01: [],
		question02: []
	});
	// Create individual input states for each option
	const [inputValues, setInputValues] = useState(['', '', '', '', '']);

	// Track if there's a general duplicate error for the field
	const [hasDuplicateError, setHasDuplicateError] = useState(false);

	// Track if form has been submitted
	const [hasFormSubmitted, setHasFormSubmitted] = useState(false);

	// Track if any value has been entered
	const [hasAnyValue, setHasAnyValue] = useState(false);

	// Track if all values have been entered
	const [hasAllValues, setHasAllValues] = useState(false);

	const maxRank = formContent.question_02_options ? formContent.question_02_options.length : 0;

	// Calculate the number of actually filled ranking inputs
	const filledRankingsCount = inputValues.slice(0, maxRank).filter(v => v !== '' && v !== null && v !== undefined).length;

	// Add effect to populate form field on component mount and when inputValues change
	useEffect(() => {
		updateFormValue();

		// Check if at least one value exists
		const anyValue = inputValues.some((val) => val !== '');
		setHasAnyValue(anyValue);

		// Check if all values have been filled (for all available options)
		const optionsCount = formContent.question_02_options
			? formContent.question_02_options.length
			: 5;
		const filledValues = inputValues.filter((val) => val !== '').length;
		setHasAllValues(filledValues === optionsCount);
	}, [inputValues, formContent.question_02_options, setFieldValue]);

	// For debug purposes: monitor the actual form value
	useEffect(() => {
		console.log('Current CampaignData2__c value:', values.CampaignData2__c);
	}, [values.CampaignData2__c]);

	const handleQuestion01Change = (value) => {
		setSelectedOptions((prev) => {
			const newSelection = prev.question01.includes(value)
				? prev.question01.filter((item) => item !== value)
				: [...prev.question01, value];

			// For CampaignData1__c, use comma-separated values of all selected options
			setFieldValue(
				'CampaignData1__c',
				newSelection.length > 0 ? newSelection.join(',') : ''
			);

			return {
				...prev,
				question01: newSelection
			};
		});
	};

	// Function to update the form value based on current inputValues
	const updateFormValue = () => {
		const currentQuestionOptions = formContent.question_02_options;
		const optionsCount = currentQuestionOptions
			? currentQuestionOptions.length
			: 0;

		if (optionsCount === 0) {
			setFieldValue('CampaignData2__c', '', true);
			setHasDuplicateError(false); // No options, no duplicates
			return;
		}

		// Consider only inputs relevant to the number of options
		const relevantInputValues = inputValues.slice(0, optionsCount);
		const filledRankings = relevantInputValues.filter((v) => v !== '');

		// Check for duplicates among filled rankings
		const uniqueRankings = new Set(filledRankings);
		const duplicatesPresent = filledRankings.length !== uniqueRankings.size;
		setHasDuplicateError(duplicatesPresent && filledRankings.length > 0);

		// Check if all options have been ranked
		const allOptionsRanked = filledRankings.length === optionsCount;

		if (duplicatesPresent || !allOptionsRanked) {
			setFieldValue('CampaignData2__c', '', true); // Invalid state, clear field value
			return;
		}

		// At this point, all options are ranked and there are no duplicates.
		const mappedValues = [];
		currentQuestionOptions.forEach((opt, i) => {
			// This check should be redundant if allOptionsRanked is true, but good for safety
			if (relevantInputValues[i] !== '') {
				mappedValues.push({
					label: opt.label,
					value: opt.value, // value from json, not used in final string here
					rank: relevantInputValues[i]
				});
			}
		});

		// Sort by rank (numerically) and create formatted string
		const formattedValue = mappedValues
			.sort((a, b) => parseInt(a.rank, 10) - parseInt(b.rank, 10))
			.map((item) => `${item.label} : ${item.rank}`)
			.join(' ,');

		console.log('Setting CampaignData2__c to:', formattedValue);
		setFieldValue('CampaignData2__c', formattedValue, true);
	};

	// This runs before form submission to ensure data is updated
	useEffect(() => {
		const handleBeforeSubmit = (e) => {
			console.log('Before submit event triggered');
			setHasFormSubmitted(true); // Set submit attempt flag

			// Check if we have input values but the form value isn't set correctly
			const hasInputs = inputValues.some((val) => val !== '');
			if (hasInputs) {
				console.log('Force updating form values before submission');
				updateFormValue();

				// Also update checkboxes to ensure they're in the correct format
				if (selectedOptions.question01.length > 0) {
					setFieldValue(
						'CampaignData1__c',
						selectedOptions.question01.join(','),
						true
					);
				}
			}
		};

		// Add event listener to catch submission attempts
		document.addEventListener('submit', handleBeforeSubmit, true);

		// Cleanup
		return () => {
			document.removeEventListener('submit', handleBeforeSubmit, true);
		};
	}, [
		inputValues,
		selectedOptions,
		values.CampaignData2__c,
		setFieldValue,
		updateFormValue
	]);

	const handleOrderChange = (index, value) => {
		if (
			value === '' ||
			(maxRank > 0 && parseInt(value, 10) >= 1 && parseInt(value, 10) <= maxRank)
		) {
			const newValues = [...inputValues];
			newValues[index] = value === '' ? '' : parseInt(value, 10);

			// Update state
			setInputValues(newValues);
		}
	};

	console.log('values.CampaignData2__c', values.CampaignData2__c)

	return (
		<>
			<Box w={'100%'}>
				<Text fontSize={'sm'} marginBottom={'.5em'}>
					{formContent.label_question_01}
				</Text>
				<Stack spacing={1}>
					{formContent.question_01_options &&
						formContent.question_01_options.map((d, index) => (
							<Checkbox
								key={index}
								value={d.value}
								size={'md'}
								w={'100%'}
								isChecked={selectedOptions.question01.includes(d.value)}
								onChange={() => handleQuestion01Change(d.value)}
							>
								<span style={{ fontSize: '14px' }}>{d.label}</span>
							</Checkbox>
						))}
				</Stack>
				{/* Show error for question 1 only after submit attempt or if touched */}
				{(hasFormSubmitted || touched.CampaignData1__c) &&
					errors.question_01_error && (
						<Text fontSize={'sm'} color="var(--error-900)" mt={1}>
							{errors.question_01_error}
						</Text>
					)}
			</Box>
			<Box w={'100%'}>
				<Text
					fontSize={'sm'}
					marginBottom={'.5em'}
					dangerouslySetInnerHTML={{ __html: formContent.label_question_02 }}
				/>

				{/* Hidden inputs for form values - controlled components with explicit values */}
				<Input
					type="text"
					id="CampaignData2__c"
					name="CampaignData2__c"
					value={values.CampaignData2__c || ''}
					onChange={(e) => {
						handleChange(e);
					}}
					hidden
				/>

				{formContent.question_02_options &&
					formContent.question_02_options.map((d, index) => (
						<Box key={index} mb={2}>
							<Flex alignItems="center">
								<InputGroup size="xs" maxW="24px" mr={3}>
									<Input
										value={inputValues[index] || ''}
										onChange={(e) => handleOrderChange(index, e.target.value)}
										type="number"
										min={1}
										max={maxRank > 0 ? maxRank : undefined}
										placeholder=""
										py={1}
										px={2}
										textAlign="center"
										height="24px"
										style={{
											minHeight: '24px'
										}}
									/>
								</InputGroup>
								<Text fontSize="sm">{d.label}</Text>
							</Flex>
						</Box>
					))}

				{/* Error display section */}
				{(hasFormSubmitted || hasAnyValue) &&
					errors.question_02_error && // Error must be flagged by CustomRules
					!hasDuplicateError && (
						<Text fontSize={'sm'} color="var(--error-900)" mt={2}>
							{filledRankingsCount === 0
								? errors.question_02_error // Show "請輸入數字1至4"
								: "必須全部填寫"             // Show "必須全部填寫" if some but not all are ranked, or other CustomRules failure
							}
						</Text>
					)}

				{/* Show specific duplicate error if duptes are present. */}
				{hasDuplicateError && (
					<Text fontSize={'sm'} color="var(--error-900)" mt={2}>
						{formContent.question_02_duplicate_values_alert}
					</Text>
				)}
			</Box>
			<Box w={'100%'}>
				<Text fontSize={'sm'} marginBottom={'.5em'}>
					{formContent.label_opinion_optional}
				</Text>
				<FormControl
					id={formContent.name_opinion}
					isInvalid={errors.Opinion && touched.CampaignData3__c}
				>
					<Input
						name={formContent.name_opinion}
						type="text"
						placeholder={formContent.placeholder_opinion}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.CampaignData3__c}
						size="md"
					/>
					<FormErrorMessage pr={2} pl={0} color="var(--error-900)">
						{errors.Opinion}
					</FormErrorMessage>
				</FormControl>
			</Box>
		</>
	);
};

export default CustomFields;
