import React, { useEffect, useState } from 'react';
import { Card, Filter } from 'components/';
import { useDispatch, useSelector } from 'react-redux';
import { StyledCatalogue } from './Catalogue.styled';
import {
  selectCars,
  selectFilterBrand,
  selectFilterMileageFrom,
  selectFilterMileageTo,
  selectFilterRent,
} from '../../redux/selectors';
import { fetchCars } from '../../redux/carsSlice';

const Catalogue = () => {
  const cars = useSelector(selectCars);
  const filterBrand = useSelector(selectFilterBrand);
  const filterRent = useSelector(selectFilterRent);
  const filterMileageFrom = useSelector(selectFilterMileageFrom);
  console.log('filterMileageFrom: ', filterMileageFrom);
  const filterMileageTo = useSelector(selectFilterMileageTo);
  console.log('filterMileageTo: ', filterMileageTo);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const filteredCars = cars?.filter(car => {
    if (filterBrand === '' && filterRent === '') {
      return true;
    }
    if (filterBrand === '') {
      return (
        parseInt(car.rentalPrice.replace('$', ''), 10) >= 30 &&
        parseInt(car.rentalPrice.replace('$', ''), 10) <=
          parseInt(filterRent.replace('$', ''), 10)
      );
    }
    if (filterRent === '') {
      return car.make === filterBrand;
    }
    return (
      car.make === filterBrand &&
      parseInt(car.rentalPrice.replace('$', ''), 10) >= 30 &&
      parseInt(car.rentalPrice.replace('$', ''), 10) <=
        parseInt(filterRent.replace('$', ''), 10)
    );
  });

  const filteredCarsInMileageRange = filteredCars?.filter(car => {
    if (filterMileageFrom === '' && filterMileageTo === '') {
      return true;
    }
    if (filterMileageFrom !== '' && filterMileageTo !== '') {
      return (
        car.mileage <= parseInt(filterMileageTo, 10) &&
        car.mileage >= parseInt(filterMileageFrom, 10)
      );
    }

    if (filterMileageFrom === '') {
      return car.mileage <= parseInt(filterMileageTo, 10);
    }
    if (filterMileageTo === '') {
      return car.mileage >= parseInt(filterMileageFrom, 10);
    }
    return true;
  });

  return (
    <StyledCatalogue>
      <Filter />
      <div className="carsWrapper">
        {filteredCarsInMileageRange.map(car => (
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
