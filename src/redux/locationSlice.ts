import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type locationType = {
  address: string | undefined;
  country: string | undefined;
  latitude: number | undefined;
  longitude: number | undefined;
  watchID: number | undefined;
};

const initialState = {
  address: undefined,
  country: undefined,
  latitude: undefined,
  longitude: undefined,
  watchID: undefined,
};

const locationSlice = createSlice({
  name: "location",
  initialState: initialState,
  reducers: {
    setLocation: (state: locationType, action: PayloadAction<locationType>) => {
      state.address = action.payload?.address;
      state.country = action.payload?.country;
      state.latitude = action.payload?.latitude;
      state.longitude = action.payload?.longitude;
      state.watchID = action.payload?.watchID;
    },
  },
});

export const locationActions = locationSlice.actions;
export default locationSlice.reducer;
