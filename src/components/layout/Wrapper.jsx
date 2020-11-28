import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { MobileNav } from './MobileNav'
import { Sidebar } from './Sidebar'

function Wrapper ({ children }) {
  const [isBelow768px] = useMediaQuery('(max-width: 768px)')
  const { pathname } = useLocation()

  if (pathname === '/signup' || pathname === '/login') {
    return (
      <Box w="100%">
        {children}
      </Box>
    )
  }

  return (
    <Box w="100%">
      <Header />
      <Flex w="100%" overflowX="hidden">
        <Sidebar />
        <Box w="100%" maxW="100%" pt={['70px', '120px']} pl={isBelow768px ? '0' : '12rem'} pb="10rem">
          {children}
        </Box>
      </Flex>
      <MobileNav />
    </Box>
  )
}

export { Wrapper }
