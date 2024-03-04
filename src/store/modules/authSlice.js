import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // 토큰을 저장한 것이 로컬스토리지에 남아있다면, isLogin은 true
  isLogin: !!localStorage.getItem('accessToken'),
  avatar: localStorage.getItem('avatar'),
  nickname: localStorage.getItem('nickname'),
  userId: localStorage.getItem('userId')
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { accessToken, avatar, nickname, userId } = action.payload;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('avatar', avatar);
      localStorage.setItem('nickname', nickname);
      localStorage.setItem('userId', userId);
      state.isLogin = true;
      state.avatar = avatar;
      state.nickname = nickname;
      state.userId = userId;
    },
    logout: (state, action) => {
      state.isLogin = false;
      localStorage.clear();
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
