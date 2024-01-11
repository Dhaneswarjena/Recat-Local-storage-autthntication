import { configureStore } from "@reduxjs/toolkit";
import sliceroot from '../Components/reducer'
export const store=configureStore({
    reducer:{
        RootStore:sliceroot
    }
})