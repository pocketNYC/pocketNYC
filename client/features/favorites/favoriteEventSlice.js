import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = "token";

const initialState = [];

export const fetchFavoriteEvent = createAsyncThunk(
  "fetchFavorite_Event",

  async () => {
    const token = window.localStorage.getItem(TOKEN);
    try {
      const { data } = await axios.get("/api/favoriteEvent", {
        headers: {
          authorization: token,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addToFavEvent = createAsyncThunk(
  "addFavorite_Event",
  async (id) => {
    const token = window.localStorage.getItem(TOKEN);
    try {
      const { data } = await axios.post(
        "/api/favoriteEvent",
        {
          id,
        },
        { headers: { authorization: token } }
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const favoriteEventSlice = createSlice({
  name: "favoriteEvent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteEvent.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addToFavEvent.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectFavoriteEvent = (state) => {
  return state.favoriteEvent;
};

export default favoriteEventSlice.reducer;
