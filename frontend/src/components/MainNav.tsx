import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpg';

const MainNav: React.FC = () => {
  return (
    <Link to="/" className="flex justify-center">
      <img src={Logo} alt="logo" className="h-20 w-20" />
    </Link>
  );
};

export default MainNav;