import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducer/authReducer";
import genreReducer from "./reducer/genreReducer";
import rpgReducer from "./reducer/rpgReducer";
import tableReducer from "./reducer/tableReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    genres: genreReducer,
    rpgs: rpgReducer,
    tables: tableReducer,
  },
});

export const persistor = persistStore(store);
export default store;
