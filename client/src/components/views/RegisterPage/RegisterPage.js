import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_actions';
import { withRouter } from 'react-router-dom';

const RegisterPage = (props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confilmPassword, setConfilmPassword] = useState('');

  // Redux-Dispatch
  const dispatch = useDispatch();

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

        <h2>Name</h2>
        <input type="text" value={name} onChange={onNameHandler} />

        <h2>password</h2>
        <input type="password" value={password} onChange={onPasswordHandler} />

        <h2>Conflim password</h2>
        <input
          type="password"
          value={confilmPassword}
          onChange={onConfilmPasswordHandler}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default withRouter(RegisterPage);
