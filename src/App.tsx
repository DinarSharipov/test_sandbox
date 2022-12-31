import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthorizationLayout from './Layouts/AuthorizationLayout';
import MainLayout from './Layouts/MainLayout';
import Login from './views/Login';
import MainPage from './views/MainPage';

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
      <Route
        element={<MainLayout />}
        path="/"
      >
        <Route
          element={<MainPage />}
          path="main"
        />
      </Route>
    </Routes>
  </Router>
);

export default App;
