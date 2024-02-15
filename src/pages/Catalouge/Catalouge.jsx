import React, { useEffect } from 'react';
import { StyledCatalogue } from './Catalogue.styled';
import Card from 'components/Card/Card';
import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../redux/selectors';
import { fetchCars } from '../../redux/carsSlice';

const Catalogue = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <StyledCatalogue>
      <Filter />
      <div className="carsWrapper">
        {cars.map(car => (
          <Card
            key={car.id}
            id={car.id}
            year={car.year}
            make={car.make}
            model={car.model}
            type={car.type}
            img={car.img}
            description={car.description}
            fuelConsumption={car.fuelConsumption}
            engineSize={car.engineSize}
            accessories={car.accessories}
            functionalities={car.functionalities}
            rentalPrice={car.rentalPrice}
            rentalCompany={car.rentalCompany}
            address={car.address}
            rentalConditions={car.rentalConditions}
            mileage={car.mileage}
          />
        ))}
      </div>
    </StyledCatalogue>
  );
};

export default Catalogue;
