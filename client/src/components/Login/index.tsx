import React from 'react';
import './Login.css';
import Card from '../Cards';
import LoginForm from '../Forms/LoginForm';

//Components
import Navbar from '../Navbar';

function Login() {
  const cardStyle = {
    width: '60%',
    margin: 'auto',
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
        <LoginForm />
        <div className="loginImage">
          <img alt="polleon login" src="assets/img/fogg-welcome-3.png" />
        </div>
      </Card>
    </>
  );
}

export default Login;
