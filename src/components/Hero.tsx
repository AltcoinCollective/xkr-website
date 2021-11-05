import * as React from 'react'
import { Container, Heading, Stack, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Img } from '@chakra-ui/react'

const Hero = () => {
    return (
        <Stack padding="3" marginTop="5">
                <Img src=""/>
                <Heading align="center" fontSize="6xl">A Nordic cryptocurrency for the future</Heading>
                <Text align="center" fontSize="md">On 2 April 2019, Kryptokrona was launched to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the money of the future.</Text>
            <Stack padding="3" alignSelf="center" direction="row">
                <Button colorScheme="green" size="lg">Get Started</Button>
                <Button colorScheme="green" variant="outline" size="lg">Download</Button>
            </Stack>
        </Stack>
    )
}

export default Hero