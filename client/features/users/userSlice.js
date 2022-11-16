import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUsers = createAsyncThunk("fetchAllUsers", async () => {
  const token = window.localStorage.getItem("token");
  const { data } = await axios.get("/api/users", {
    headers: { authorization: token },
  });
  return data;
});

export const fetchSingleUser = createAsyncThunk(
  "fetchSingleUser",
  async (userId) => {
    const token = window.localStorage.getItem("token");
    const { data } = await axios.get(`/api/users/${userId}`, {
      headers: { authorization: token },
    });
    return data;
  }
);

export const updateUserInfo = createAsyncThunk(
  "updateUserInfo",
  async ({ id, firstName, lastName, email, interests, borough }) => {
    const token = window.localStorage.getItem("token");

    const { data } = await axios.put(
       console.log(id, "ID****")
      `/api/users/${id}`,
      { firstName, lastName, email, interests, borough },
      {
        headers: { authorization: token },
      }
    );
    console.log("data", data);
    return data;
  }
);

export const updateAdminStatus = createAsyncThunk(
  "updateAdminStatus",
  async ({ id, isAdmin }) => {
    const token = window.localStorage.getItem("token");
    const { data } = await axios.put(
      `/api/users/${id}`,
      { isAdmin },
      {
        headers: { authorization: token },
      }
    );
    return data;
  }
);

const initialState = { allUsers: [], singleUser: {}, loading: false };

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchSingleUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
      state.loading = false;
      state.singleUser = action.payload;
    });
    builder.addCase(updateAdminStatus.fulfilled, (state, action) => {
      console.log(action.payload, "<-- payload******");
      return action.payload;
    });
    builder.addCase(updateUserInfo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateUserInfo.fulfilled, (state, action) => {
      console.log(action.payload, "<-- payload******");
      state.loading = false;
      return action.payload;
    });
  },
});

export default userSlice.reducer;
