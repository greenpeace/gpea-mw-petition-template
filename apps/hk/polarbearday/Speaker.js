import { Avatar, Box, Flex, SimpleGrid, Text, Stack } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { paragraphProps } from '@common/styles/components/contentStyle';

const pStyle = paragraphProps;

// const backgrounds = [
//   `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
// ]

function TestmonialCard(props) {
  const { name, role, content, avatar, theme } = props;
  const themeInterests = theme.interests;
  return (
    <Box
      boxShadow={'lg'}
      border="1px"
      borderColor="gray.100"
      width={'full'}
      textAlign={'left'}
      rounded={'xl'}
      px={6}
      py={6}
      position="realtive"
    >
      <Stack my={6} direction={'row'} spacing={4} align={'center'}>
        <Avatar size={'xl'} bgColor={'white'} src={avatar} />
        <Stack direction={'column'} textAlign={'left'} spacing={1}>
          <Text fontSize={'md'}>{name}</Text>
          <Text color={'gray.500'} fontSize={'sm'}>
            {role}
          </Text>
        </Stack>
      </Stack>
      <Text {...pStyle} fontSize="sm">
        {content}
      </Text>
    </Box>
  );
}

function GridBlurredBackdrop({ content, theme }) {
  return (
    <Flex
      textAlign={'center'}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
    >
      <SimpleGrid columns={{ base: 1 }} spacing={'20'} mb={6} mx={'auto'}>
        {content.map((cardInfo, index) => (
          <TestmonialCard
            {...cardInfo}
            index={index}
            theme={theme}
            key={index}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

const mapStateToProps = ({ theme }) => {
  return { theme: theme.data };
};

export default connect(mapStateToProps)(GridBlurredBackdrop);
