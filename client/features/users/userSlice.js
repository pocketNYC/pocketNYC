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

export const updateAdminStatus = createAsyncThunk(
  "updateAdminStatus",
  async ({ userId, isAdmin }) => {
    const token = window.localStorage.getItem("token");
    const { data } = await axios.put(
      `/api/users/${userId}`,
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
    // o: try to stick to the same coding style as other slices
    builder
      .addCase(fetchAllUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.allUsers = action.payload;
        state.loading = false;
      })
      .addCase(fetchSingleUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.loading = false
        state.singleUser = action.payload;
      })
      .addCase(updateAdminStatus.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default userSlice.reducer;
