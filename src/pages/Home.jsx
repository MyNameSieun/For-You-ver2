import styled from 'styled-components';
import Tabs from 'components/Tabs';
import AddForm from 'components/AddForm';
import LetterList from 'components/LetterList';

function Home() {
  return (
    <HomeLayout>
      <HomeRow>
        <Tabs />
        <HomeCol>
          <AddForm />
          <LetterList />
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
