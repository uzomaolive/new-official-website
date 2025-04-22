"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const { theme } = useTheme();
  
  return (
    <header className={`shadow-sm ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            Olive Uzoma
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Home
          </Link>
          <Link href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
