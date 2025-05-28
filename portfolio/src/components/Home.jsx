import React, { useEffect, useState } from "react";
import { Download, Briefcase } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

const TypewriterTitle = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <h1
      className="text-4xl md:text-6xl font-bold mb-4"
      style={{ fontFamily: "EB Garamond, serif", whiteSpace: "pre-wrap" }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`${
        darkMode ? "bg-[#0f172a] text-white" : "bg-white text-black"
      } min-h-screen pt-20 px-6 md:px-20 flex flex-col items-center justify-between`}
    >
      <div className="text-center">
        {/* Typewriter Title */}
        <TypewriterTitle text="Welcome to my portfolio!" />

        {/* Animated Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl"
          style={{ fontFamily: "Signika Negative, sans-serif" }}
        >
          This is{" "}
          <span
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-black"
            }`}
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            Monali Sasamal
          </span>
          , a dedicated Full Stack Web Developer looking for challenging opportunities which could help in enhancing my skills!
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto px-4"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {/* Resume Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1rSVDmoS3M1Q2UnnfPr4ORU3sFbbxcbyX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300 min-w-[150px] justify-center"
            style={{ fontFamily: "Signika Negative, sans-serif" }}
          >
            Resume
            <span className="bg-white text-blue-900 p-1 rounded-full">
              <Download className="w-4 h-4" />
            </span>
          </motion.a>

          {/* Hire Me Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-blue-100 text-blue-900 px-6 py-3 rounded-full hover:bg-blue-200 transition duration-300 min-w-[150px] justify-center"
            style={{ fontFamily: "Signika Negative, sans-serif" }}
          >
            Hire Me
            <span className="bg-blue-900 text-white p-1 rounded-full">
              <Briefcase className="w-4 h-4" />
            </span>
          </motion.a>
        </motion.div>

        {/* Animated Bouncing Image with white border and blue shining hover effect */}
        <motion.div
          className="mt-20 flex justify-center"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <div
            className="rounded-full border-4 border-white p-1 transition-shadow duration-500"
            style={{
              boxShadow: "0 0 10px 0 rgba(255,255,255,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 15px 5px rgba(59, 130, 246, 0.8), 0 0 25px 10px rgba(59, 130, 246, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 10px 0 rgba(255,255,255,0.3)";
            }}
          >
            <img
              src="/images/myphoto.jpg"
              alt="Developer"
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full object-cover shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
