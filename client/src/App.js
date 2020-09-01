import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Auth from './hoc/auth';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/login">login Page</Link>
          </li>
          <li>
            <Link to="/register">register Page</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/register" component={Auth(RegisterPage, false, true)} />
          <Route path="/login" component={Auth(LoginPage, false)} />
          <Route path="/" component={Auth(LandingPage, null)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
