import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// React-component
import LandingPage from './components/systems/LandingPage';
import LoginPage from './components/systems/LoginPage';
import RegisterPage from './components/systems/RegisterPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
