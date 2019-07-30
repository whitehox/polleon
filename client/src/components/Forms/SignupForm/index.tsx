import React from 'react';

function SignupForm(props: any) {
  return (
    <div className="loginFormArea">
      <h1>Polleon</h1>
      <p>Register now</p>
      <form>
        <input type="text" name="fullname" placeholder="Full Name" />
        <input type="text" name="username" placeholder="Username" />
        <input type="email" name="email" placeholder="Email address" />
        <input type="password" name="password" placeholder="Password" />
        <div>
          <input type="checkbox" id="terms" name="terms" />
          {'  '}
          <label htmlFor="terms">Kindly agree to polleon terms</label>
        </div>
        <button type="submit">Signup</button>
        <p className="loginSignUp">
          <a href="/" onClick={props.formDisplay}>
            Already have an account? Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;
