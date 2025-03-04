import React from "react";
import Sidebar from "./Sidebar"; 
import Image from "next/image";


const Hero = () => {
  return (
    <div>
      <Sidebar />
      <div className="w-full min-h-[90vh] bg-stone-50 text-white flex flex-col justify-center">
        <div className="w-4/5 mx-auto px-6 md:px-8 pt-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Left Side: Text Content */}
          <div className="text-center md:pt-8 lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
              Olive Uzoma
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-400">
              Frontend Developer
            </h2>
            <p className="text-neutral-800 text-base md:text-lg mt-4 leading-relaxed">
              Passionate about crafting elegant and functional digital experiences  
              through modern web development.
            </p>
            <button className="mt-6 px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition">
              Download CV ⬇
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center lg:justify-end px-4 lg:pr-20">
            <Image
              src="/hero-image.jpg" 
              alt="Olive Uzoma" 
              className="w-full max-w-[350px] md:max-w-[400px] h-auto object-cover rounded-xl shadow-lg border border-[#1E1E1E]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
