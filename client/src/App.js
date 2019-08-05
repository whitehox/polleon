import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Apollo client
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Home from './components/Home';
import Login from './components/Login/index';
import AddEvent from './components/AddEvent';

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/addevent" component={AddEvent} />
        </Router>
      </>
    </ApolloProvider>
  );
};

export default App;
