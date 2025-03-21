"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BlogHeader = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <header className="relative bg-black text-white p-8 md:p-16 lg:p-24">
      <div className="max-w-5xl mx-auto">
        {/* Navigation Bar */}
        {/* <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-lg font-semibold">Travel Guider</h1>
          <div className="flex gap-4 text-sm">
            <button className="px-4 py-2 rounded-full border border-gray-400 hover:bg-gray-700 transition">
              Where to Go
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-400 hover:bg-gray-700 transition">
              Places to Stay
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-400 hover:bg-gray-700 transition">
              What to Do
            </button>
          </div>
        </motion.nav> */}

        {/* Blog Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Exploring {"Life’s"}<br /> Journey
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Dividing these deserts, the mountain range rises like a backbone across the landscape, with peaks reaching skyward and valleys that hide secret oases.
          </p>
          <p className="mt-2 text-gray-500">{currentDate}</p>
        </motion.div>
      </div>
    </header>
  );
};

export default BlogHeader;
