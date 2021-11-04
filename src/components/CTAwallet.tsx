import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Center, Container, Stack, Text } from '@chakra-ui/layout'
import * as React from 'react'

const CTAwallet = () => {
    return(
        <Container maxW="container.lg">
            <Stack direction="row">    
            <Stack>
                <Text align="left" fontSize="4xl">Wallet</Text>
                <Text align="left" fontSize="md">You store your Kryptokrona using a special program, a so-called wallet.</Text>
            </Stack>
            <Stack align="center" direction="row" spacing={2}>
                <Image src=""/>
                <Button colorScheme="green">Download</Button>
            </Stack>
            </Stack>
        </Container>
    )
}

export default CTAwallet