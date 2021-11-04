import { Button } from '@chakra-ui/button'
import { Box, Center, Container, Stack, Text } from '@chakra-ui/layout'
import { background } from '@chakra-ui/styled-system'
import * as React from 'react'

const JoinCommunity = () => {
    return(
        <Container maxW="container.lg">
        <Stack padding="3" marginTop="5">
                <Text align="center" fontSize="5xl">Join the best community</Text>
                <Text align="center" fontSize="md">Get the best out of everything</Text>
            <Stack padding="3" alignSelf="center" direction="row">
                <Button colorScheme="green">Join Hugin</Button>
                <Button colorScheme="green" variant="outline">Join Discord</Button>
            </Stack>
        </Stack>
        </Container>
    )
}

export default JoinCommunity