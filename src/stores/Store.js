import { configureStore } from "@reduxjs/toolkit";
import QueryData from "./QueryData";

export default configureStore({
  reducer: {
    queryData: QueryData,
  },
});
