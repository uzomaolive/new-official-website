"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-violet-800 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Olive Uzoma. All rights reserved.</p>
    </footer>
  );
}
