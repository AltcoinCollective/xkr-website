import * as React from 'react'
import JoinCommunity from '../components/CTACommunity'
import Layout from '../components/Layout'
import { Text } from '@chakra-ui/layout'

const InfoPage = () => {
    return (
        <Layout>
            <Text fontSize="6xl" align="center" marginTop="5">Money for the future.</Text>
            <Text fontSize="md" align="start">Kryptokrona exists to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the money of the future.
<br/>Kryptokrona is a decentralized blockchain based on CryptoNote, which forms the basis for Monero, among others.
<br/>CryptoNote is a so-called “application layer” protocol further developed by TurtleCoin that enables things like: private transactions, messages and arbitrary data storage, completely decentralized.
<br/>On 2 April 2019, the platform was launched in part as a response to the Riksbank’s digital e-krona for the people’s right to create money and to safeguard the private economy without either commercial or state control.</Text>
            <JoinCommunity></JoinCommunity>
        </Layout>
    )
}

export default InfoPage