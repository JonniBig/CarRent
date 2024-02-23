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
      <img src={img} alt={description} className="image" />
      <div className="title">
        <p>
          {make} <span className="model">{model}</span>, {year}
        </p>
      </div>
      <div className="options">{options.join(' | ')}</div>
      <p className="description">{description}</p>
      <div>
        <h3 className="h3Title">Accessories and functionalities:</h3>
        <p className="accessories">{accessories.join(' | ')}</p>
      </div>
      <div>
        <h3 className="h3Title">Rental Conditions: </h3>
        <p className="conditionsContainer">
          {conditions?.map(item => (
            <span className="conditions" key={item}>
              {item}
            </span>
          ))}
          <span className="conditions">
            Mileage: <span className="value">{mileage.toLocaleString()}</span>
          </span>
          <span className="conditions">
            Price: <span className="value">{rentalPrice}</span>
          </span>
        </p>
      </div>

      <a href="tel:+380730000000">
        <button type="button" className="rentBtn">
          <p>Rental car</p>
        </button>
      </a>
    </StyledCarDetail>
  );
};

export default CarDetail;
