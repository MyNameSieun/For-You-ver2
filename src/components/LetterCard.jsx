import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Avatar from './common/Avatar';
import { getFormattedDate } from 'util/data';

function LetterCard({ letter }) {
  const navigate = useNavigate();

  return (
    <>
      <Avatar src={letter.avatar} />
      <LetterBox>
        <LetterDate>
          <p>{letter.nickname}</p>
          <time>{getFormattedDate(letter.createdAt)}</time>
        </LetterDate>
        <LetterButtonBox>
          <LetterContent>
            <p>{letter.content}</p>
          </LetterContent>
          <LetterButton onClick={() => navigate(`/detail/${letter.id}`)}>자세히보기</LetterButton>
        </LetterButtonBox>
      </LetterBox>
      <Hr />
    </>
  );
}

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
