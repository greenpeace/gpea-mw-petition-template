import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Text,
} from '@chakra-ui/react';

import { paragraphProps } from '@common/styles/components/contentStyle';

import data from './index.json';

const DonateFAQ = ({ locale = 'HKChinese' }) => {
	return (
		<Accordion my="4" allowToggle={true}>
			{data[locale].accordions.map((d, i) => {
				return (
					<AccordionItem key={i}>
						<AccordionButton
							_expanded={{ fontWeight: 'bold', bg: '', color: '' }}
						>
							<AccordionIcon mr="2" />
							<Box py="6" p="4" flex="1" textAlign="left" >
								<Text as="p" fontSize="md"
									
									dangerouslySetInnerHTML={{
										__html: d.title
									}}
								>
								</Text>
							</Box>
						</AccordionButton>
						<AccordionPanel p="4">
							<Text
								as="p"
								{...paragraphProps}
								textAlign={'initial'}
								sx={{'a':{color: 'var(--brand)'}}}
								dangerouslySetInnerHTML={{
									__html: d.desc
								}}
							></Text>
						</AccordionPanel>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
};

export default DonateFAQ;
