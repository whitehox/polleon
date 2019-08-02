import React, { useState, useEffect } from 'react';
import hash from 'password-hash';

import { graphql, compose } from 'react-apollo';
import { REGISTER } from '../../../queries/queries';

function SignupForm(props) {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [username, setusername] = useState('');
  let [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [checked, setchecked] = useState(false);
  const [created_at, setCreatedAt] = useState(new Date().toLocaleString());
  const [account_type, setAccountType] = useState(false);

  const [input, setIntup] = useState({});
  useEffect(() => {
    setCreatedAt(new Date().toLocaleString());
    setIntup({
      firstname,
      lastname,
      username,
      password: hash.generate(password),
      email,
      account_type,
      checked,
      created_at
    });
  }, [
    firstname,
    lastname,
    username,
    password,
    email,
    checked,
    account_type,
    created_at
  ]);

  const submitFormHandler = e => {
    e.preventDefault();
    props.registerUser({
      variables: { ...input }
    });
  };

  return (
    <div className="loginFormArea">
      <h1>Polleon</h1>
      <p>Register now</p>
      <form onSubmit={submitFormHandler}>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Firstname"
          onChange={e => setfirstname(e.target.value)}
          defaultValue={firstname}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          onChange={e => setlastname(e.target.value)}
          defaultValue={lastname}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={e => setusername(e.target.value)}
          defaultValue={username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={e => setemail(e.target.value)}
          defaultValue={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => setpassword(e.target.value)}
          defaultValue={password}
        />
        <div>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            onChange={e => setchecked(e.target.checked)}
            defaultChecked={checked}
          />
          {'  '}
          <label htmlFor="terms">Kindly agree to polleon terms</label>
        </div>
        <button type="submit" name="submit">
          Signup
        </button>
        <p className="loginSignUp">
          <a href="/" onClick={props.formDisplay}>
            Already have an account? Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default compose(graphql(REGISTER, { name: 'registerUser' }))(SignupForm);
