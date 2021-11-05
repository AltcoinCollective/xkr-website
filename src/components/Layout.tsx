import { Container } from '@chakra-ui/react'
import * as React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = (props) => {
    return (
        <div>
            <NavBar/>
            <Container maxW="7xl">
            {props.children}
            </Container>
            <Footer/>
        </div>
    )
}

export default Layout