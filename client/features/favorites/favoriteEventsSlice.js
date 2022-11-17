import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = "token";

const initialState = [];

export const fetchFavoriteEvents = createAsyncThunk(
  "fetchFavorite_Events",

  async () => {
    const token = window.localStorage.getItem(TOKEN);
    try {
      const { data } = await axios.get("/api/favoriteEvents", {
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

export const addToFavEvents = createAsyncThunk(
  "addFavorite_Events",
  async (id) => {
    const token = window.localStorage.getItem(TOKEN);
    try {
      const { data } = await axios.post(
        "/api/favoriteEvents",
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

export const removeFromFavEvents = createAsyncThunk(
  "removeFavorite_Events",
  async (id) => {
    const token = window.localStorage.getItem(TOKEN);

    try {
      await axios.delete(
        `/api/favoriteEvents/${id} `,

        { headers: { authorization: token } }
      );
      return id;
    } catch (err) {
      console.log(err);
    }
  }
);

const favoriteEventsSlice = createSlice({
  name: "favoriteEvents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteEvents.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addToFavEvents.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(removeFromFavEvents.fulfilled, (state, action) => {
      state.filter((event) => {
        if (event.id !== action.payload.eventId) {
          return event;
        }
      });
    });
  },
});

export const selectFavoriteEvents = (state) => {
  return state.favoriteEvents;
};

export default favoriteEventsSlice.reducer;
