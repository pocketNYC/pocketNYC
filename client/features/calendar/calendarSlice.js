import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = "token";

const initialState = [];

export const fetchCalendarEvents = createAsyncThunk(
  "fetchCalendar_Events",

  async () => {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.get("/api/calendar", {
      headers: {
        authorization: token,
      },
    });
    return data;
  }
);

export const addToCalendar = createAsyncThunk("addTo_Calendar", async (id) => {
  const token = window.localStorage.getItem(TOKEN);
  const { data } = await axios.post(
    "/api/calendar",
    {
      id,
    },
    { headers: { authorization: token } }
  );
  return data;
});

export const removeFromCalendar = createAsyncThunk(
  "removeFrom_Calendar",
  async (id) => {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.delete(`/api/calendar/${id} `, {
      headers: { authorization: token },
    });
    return data;
  }
);

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCalendarEvents.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addToCalendar.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(removeFromCalendar.fulfilled, (state, action) => {
      state.filter((event) => {
        if (event.id !== action.payload.eventId) {
          return event;
        }
      });
    });
  },
});

export const selectCalendar = (state) => {
  return state.calendar;
};

export default calendarSlice.reducer;
