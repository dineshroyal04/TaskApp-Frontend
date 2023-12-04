import React, { useState } from 'react';
import LoginForm from './LoginForm';

const LoggedIn = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setLoggedIn(loggedIn);
  };

  return isLoggedIn ? (
    <div>{children}</div>
  ) : (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoggedIn;
