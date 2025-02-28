"use client";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center text-center py-20 px-4">
      {/* Existing "Contact Me" Section */}
      <p className="text-purple-400 text-sm sm:text-base mb-2">What is Next?</p>
      <h2 className="text-4xl font-bold text-violet-600 mb-4">Get In Touch</h2>
      <p className="ttext-gray-700 max-w-lg mb-8">
      Got a question, an idea, or just want to chat? Don't hestitate, I'd love to hear from you!</p>
      
      <a
        href="mailto:uzoma.olive.c@gmail.com"
        className="relative px-6 py-3 text-violet-600 border-2 border-purple-400 rounded-md text-lg font-medium 
                   hover:bg-violet-400 hover:text-white transition-all duration-300 
                   after:absolute after:top-1 after:left-1 after:right-1 after:bottom-1 after:border-2 after:border-purple-400 after:rounded-md after:-z-10"
      >
        Say Hello
      </a>
      
    </section>
  );
}
