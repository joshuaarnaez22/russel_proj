import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import Navbar from '@/components/styles/Navbar';
import SideMenu from '@/components/styles/SideMenu';
export default function Layout({ children }: any) {
  return (
    <>
      <Container
        p="0"
        m="0"
        maxW="none"
        h="100vh"
        overflowX="hidden"
        overflowY="hidden"
      >
        <Navbar />
        <Flex p={0} h="100vh" maxW="100%">
          <SideMenu />
          <Flex h="90vh" w="100%">
            {children}
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
