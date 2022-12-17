import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthorizationLayout from './Layouts/AuthorizationLayout';
import Login from './views/Login';

const App = () => (
  <Router>
    <Routes>
      <Route
        element={<AuthorizationLayout />}
        path="/"
      >
        <Route
          element={<Login />}
          path="login"
        />
      </Route>
    </Routes>
  </Router>
);

export default App;
