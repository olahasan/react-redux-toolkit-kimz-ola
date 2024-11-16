import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./authSlice";

export const counterSlice = createSlice({
     name: "counter",
     initialState: {
        // value : 10,
        value : 0,
     },
     reducers:{
        add:(state,action)=>{
            // state.value = state.value + 1;
            state.value = state.value + action.payload;
            ;
        },
        minus:(state,action)=>{
            state.value = state.value - 1;
        },
     },
     extraReducers: (builder) => {
        builder.addCase(logout, (state, action) => {
            state.value = 0;
        })
     }
     
    //  {
    //     logout : (state , action) => {
    //         state.value = 0 ;
    //     }
    //  }

})

export const { add, minus } = counterSlice.actions;

export default counterSlice.reducer