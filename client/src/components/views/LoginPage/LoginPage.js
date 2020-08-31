import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_actions';

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redux-Dispatch
  const dispatch = useDispatch();

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault(); // 새로고침 방지
    let requestBody = {
      email,
      password,
    };

    dispatch(loginUser(requestBody)).then((response) => {
      response.payload.loginSuccess === true
        ? console.log('Login Success')
        : alert('Login fail');
      history.push('/');
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={onSubmitHandler}
      >
        <h2>Email</h2>
        <input type="email" value={email} onChange={onEmailHandler} />
        <h2>password</h2>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
