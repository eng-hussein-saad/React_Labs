import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToWatchList: (state, action) => {
      const itemExists = state.value.find(
        (item) => item.id === action.payload.id
      );

      if (!itemExists) {
        state.value.push(action.payload); // Add only if the item is not already in the array
        alert(`${action.payload.title} has been added to watchlist`);
      } else {
        alert(`${action.payload.title} already exists`);
      }
    },
    removeFromWatchList: (state, action) => {
      const itemExists = state.value.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id
        );
        alert(`Removed ${action.payload.title} from watchList`);
      } else {
        alert(`${action.payload.title} Doesn't exist in watchList`);
      }
    },
  },
});

export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
