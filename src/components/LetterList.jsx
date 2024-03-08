// src > components > LetterList
import styled from 'styled-components';
import LetterCard from './LetterCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { __getLetters } from 'store/modules/letterSlice';

function LetterList() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeTab);
  const letters = useSelector((state) => state.letters.letters);

  // sort를 해준 다음에 렌더링
  const filteredLetters = letters.filter((letter) => letter.writedTo === activeTab);

  useEffect(() => {
    // getLetters
    dispatch(__getLetters());
  }, [dispatch]);

  return (
    <LetterContainer>
      {filteredLetters.length === 0 ? (
        <p>{activeTab}에게 남겨진 편지가 없습니다.</p>
      ) : (
        filteredLetters.map((letter, index) => <LetterCard letter={letter} key={index} />)
      )}
    </LetterContainer>
  );
}

const LetterContainer = styled.div`
  background-color: white;
  height: 460px;
  border-radius: 13px;
  padding: 45px;
  overflow-y: scroll;
`;

export default LetterList;
