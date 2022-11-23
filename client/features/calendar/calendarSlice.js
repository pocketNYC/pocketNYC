import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = "token";

const initialState = {calendar: [], loading: false};

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
    builder.addCase(fetchCalendarEvents.pending, (state, action) => {
      console.log('load CALENDAR')
     state.loading = true
    });
    builder.addCase(fetchCalendarEvents.fulfilled, (state, action) => {
      state.loading = false
      console.log('THE CALENDAR IS LOADED')
      state.calendar = action.payload;
    });
    builder.addCase(addToCalendar.fulfilled, (state, action) => {
       state.calendar.push(action.payload);
    });
    builder.addCase(removeFromCalendar.fulfilled, (state, action) => {
      state.calendar.filter((event) => {
        if (event.id !== action.payload.eventId) {
          return event;
        }
      });
    });
  },
});

export const selectCalendar = (state) => {
   return state.calendar.calendar;
};

export default calendarSlice.reducer;
