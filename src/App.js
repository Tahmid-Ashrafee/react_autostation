
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DataEntryForm from './components/DataEntryForm';
import Login from './components/Login';
import Registration from './components/Registartion';
import Navbar from './components/navbar';
import AppRouter from './AppRouter';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/data-entry" component={DataEntryForm} />
        
        <AppRouter/>
      </div>
    </Router>
  );
};

const Home = () => {
  return <h2>Home Page</h2>;
};

export default App;
