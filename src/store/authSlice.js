import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
     name: "auth",
     initialState: {
        isLogged: false
     },
     reducers:{
        login:(state,action)=>{
            state.isLogged = true;
        },
        logout:(state,action)=>{
            state.isLogged = false;
        },
     }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer