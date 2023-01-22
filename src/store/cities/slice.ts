import { createSlice } from "@reduxjs/toolkit";
import CITIES from "../../assets/cities.json";
import { NB_RESIDENTS_LIMIT } from "../../utils/enums";
import orderBy from "lodash.orderby";

export const slice = createSlice({
  name: "cities",
  initialState: CITIES.filter(
    ({ population }) => population > NB_RESIDENTS_LIMIT
  ),
  reducers: {
    sortBy: (state, action) => {
      return orderBy(state, (city) => city[action.payload.by], [
        action.payload.order,
      ]);
    },
  },
});

export const { sortBy } = slice.actions;

export default slice.reducer;
