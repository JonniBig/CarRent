import React, { useState } from 'react';
import { StyledFilter } from './Filter.styled';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import {
  setFilterBrand,
  setFilterMileageFrom,
  setFilterMileageTo,
  setFilterRent,
} from '../../redux/filterSlice';

const carBrands = [
  { value: 'Buick', label: 'Buick' },
  { value: 'Volvo', label: 'Volvo' },
  { value: 'HUMMER', label: 'HUMMER' },
  { value: 'Subaru', label: 'Subaru' },
  { value: 'Mitsubishi', label: 'Mitsubishi' },
  { value: 'Nissan', label: 'Nissan' },
  { value: 'Lincoln', label: 'Lincoln' },
  { value: 'GMC', label: 'GMC' },
  { value: 'Hyundai', label: 'Hyundai' },
  { value: 'MINI', label: 'MINI' },
  { value: 'Bentley', label: 'Bentley' },
  { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
  { value: 'Aston Martin', label: 'Aston Martin' },
  { value: 'Pontiac', label: 'Pontiac' },
  { value: 'Lamborghini', label: 'Lamborghini' },
  { value: 'Audi', label: 'Audi' },
  { value: 'BMW', label: 'BMW' },
  { value: 'Chevrolet', label: 'Chevrolet' },
  { value: 'Chrysler', label: 'Chrysler' },
  { value: 'Kia', label: 'Kia' },
  { value: 'Land', label: 'Land' },
];

const carRent = Array.from({ length: 20 }).map((_, idx) => ({
  value: 30 + idx * 10,
  label: `$${30 + idx * 10}`,
}));

const Filter = () => {
  const [selectedCarBrand, setSelectedCarBrand] = useState({
    label: '',
    value: '',
  });
  const [selectedCarRent, setSelectedCarRent] = useState({
    label: '',
    value: '',
  });
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const dispatch = useDispatch();

  const setSelectedCarBrandOption = option =>
    dispatch(setFilterBrand(option.label));
  const setSelectedCarRentOption = option =>
    dispatch(setFilterRent(option.label));

  const onSubmit = e => {
    e.preventDefault();
    setSelectedCarBrandOption(selectedCarBrand);
    setSelectedCarRentOption(selectedCarRent);
    dispatch(setFilterMileageFrom(mileageFrom));
    dispatch(setFilterMileageTo(mileageTo));
  };
  const filterStyles = {
    control: (provided, state) => ({
      ...provided,
      height: '48px',
      borderRadius: '14px',
      backgroundColor: 'rgb(247, 247, 251)',
      border: 'none',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided, { isFocused }) => ({
      ...provided,
      transform: isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease-in-out',
      color: 'black',
      ':hover': { color: 'black' },
    }),
    singleValue: provided => ({
      ...provided,
      fontWeight: '500',
      fontSize: '16px',
      fontFamily: 'Manrope',
      color: 'black',
    }),
    placeholder: provided => ({
      ...provided,
      fontWeight: '500',
      fontSize: '18px',
      fontFamily: 'Manrope',
      color: 'black',
    }),
    option: (provided, { isSelected }) => ({
      ...provided,
      fontWeight: '500',
      fontSize: '16px',
      fontFamily: 'Manrope',
      color: isSelected ? 'black' : 'rgba(18, 20, 23, 0.2)',
      backgroundColor: 'transparent',
    }),
  };
  return (
    <StyledFilter onSubmit={onSubmit}>
      <div>
        <p className="filterTitle">Car brand</p>
        <Select
          // defaultValue={selectedCarBrand}
          onChange={setSelectedCarBrand}
          options={carBrands}
          className="inputBrand"
          styles={filterStyles}
          placeholder="Enter the text"
        />
      </div>
      <div>
        <p className="filterTitle">Price/ 1 hour</p>
        <Select
          // defaultValue={selectedCarRent}
          onChange={setSelectedCarRent}
          options={carRent}
          className="inputRent"
          styles={filterStyles}
          placeholder="To $"
        />
      </div>
      <div>
        <p className="filterTitle">Car mileage / km</p>
        <div className="inputContainer">
          <input
            value={mileageFrom}
            onChange={e => setMileageFrom(e.target.value)}
            type="text"
            placeholder="From"
            className="inputMileageL"
          />
          <input
            value={mileageTo}
            onChange={e => setMileageTo(e.target.value)}
            type="text"
            placeholder="To"
            className="inputMileageR"
          />
        </div>
      </div>
      <button type="submit" className="saerchBtn">
        Search
      </button>
    </StyledFilter>
  );
};

export default Filter;
