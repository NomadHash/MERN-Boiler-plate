import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_actions';

export default function (SpecificComponent, option, adminRoute = null) {
  const dispatch = useDispatch();
  //option(null = private, ture = loginUser, false = !loginUser)
  function AuthenticationCheck({ history }) {
    useEffect(() => {
      dispatch(auth()).then((response) => {
        // console.log(response);
        if (!response.payload.isAuth) {
          if (option) {
            history.push('/');
          }
        } else {
          if (!option) {
            history.push('/');
          }
        }
      });
    }, [history]);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
