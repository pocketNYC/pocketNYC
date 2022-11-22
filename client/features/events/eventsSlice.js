import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllEvents = createAsyncThunk("fetchAllEvents", async () => {
  const { data } = await axios.get("/api/events");
  return data;
});

export const fetchSingleEvent = createAsyncThunk(
  "fetchSingleEvent",
  async (id) => {
    const { data } = await axios.get(`/api/events/${id}`);
    return data;
  }
);

export const addEvent = createAsyncThunk("addEvent", async (newEvent) => {
  const token = window.localStorage.getItem("token");
  const { data } = await axios.post("/api/events", newEvent, {
    headers: {
      authorization: token,
    },
  });

  return data;
});

export const approveEvent = createAsyncThunk(
  "approveEvent",
  async (id, { status }) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const { data } = await axios.put(
        `/api/events/${id}`,
        {
          status: "approved",
        },

        { headers: { authorization: token } }
      );
      return data;
    }
  }
);

export const rejectEvent = createAsyncThunk(
  "rejectEvent",
  async (id, { status }) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const { data } = await axios.put(
        `/api/events/${id}`,
        {
          status: "denied",
        },

        { headers: { authorization: token } }
      );
      return data;
    }
  }
);

export const deleteEvent = createAsyncThunk("deleteEvent", async (id) => {
  const token = window.localStorage.getItem("token");
  const { data } = await axios.delete(`/api/events/${id}`, {
    headers: {
      authorization: token,
    },
  });
  return data;
});

export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    event: {},
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllEvents.pending, (state, action) => {
      console.log('LOADING ST8')
      state.loading = true;
    });
    builder.addCase(fetchAllEvents.fulfilled, (state, action) => {
      state.events = action.payload;
      state.loading = false;
      console.log("NO LONGER LOADING -- CONTENT ON PAGE")
    });
    builder.addCase(fetchSingleEvent.pending, (state, action) => {
      console.log("DANG we're still loading")
      state.loading = true;
    });
    builder.addCase(fetchSingleEvent.fulfilled, (state, action) => {
     console.log('fetched event DONE')
      state.event = action.payload;
      state.loading = false;
    });
    builder.addCase(addEvent.fulfilled, (state, action) => {
      state.events.push(action.payload);
      state.loading = false;
    });
    builder.addCase(approveEvent.fulfilled, (state, action) => {
      state.event = action.payload.status;
      state.loading = false;
    });
    builder.addCase(rejectEvent.fulfilled, (state, action) => {
      state.event = action.payload.status;
      state.loading = false;
    });
    builder.addCase(deleteEvent.fulfilled, (state, action) => {
      state.events.filter((event) => event.id !== action.payload.id);
    });
  },
});

export default eventsSlice.reducer;
