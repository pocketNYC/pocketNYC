import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSingleResource = createAsyncThunk(
  "singleResource/fetchSingleResource",
  async (id) => {
    const { data } = await axios.get(`/api/resources/${id}`);
    return data;
  }
);

const singleResourceSlice = createSlice({
  name: "singleResource",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleResource.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleResource = (state) => {
  return state.singleResource;
};

export default singleResourceSlice.reducer;
