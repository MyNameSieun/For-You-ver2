import styled, { css } from 'styled-components';

function Tabs({ activeTab, setActiveTab }) {
  const tabItems = ['토토로', '키키', '포뇨', '치히로', '소피', '가오나시'];

  const onActiveTab = (e) => {
    if (e.target === e.currentTarget) return;
    setActiveTab(e.target.textContent);
  };

  return (
    <TabsList onClick={onActiveTab}>
      <TabsTitle>누구에게 보내실 건가요?</TabsTitle>
      {tabItems.map((item, index) => {
        return (
          <TabsItem key={index} $activeTab={activeTab}>
            {item}
          </TabsItem>
        );
      })}
    </TabsList>
  );
}

const TabsList = styled.ul`
  background-color: #ffffff;
  width: 390px;
  border-radius: 13px;
  padding: 45px;
  margin-right: 30px;
`;

const TabsTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const TabsItem = styled.li`
  ${(props) => {
    if (props.$activeTab === props.children) {
      return css`
        border: 2px solid black;
        font-weight: bold;
      `;
    }
    return css`
      border: 2px solid #bababa;
      font-weight: normal;
    `;
  }}
  border-radius: 8px;
  height: 65px;
  margin-bottom: 15px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Tabs;
