import React from 'react';

import './LoginForm.css';

function LoginForm(props) {
  return (
    <div className="loginFormArea">
      <h1>Polleon</h1>
      <p>
        Welcome back, Please Login <br />
        to your account
      </p>
      <form>
        <input type="email" name="email" placeholder="Email address" />
        <input type="password" name="password" placeholder="Password" />
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

export default LoginForm;
