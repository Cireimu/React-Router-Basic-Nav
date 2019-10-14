import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" components={Home} />
    <Route path="/about" components={About}/>
    <Route path="/contact" components={Contact}/>
  </div>
);

export default App;
