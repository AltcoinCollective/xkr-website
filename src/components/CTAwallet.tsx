import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Center, Container, Stack, Text, VStack } from '@chakra-ui/layout'
import * as React from 'react'

const CTAwallet = () => {
    return(
        <Container maxW="7xl">
            <Stack direction="row">    
            <Stack>
                <Text align="center" fontSize="4xl">Wallet</Text>
                <Text align="center" fontSize="md">You store your Kryptokrona using a special program, a so-called wallet.</Text>
            </Stack>
            <VStack align="center" direction="row" spacing={2}>
                <Image src="../images/xkr-wallet.png"/>
                <Button colorScheme="green">Download</Button>
            </VStack>
            </Stack>
        </Container>
    )
}

export default CTAwallet