import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import resourcesReducer from "../features/resources/resourcesSlice";
import singleResourceReducer from "../features/resources/singleResourceSlice";
import eventsSliceReducer from "../features/events/eventsSlice";
import userReducer from "../features/users/userSlice";
import favoriteResourcesReducer from "../features/favorites/favoriteResourcesSlice";
import favoriteEventsReducer from "../features/favorites/favoriteEventsSlice";
import calendarReducer from "../features/calendar/calendarSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    resources: resourcesReducer,
    singleResource: singleResourceReducer,
    events: eventsSliceReducer,
    user: userReducer,
    favoriteResources: favoriteResourcesReducer,
    favoriteEvents: favoriteEventsReducer,
    calendar: calendarReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
