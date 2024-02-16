import React, { useEffect, useState } from 'react';
import { Card, Filter } from 'components/';
import { useDispatch, useSelector } from 'react-redux';
import { StyledCatalogue } from './Catalogue.styled';
import { selectCars } from '../../redux/selectors';
import { fetchCars } from '../../redux/carsSlice';

const Catalogue = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

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
      <button type="button" className="loadBtn" onClick={handleLoadMore}>
        Load more
      </button>
    </StyledCatalogue>
  );
};

export default Catalogue;
