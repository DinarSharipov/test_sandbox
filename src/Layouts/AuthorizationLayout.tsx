import React from 'react';
import { Outlet } from 'react-router-dom';

/** Обертка роутеров авторизации */
const AuthorizationLayout: React.FC = () => (
  <div>
    <Outlet />
  </div>
);

export default AuthorizationLayout;
