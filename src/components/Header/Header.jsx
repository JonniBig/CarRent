import React from 'react';
import { StyledHeader } from './Header.styled';
import { NavLink } from 'react-router-dom';
import { CATALOGUE_ROUTE, FAVOURITE_ROUTE, HOME_ROUTE } from 'constants/routes';

const Header = () => {
  return (
    <StyledHeader>
      <nav className="navigation">
        <NavLink className="navlink" to={HOME_ROUTE}>
          Home
        </NavLink>
        <NavLink className="navlink" to={CATALOGUE_ROUTE}>
          Catalogue
        </NavLink>
        <NavLink className="navlink" to={FAVOURITE_ROUTE}>
          Favourite
        </NavLink>
      </nav>
    </StyledHeader>
  );
};

export default Header;
