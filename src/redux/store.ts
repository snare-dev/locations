import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import creditsSlice from "./creditsSlice";
import locationSlice from "./locationSlice";

const store = configureStore({
  reducer: {
    creditCount: creditsSlice,
    auth: authSlice,
    location: locationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
