import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/slice";
import citiesReducer from "./cities/slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cities: citiesReducer,
  },
});
