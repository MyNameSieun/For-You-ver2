import styled from 'styled-components';
import { useState } from 'react';
import fakeData from 'fakeData.json';

import Navbar from 'components/common/Navbar';
import Tabs from 'components/Tabs';
import AddForm from 'components/AddForm';
import LetterList from 'components/LetterList';

function Home() {
  const [activeTab, setActiveTab] = useState('토토로');
  const [letters, setLetters] = useState(fakeData);

  return (
    <HomeLayout>
      <Navbar />
      <HomeRow>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <HomeCol>
          <AddForm activeTab={activeTab} setLetters={setLetters} />
          <LetterList activeTab={activeTab} letters={letters} />
        </HomeCol>
      </HomeRow>
    </HomeLayout>
  );
}

const HomeLayout = styled.div`
  max-width: 1200px;
  margin: auto;
`;
const HomeRow = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 750px;
  width: 100%;
`;
const HomeCol = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 750px;
  width: 100%;
`;

export default Home;
