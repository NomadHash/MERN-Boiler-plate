import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import logoImg from '../../public/rocket.png';
import axios from 'axios';
let conditonRegistBtn = null;
let conditonLoginBtn = null;
const Header = (props) => {
  //State-Hook
  const [open, setOpen] = useState(false);

  // React-Router
  const goLoginPage = () => {
    props.history.push('/login');
  };
  const goRegistPage = () => {
    props.history.push('/register');
  };
  const goRootPage = () => {
    props.history.push('/');
  };

  // Handler Function
  const onClickHandler = () => {
    axios.get('/api/users/logout').then((response) => {
      console.log(response.data);
      if (response.data.success === true) {
        props.history.push('/');
      }
    });
  };

  const onMypageHandler = () => {
    setOpen(!open);
    console.log(open);
  };

  props.isAuth === true
    ? (conditonLoginBtn = (
        <MypageBtn onClick={onMypageHandler}>
          마이페이지
          <ArcodianMypage open={open}>
            <LogoutBtn onClick={onClickHandler}>내 정보</LogoutBtn>
            <LogoutBtn onClick={onClickHandler}>로그아웃</LogoutBtn>
          </ArcodianMypage>
        </MypageBtn>
      ))
    : (conditonLoginBtn = <LoginBtn onClick={goLoginPage}>Login</LoginBtn>);

  props.isAuth === true
    ? (conditonRegistBtn = '')
    : (conditonRegistBtn = (
        <SignUpBtn onClick={goRegistPage}>Sign up</SignUpBtn>
      ));

  return (
    <HeaderDiv>
      <HeaderContent>
        <HeaderLogo onClick={goRootPage}>
          <LogoImg src={logoImg} alt="logo" />
          <HeaderTitle>M.B.P</HeaderTitle>
        </HeaderLogo>
        <TitleBtn>
          {conditonLoginBtn}
          {conditonRegistBtn}
        </TitleBtn>
      </HeaderContent>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  top: 0;
  display: block;
  position: fixed;
  width: 100vw;
  background: none
  height: 57px;
  z-index: 2;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  transform: rotate(45deg);
  width: 35px;
  padding-right: 4px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-left: 20vw;
`;
const TitleBtn = styled.div`
  position: absolute;
  right: 0;
  margin-right: 20vw;
`;
const HeaderTitle = styled.h1`
  padding-left: 6px;
  font-weight: bold;
  margin: 0;
  font-size: 26px;
  color: white;
`;
const LoginBtn = styled.button`
  border: 0;
  background: none;
  font-size: 16px;
  font-weight: 500;
  color: #61dafb;
  width: 56px;
  padding: 0;
  height: 54px;
  margin-right: 14px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 0px rgb(27 185 93);
    outline: none;
  }
`;
const SignUpBtn = styled.button`
  border: 0;
  color: white;
  background: none;
  font-size: 16px;
  font-weight: 500;
  width: 56px;
  padding: 0;
  height: 54px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 0px rgb(27 185 93);
    outline: none;
  }
`;

const ArcodianMypage = styled.div`
  box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.7);
  position: fixed;
  background: #eaeaea;
  width: 136px;
  height: 5vw;
  border-radius: 15px;
  align-items: flex-start;
  display: ${(props) => (props.open === true ? 'flex' : 'none')};
  flex-direction: column;
  padding: 15px;
`;
const MypageBtn = styled.span`
  color: #61dafb;
  font-weight: 600;
  font-size: 15px;
  margin-right: 10px;
`;

const LogoutBtn = styled.button`
  background: none;
  border: none;
  color: #474747;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  padding: 0px;
  margin-bottom: 15px;
  &:hover {
    outline: none;
  }
`;

export default withRouter(Header);
