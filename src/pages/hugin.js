import * as React from 'react'
import JoinCommunity from '../components/CTACommunity'
import Layout from '../components/Layout'
import { Text } from '@chakra-ui/layout'
import CTAhugin from '../components/CTAhugin'

const HuginPage = () => {
    return (
        <Layout>
            <CTAhugin/>
            <CTACommunity/>
        </Layout>
    )
}

export default HuginPage