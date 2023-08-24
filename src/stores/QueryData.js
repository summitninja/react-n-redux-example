import { createSlice } from "@reduxjs/toolkit";

export const queryData = createSlice({
  name: "query",
  initialState: {
    value: "",
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = queryData.actions;

export default queryData.reducer;
