import * as React from 'react'
import CTAwallet from '../components/CTAwallet';
import Features from '../components/Features';
import Hero from '../components/Hero';
import JoinCommunity from '../components/JoinCommunity';
import Layout from '../components/Layout';
import StatusBar from '../components/StatusBar';

const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
      <Features/>
      <CTAwallet/>
      <StatusBar/>
      <JoinCommunity></JoinCommunity>
    </Layout>
  )
}
export default IndexPage