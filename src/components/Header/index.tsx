import { Flex } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'

const Header = () => {
    return (
        <Flex
            justifyContent='center'
            alignItems='center'
        >
            <Image src="/images/logo.svg"></Image>
        </Flex>
    );
};

export { Header };