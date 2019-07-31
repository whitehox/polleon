import React, { useState } from 'react';

//Styles
import './Login.css';

//Components
import Card from '../Cards';
import LoginForm from '../Forms/LoginForm';
import SignupForm from '../Forms/SignupForm';
import Footer from '../Footer';

//Components
import Navbar from '../Navbar';

function Login() {
  const [formState, setFormState] = useState(true);

  const formDisplayHandler = event => {
    event.preventDefault();
    setFormState(!formState);
  };

  const cardStyle = {
    width: '70%',
    margin: '30px auto 0 auto',
    background: '#FFF',
    boxShadow: '0 22px 80px rgba(0, 0, 0, 0.19)',
    borderRadius: '4px',
    display: 'flex',
    padding: '20px 50px'
  };
  return (
    <>
      <Navbar />
      <Card cardStyle={cardStyle}>
        {formState ? (
          <LoginForm formDisplay={formDisplayHandler} />
        ) : (
          <SignupForm formDisplay={formDisplayHandler} />
        )}
        <div className="loginImage">
          <img alt="polleon login" src="assets/img/loginsignup.png" />
        </div>
      </Card>
      <Footer />
    </>
  );
}

export default Login;
