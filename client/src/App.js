import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login/index';

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    </>
  );
};

export default App;
