import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestCars } from 'services/api';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (page, thunkApi) => {
    try {
      const cars = await requestCars(page);
      return { page, cars };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const carsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  favouritCarIds: [],
};
const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  reducers: {
    toggleFavourite: (state, action) => {
      if (state.favouritCarIds.includes(action.payload)) {
        state.favouritCarIds = state.favouritCarIds.filter(
          id => id !== action.payload
        );
      } else {
        state.favouritCarIds.push(action.payload);
      }
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;

        state.items =
          action.payload.page === 1
            ? action.payload.cars
            : [...state.items, ...action.payload.cars];
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { toggleFavourite } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
