import { createSlice } from "@reduxjs/toolkit";
import PropTypes from "prop-types";

/*
    Inizialize App whit: 

        Origin,
        Destination,
        Travel Time.
    
    And export to use in other component 

*/

const initialState = {
  origin: null,
  destinantion: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destinantion = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// Selector

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destinantion;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
