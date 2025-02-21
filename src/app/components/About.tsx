"use client";
import React from "react";
import { FaBriefcase, FaClock } from "react-icons/fa"; // Icons for stats

export default function About() {
  return (
    <section className="w-full  min-h-[90vh] flex items-center bg-white py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-12 md:space-y-0">
        {/* Left Section (Stats) */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start space-y-8 text-center md:text-left">
          {/* Projects Completed */}
          <div className="flex items-center space-x-4">
            <FaBriefcase className="text-purple-600 text-3xl" />
            <div>
              <p className="text-3xl font-bold">10</p>
              <p className="text-gray-600">Successful completed projects</p>
            </div>
          </div>

          {/* Years of Experience */}
          <div className="flex items-center space-x-4">
            <FaClock className="text-purple-600 text-3xl" />
            <div>
              <p className="text-3xl font-bold">5+</p>
              <p className="text-gray-600">Years of experience</p>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-300 mx-8 md:h-40 lg:h-48"></div>

        {/* Right Section (Bio) */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-bold text-black">About Me</h2>
          
          <p className="mt-6 text-lg font-semibold text-purple-700">
            My name is Olive Uzoma. I am a passionate and proficient WordPress designer 
            and experience designer. I am also very inquisitive to learn new things.
          </p>

          <p className="mt-4 text-gray-700">
            I am passionate about using the tools available to me to efficiently solve problems 
            and help society at large. I am also very inquisitive to learn new things.
          </p>

          {/* Technologies List */}
          <p className="mt-6 font-semibold text-gray-700">Here are a few technologies I’ve been working with recently:</p>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
            <p className="text-purple-700">▷ <span className="text-gray-700">HTML & CSS</span></p>
            <p className="text-purple-700">▷ <span className="text-gray-700">WordPress</span></p>
            <p className="text-purple-700">▷ <span className="text-gray-700">JavaScript</span></p>
            <p className="text-purple-700">▷ <span className="text-gray-700">Next JS</span></p>
            <p className="text-purple-700">▷ <span className="text-gray-700">React</span></p>
            <p className="text-purple-700">▷ <span className="text-gray-700">Docker</span></p>
          </div>

          {/* Button */}
          <div className="mt-6">
            <button className="bg-purple-700 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-800 transition">
              About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
