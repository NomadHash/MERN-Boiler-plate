import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../../_actions/user_actions';

//import Container
import HeaderContainer from '../../container/HeaderContainer';

//LogoImg
import contentImg from '../../public/contentImg.png';
import profileImg from '../../public/profile.png';

const LandingPage = (props) => {
  const dispatch = useDispatch();
  dispatch(auth()).then((response) => {
    console.log(response);
  });

  return (
    <LandingContent>
      <HeaderContainer />
      <FirstTitle>쉽고 빠르게 시작하는</FirstTitle>
      <SecondTitle>MERN 보일러 플레이트</SecondTitle>
      <StartBtn>빠른 시작</StartBtn>
      <img src={contentImg} alt="contentImg" />
      <CreateByArea>
        <ProfileImg src={profileImg} alt="profileImg" />
        <ProfileText>CreateBy Nomad_Hash</ProfileText>
        <ProfileText>github.com/NomadHash</ProfileText>
      </CreateByArea>
    </LandingContent>
  );
};
const ProfileText = styled.h3`
  margin: 0;
  font-weight: 200;
  margin-top: 7px;
`;

const CreateByArea = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  transform: translate(31vw, 7vw);
`;

const ProfileImg = styled.img`
  border-radius: 24%;
  width: 219px;
  margin-top: 2vw;
  box-shadow: 1px 6px 6px rgba(0, 0, 0, 0.35);
`;

const LandingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FirstTitle = styled.h2`
  margin: 0;
  font-weight: 200;
  font-size: 6vw;
  margin-top: 4vw;
  color: white;
`;

const SecondTitle = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 6vw;
  margin-bottom: 40px;
  color: white;
`;

const StartBtn = styled.button`
  background: #61dafb;
  border: none;
  border-radius: 7px;
  padding: 9px 17px;
  font-size: 21px;
  font-weight: 600;
  box-shadow: 0px 5px 0px rgba(0,0,0,0.7);
  cursor: pointer;
  &:hover {
    outline: none;
  }
}


`;

export default withRouter(LandingPage);
