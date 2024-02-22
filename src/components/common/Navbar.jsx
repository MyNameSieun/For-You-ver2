import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <NavbarList>
      <Link to={'/'}>ForYou</Link>
    </NavbarList>
  );
}
const NavbarList = styled.ul`
  height: 6rem;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export default Navbar;
