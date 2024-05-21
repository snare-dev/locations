import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



const initialState = {
  credits: 10,
};

const creditsSlice = createSlice({
  name: "credits",
  initialState,
  reducers: {
    rewardCredits: (state, action: PayloadAction<number>) => {
      state.credits += action.payload;
    },
    deductCredits: (state, action: PayloadAction<number>) => {
      state.credits -= action.payload;
    },
    addCredits: (state, action: PayloadAction<number>) => {
      state.credits += action.payload;
    },
  },
});

export const creditsActions = creditsSlice.actions;

export default creditsSlice;
