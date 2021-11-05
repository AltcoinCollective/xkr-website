import * as React from 'react'
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Img } from '@chakra-ui/react'
import { background } from '@chakra-ui/styled-system';

const Hero = () => {
    return (
    <Container padding='0' maxW='7xl'>
            <Img
            className='rgb'
            maxW='7xl'
            src='https://kryptolink.se/static/xkrart-62cd1762a4c10098ca3b6b8dcca2c7f8.png'
            position='relative'
            objectFit='cover'
            objectPosition='center'
            ></Img>
        <Stack px="5" pt='10'>
                <Heading align="center" fontSize="6xl">A Nordic cryptocurrency for the future</Heading>
                <Text align="center" fontSize="md">On 2 April 2019, Kryptokrona was launched to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the money of the future.</Text>
            <Stack alignSelf="center" direction="row">
                <Button 
                bg='gray.900' 
                color='white' 
                size="lg"
                _hover={{
                    bg:'gray.500'
                }}
                >Get Started</Button>
                <Button colorScheme="black" variant="outline" size="lg">Download</Button>
            </Stack>
        <Stack>
            
        </Stack>
        </Stack>
    </Container>
    )
}

export default Hero