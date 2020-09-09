import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../_actions/user_actions';
import { withRouter } from 'react-router-dom';
import loginBackground from '../../public/loginBackground.jpeg';

//import Container
import HeaderContainer from '../../container/HeaderContainer';
import FileUpload from '../utils/FileUpload';
//Condition DOM
let conditonErrMessage = null;

const RegisterPage = (props) => {
  // State
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confilmPassword, setConfilmPassword] = useState('');

  // Redux-Dispatch
  const dispatch = useDispatch();

  // Handler function
  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const onNameHandler = (event) => {
    setName(event.target.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const onConfilmPasswordHandler = (event) => {
    setConfilmPassword(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault(); // 새로고침 방지
    if (password !== confilmPassword) {
      alert('패스워드가 일치하지 않습니다.');
    } else {
      let requestBody = {
        email,
        name,
        password,
      };
      console.log('regist');
      dispatch(registerUser(requestBody)).then(props.history.push('/login'));
    }
  };
  return (
    <LoginPageContent>
      <HeaderContainer />
      {/* <img src={loginBackground} alt="logoIng" /> */}
      <div>
        <span>
          <LoginText>회원가입</LoginText>
        </span>
        <FileUpload></FileUpload>
        <form onSubmit={onSubmitHandler} encType="multipart/form-data">
          <EmailText>프로필 사진</EmailText>
          <EmailText>이름</EmailText>
          <EmailInput type="text" value={name} onChange={onNameHandler} />
          {conditonErrMessage}
          <EmailText>이메일 주소</EmailText>
          <EmailInput type="email" value={email} onChange={onEmailHandler} />
          {conditonErrMessage}
          <PasswordText>패스워드</PasswordText>
          <PwdInput
            type="password"
            value={password}
            onChange={onPasswordHandler}
          />
          <PasswordText>패스워드 확인</PasswordText>
          <PwdInput
            type="password"
            value={confilmPassword}
            onChange={onConfilmPasswordHandler}
          />
          <LoginBtn>로그인</LoginBtn>
        </form>
      </div>
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

export default withRouter(RegisterPage);
