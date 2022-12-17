import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => (
  <div>
    <Outlet />
  </div>
);

export default MainLayout;
