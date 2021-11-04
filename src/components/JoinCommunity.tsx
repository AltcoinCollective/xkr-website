import { Button } from '@chakra-ui/button'
import { Box, Center, Container, Stack, Text } from '@chakra-ui/layout'
import * as React from 'react'

const JoinCommunity = () => {
    return(
        <Container maxW="container.lg">
            <Text align="center" fontSize="6xl">Join the best community</Text>
            <Text align="center" fontSize="md">Get the most out of everything</Text>
            <Stack align="center" direction="row" spacing={2} padding="1rem">
                <Button colorScheme="green">Join Hugin</Button>
                <Button colorScheme="teal" variant="outline">Join Discord</Button>
            </Stack>
        </Container>
    )
}

export default JoinCommunity