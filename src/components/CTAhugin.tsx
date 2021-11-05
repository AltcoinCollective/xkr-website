import { Button } from '@chakra-ui/button'
import { Text, VStack, HStack, Heading, Stack } from '@chakra-ui/layout'
import * as React from 'react'
import { Img } from '@chakra-ui/image'
import { VscDebugStart } from 'react-icons/vsc'
import { SimpleGrid } from '@chakra-ui/react'
const CTAhugin = () => {
    return(
            <Stack align="center" py="20">
                    <Heading align="center" fontSize="4xl">Hugin Messenger</Heading>
                    <Img align="center"maxW="100%" padding="" src="https://user-images.githubusercontent.com/3246908/118410333-273fc000-b68f-11eb-8883-77f42f4c1558.png"/>
                    <VStack alignSelf="center" spacing="5">
                        <Text align="center" fontSize="lg">Hugin is a messaging service where messages are stored on the kryptokrona blockchain. Your messages are secured with industry leading encryption so that only you and your chat partner have the possibility to read them. The purpose is not to gather any personal information about the users, unlike most apps and social media.</Text>
                        <Button size="lg"colorScheme="green">Download</Button>
                        <HStack><VscDebugStart/><Text as="em">Psst! It's free to use!</Text></HStack>
                </VStack>
            </Stack>
    )
}

export default CTAhugin