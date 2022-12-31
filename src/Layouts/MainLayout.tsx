import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

const MainLayout: React.FC = () => (
  <div>
    <NavBar links={[{ title: 'Главная', link: 'main' }]} />
    <Outlet />
  </div>
);

export default MainLayout;
