import styled from 'styled-components';

export default function Button({ text, onClick = () => {} }) {
  return (
    <ButtonBox>
      <button onClick={onClick}>{text}</button>
    </ButtonBox>
  );
}

const ButtonBox = styled.div`
  background-color: #1e1e1e;
  color: white;
  border-radius: 8px;
  margin: 20px 0;
  height: 35px;
  width: 100px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
