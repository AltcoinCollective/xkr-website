import * as React from 'react'
import { Container, Stack, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

const Hero = () => {
    return (
    <Container maxW="container.lg">
        <Stack padding="3" marginTop="5">
                <Text align="center" fontSize="6xl">A Nordic cryptocurrency for the future</Text>
                <Text align="center" fontSize="md">On 2 April 2019, the project was launched to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the money of the future.</Text>
            <Stack padding="3" alignSelf="center" direction="row">
                <Button colorScheme="green">Get Started</Button>
                <Button colorScheme="green" variant="outline">Download</Button>
            </Stack>
        </Stack>
    </Container>
    )
}

export default Hero