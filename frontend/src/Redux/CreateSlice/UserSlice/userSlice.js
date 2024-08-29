import { getAllUserApi } from "@/Api/User/userApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk("craeteUserSlice", async(formdata) => {
    try {
        const response=await axios.post("",formdata);
        
        return response.data;
        
    } catch (error) {
        alert(error.message)
    };
});

export const getAllUser=createAsyncThunk("getalluser",(page)=>{
    try {
        const response=getAllUserApi(page);
        console.log("response",response)
        return response;
    } catch (error) {
        console.Console.log("Error Encountered:",error)
    }
})
const createUserSlice = createSlice({
        name:"createUserSlice",
        initialState: {
            user:{},
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
            .addCase(getAllUser.pending,(state,action)=>{
                state.loading=true;
                state.user={...state.user};
                state.error=false;
            })
            .addCase(getAllUser.fulfilled,(state,action)=>{
                state.loading=false;
                state.error=false;
                state.user={...action.payload.data}
            })
            .addCase(getAllUser.rejected,(state,action)=>{
                state.error=true;
                state.loading=false;
                state.user={...state.user}
            })
        }
})

export default createUserSlice.reducer;