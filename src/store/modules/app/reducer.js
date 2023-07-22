import { createSlice } from '@reduxjs/toolkit';

export const { reducer: appReducer, actions } = createSlice({
  name: 'appSlice',
  initialState: { name: 'appStartup', settings: {} },
  reducers: {
    actionRequested: (state, { payload }) => ({ ...state, name: payload.name }),
    getSettings: (state) => state,
    setSettings: (state, { payload }) => ({
      ...state,
      settings: payload,
    }),
  },
});
