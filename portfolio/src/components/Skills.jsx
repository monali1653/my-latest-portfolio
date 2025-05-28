import React, { useState, useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiPostman,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { useTheme } from "./ThemeContext"; // adjust path if needed

import {
  motion,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";

import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { darkMode } = useTheme();

  // Intersection Observer hook to detect visibility
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.1, // 10% visible triggers
  });

  // State for hovered icon index (desktop)
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // State for clicked icon index (mobile)
  const [clickedIndex, setClickedIndex] = useState(null);
  // Detect if device is touch-capable (mobile/tablet)
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Ref for the container to detect outside clicks
  const containerRef = useRef(null);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Close tooltip on outside click (for mobile)
  useEffect(() => {
    if (!isTouchDevice) return;

    const handleOutsideClick = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setClickedIndex(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isTouchDevice]);

  // Motion value for tracking horizontal mouse position inside icon
  const x = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 5 };

  // Use spring + transform to create smooth rotation and translation effect
  const rotate = useSpring(
    useTransform(x, [-50, 50], [-45, 45], { clamp: true }),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-50, 50], [-25, 25], { clamp: true }),
    springConfig
  );

  // Handle mouse move inside icon, update motion value x
  const handleMouseMove = (event) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left; // mouse position relative to icon left edge
    const halfWidth = rect.width / 2;
    x.set(offsetX - halfWidth); // centered around zero
  };

  // Handle icon click on mobile (toggle tooltip)
  const handleIconClick = (idx) => {
    if (clickedIndex === idx) {
      setClickedIndex(null); // close if same icon clicked again
    } else {
      setClickedIndex(idx);
    }
  };

  // Skill groups with icon components, color, and name
  const skillGroups = [
    {
      title: "Frontend",
      icons: [
        { Icon: FaHtml5, color: "text-orange-600", name: "HTML5" },
        { Icon: FaCss3Alt, color: "text-blue-500", name: "CSS3" },
        { Icon: FaReact, color: "text-cyan-400", name: "React" },
        { Icon: SiTailwindcss, color: "text-sky-400", name: "Tailwind CSS" },
      ],
    },
    {
      title: "Backend",
      icons: [
        { Icon: DiNodejs, color: "text-green-500", name: "Node.js" },
        {
          Icon: SiExpress,
          color: darkMode ? "text-white" : "text-black",
          name: "Express.js",
        },
        { Icon: SiMongodb, color: "text-green-700", name: "MongoDB" },
      ],
    },
    {
      title: "Programming Tools",
      icons: [
        { Icon: FaGitAlt, color: "text-orange-500", name: "Git" },
        { Icon: FaGithub, color: "text-black", name: "GitHub" },
        { Icon: SiPostman, color: "text-orange-400", name: "Postman" },
      ],
    },
    {
      title: "Programming Skills",
      icons: [
        { Icon: SiC, color: "text-blue-200", name: "C" },
        { Icon: SiCplusplus, color: "text-blue-400", name: "C++" },
        { Icon: FaJsSquare, color: "text-yellow-400", name: "JavaScript" },
      ],
    },
  ];

  return (
    <div
      ref={(node) => {
        ref(node); // for intersection observer
        containerRef.current = node; // for outside click detection
      }}
      className={`${
        darkMode ? "bg-[#0f172a] text-white" : "bg-white text-black"
      } min-h-screen pt-20 px-6 md:px-20 flex flex-col items-center`}
    >
      <h2
        className={`text-3xl sm:text-4xl font-bold mb-10 ${
          darkMode ? "text-white" : "text-black"
        }`}
        style={{ fontFamily: "EB Garamond, serif" }}
      >
        My Skills!
      </h2>

      <div className="flex flex-wrap justify-center gap-8 w-full">
        {skillGroups.map(({ title, icons }, groupIdx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: groupIdx * 0.2, ease: "easeOut" }}
            className={`${
              darkMode ? "bg-[#1e293b] text-white" : "bg-gray-100 text-black"
            } border rounded-xl p-6 shadow-md flex flex-col items-center w-full sm:w-[45%] hover:shadow-blue-500 transition duration-300`}
          >
            <h3
              className="text-lg sm:text-xl font-semibold mb-4"
              style={{ fontFamily: "Signika Negative, sans-serif" }}
            >
              {title}
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-4xl relative">
              {icons.map(({ Icon, color, name }, iconIdx) => {
                const idx = `${groupIdx}-${iconIdx}`;

                return (
                  <div
                    key={idx}
                    className="group relative cursor-pointer"
                    onMouseEnter={() => !isTouchDevice && setHoveredIndex(idx)}
                    onMouseLeave={() => !isTouchDevice && setHoveredIndex(null)}
                    onMouseMove={handleMouseMove}
                    onClick={() => isTouchDevice && handleIconClick(idx)}
                    style={{ display: "inline-block" }}
                  >
                    {/* Tooltip */}
                    <AnimatePresence mode="popLayout">
                      {(hoveredIndex === idx || clickedIndex === idx) && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.6 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { type: "spring", stiffness: 260, damping: 10 },
                          }}
                          exit={{ opacity: 0, y: 20, scale: 0.6 }}
                          style={{
                            translateX: translateX,
                            rotate: rotate,
                            whiteSpace: "nowrap",
                          }}
                          className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl select-none pointer-events-none"
                        >
                          <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                          <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                          <div className="relative z-30 text-base font-bold text-white">
                            {name}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Icon className={color} />
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
