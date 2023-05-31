import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { gameApiSlice } from "../services/apiGameGloBal";
import rootReducer from "./slices/rootReducer";
import { persistStore } from "redux-persist";
// ------------------------------------------------------

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
const store = configureStore({
  reducer: {
    persisted: rootReducer,
    [gameApiSlice.reducerPath]: gameApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(gameApiSlice.middleware),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

const { dispatch } = store;

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

const useDispatch = () => useAppDispatch<AppDispatch>();

export { store, dispatch, useSelector, useDispatch, persistor };
