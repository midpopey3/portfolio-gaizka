import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-6">
      <div className="text-2xl font-bold">PORTFOLIO</div>
      <div className="space-x-4">
        <a href="#about" className="hover:underline">Home</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
