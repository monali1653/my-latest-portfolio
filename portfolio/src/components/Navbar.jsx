import { useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Home,
  Contact,
  Briefcase,
  Code2,
  User2, // added icon for About
} from "lucide-react";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home"); // track active clicked item
  const { darkMode, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setActiveId(id); // set active when clicked
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={22} /> },
    { id: "about", label: "About", icon: <User2 size={22} /> }, // new About section
    { id: "skills", label: "Skills", icon: <Code2 size={22} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={22} /> },
    { id: "contact", label: "Contact", icon: <Contact size={22} /> },
  ];

  return (
    <>
      {/* Top Navbar for mobile view only */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full flex justify-between items-center p-4 z-50 shadow-md ${
          darkMode ? "bg-[#0f172a] text-white" : "bg-white text-black"
        }`}
      >
        <h1
          className="text-lg font-semibold"
          style={{ fontFamily: "Dancing Script, cursive" }}
        >
          My Portfolio
        </h1>
        <button onClick={toggleTheme}>
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Top Navbar for large screens */}
      <nav
        className={`${
          darkMode ? "bg-[#0f172a] text-white" : "bg-white text-black"
        } fixed top-0 left-0 w-full z-50 shadow-md hidden md:block`}
      >
        <div className="p-4 flex justify-between items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>
          <button onClick={toggleTheme}>
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {isOpen && (
          <div
            className={`fixed top-0 left-0 h-screen w-[250px] z-40 p-6 ${
              darkMode ? "bg-[#1e293b] text-white" : "bg-gray-100 text-black"
            }`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4"
            >
              <X className="w-6 h-6" />
            </button>
            <ul className="space-y-4 mt-8">
              {navItems.map(({ id, label, icon }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`w-full flex items-center gap-2 text-left px-2 py-2 rounded-md transition-colors duration-200 ${
                      darkMode ? "hover:bg-gray-700" : "hover:bg-gray-300"
                    }`}
                    style={{ fontFamily: "Signika Negative, sans-serif" }}
                  >
                    {icon}
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Bottom Navbar for small screens */}
      <div
        className={`fixed bottom-0 left-0 w-full flex justify-around items-center py-2 z-50 md:hidden ${
          darkMode ? "bg-[#1e293b] text-white" : "bg-gray-100 text-black"
        }`}
      >
        {navItems.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="flex flex-col items-center px-3 py-1"
            style={{ fontFamily: "Signika Negative, sans-serif" }}
          >
            {icon}
            <span
              className={`text-xs mt-1 transition-opacity duration-300 ${
                activeId === id ? "opacity-100" : "opacity-0"
              } ${darkMode ? "text-white" : "text-black"}`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
