import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user/reducer";
import errorsReducer from "./error/error";

const store = configureStore({
  reducer: {
    user: usersReducer,
    error: errorsReducer,
  },
});

export default store;