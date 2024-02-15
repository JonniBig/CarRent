import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestCars } from 'services/api';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkApi) => {
    try {
      const cars = await requestCars();
      return cars;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const carsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
export const carsReducer = carsSlice.reducer;
