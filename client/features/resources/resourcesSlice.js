import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchResources = createAsyncThunk(
  "resources/allResources",
  async () => {
    // o: you don't want try catches in your thunks... ill explain
    try {
      const { data } = await axios.get("/api/resources");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResources.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectResources = (state) => {
  return state.resources;
};

export default resourcesSlice.reducer;
