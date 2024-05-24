import { userType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

 type stateType = {
  isAuthenticated: boolean;
   user: userType | undefined;
}


const initialState = {
    isAuthenticated: false,
    user: undefined,
}
// Define the reducers
const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state: stateType, action: PayloadAction<userType>) => {
      //fetch userData
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = undefined;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;