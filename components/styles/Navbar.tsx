import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (
    <Flex h='10vh' bg='main' shadow='xl' justify={{base: 'start', lg: 'center'}} align='center'>
        <Text fontSize='Header.sm' fontWeight='extrabold'>NAVBAR</Text>
    </Flex>
  )
}
