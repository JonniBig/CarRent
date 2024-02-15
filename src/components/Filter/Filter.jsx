import React from 'react';
import { StyledFilter } from './Filter.styled';

const Filter = () => {
  return (
    <StyledFilter>
      <div>
        <p>Car brand</p>
        <input type="text" />
      </div>
      <div>
        <p>Price/ 1 hour</p>
        <input type="text" />
      </div>
      <div>
        <p>Car mileage / km</p>
        <input type="text" />
        <input type="text" />
      </div>
      <button className="saerchBtn">Search</button>
    </StyledFilter>
  );
};

export default Filter;
