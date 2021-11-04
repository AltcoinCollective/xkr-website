import { Button } from '@chakra-ui/button'
import { Box, Center, Container, Stack, Text, Wrap, WrapItem, Link } from '@chakra-ui/layout'
import { Img } from '@chakra-ui/image'
import { background } from '@chakra-ui/styled-system'
import * as React from 'react'

const JoinCommunity = () => {
    return(
        <Container maxW="container.lg">
        <Stack padding="3" marginTop="5">
                <Text align="center" fontSize="5xl">Join the best community</Text>
                <Text align="center" fontSize="md">This project is open source and maintained by the Community. YYou can for example make changes to this site, suggest awesome new features, or help us squash bugs. Not a developer? No worries, there's tons of things to do!</Text>
            <Wrap marginTop="10" justify="center">
                <WrapItem>
                    <Center>
                        <Link href="https://github.com/swepool"><Img boxSize="64px" src="https://avatars1.githubusercontent.com/u/36674091?v=4"/></Link>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center>
                        <Link href="https://github.com/ux33-331"><Img boxSize="64px" src="https://avatars.githubusercontent.com/u/61588635?v=4"/></Link>
                    </Center>
                </WrapItem>
            </Wrap>
            <Stack padding="3" alignSelf="center" direction="row">
                <Button colorScheme="green">Join Hugin</Button>
                <Button colorScheme="green" variant="outline">Join Discord</Button>
            </Stack>
        </Stack>
        </Container>
    )
}

export default JoinCommunity