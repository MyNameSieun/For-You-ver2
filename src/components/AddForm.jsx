// src > components > AddFormBox
import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { __addLetter } from 'store/modules/letterSlice';

function AddForm() {
  const activeTab = useSelector((state) => state.activeTab);
  const dispatch = useDispatch();
  const { avatar, nickname, userId } = useSelector((state) => state.auth);
  const [content, setContent] = useState('');

  const onAddLetter = (e) => {
    e.preventDefault();
    if (!nickname) {
      return alert('닉네임을 입력해주세요.');
    }
    if (!content) {
      return alert('내용을 입력해주세요.');
    }

    const newLetter = {
      id: uuid(),
      createdAt: new Date().toString(),
      nickname,
      avatar,
      content,
      writedTo: activeTab,
      userId
    };

    dispatch(__addLetter(newLetter));
    setContent('');
  };

  return (
    <AddFormContainer>
      <AddFormTitle>편지를 작성해주세요.</AddFormTitle>
      <form onSubmit={onAddLetter}>
        <AddFormBox>
          <p>닉네임</p>
          <p>{nickname}</p>
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
        <AddFormBox $flexEnd>
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
  justify-content: ${(props) => (props.$flexEnd ? 'flex-end' : '')};

  & p {
    font-size: 16px;
    margin-top: 5px;
    width: 7%;
  }
  & p:nth-child(2) {
    margin-left: 20px;
    margin-bottom: 15px;
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
