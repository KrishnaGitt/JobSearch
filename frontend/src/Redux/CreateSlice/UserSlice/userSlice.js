import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const createUser = createAsyncThunk("craeteUserSlice", async(formdata) => {
    try {
        const response=await axios.post("",formdata);
        return response.data;
    } catch (error) {
        alert(error.message)
    };
});

const createUserSlice = createSlice({
        name:"createUserSlice",
        initialState: {
            user:[],
            loading: true,
            error:false
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(createUser.pending,(state,action)=>{
                state.loading=true;
                state.error=false;
                state.user=[...action.payload];
            })
            .addCase(createUser.fulfilled,(state,action)=>{
                state.loading=false;
                state.user=[action.payload];
                state.error=false;
            })
            .addCase(createUser.rejected,(state,action)=>{
                state.error=false;
                state.loading=false;
                state.user=[...action.payload];
            })
        }
})

export default createUserSlice.reducer;