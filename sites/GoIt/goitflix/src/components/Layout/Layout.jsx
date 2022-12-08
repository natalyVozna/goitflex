import Header from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Content } from './Layout.styled';

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Content>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Content>
    </Box>
  );
};
