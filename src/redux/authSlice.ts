import { createSlice } from "@reduxjs/toolkit";

// import { getUser } from "@/services/apiCalls";

export type authType = {
    isAuthenticated: boolean;
    user: string;
}


const initialState = {
    isAuthenticated: false,
    user: undefined,
}

const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        login:  (state) => {
            //fetch userData
            // const user =await getUser();
            state.isAuthenticated = true;
            // state.user = user;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;