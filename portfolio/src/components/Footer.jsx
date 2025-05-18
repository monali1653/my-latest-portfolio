import { useTheme } from "./ThemeContext";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`${
        darkMode ? "bg-[#0f172a] text-white" : "bg-gray-200 text-black"
      } text-center py-6`}
    >
      
<hr className="mt-6 mx-auto w-3/4 border-t border-gray-400 dark:border-gray-600" />
      <p className="mt-3" style={{ fontFamily: 'Signika Negative, sans-serif' }}>
        Made with <span className="text-blue-500 text-xl">💙</span> in India
      </p>

      {/* Horizontal line */}
      

      <p className="text-sm mt-1" style={{ fontFamily: 'Signika Negative, sans-serif' }}>
        © 2025 – All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
