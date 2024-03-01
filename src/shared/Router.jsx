import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import { useState } from 'react';

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <>
            {/* 로그인 상태일 경우 보이는 컴포넌트 */}
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            {/* 로그인 상태가 아닐 경우 보이는 컴포넌트  */}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
