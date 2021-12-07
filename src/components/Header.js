import React from 'react';
import ToggleTheme from './ToggleTheme';

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-14 mb-10">
      <h1 className="md:text-5xl text-2xl font-bold text-green-500 ">
        Reading Book List
      </h1>
      <ToggleTheme />
    </header>
  );
};

export default Header;
