import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

const App = ({ user }) => {
  return (
    <Router>
      {user.isAuthenticated ? (
        <Redirect to='/dashboard' />
      ) : (
        <Redirect to='/welcome' />
      )}
    </Router>
  );
};

export default App;
