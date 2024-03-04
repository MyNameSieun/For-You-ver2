import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { logout } from 'store/modules/authSlice';
import styled from 'styled-components';

export const Layout = () => {
  // dispatch 함수 생성
  const dispatch = useDispatch();

  return (
    <>
      <NavbarList>
        <Link to="/">For You</Link>
        <div>
          <Link to="/profile">내 프로필</Link>
          <Link onClick={() => dispatch(logout())}>로그아웃</Link>
        </div>
      </NavbarList>
      <Outlet />
    </>
  );
};

const NavbarList = styled.ul`
  margin: 0 auto;
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  height: 6rem;
  font-size: 24px;
  font-weight: bold;
  align-items: center;
  user-select: none;

  & a:hover {
    background-color: pink;
  }

  & div a:nth-child(2) {
    margin-left: 30px;
  }
`;
