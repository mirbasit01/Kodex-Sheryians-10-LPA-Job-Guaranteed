import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbars" >
        <nav className="bg-none p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Brand</div>
        <button onClick={toggleMenu} className="text-white md:hidden">
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`flex flex-col md:flex-row md:items-center absolute md:static  w-full md:w-auto transition-all duration-300 ease-in-out text-2xl gap-7 ${isOpen ? 'top-16' : 'top-[-200px]'}`}>
          <li className="m-2">
            <a href="#" className="text-white hover:text-gray-200 ">Market</a>
          </li>
          <li className="m-2">
            <a href="#" className="text-white hover:text-gray-200">Exchange</a>
          </li>
          <li className="m-2">
            <a href="#" className="text-white hover:text-gray-200">Tutorials</a>
          </li>
          <li className="m-2">
            <a href="#" className="text-white hover:text-gray-200">Wallets</a>
          </li>
          <button className='bg-blue-600 px-10 py-4 rounded-full	'> 
            Login
          </button>
        </ul>
      </div>
    </nav>
    </div>
    
  );
};

export default Navbar;
