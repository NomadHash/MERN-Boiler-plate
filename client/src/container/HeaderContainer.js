import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/views/Header/Header';

const HeaderContainer = () => {
  const { name } = useSelector(({ user }) => ({
    isAuth: user.userData.isAuth,
    name: user.userData.name,
  }));
  return <Header name={name} />;
};

export default HeaderContainer;
