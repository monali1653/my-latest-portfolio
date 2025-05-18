import React from "react";
import { Download, Briefcase } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

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
        {/* Animated Title */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ fontFamily: "EB Garamond, serif" }}
        >
          Welcome to my portfolio!
        </motion.h1>

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
    href="#contact"
    className="flex items-center gap-3 bg-blue-100 text-blue-900 px-6 py-3 rounded-full hover:bg-blue-200 transition duration-300 min-w-[150px] justify-center"
  >
    Hire Me
    <span className="bg-blue-900 text-white p-1 rounded-full">
      <Briefcase className="w-4 h-4" />
    </span>
  </motion.a>
</motion.div>



        {/* Animated Bouncing Image */}
        <motion.div
          className="mt-8"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <img
            src="/images/myphoto.jpg"
            alt="Developer"
            className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] mx-auto rounded-full object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
