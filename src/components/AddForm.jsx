// components/AddFormBox
import styled from 'styled-components';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function AddForm({ activeTab, setLetters }) {
  const [nickname, setNickName] = useState('');
  const [content, setContent] = useState('');

  const onAddLetter = (e) => {
    e.preventDefault();
    if (!nickname) {
      return alert('닉네임을 입력해주세요');
    }
    if (!content) {
      return alert('내용을 입력해주세요.');
    }

    const newLetter = {
      id: uuid(),
      createdAt: new Date(),
      nickname,
      avatar: null,
      content,
      writedTo: activeTab
    };

    setLetters((prev) => [...prev, newLetter]);
    setNickName('');
    setContent('');
  };
  return (
    <AddFormContainer>
      <AddFormTitle>편지를 작성해주세요.</AddFormTitle>

      <form onSubmit={onAddLetter}>
        <AddFormBox>
          <p>닉네임</p>
          <input
            type="text"
            placeholder="최대 20글자까지 작성할 수 있습니다."
            maxLength={20}
            value={nickname}
            onChange={(e) => setNickName(e.target.value)}
          />
        </AddFormBox>
        <AddFormBox>
          <p>내용</p>
          <textarea
            placeholder="최대 600글자까지 작성할 수 있습니다."
            maxLength={600}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </AddFormBox>
        <AddFormBox>
          <AddFormButton>편지 등록</AddFormButton>
        </AddFormBox>
      </form>
    </AddFormContainer>
  );
}

const AddFormContainer = styled.div`
  background-color: white;
  height: 370px;
  border-radius: 13px;
  margin-bottom: 30px;
  padding: 45px;
  display: flex;
  flex-direction: column;
`;
const AddFormTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const AddFormBox = styled.div`
  display: flex;
  justify-content: flex-end;

  & p {
    font-size: 16px;
    margin-top: 5px;
    width: 7%;
  }
  & input,
  textarea {
    width: 100%;
    padding: 10px;
    outline: none;
    border-radius: 15px;
    border: 1px solid #bfbfbf;
    margin-left: 26px;
  }
  & input {
    margin-bottom: 30px;
    height: 30px;
  }
  & textarea {
    height: 140px;
    resize: none;
  }
`;
const AddFormButton = styled.button`
  background-color: #1e1e1e;
  color: white;
  border-radius: 8px;
  margin: 20px 0;
  height: 35px;
  width: 100px;
  font-size: 14px;
  font-weight: bold;
`;

export default AddForm;
