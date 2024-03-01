import { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  //
  const [formState, setFormState] = useState({
    id: '',
    password: '',
    nickname: ''
  });
  const { id, password, nickname } = formState;

  const onChangeHandler = (evnet) => {
    const { name, value } = evnet.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LoginTitle>{isLoginMode ? '로그인' : '회원가입'}</LoginTitle>
        <LoginForm>
          <input
            name="id"
            value={id}
            onChange={onChangeHandler}
            placeholder="아이디를 입력해주세요. (4~10글자)"
            minLength={4}
            maxLength={10}
          />
          <input
            name="password"
            value={password}
            onChange={onChangeHandler}
            placeholder="비밀번호를 입력해주세요. (4~15글자)"
            minLength={4}
            maxLength={15}
          />
          {!isLoginMode && (
            <input
              name="nickname"
              value={nickname}
              onchange={onChangeHandler}
              placeholder="닉네임을 입력해주세요. (1~10글자)"
              minLength={1}
              maxLength={10}
            />
          )}
        </LoginForm>
        <LoginButton>{isLoginMode ? '로그인' : '회원가입'}</LoginButton>
        <LoginToggleButton>
          <span onClick={() => setIsLoginMode((prev) => !prev)}>{isLoginMode ? '회원가입' : '로그인'}</span>
        </LoginToggleButton>
      </LoginBox>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 300px;
  border-radius: 12px;
  background-color: white;
  padding: 50px;
`;
const LoginTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  & input {
    margin-top: 16px;
    height: 32px;
    font-size: 15px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    padding-left: 10px;
  }
`;
const LoginButton = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  margin-top: 14px;
  padding: 10px;
`;
const LoginToggleButton = styled.button`
  color: gray;
  background-color: white;
  outline: none;
  border: none;
  margin-top: 5px;
  cursor: pointer;
  user-select: none;
`;

export default Login;
