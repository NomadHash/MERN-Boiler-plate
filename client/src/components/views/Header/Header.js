import React, { useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import logoImg from '../../../public/rocket.png';
import { useSelector } from 'react-redux';

const Header = (props) => {
  const goRootPage = () => {
    console.log('a');
    props.history.push('/login');
  };
  const goRegistPage = () => {
    props.history.push('/register');
  };

  //   const { userData } = useSelector(({ user }) => {
  //     return { isAuth: user.userData.isAuth };
  //   });

  return (
    <HeaderDiv>
      <HeaderLeft>
        <LogoImg src={logoImg} alt="logo" />
        <HeaderTitle>M.B.P</HeaderTitle>
        <TitleBtn>
          <LoginBtn onClick={goRootPage}>Login</LoginBtn>
          <SignUpBtn onClick={goRegistPage}>Sign up</SignUpBtn>
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
  background: #ffffff;
  box-shadow: 13px 1px 5px rgba(0, 0, 0, 0.25);
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
  color: #dd4d2e;
`;
const LoginBtn = styled.button`
  border: 0;
  background: none;
  font-size: 16px;
  font-weight: 500;
  color: #dd4d2e;
  width: 56px;
  padding: 0;
  height: 54px;
  margin-right: 14px;
  &:hover {
    box-shadow: 0px 4px 0px rgb(255 110 0);
    background: #f7f7f7;
  }
`;
const SignUpBtn = styled.button`
  border: 0;
  background: none;
  font-size: 16px;
  font-weight: 500;
  width: 56px;
  padding: 0;
  height: 54px;
  &:hover {
    box-shadow: 0px 4px 0px rgb(255 110 0);
    background: #f7f7f7;
  }
`;

export default withRouter(Header);
