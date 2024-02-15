import React from 'react';
import { StyledCard } from './Card.styled';

const Card = ({
  id,
  year,
  make,
  model,
  type,
  img,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
  rentalConditions,
  mileage,
}) => {
  const [, city, country] = address.split(', ');
  const options =
    functionalities && functionalities.length > 0
      ? [city, country, rentalCompany, type, model, id, functionalities[0]]
      : [city, country, rentalCompany, type, model, id];
  return (
    <StyledCard>
      <div className="container">
        <div className="image" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="title">
          <p>
            {make} <span className="model">{model}</span>, {year}
          </p>
          <p>{rentalPrice}</p>
        </div>
        <div className="options">{options.join(' | ')}</div>
      </div>
      <button type="button" className="learnBtn">
        <p> Learn more</p>
      </button>
    </StyledCard>
  );
};

export default Card;
