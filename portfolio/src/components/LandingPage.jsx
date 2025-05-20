import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";


const LandingPage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-opacity-75 bg-white shadow-md z-10">
        <ul className="flex justify-center space-x-8 py-4">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

 <section id="skills">
        <Skills />
    </section>

       <section id="projects">
        <Projects />
    </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

   
      
    </div>
  );
};

export default LandingPage;
