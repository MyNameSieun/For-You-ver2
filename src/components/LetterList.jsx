import styled from 'styled-components';
import LetterCard from './LetterCard';
import { useContext } from 'react';
import { ActiveTabContext } from 'context/ActiveTabContext';
import { LetterContext } from 'context/LetterContext';

function LetterList() {
  const { activeTab } = useContext(ActiveTabContext);
  const { letters } = useContext(LetterContext);
  const filteredLetters = letters.filter((letter) => letter.writedTo === activeTab);
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
