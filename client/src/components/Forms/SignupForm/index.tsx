import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import hash from 'password-hash';
interface SignUp {
  formDisplay: any;
}

const REGISTER = gql`
  mutation addUser(
    $firstname: String!
    $lastname: String!
    $username: String!
    $email: String!
    $password: String!
    $created_at: String!
  ) {
    addUsers(
      input: {
        firstname: $firstname
        lastname: $lastname
        username: $username
        email: $email
        password: $password
        created_at: $created_at
      }
    ) {
      firstname
      lastname
      username
      email
      password
      created_at
    }
  }
`;

function SignupForm(props: SignUp) {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [username, setusername] = useState('');
  let [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [checked, setchecked] = useState(false);
  const [created_at, setCreatedAt] = useState(new Date().toLocaleString());

  const [input, setIntup] = useState({});

  useEffect(() => {
    setCreatedAt(new Date().toLocaleString());
    password = hash.generate(password);
    setIntup({
      firstname,
      lastname,
      username,
      password,
      email,
      checked,
      created_at
    });
  }, [firstname, lastname, username, password, email, checked, created_at]);

  return (
    <div className="loginFormArea">
      <h1>Polleon</h1>
      <p>Register now</p>
      <Mutation mutation={REGISTER} variables={input}>
        {(addUsers: any, { loading, error }: any) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              addUsers({ variables: { input } });
            }}
          >
            {loading && <p>Loading...</p>}
            {error && <p>Email already exist</p>}
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
        )}
      </Mutation>
    </div>
  );
}

export default SignupForm;
