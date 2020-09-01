import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

//LogoImg
import contentImg from '../../../public/contentImg.png';
import profileImg from '../../../public/profile.png';

const LandingPage = (props) => {
  useEffect(() => {
    // axios.get("api/hello").then((response) => console.log(response));
    console.log(props);
  }, []);

  const onClickHandler = () => {
    axios.get('/api/users/logout').then((response) => {
      console.log(response.data);
      if (response.data.success === true) {
        props.history.push('/login');
      }
    });
  };

  return (
    <div>
      <LandingTitle>
        <FirstTitle>Easy start with</FirstTitle>
        <SecondTitle>MERN BOILER PLATE</SecondTitle>
        <StartBtn>Start guide</StartBtn>
        <img src={contentImg} alt="contentImg" />
        <CreateByArea>
          <ProfileImg src={profileImg} alt="profileImg" />
          <ProfileText>CreateBy Nomad_Hash</ProfileText>
          <ProfileText>github.com/NomadHash</ProfileText>
        </CreateByArea>
      </LandingTitle>

      <button onClick={onClickHandler}>로그아웃</button>
    </div>
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

const LandingTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FirstTitle = styled.h2`
  margin: 0;
  font-weight: 200;
  font-size: 6vw;
  margin-top: 2vw;
`;

const SecondTitle = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 6vw;
  margin-bottom: 40px;
`;

const StartBtn = styled.button`
  background: #dd4d2e;
  color: white;
  border: none;
  border-radius: 7px;
  padding: 9px 7px;
  font-size: 21px;
  font-weight: 600;
  box-shadow: 0px 5px 0px rgb(74 51 0);
`;

export default withRouter(LandingPage);
