import { Flex, Image, Text } from '@chakra-ui/react';
import { theme } from '@/styles/theme';
import styles from './mainheader.module.scss';

const MainHeader = () => {
    return (
        <Flex
            w="100%"
        >
            <Flex
                backgroundImage="/images/background.svg"
                backgroundRepeat="repeat-x"
                backgroundSize="cover"
                h="368px"
                w="100%"
                flexDirection="column"
            >
                <Text
                    fontSize={{ base: theme.fonts.fontSizes.xl, md: theme.fonts.fontSizes['36'] }}
                    marginTop="80rem"
                    marginLeft="140rem"
                    color={theme.fonts.colors.light}
                >
                    5 Continentes,<br /> infinitas possibilidades.
                </Text>
                <Text
                    fontSize={{ base: theme.fonts.fontSizes.sm, md: theme.fonts.fontSizes.xl }}
                    marginTop="20rem"
                    marginLeft="140rem"
                    fontWeight={theme.fonts.fontWeights.normal}
                    color={theme.fonts.colors.gray}
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </Flex>
            <Image
                src="/images/airplane.svg"
                w="417.15rem"
                position='absolute'
                right="140rem"
                top="160rem"
                className={styles.airplane}
            />
        </Flex>
    )
}

export { MainHeader };