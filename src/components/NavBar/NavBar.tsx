import React from 'react';
import { useNavigate } from 'react-router';
import Logo from '../Logo';
import { NavBarProps } from './types';

const NavBar: React.FC<NavBarProps> = ({
  isAuthorized,
  links,
}) => {
  const navigation = useNavigate();
  console.log(isAuthorized);

  const navigateHandler = (link?: string) => {
    if (link) {
      navigation(link);
    }
  };

  return (
    <div className="flex">
      <Logo />
      {
        links && links.map(({ title, icon, link }) => (
          <div
            key={title}
            onClick={() => navigateHandler(link)}
          >
            <div>{title}</div>
            <img
              alt="btn"
              src={icon}
            />
          </div>
        ))
      }

    </div>
  );
};

export default React.memo(NavBar);
