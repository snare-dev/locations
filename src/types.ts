import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./redux/store";
import type { PayloadAction } from "@reduxjs/toolkit";


export type initialStateType = {
  credits: number;
  guessers: number;
  rank: string | undefined;
  posts: number;
  wins: number;
};

export type creditsType = {
  credits: number;
};

export type creditsSliceType = {
  name: string;
  initialState: creditsType;
  reducers: {
    rewardCredits: (state: creditsType, action: PayloadAction<number>) => void;
    deductCredits: (state: creditsType, action: PayloadAction<number>) => void;
    addCredits: (state: creditsType, action: PayloadAction<number>) => void;
  };
};

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
