import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import genreReducer from "./reducer/genreReducer";
import rpgReducer from "./reducer/rpgReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    genres: genreReducer,
    rpgs: rpgReducer,
  },
});

export default store;
