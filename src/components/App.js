import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './Welcome';

const App = ({ user }) => {
  return (
    <Router>
      <Route exact path='/' component={Welcome} />
      <Route path='/welcome' component={Welcome} />
    </Router>
  );
};

export default App;
