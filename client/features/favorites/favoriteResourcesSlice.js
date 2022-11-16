import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = "token";

const initialState = [];

export const fetchFavoriteResources = createAsyncThunk(
  "fetchFavorite_Resources",

  async () => {
    const token = window.localStorage.getItem(TOKEN);
    try {
      const { data } = await axios.get("/api/favoriteResources", {
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

export const addToFavResources = createAsyncThunk(
  "addFavorite_Resources",
  async (id) => {
    const token = window.localStorage.getItem(TOKEN);
    try {
      const { data } = await axios.post(
        "/api/favoriteResources",
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

const favoriteResourcesSlice = createSlice({
  name: "favoriteResources",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteResources.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addToFavResources.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectFavoriteResources = (state) => {
  return state.favoriteResources;
};

export default favoriteResourcesSlice.reducer;
