import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const About = () => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`${
        darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'
      } py-16 px-4 sm:px-10 transition-colors duration-300`}
    >
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="text-4xl font-bold text-center mb-10"
        style={{ fontFamily: 'EB Garamond, serif' }}
      >
        My Journey So Far!
      </motion.h1>

      <div
        className={`relative ${
          darkMode ? 'border-gray-700' : 'border-gray-300'
        } ml-6 sm:ml-1`}
      >
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col sm:flex-row items-center"
        >
          {/* Logo */}
          <div className="order-1 sm:order-2 mb-4 sm:mb-0 flex justify-center relative">
            <motion.img
              src="/images/vssutlogo.png"
              alt="Edu Logo"
              className="w-10 h-10 rounded-full bg-white p-1 border-2 border-blue-500 z-10"
              whileHover={{ scale: 1.2 }}
            />
            <div
              className={`absolute left-1/2 top-12 transform -translate-x-1/2 h-[calc(100%+3rem)] w-1 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-300'
              } hidden sm:block`}
            ></div>
          </div>

          {/* Content */}
          <div
            className={`order-2 sm:order-1 w-full sm:w-1/2 pr-0 sm:pr-10 text-center sm:text-right`}
          >
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ fontFamily: 'Signika Negative, sans-serif' }}
            >
              Education
            </h3>
            <div
              className={`${
                darkMode ? 'bg-[#1f2937]' : 'bg-gray-100'
              } p-6 rounded-lg inline-block border border-white transition-shadow duration-300 hover:shadow-[0_6px_12px_-4px_rgba(96,165,250,0.7)]`}
              style={{ fontFamily: 'Signika Negative, sans-serif' }}
            >
              <h2 className="text-xl font-semibold">B.Tech in Computer Science</h2>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                2022-2026
              </p>
              <p>Veer Surendra Sai University Of Technology</p>
              <p>CGPA: 8.97</p>
            </div>
          </div>
        </motion.div>

        {/* Achievement */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col sm:flex-row-reverse items-center"
        >
          {/* Logo */}
          <div className="order-1 sm:order-2 mb-4 sm:mb-0 flex justify-center relative">
            <motion.img
              src="/images/ubs-logo.png"
              alt="UBS Logo"
              className="w-10 h-10 rounded-full bg-white p-1 border-2 border-blue-500 z-10"
              whileHover={{ scale: 1.2 }}
            />
            <div
              className={`absolute left-1/2 top-12 transform -translate-x-1/2 h-[calc(100%+3rem)] w-1 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-300'
              } hidden sm:block`}
            ></div>
          </div>

          {/* Content */}
          <div
            className={`order-2 sm:order-1 w-full sm:w-1/2 pl-0 sm:pl-10 text-center sm:text-left`}
          >
            <h3
              className="text-2xl font-semibold mb-4 "
              style={{ fontFamily: 'Signika Negative, sans-serif' }}
            >
              Achievements
            </h3>
            <div
              className={`${
                darkMode ? 'bg-[#1f2937]' : 'bg-gray-100'
              } p-6 rounded-lg inline-block border border-white transition-shadow duration-300 hover:shadow-[0_6px_12px_-4px_rgba(96,165,250,0.7)]`}
              style={{ fontFamily: 'Signika Negative, sans-serif' }}
            >
              <h2 className="text-xl font-semibold">UBS Hackathon Participant</h2>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                April 3–4, 2025
              </p>
              <ul className="list-disc ml-5 mt-2">
                <li>
                  Selected through a national-level test to develop{' '}
                  <strong>RiseUp – Youth Upskilling & Employment Platform</strong>.
                </li>
                <li>
                  Developed a responsive frontend, contributed to backend APIs for job postings and user management, and collaborated on integrating LLM features for personalized learning and multilingual support.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
