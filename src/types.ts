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


export type Post = {
  id: string;
  name: string;
  description: string;
  image: string;
  winner: string;
  totalGuesses: number;
  address: string;
  creatorId: string;
  creatorImg: string;
  creatorName: string;
};

export type createPostType = {
  name: string | undefined;
  description: string | undefined;
  image: string | undefined;
  address: string | undefined;
  country: string | undefined;
  locationData: [] | undefined[];
  creatorId: string | undefined;
  creatorImg: string | undefined;
  creatorName: string | undefined;
};


export type userType = {
  id: string;
  userName: string;
  userImg: string;
  address: string;
  country: string;
  rank: number;
  places: object[];
  credits: number;
  followers: [];
  bio: string;
  challenges: [];
  correctGuesses: number;
};

export type challenge = {
  title: string;
  description: string;
  prize: number;
  staked: boolean;
  participants: string[];
  startDate: string;
  endDate: string;
}
