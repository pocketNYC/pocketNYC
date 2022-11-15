import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = "token";

const initialState = [];

export const fetchFavoriteResource = createAsyncThunk(
  "fetchFavorite_Resource",

  async () => {
    const token = window.localStorage.getItem(TOKEN);
    try {
      const { data } = await axios.get("/api/favoriteResource", {
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

export const addToFavResource = createAsyncThunk(
  "addFavorite_Resource",
  async (id) => {
    const token = window.localStorage.getItem(TOKEN);
    try {
      const { data } = await axios.post(
        "/api/favoriteResource",
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

const favoriteResourceSlice = createSlice({
  name: "favoriteResource",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteResource.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addToFavResource.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectFavoriteResource = (state) => {
  return state.favoriteResource;
};

export default favoriteResourceSlice.reducer;
