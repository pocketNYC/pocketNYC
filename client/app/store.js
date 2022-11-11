import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import resourcesReducer from "../features/resources/resourcesSlice";
import singleResourceReducer from "../features/resources/singleResourceSlice";
import eventsSliceReducer from "../features/events/eventsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    resources: resourcesReducer,
    singleResource: singleResourceReducer,
    events: eventsSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
