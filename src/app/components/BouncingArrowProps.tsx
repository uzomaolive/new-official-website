"use client";
import React, { useState, useEffect, useMemo } from "react";

interface BouncingArrowProps {
  className?: string;
}

const BouncingArrow: React.FC<BouncingArrowProps> = ({ className }) => {
  const [color, setColor] = useState("text-black"); // Initial color

  // Use useMemo to ensure the colors array is stable between renders
  const colors = useMemo(() => [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
    "text-indigo-500",
  ], []); // Empty dependency array means this array is created once

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(colors[Math.floor(Math.random() * colors.length)]); // Change color every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [colors]); // Now colors is stable and won't cause unnecessary re-renders

  return (
    <div className="flex justify-center">
      <svg
        className={`size-10 animate-bounce transition-colors duration-500 ${color} ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};

export default BouncingArrow;
