import Avatar from 'components/common/Avatar';
import styled from 'styled-components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getFormattedDate } from 'util/data';

function Detail({ letters, setLetters }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { avatar, nickname, createdAt, content } = letters.find((letter) => letter.id === id);

  const handleDeleteBtn = () => {
    const answer = window.confirm('정말로 삭제 하시겠습니까?');
    if (!answer) return;

    const newLetters = letters.filter((letters) => letters.id !== id);
    navigate('/');
    setLetters(newLetters);
  };
  return (
    <DetailContainer>
      <DetailBox>
        <Link to="/">
          <DetailBackClick>x</DetailBackClick>
        </Link>
        <DetailRow>
          <Avatar src={avatar} size="large" />
          <p>{nickname}</p>
          <time>{getFormattedDate(createdAt)}</time>
        </DetailRow>
        <DetailHr />
        <DatailContent>{content}</DatailContent>
        <DetailButton>
          <button>수정</button>
          <button onClick={handleDeleteBtn}>삭제</button>
        </DetailButton>
      </DetailBox>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;
const DetailBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  box-shadow: 0 2px 10px -7px rgba(0, 0, 0, 1);
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 22px;
`;

const DatailContent = styled.p`
  color: #7b7b7b;
  width: 440px;
  height: 600px;
  overflow-y: scroll;
  margin: 3px 0 0 25px;
`;

const DetailButton = styled.div`
  width: 94%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: end;

  & button {
    margin-right: 5px;
    margin-bottom: 20px;
    background-color: #1e1e1e;
    color: white;
    border-radius: 8px;
    height: 33px;
    width: 65px;
    font-size: 12px;
    cursor: pointer;
  }
`;
const DetailBackClick = styled.div`
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  right: 24px;
  top: 9px;
`;

const DetailRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0 0 15px;
  & p {
    font-size: 17px;
    font-weight: bold;
    margin-left: 10px;
  }
  & time {
    font-size: 13px;
    color: #bebebe;
    margin-left: 6px;
    margin-top: 4px;
  }
`;
const DetailHr = styled.hr`
  width: 90%;
  border: 0px;
  margin-top: 16px;
  height: 1px;
  background-color: #cccccc;
`;

export default Detail;
