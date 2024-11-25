import { configureStore } from "@reduxjs/toolkit";
import isLoginReducer from "../slices/isLoginSlice";

const reduxStore = configureStore({
  reducer: {
    isLogin: isLoginReducer,
  },
});

export default reduxStore;
