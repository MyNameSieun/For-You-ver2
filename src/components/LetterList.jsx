import styled from 'styled-components';
import LetterCard from './LetterCard';
import { useSelector } from 'react-redux';

function LetterList() {
  const activeTab = useSelector((state) => state.activeTab);
  const letters = useSelector((state) => state.letters);

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
