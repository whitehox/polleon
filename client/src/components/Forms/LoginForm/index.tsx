import React from 'react';

import './LoginForm.css';

function LoginForm() {
  return (
    <div className="loginFormArea">
      <h1>Polleon</h1>
      <p>
        Welcome back, Please Login <br />
        to your account
      </p>
      <form>
        <input type="text" name="email" placeholder="Email address" />
        <input type="password" name="password" placeholder="Password" />
        <div>
          <input type="checkbox" id="terms" name="terms" />
          {'  '}
          <label htmlFor="terms">Kindly agree to polleon terms</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
