import React from 'react';
import { StyledFavourite } from './Favourite.styled';

const Favourite = () => {
  return (
    <StyledFavourite>
      <h2 className="title animate__animated animate__slideInDown">
        Make the right choice for your next trip or road adventure. <br /> Your
        favorite cars are waiting for you here!
      </h2>
    </StyledFavourite>
  );
};

export default Favourite;
