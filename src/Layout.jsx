import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Container from './components/Container'

const Layout = () => {
  return (
    <>
        <Header />
        <Container>
            <Outlet />
        </Container>
        <Footer />
    </>
  )
}

export default Layout