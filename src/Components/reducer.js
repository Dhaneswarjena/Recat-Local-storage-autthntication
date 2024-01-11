import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isAuthneticate:false
}
export const reduceSlice=createSlice({
     name:'RootStore',
     initialState,
     reducers:{
        login:(state)=>{
            state.isAuthneticate=true
        },
        logout:(state)=>{
            state.isAuthneticate=false
        }
     }
})

export const {login,logout}=reduceSlice.actions
export default reduceSlice.reducer