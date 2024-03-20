import { DataService } from "@/lib/dataService";
import { Tversion } from "@/lib/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 interface IVersion {
  versions: Tversion[],
  error: ""
 }

 const initialState: IVersion ={
  versions: [],
  error: ""
 }

 export const handleFechVersion = createAsyncThunk('version_feching', async() =>{
  try {
    const {data} = await DataService.get('versions');
    const versions = data.data.reverse();
    return versions
  } catch (error) {
    console.log(error)
  }
 })

export const versionSlice = createSlice({
 name:'version_slice',
 initialState,
 reducers:{},

 extraReducers:(builder) =>{
  builder.addCase(handleFechVersion.fulfilled, (state, action) =>{
   state.versions = action.payload
  } ),
  builder.addCase(handleFechVersion.rejected, (state, action) =>{
   console.log(action.payload);
   
    // state.error = "Error when fecthing version"
  })
 }
})