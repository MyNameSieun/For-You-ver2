import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import { useSelector } from 'react-redux';
import { Layout } from 'components/Layout';

const Router = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <Route element={<Layout />}>
            {/* 로그인 상태일 경우 보이는 컴포넌트 */}
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
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
