import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = "token";

export const fetchFavoriteResource = createAsyncThunk(
  "fetchFavorite_Resource",
  async () => {
    try {
      const { data } = await axios.get("/api/favoriteResource");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  "addFavorite_Resource",
  async ({ id }) => {
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
  initialState: {
    favorites: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteResource.fulfilled, (state, action) => {
      state.favorites = action.payload;
    });
    builder.addCase(addToFavorites.fulfilled, (state, action) => {
      state.favorites.push(action.payload);
    });
  },
});

export const selectFavoriteResource = (state) => {
  return state.favorites;
};

export default favoriteResourceSlice.reducer;
