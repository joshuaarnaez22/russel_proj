// import Layout from '@/layouts';
// import { ReactElement } from 'react';
// import type { NextPageWithLayout } from './_app';
import { Box } from '@chakra-ui/react';
import Login from '@/components/login';
const Home = () => {
    return (
        <Box>
            <Login />
        </Box>
    );
};

// Home.getLayout = function getLayout(page: ReactElement) {
//     return <Layout>{page}</Layout>
// }
export default Home;
