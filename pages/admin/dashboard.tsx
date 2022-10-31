import Layout from '@/layouts';
import { NextPageWithLayout } from 'pages/_app';
import React, { ReactElement } from 'react';
import { thinScollbar } from '@/components/Scrollbar';
import { allUser } from '@/services/user.service';
import { Box } from '@chakra-ui/react';

// export async function getServerSideProps() {
//   const { user: users } = await allUser();
//   return {
//     props: { users }, // will be passed to the page component as props
//   };
// }

const dashboard: NextPageWithLayout = () => {
  return (
    <Box
      w="100%"
      h="90vh"
      overflowY="auto"
      mx="20px"
      sx={thinScollbar}
      p="20px"
    >
      Dashboard
    </Box>
  );
};

dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default dashboard;
