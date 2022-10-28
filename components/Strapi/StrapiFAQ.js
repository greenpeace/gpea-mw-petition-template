import React, { useEffect, useState } from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Text
} from '@chakra-ui/react';

import { paragraphProps } from '@common/styles/components/contentStyle';

const StrapiDonateFAQ = ({ locale = 'zh-Hant-HK' }) => {
	const [faq, setFaq] = useState([]);
	const list = faq?.attributes?.questionAnswer;

	useEffect(async () => {
		await fetch(
			`https://strapi.small-service.gpeastasia.org/api/faq?populate=*&locale=${locale}`
		)
			.then((response) => response.json())
			.then((data) => {
				setFaq(data.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	if (!faq) {
		return <div>Loading...</div>;
	}

	return (
		<Accordion my="4" allowToggle={true}>
			{list?.map((d, i) => {
				return (
					<AccordionItem key={i}>
						<AccordionButton
							_expanded={{ fontWeight: 'bold', bg: '', color: '' }}
						>
							<AccordionIcon mr="2" />
							<Box py="6" p="4" flex="1" textAlign="left">
								<Text as="p" fontSize="md">
									{d.question}
								</Text>
							</Box>
						</AccordionButton>
						<AccordionPanel p="4">
							<Text
								as="p"
								{...paragraphProps}
								textAlign={'initial'}
								dangerouslySetInnerHTML={{
									__html: d.answer
								}}
							></Text>
						</AccordionPanel>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
};

export default StrapiDonateFAQ;
