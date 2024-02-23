import Avatar from 'components/common/Avatar';
import styled from 'styled-components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getFormattedDate } from 'util/data';
import { useState } from 'react';

function Detail({ letters, setLetters }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState('');

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

  const onEditDone = () => {
    if (!editingText) return alert('수정사항이 없습니다.');
    const newLetters = letters.map((letter) => {
      if (letter.id === id) {
        return { ...letter, content: editingText };
      }

      return letter;
    });

    setLetters(newLetters);
    setIsEditing(false);
    setEditingText('');
  };

  return (
    <DetailContainer>
      <DetailBox>
        <Link to="/">
          <DetailBackClick onClick={setIsEditing}>x</DetailBackClick>
        </Link>
        <DetailRow>
          <Avatar src={avatar} size="large" />
          <p>{nickname}</p>
          <time>{getFormattedDate(createdAt)}</time>
        </DetailRow>
        <DetailHr />
        {isEditing ? (
          <>
            <DetailTextarea
              autoFocus
              defaultValue={content}
              onChange={(e) => setEditingText(e.target.value)}
            ></DetailTextarea>
            <DetailButton>
              <button onClick={onEditDone}>수정 완료</button>
              <button onClick={() => setIsEditing(false)}>취소</button>
            </DetailButton>
          </>
        ) : (
          <>
            <DatailContent>{content}</DatailContent>
            <DetailButton>
              <button onClick={() => setIsEditing(true)}>수정</button>
              <button onClick={handleDeleteBtn}>삭제</button>
            </DetailButton>
          </>
        )}
        {isEditing}
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
  margin: 3px 0 0 25px;
  font-size: 16px;
`;
const DetailTextarea = styled.textarea`
  color: #7b7b7b;
  width: 440px;
  height: 600px;
  margin: 3px 0 0 25px;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
`;

const DetailButton = styled.div`
  width: 94%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: end;

  & button {
    margin-right: 3px;
    margin-bottom: 20px;
    background-color: #1e1e1e;
    color: white;
    border-radius: 8px;
    height: 33px;
    width: 68px;
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
