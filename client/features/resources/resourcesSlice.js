import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchResources = createAsyncThunk(
  "resources/allResources",
  async () => {
    const { data } = await axios.get("/api/resources");
    return data;
  }
);

const resourcesSlice = createSlice({
  name: "resources",
  initialState: {
    loading: false,
    resources: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResources.pending, (state, action) => {
      console.log('loading *** RESOURCES ***')
      state.loading = true;
      //return action.payload;
    });
    builder.addCase(fetchResources.fulfilled, (state, action) => {
      console.log('DONE *** RESOURCES ***')
      state.loading = false;
      state.resources = action.payload;
    });
  },
});

export const selectResources = (state) => {
  return state.resources.resources;
};

export default resourcesSlice.reducer;
