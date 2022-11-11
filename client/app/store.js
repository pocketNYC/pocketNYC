import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import eventsSliceReducer from "../features/events/eventsSlice";

const store = configureStore({
  reducer: { auth: authReducer, events: eventsSliceReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
