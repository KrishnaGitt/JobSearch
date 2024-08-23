import { combineReducers,configureStore } from "@reduxjs/toolkit";
import createUserSlice from "../CreateSlice/UserSlice/userSlice.js"

const rootReducer=combineReducers({
    user:createUserSlice
});
 export const store=configureStore({
    reducer:rootReducer
 })