"use client";

import { useTheme } from "./ThemeProvider";
import Link from "next/link";
import Navbar from './Navbar';

export default function Header() {
  const { theme, setTheme } = useTheme();
  
  return (
    <>
      <Navbar />
    </>
  );
}
