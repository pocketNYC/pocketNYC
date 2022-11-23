import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { resources: [], loading: false };

export const fetchResources = createAsyncThunk(
  "resources/allResources",
  async () => {
    const { data } = await axios.get("/api/resources");
    return data;
  }
);

const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResources.pending, (state, action) => {
     state.loading = true
      console.log('Loading Resources')
    });
    builder.addCase(fetchResources.fulfilled, (state, action) => {
     console.log('RESOURCES SHOWING')
      state.loading = false
      state.resources = action.payload;
    });
  },
});

export const selectResources = (state) => {
  return state.resources.resources;
};

export default resourcesSlice.reducer;
