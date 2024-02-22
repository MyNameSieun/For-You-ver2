import styled, { css } from 'styled-components';
import defaultUser from 'assets/images/user.png';

export default function Avatar({ src, size }) {
  return (
    <LetterAvatarFigure size={size}>
      <img src={src ?? defaultUser} alt="아바타이미지" />
    </LetterAvatarFigure>
  );
}
const LetterAvatarFigure = styled.figure`
  ${(props) => {
    switch (props.size) {
      case 'large':
        return css`
          width: 75px;
          height: 75px;
        `;

      default:
        return css`
          width: 50px;
          height: 50px;
        `;
    }
  }}

  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
