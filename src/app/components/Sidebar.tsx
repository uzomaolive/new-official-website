import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <>
      {/* Social Icons */}
      <div className="fixed left-4 bottom-8 sm:left-8 sm:bottom-0 flex sm:flex-col items-center gap-4 sm:gap-4">
        <a href="https://github.com/" target="_blank" className="text-violet-500 hover:text-gray-300">
          <FaGithub size={24} />
        </a>
        <a href="https://instagram.com/" target="_blank" className="text-violet-500 hover:text-gray-300">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com/" target="_blank" className="text-violet-500 hover:text-gray-300">
          <FaTwitter size={24} />
        </a>
        <a href="https://linkedin.com/" target="_blank" className="text-violet-500 hover:text-gray-300">
          <FaLinkedin size={24} />
        </a>
        <div className="hidden sm:block w-[1px] h-16 bg-gray-500"></div>
      </div>

      {/* Email - Responsive Adjustments */}
      {/* <div className="fixed right-4 bottom-8 sm:right-8 sm:bottom-0 flex sm:flex-col items-center gap-8 sm:gap-20">
        <a
          href="mailto:olive@oliveuzoma.com"
          className="text-gray-500 hover:text-gray-300 rotate-90 sm:rotate-0 origin-center whitespace-nowrap text-sm sm:text-base"
        >
          olive@oliveuzoma.com
        </a>
        <div className="hidden sm:block w-[1px] h-16 bg-violet-500"></div>
      </div> */}
    </>
  );
};

export default Sidebar;
