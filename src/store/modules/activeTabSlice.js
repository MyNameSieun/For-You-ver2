import { createSlice } from '@reduxjs/toolkit';

const initialState = '토토로';

const activeTabSlice = createSlice({
  name: 'activeTab',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      const activeTab = action.payload;
      return activeTab;
    }
  }
});

export const { setActiveTab } = activeTabSlice.actions;
export default activeTabSlice.reducer;
