import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  isLoading: false,
  favourite: [],
};
const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

  },
});

//Reducer
export default slice.reducer;

//Actions
export const {} = slice.actions;
