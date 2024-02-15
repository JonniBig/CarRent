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
  const [_, city, country] = address.split(', '); // ["", "Kyiv", "Ukraine"]
  const options = [city, country, make, model, type, id, ...functionalities];
  return (
    <StyledCard>
      <img src={img} alt={description} />
      <div>
        <p>{model}</p>
        <p>{rentalPrice}</p>
      </div>
      <div>{options.join(' | ')}</div>
      <button type="button">Learn More</button>
    </StyledCard>
  );
};

export default Card;
