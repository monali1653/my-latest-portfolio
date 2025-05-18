import React, { useState, useContext, useEffect } from "react";
import { Github, Linkedin, Mail, Home, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import ThemeContext from "./ThemeContext";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Detect screen size for mobile vs desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleIcons = () => {
    if (isMobile) {
      setClicked((prev) => !prev);
    }
  };

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const icons = [
    {
      icon: <Linkedin size={32} />,
      link: "https://linkedin.com/in/monali-sasamal-6a22a8260",
    },
    {
      icon: <Github size={32} />,
      link: "https://github.com/monali1653",
    },
    {
      icon: <Mail size={32} />,
      link: "mailto:monalisasamal1653@gmail.com",
    },
    {
      icon: (
        <img
          src="https://img.icons8.com/color/48/whatsapp--v1.png"
          alt="WhatsApp"
          width={32}
          height={32}
        />
      ),
      link: "https://wa.me/8328819363",
    },
  ];

  const showIcons = isMobile ? clicked : isHovered;

  return (
    <div
      className={`${
        darkMode ? "bg-[#0f172a] text-white" : "bg-white text-black"
      } pt-10 pb-20 px-6 md:px-20 flex flex-col items-center justify-center`}
    >
      <h1
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        style={{ fontFamily: "EB Garamond, serif" }}
      >
        Get in touch!
      </h1>

      {/* Circular Share Icon Center */}
      <div
        className="relative w-60 h-60 flex items-center justify-center"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onClick={toggleIcons}
      >
        {/* Social Icons in Circular Layout */}
        {icons.map((item, index) => {
          const angle = (index / icons.length) * (2 * Math.PI);
          const radius = showIcons ? 100 : 0;

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x,
                y,
                opacity: showIcons ? 1 : 0,
                transition: { type: "spring", stiffness: 400, damping: 20 },
              }}
              className="absolute"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md ${
                  darkMode ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                {item.icon}
              </div>
            </motion.a>
          );
        })}

        {/* Center Share Icon */}
        <motion.div
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
          style={{
            backgroundColor: darkMode ? "#1e293b" : "#e2e8f0",
          }}
          whileHover={!isMobile ? { scale: 1.2 } : {}}
        >
          <Share2 size={30} />
        </motion.div>
      </div>

      {/* Home Icon */}
      <motion.button
        onClick={scrollToHome}
        className="fixed bottom-4 right-4 bg-indigo-400 p-3 rounded-full text-white shadow-md"
        whileHover={{ scale: 1.1, rotate: [0, 5, -5, 5, -5, 0] }}
        transition={{ duration: 0.6 }}
      >
        <Home />
      </motion.button>
    </div>
  );
};

export default Contact;
