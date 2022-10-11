import Layout from '@/layouts';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Page from '@/components/home/Page';
import { Box } from '@chakra-ui/react';
const Home: NextPageWithLayout = () => {
  return (
    <Box  >
    <Page />


    </Box>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
     {page}
    </Layout>
  )
}
export default Home
