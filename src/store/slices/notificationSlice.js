import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: {
    addNotification: (state, action) => {
      state.push({message: action.payload, timestamp: new Date().toISOString()});
    },
    removeNotification: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const selectNotifications = (state) => state.notifications;

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;