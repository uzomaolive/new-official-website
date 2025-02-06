"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 pl-20 2x1:px-16">
        <Link href='/'>
          <Image
            src="/logo.png"
            alt="Logo"
            width="105"
            height="75"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div>
          <ul className="hidden sm:flex pr-20">
            <li className="ml-10 hover:border-b text-xl">
              <Link href="/Home">Home</Link>
            </li>
            <li className="ml-10 hover:border-b text-xl">
              <Link href="/About">About</Link>
            </li>
            <li className="ml-10 hover:border-b text-xl">
              <Link href="/Contact">Contact</Link>
            </li>
            <li className="ml-10 hover:border-b text-xl">
              <Link href="/Blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className={
        menuOpen
          ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
        <Link href='/'>
          <Image
            src="/logo.png"
            alt="Logo"
            width="105"
            height="75"
            className="cursor-pointer pt-6 py-4"
            priority
          />
        </Link>
          <ul>
            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
              <Link href="/About">About</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
              <Link href="/Contact">Contact </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
              <Link href="/Blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineLinkedin size={30} className="cursor-pointer" />
          <AiOutlineGithub size={30} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;