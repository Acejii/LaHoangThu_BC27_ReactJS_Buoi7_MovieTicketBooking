import { configureStore } from "@reduxjs/toolkit";
import bookTicketReducer from "./reducers/bookTicketReducer";
const store = configureStore({
  reducer: {
    bookTicket: bookTicketReducer,
  },
});

export default store;
