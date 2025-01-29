import React from 'react';
import Link from 'next/link';
import Logo from '../public/logo.png'
import Image from "next/image";


const Navbar = () => {
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2x1:px-16">
        <Image
          src="/logo.png"
          alt="Logo"
          width="205"
          height="75"
          className="cursor-pointer"
          priority
        />
      
        <div>Right Side</div>
      </div> 
    </nav>
  );
};

export default Navbar;