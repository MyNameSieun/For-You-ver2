import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // 토큰을 저장한 것이 로컬스토리지에 남아있다면, isLogin은 true
  isLogin: !!localStorage.getItem('accessToken')
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const accessToken = action.payload;
      localStorage.setItem('accessToken', accessToken);
      state.isLogin = true;
    },
    logout: (state, action) => {
      state.isLogin = false;
      localStorage.clear();
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
