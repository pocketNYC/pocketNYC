import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = window.localStorage.getItem("token");

export const fetchAllUsers = createAsyncThunk("fetchAllUsers", async () => {
  const { data } = await axios.get("/api/users", {
    headers: { authorization: token },
  });
  return data;
});

const initialState = { allUsers: [], singleUser: {} };

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.allUsers = action.payload
    });
  },
});

export default userSlice.reducer;
