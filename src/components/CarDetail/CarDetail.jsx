import React from 'react';
import { StyledCarDetail } from './CarDetail.styled';

const CarDetail = ({
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
  const conditions = rentalConditions.split('\n');
  const options =
    functionalities && functionalities.length > 0
      ? [
          city,
          country,
          `Id: ${id}`,
          `Year: ${year}`,
          `Type: ${type}`,
          `FuelConsumption: ${fuelConsumption}`,
          `EngineSize: ${engineSize}`,
          //   model,
          //   functionalities[0],
        ]
      : [
          city,
          country,
          `Id: ${id}`,
          `Year: ${year}`,
          `Type: ${type}`,
          `FuelConsumption: ${fuelConsumption}`,
          `EngineSize: ${engineSize}`,
        ];

  return (
    <StyledCarDetail>
      <div className="container">
        <img src={img} alt={description} className="image" />
        <div className="title">
          <p>
            {make} <span className="model">{model}</span>, {year}
          </p>
        </div>
        <div className="options">{options.join(' | ')}</div>
        <p>{description}</p>
        <div>
          <h3>Accessories and functionalities:</h3>
          <p>{accessories.join(' | ')}</p>
        </div>
        <div>
          <h3>Rental Conditions: </h3>
          <p>
            {conditions?.map(item => (
              <span key={item}>{item}</span>
            ))}
            Mileage: <span>{mileage}</span>
            Price: <span>{rentalPrice}</span>
          </p>
        </div>
      </div>
      <button type="button" className="rentBtn">
        <p>Rental car</p>
      </button>
    </StyledCarDetail>
  );
};

export default CarDetail;
