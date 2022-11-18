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

export const editUser = createAsyncThunk(
  "editUser",
  async ({ id, firstName, lastName, email, borough, interests }) => {
    const { data } = await axios.put(`/api/users/${id}`, {
      firstName,
      lastName,
      email,
      borough,
      interests,
    });

    console.log("data******->", data);
    return data;
  }
);

// export const updateAdminStatus = createAsyncThunk(
//   "updateAdminStatus",
//   async ({ userId, isAdmin }) => {
//     const token = window.localStorage.getItem("token");
//     const { data } = await axios.put(
//       `/api/users/${userId}`,
//       { isAdmin },
//       {
//         headers: { authorization: token },
//       }
//     );
//     return data;
//   }
// );

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
    builder.addCase(editUser.fulfilled, (state, action) => {
      console.log(action.payload, "<- GOOD PAYLOAD");
      state.loading = false;
      state.singleUser = action.payload;
    });
    builder.addCase(editUser.rejected, (state, action) => {
      console.log(action.error.message, action.payload, "<-REJECTED PAYLOAD");
      state.loading = false;
      state.singleUser = action.payload;
    });
    // builder.addCase(updateAdminStatus.fulfilled, (state, action) => {
    //   return action.payload;
    // });
  },
});

export default userSlice.reducer;
