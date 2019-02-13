import React, { Component } from 'react';
import LandingPage from './lib/LandingPage';
import TestPage from './lib/TestPage';
import { Switch, Route } from 'react-router-dom';
import Header from './lib/Header';
import SignInBox from './lib/SignInBox';

import './App.css';


  
  const App = () => {
  
    return (
    
    <div className="App">
    <Header />
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/Year' component={TestPage} />
    </Switch>
    <hr />

    </div>
    
  
  
  );
  
  
  };
  



export default App;
