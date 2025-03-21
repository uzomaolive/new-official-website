"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white" style={{ zIndex: 1 }}>
      <div className="flex justify-between items-center h-full w-full px-4 lg:px-16">
        <Link href='/'>
          <span className="text-2xl font-bold cursor-pointer text-purple-600 "style={{ fontFamily: 'cursive' }}>
            Olive
          </span>
        </Link>
        <div className="hidden lg:flex pr-10">
          <ul className="flex">
            <li className="ml-10 hover:border-b hover:text-purple-500 text-xl">
              <Link href="/Home">Home</Link>
            </li>
            <li className="ml-10 hover:border-b hover:text-purple-500 text-xl">
              <Link href="/about">About</Link>
            </li>
            <li className="ml-10 hover:border-b hover:text-purple-500 text-xl">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="ml-10 hover:border-b hover:text-purple-500 text-xl">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="lg:hidden cursor-pointer pr-6">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${menuOpen ? "fixed left-0 top-0 w-[75%] max-w-md h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}`}>
        <div className="flex justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <Link href='/'>
            <span className="text-2xl font-bold cursor-pointer text-purple-600" style={{ fontFamily: 'cursive' }}>
              Olive
            </span>
 
          </Link>
          <ul>
            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-around pt-10">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineLinkedin size={30} className="cursor-pointer" />
          <AiOutlineGithub size={30} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
