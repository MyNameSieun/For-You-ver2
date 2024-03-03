import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'store/modules/authSlice';
import styled, { css } from 'styled-components';
import { toast } from 'react-toastify';
import useForm from 'hooks/useForm';
import { authApi } from 'api';

const Login = () => {
  const dispatch = useDispatch();

  const [isLoginMode, setIsLoginMode] = useState(true);

  const { formState, onChangeHandler, resetForm } = useForm({ id: '', password: '', nickname: '' });
  const { id, password, nickname } = formState;

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLoginMode) {
      // 로그인 처리
      try {
        const { data } = await authApi.post('/login', {
          id,
          password
        });
        if (data.success) {
          dispatch(login(data.accessToken));
          toast.success('로그인 성공');
        }
      } catch (err) {
        toast.error(err.response.data.message);
      }
    } else {
      try {
        // 회원가입 처리
        const { data } = await authApi.post('/register', {
          id,
          password,
          nickname
        });
        if (data.success) {
          setIsLoginMode(true);
          resetForm();
          toast.success('회원가입 성공');
        }
      } catch (err) {
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    <LoginContainer>
      <LoginFormBox onSubmit={onSubmitHandler}>
        <LoginTitle>{isLoginMode ? '로그인' : '회원가입'}</LoginTitle>
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
            onChange={onChangeHandler}
            placeholder="닉네임을 입력해주세요. (1~10글자)"
            minLength={1}
            maxLength={10}
          />
        )}
        <LoginButton disabled={isLoginMode ? !id || !password : !id || !password || !nickname}>
          {isLoginMode ? '로그인' : '회원가입'}
        </LoginButton>
        <LoginToggleBox>
          <span onClick={() => setIsLoginMode((prev) => !prev)}>{isLoginMode ? '회원가입' : '로그인'}</span>
        </LoginToggleBox>
      </LoginFormBox>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoginFormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 300px;
  border-radius: 12px;
  background-color: white;
  padding: 50px;

  & input {
    margin-top: 16px;
    height: 32px;
    font-size: 15px;
    border: none;
    border-bottom: 1px solid gray;
    outline: none;
    padding-left: 10px;
  }
`;
const LoginTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const LoginButton = styled.button`
  color: white;
  cursor: pointer;
  margin-top: 14px;
  padding: 10px;
  font-size: 15px;
  ${(props) => {
    if (props.disabled) {
      return css`
        background-color: lightgray;
      `;
    }
    return css`
      background-color: black;
    `;
  }};
`;
const LoginToggleBox = styled.div`
  color: gray;
  background-color: white;
  outline: none;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  user-select: none;
  text-align: center;
  font-size: 15px;
`;

export default Login;
