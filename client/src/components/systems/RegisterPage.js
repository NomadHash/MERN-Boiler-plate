import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../_actions/user_actions';
import { withRouter } from 'react-router-dom';

//=================================
//       Register-Page
//=================================

//import Container
import HeaderContainer from '../../container/HeaderContainer';
import FileUpload from '../utils/FileUpload';
//Condition DOM
let conditonErrMessage = null;

const RegisterPage = (props) => {
  // State
  const [images, setImages] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confilmPassword, setConfilmPassword] = useState('');

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

  //=================================
  // Redux-Dispatch
  const dispatch = useDispatch();
  const onSubmitHandler = (event) => {
    event.preventDefault(); // 새로고침 방지
    if (password !== confilmPassword) {
      alert('패스워드가 일치하지 않습니다.');
    } else {
      let requestBody = {
        email,
        name,
        password,
        profileImage: images,
      };
      console.log(requestBody);
      dispatch(registerUser(requestBody)).then((response) => {
        response.payload.registerSuccess === true
          ? props.history.push('/login')
          : cleanInput();
      });
    }
    const cleanInput = () => {
      conditonErrMessage = <ErrMsg>이미 존재하는 이메일 입니다.</ErrMsg>;
      setEmail('');
      setPassword('');
      setConfilmPassword('');
      if (email !== '') {
        conditonErrMessage = <span></span>;
      }
    };
  };
  //=================================

  const updataImages = (newImages) => {
    setImages(newImages);
  };

  return (
    <LoginPageContent>
      <HeaderContainer />
      <FormContent>
        <LoginText>회원가입</LoginText>

        {/* ====================== */}
        {/*       Upload            */}
        <RegisterInputText>프로필 사진</RegisterInputText>
        <FileUpload fileToParents={updataImages}></FileUpload>

        {/* ========================= */}

        <form onSubmit={onSubmitHandler} encType="multipart/form-data">
          <RegisterInputText>이름</RegisterInputText>
          <RegisterInput type="text" value={name} onChange={onNameHandler} />
          <RegisterInputText>이메일 주소</RegisterInputText>
          <RegisterInput type="email" value={email} onChange={onEmailHandler} />
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
          <LoginBtn>회원가입</LoginBtn>
        </form>
      </FormContent>
    </LoginPageContent>
  );
};

//=================================
//       Styled-Component
//=================================

const FormContent = styled.div`
  height: 620px;
  background: white;
  border-radius: 30px;
  padding: 40px;
  margin-top: 2vw;
`;

const LoginPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  padding: 10px;
`;

const LoginText = styled.h1`
  margin: 0;
`;

const RegisterInputText = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  font-size: 12px;
  color: #5f5f5f;
  font-weight: 500;
  margin-top: 29px;
`;

const RegisterInput = styled.input`
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
  display: block;
  margin-top: 2vw;
  &:focus {
    outline: none;
  }
`;

export default withRouter(RegisterPage);
