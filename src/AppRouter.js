import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registartion';
import DataEntryForm from './components/DataEntryForm';

const AppRouter = () => {
    return (
      <Router>
        
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/data-entry" component={DataEntryForm} />
        
      </Router>
    );
  };
  
  export default AppRouter;