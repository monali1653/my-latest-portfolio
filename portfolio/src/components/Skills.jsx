import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiC, SiCplusplus,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

const technicalSkills = [
  { icon: <FaHtml5 className="text-orange-500" />, label: "HTML", percentage: 90 },
  { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS", percentage: 90 },
  { icon: <FaJs className="text-yellow-400" />, label: "JavaScript", percentage: 85 },
  { icon: <FaReact className="text-cyan-400" />, label: "React", percentage: 90 },
  { icon: <FaNodeJs className="text-green-500" />, label: "Node.js", percentage: 80 },
  { icon: <SiExpress className="text-gray-800" />, label: "Express.js", percentage: 80 },
  { icon: <SiMongodb className="text-green-600" />, label: "MongoDB", percentage: 85 },
  { icon: <SiC className="text-sky-400" />, label: "C", percentage: 90 },
  { icon: <SiCplusplus className="text-blue-300" />, label: "C++", percentage: 95 },
];

const professionalSkills = [
  { label: "Creativity", percentage: 90 },
  { label: "Communication", percentage: 65 },
  { label: "Problem Solving", percentage: 75 },
  { label: "Teamwork", percentage: 85 },
];

const CircularProgress = ({ percentage, label }) => {
  const { darkMode } = useTheme();
  const circleRadius = 30;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const offset = circleCircumference - (percentage / 100) * circleCircumference;

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center w-32 h-32"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 80 80">
        <circle
          cx="40"
          cy="40"
          r={circleRadius}
          stroke="#2d3748"
          strokeWidth="8"
          fill="transparent"
        />
        <motion.circle
          cx="40"
          cy="40"
          r={circleRadius}
          stroke="#3b82f6"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circleCircumference}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circleCircumference }}
          whileInView={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.6 }}
        />
      </svg>
      <div
        className="absolute text-lg font-bold"
        style={{ color: darkMode ? "white" : "black" }}
      >
        {percentage}%
      </div>
      <div
        className="mt-2 text-sm font-medium"
        style={{ color: darkMode ? "white" : "black" }}
      >
        {label}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={`min-h-screen px-4 md:px-12 py-10 ${darkMode ? "bg-[#0f172a] text-white" : "bg-white text-black"}`}
    >
      <div className="flex flex-col md:flex-row gap-10 justify-between">
        {/* Technical Skills */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h3 className="text-xl font-semibold text-center underline underline-offset-4" style={{ fontFamily: "EB Garamond, serif" }}>Technical Skills</h3>
          {technicalSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  {React.cloneElement(skill.icon, { className: `${skill.icon.props.className} text-xl` })}
                  <span className="text-sm font-medium" style={{ fontFamily: "Signika Negative, sans-serif" }}>{skill.label}</span>
                </div>
                <span className="text-sm font-medium" style={{ fontFamily: "Signika Negative, sans-serif" }}>{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  className="h-2.5 rounded-full bg-blue-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className={`w-full md:w-1/2 p-6 rounded-xl shadow-lg flex flex-wrap justify-center gap-10`}
          style={{ backgroundColor: "transparent" }}
        >
          <h3
            className={`w-full text-center text-xl font-semibold underline underline-offset-4 mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`} style={{ fontFamily: "EB Garamond, serif" }}
          >
            Professional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-10 w-full" style={{ maxWidth: "320px", fontFamily: "Signika Negative, sans-serif" }} >
            {professionalSkills.map((skill, index) => (
              <CircularProgress key={index} percentage={skill.percentage} label={skill.label} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
