import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filterBrand: '',
  filterRent: '',
  filterMileageFrom: '',
  filterMileageTo: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterBrand(state, action) {
      state.filterBrand = action.payload;
    },
    setFilterRent(state, action) {
      state.filterRent = action.payload;
    },
    setFilterMileageFrom(state, action) {
      state.filterMileageFrom = action.payload;
    },
    setFilterMileageTo(state, action) {
      state.filterMileageTo = action.payload;
    },
  },
});

export const {
  setFilterMileageFrom,
  setFilterMileageTo,
  setFilterBrand,
  setFilterRent,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
