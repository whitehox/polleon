import React, { useState, useEffect } from 'react';

import { graphql, compose } from 'react-apollo';

import { Redirect } from 'react-router-dom';

import { LOGIN } from '../../../queries/queries';

import './LoginForm.css';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const submitFormHandler = async e => {
    e.preventDefault();
    const data = await props.loginUser({
      variables: { email, password }
    });
    localStorage.setItem(
      'userData',
      JSON.stringify(data.data.userLogin.authUser)
    );
    localStorage.setItem('token', data.data.userLogin.token);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="loginFormArea">
      <h1>Polleon</h1>
      <p>
        Welcome back, Please Login <br />
        to your account
      </p>
      <form onSubmit={submitFormHandler}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => setpassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p className="loginSignUp">
          <a href="/" onClick={props.formDisplay}>
            Don't have an account? Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default compose(graphql(LOGIN, { name: 'loginUser' }))(LoginForm);
