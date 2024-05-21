import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import creditsSlice from "./creditsSlice";

const store = configureStore({
  reducer: {
    creditCount: creditsSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
