import React from 'react';
import MainNav from './MainNav';

const Header: React.FC = () => {
  return (
    <div className="bg-color1 py-6 px-5">
      <div className="container mx-auto flex justify-center">
        <MainNav />
      </div>
    </div>
  );
};

export default Header;