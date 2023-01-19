import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from "../Feature/Movie/movieSlice";
import userReducer from "../Feature/User/userSlice"

export default configureStore({
 reducer: {
  user: userReducer,
  movie: movieReducer
 },
 middleware: getDefaultMiddleware({
  serializableCheck: false,
 })
})