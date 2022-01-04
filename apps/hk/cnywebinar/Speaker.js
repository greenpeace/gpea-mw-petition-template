import {
  Avatar,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
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
    <Flex
      boxShadow={'lg'}
      direction={{ base: 'column', xl: 'row' }}
      width={'full'}
      rounded={'xl'}
      px={6}
      py={8}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        width: 'full',
        filter: 'blur(10px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
        // backgroundImage: backgrounds[index % 4],
      }}
    >
      <Avatar
        src={avatar}
        height={'120px'}
        width={'120px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 20px 0 0' }}
      />
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}
      >
        <Text {...pStyle}>{content}</Text>
        <Text fontWeight="bold" fontSize="md" letterSpacing={'1px'}>
          {name}
          <br />
          <Text as="span" fontSize="sm" color={'gray.500'}>
            {role}
          </Text>
        </Text>
      </Flex>
    </Flex>
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
