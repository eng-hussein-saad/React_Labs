import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from "./slices/watchlist";

export default configureStore({
  reducer: {
    watchList: watchListSlice,
  },
});
