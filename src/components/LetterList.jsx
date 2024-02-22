import styled from 'styled-components';
import LetterCard from './LetterCard';
import fakeData from 'fakeData.json';

function LetterList({ activeTab }) {
  const filteredLetters = fakeData.filter((letter) => letter.writedTo === activeTab);
  return (
    <LetterContainer>
      {filteredLetters.map((letter, index) => (
        <LetterCard letter={letter} key={index} />
      ))}
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
