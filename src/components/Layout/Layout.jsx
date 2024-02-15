import React from 'react';
import { StyledLayout } from './Layout.styled';
import { NavLink } from 'react-router-dom';
import { CATALOGUE_ROUTE, FAVOURITE_ROUTE, HOME_ROUTE } from 'constants/routes';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <header>
        <NavLink to={HOME_ROUTE}>Home</NavLink>
        <NavLink to={CATALOGUE_ROUTE}>Catalogue</NavLink>
        <NavLink to={FAVOURITE_ROUTE}>Favourite</NavLink>
      </header>
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
