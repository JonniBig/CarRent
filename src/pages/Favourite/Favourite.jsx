import React from 'react';
import { StyledFavourite } from './Favourite.styled';
import { useSelector } from 'react-redux';
import { selectCars, selectFavCarsIds } from '../../redux/selectors';

// import { fetchCars } from '../../redux/carsSlice';
import { Card } from 'components';

const Favourite = () => {
  const cars = useSelector(selectCars);
  const favCarIds = useSelector(selectFavCarsIds);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCars());
  // }, [dispatch]);

  const favouriteCars = cars.filter(car => favCarIds.includes(car.id));
  return (
    <StyledFavourite>
      <h2 className="fav-title animate__animated animate__slideInDown">
        Make the right choice for your next trip or road adventure. <br /> Your
        favorite cars are waiting for you here!
      </h2>
      <div className="carsWrapper">
        {favouriteCars.map(car => (
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
    </StyledFavourite>
  );
};

export default Favourite;
