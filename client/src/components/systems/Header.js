import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import logoImg from '../../public/rocket.png';
let conditonRegistBtn = null;
let conditonLoginBtn = null;
const Header = (props) => {
  // const { isAuth, name } = props;
  const goLoginPage = () => {
    props.history.push('/login');
  };
  const goRegistPage = () => {
    props.history.push('/register');
  };

  props.isAuth === true
    ? (conditonLoginBtn = <span>안녕하세요 {props.name} 님!</span>)
    : (conditonLoginBtn = <LoginBtn onClick={goLoginPage}>login</LoginBtn>);

  props.isAuth === true
    ? (conditonRegistBtn = '')
    : (conditonRegistBtn = (
        <SignUpBtn onClick={goRegistPage}>Sign up</SignUpBtn>
      ));

  return (
    <HeaderDiv>
      <HeaderLeft>
        <LogoImg src={logoImg} alt="logo" />
        <HeaderTitle>M.B.P</HeaderTitle>
        <TitleBtn>
          {/* <LoginBtn onClick={goLoginPage}>login</LoginBtn> */}
          {conditonLoginBtn}
          {conditonRegistBtn}
          {/* <SignUpBtn onClick={goRegistPage}>Sign up</SignUpBtn> */}
        </TitleBtn>
      </HeaderLeft>
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

const LogoImg = styled.img`
  transform: rotate(45deg);
  width: 35px;
  padding-right: 4px;
`;

const HeaderLeft = styled.div`
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

export default withRouter(Header);
