import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NB_RESIDENTS_LIMIT } from "../../utils/enums";
import orderBy from "lodash.orderby";

export const fetchCities = createAsyncThunk("cities/fetchCities", async () => {
  const response = await fetch("https://geo.api.gouv.fr/communes");
  const cities = await response.json();
  return cities.filter(({ population }) => population > NB_RESIDENTS_LIMIT);
});

export const slice = createSlice({
  name: "cities",
  initialState: {
    cities: [],
    status: "idle",
  },
  reducers: {
    sortBy: (state, action) => {
      const cities = orderBy(state.cities, (city) => city[action.payload.by], [
        action.payload.order,
      ]);
      return { ...state, cities };
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchCities.fulfilled, (state, action) => {
        return { ...state, cities: action.payload, status: "success" };
      })
      .addCase(fetchCities.pending, (state) => {
        return { ...state, status: "pending" };
      });
  },
});

export const { sortBy } = slice.actions;

export default slice.reducer;
