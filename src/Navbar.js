import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-900 text-white flex justify-between items-center px-4 py-2">
      <h1 className="text-lg font-bold">GENERAL ENGINEERING</h1>
      <button className="bg-purple-900 px-3 py-1 rounded border border-white hover:bg-purple-950">Sign In</button>
    </nav>
  );
};

export default Navbar;