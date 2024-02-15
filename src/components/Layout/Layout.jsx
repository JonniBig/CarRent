import React from 'react';
import { StyledLayout } from './Layout.styled';
import Header from 'components/Header/Header';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
