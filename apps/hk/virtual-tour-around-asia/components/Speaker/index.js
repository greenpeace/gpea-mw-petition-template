import {
    Avatar,
    Flex,
    SimpleGrid,
    useColorModeValue,
    Text,
    Stack,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { paragraphProps } from '@common/styles/components/contentStyle';

const pStyle = paragraphProps;

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
            position="realtive"
            border="1px"
            borderColor="gray.100"
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
                m={{ base: '0 0 20px 0', xl: '0 20px 0 0' }}
            />
            <Stack
                direction={'column'}
                textAlign={'left'}
                justifyContent={'space-between'}
                spacing="4"
            >
                <Text fontWeight="bold">
                    {name}
                    <br />
                    <Text as="span" fontSize="sm" color={'gray.500'}>
                        {role}
                    </Text>
                </Text>
                <Text {...pStyle}>{content}</Text>
            </Stack>
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
