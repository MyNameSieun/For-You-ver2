import styled from 'styled-components';
import defaultUser from 'assets/images/user.png';

function LetterCard({ letter }) {
  const formattedDate = new Date(letter.createdAt).toLocaleDateString('ko', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <>
      <LetterAvatarFigure>
        <img src={letter.avatar ?? defaultUser} alt="아바타이미지" />
      </LetterAvatarFigure>
      <LetterBox>
        <LetterDate>
          <p>{letter.nickname}</p>
          <time>{formattedDate}</time>
        </LetterDate>
        <LetterButtonBox>
          <LetterContent>
            <p>{letter.content}</p>
          </LetterContent>
          <LetterButton>자세히보기</LetterButton>
        </LetterButtonBox>
      </LetterBox>
      <Hr />
    </>
  );
}

const LetterAvatarFigure = styled.figure`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const LetterBox = styled.div`
  margin: -50px 70px;
`;
const LetterDate = styled.div`
  display: flex;
  margin-bottom: 10px;

  & p {
    font-size: 17px;
    font-weight: bold;
    margin-right: 10px;
  }
  & time {
    color: #bebebe;
    font-size: 13px;
    margin-top: 3px;
  }
`;

const LetterContent = styled.div`
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  width: 580px;
  display: flex;
  align-items: center;

  & p {
    margin-left: 7px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const LetterButtonBox = styled.div`
  display: flex;
`;
const LetterButton = styled.button`
  background-color: #1e1e1e;
  color: white;
  border-radius: 8px;
  height: 40px;
  width: 100px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: -70px;
  cursor: pointer;
`;
const Hr = styled.hr`
  border: 1px solid #d2d2d2;
  margin-top: 4.5rem;
  margin-bottom: 2rem;
  width: 100%;
`;

export default LetterCard;
