import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = "token";

const initialState = {favoriteResources:[], loading:false};

export const fetchFavoriteResources = createAsyncThunk(
  "fetchFavorite_Resources",

  async () => {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.get("/api/favoriteResources", {
      headers: {
        authorization: token,
      },
    });
    return data;
  }
);

export const addToFavResources = createAsyncThunk(
  "addFavorite_Resources",
  async (id) => {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.post(
      "/api/favoriteResources",
      {
        id,
      },
      { headers: { authorization: token } }
    );
    return data;
  }
);

export const removeFromFavResources = createAsyncThunk(
  "removeFavorite_Resources",
  async (id) => {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.delete(`/api/favoriteResources/${id} `, {
      headers: { authorization: token },
    });
    return data;
  }
);

const favoriteResourcesSlice = createSlice({
  name: "favoriteResources",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteResources.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchFavoriteResources.fulfilled, (state, action) => {
      state.loading = false
      state.favoriteResources = action.payload;
    });
    builder.addCase(addToFavResources.fulfilled, (state, action) => {
      state.favoriteResources.push(action.payload);
    });
    builder.addCase(removeFromFavResources.fulfilled, (state, action) => {
      state.favoriteResources.filter((resource) => {
        if (resource.id !== action.payload.resourceId) {
          return resource;
        }
      });
    });
  },
});

export const selectFavoriteResources = (state) => {
  return state.favoriteResources.favoriteResources;
};

export default favoriteResourcesSlice.reducer;
