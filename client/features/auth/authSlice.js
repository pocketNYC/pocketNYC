import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
  CONSTANT VARIABLES
*/
const TOKEN = "token";

/*
  THUNKS
*/
export const me = createAsyncThunk("auth/me", async () => {
  const token = window.localStorage.getItem(TOKEN);
  try {
    if (token) {
      const res = await axios.get("/auth/me", {
        headers: {
          authorization: token,
        },
      });
      return res.data;
    } else {
      return {};
    }
  } catch (err) {
    if (err.response.data) {
      return thunkAPI.rejectWithValue(err.response.data);
    } else {
      return "There was an issue with your request.";
    }
  }
});

export const authenticate = createAsyncThunk(
  "auth/authenticate",
  async (
    { firstName, lastName, email, password, interests, borough, method },
    thunkAPI
  ) => {
    try {
      const res = await axios.post(`/auth/${method}`, {
        firstName,
        lastName,
        email,
        password,
        interests,
        borough,
      });
      window.localStorage.setItem(TOKEN, res.data.token);
      thunkAPI.dispatch(me());
    } catch (err) {
      if (err.response.data) {
        return thunkAPI.rejectWithValue(err.response.data);
      } else {
        return "There was an issue with your request.";
      }
    }
  }
);

/*
  SLICE
*/
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    me: {},
    error: null,
    loading: false
  },
  reducers: {
    logout(state, action) {
      window.localStorage.removeItem(TOKEN);
      state.me = {};
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(me.pending, (state, action) => {
      console.log('THIS THING IS LOADING-auth')
      state.loading = true;
    });
    builder.addCase(me.fulfilled, (state, action) => {
      console.log('ALL DONE!-auth')
      state.me = action.payload;
      state.loading = false
    });
    builder.addCase(me.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(authenticate.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(authenticate.pending, (state, action) => {
      state.loading = true;
      console.log("LOADING AUTH OF USER")
    });
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.loading = true;
      console.log("GUESS WHO's user is loaded? YOURS!")
    });
  },
});

/*
  ACTIONS
*/
export const { logout } = authSlice.actions;

/*
  REDUCER
*/
export default authSlice.reducer;
