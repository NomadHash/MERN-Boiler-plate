import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_actions/user_actions';
import { withRouter } from 'react-router-dom';
import loginBackground from '../../public/loginBackground.jpeg';

//import Container
import HeaderContainer from '../../container/HeaderContainer';

//Condition DOM
let conditonErrMessage = null;

//Main Component
const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redux-Dispatch
  const dispatch = useDispatch();

  // Handler function
  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const onRegisterHandler = () => {
    props.history.push('/register');
  };
  const onSubmitHandler = (event) => {
    event.preventDefault(); // 새로고침 방지
    let requestBody = {
      email,
      password,
    };
    dispatch(loginUser(requestBody)).then((response) => {
      response.payload.loginSuccess === true
        ? props.history.push('/')
        : cleanInput();
    });
  };

  // Submit-Error-condition
  const cleanInput = () => {
    conditonErrMessage = (
      <ErrMsg>이메일 혹은 패스워드가 잘못되었습니다.</ErrMsg>
    );
    setEmail('');
    setPassword('');
    if (email !== '') {
      conditonErrMessage = <span></span>;
    }
  };

  return (
    <LoginPageContent>
      <HeaderContainer />
      <BackgroundImg src={loginBackground} alt="logoIng" />
      <LoginForm onSubmit={onSubmitHandler}>
        <span>
          <LoginText>로그인</LoginText>
        </span>
        <RegisterSpan>
          <RegisterRouter>신규 사용자이신가요? </RegisterRouter>
          <RegisterBtn onClick={onRegisterHandler}>계정만들기</RegisterBtn>
        </RegisterSpan>
        <EmailText>이메일 주소</EmailText>
        <EmailInput type="email" value={email} onChange={onEmailHandler} />
        {conditonErrMessage}
        <PasswordText>패스워드</PasswordText>
        <PwdInput
          type="password"
          value={password}
          onChange={onPasswordHandler}
        />
        <LoginBtn>로그인</LoginBtn>
      </LoginForm>
    </LoginPageContent>
  );
};

const LoginPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  padding: 10px;
`;

const BackgroundImg = styled.img`
  position: absolute;
  width: 64vw;
  border-radius: 41px;
  z-index: 1;
`;

const LoginForm = styled.form`
  padding: 41px;
  box-shadow: 7px 11px 5px rgba(0, 0, 0, 0.35);
  background: white;
  border-radius: 10px;
  width: 23vw;
  height: 34vw;
  z-index: 2;
  right: -17vw;
  position: relative;
`;

const LoginText = styled.h1`
  margin: 0;
`;

const RegisterSpan = styled.span`
  display: flex;
  align-items: center;
`;

const RegisterRouter = styled.h2`
  color: #4b4b4b;
  font-weight: 400;
  font-size: 18px;
  margin-top: 11px;
`;

const RegisterBtn = styled.button`
  background: none;
  border: none;
  color: #49709f;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  &:active {
    outline: none;
  }
`;

const EmailText = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  font-size: 12px;
  color: #5f5f5f;
  font-weight: 500;
  margin-top: 29px;
`;

const EmailInput = styled.input`
  width: 23vw;
  border: none;
  border-bottom: 1px solid #cbcbcb;
  font-size: 22px;
  &:focus {
    outline: none;
  }
`;

const ErrMsg = styled.h3`
  color: firebrick;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
`;

const PasswordText = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  font-size: 12px;
  color: #5f5f5f;
  font-weight: 500;
  margin-top: 29px;
`;

const PwdInput = styled.input`
  width: 23vw;
  border: none;
  border-bottom: 1px solid #cbcbcb;
  font-size: 22px;
  margin-bottom: 2vw;
  &:focus {
    outline: none;
  }
`;

const LoginBtn = styled.button`
  color: white;
  background: #49709f;
  border: none;
  border-radius: 26px;
  font-size: 21px;
  padding: 11px;
  font-weight: 300;
  width: 23vw;
  &:focus {
    outline: none;
  }
`;

export default withRouter(LoginPage);
