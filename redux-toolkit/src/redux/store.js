import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { api } from "./apiSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
