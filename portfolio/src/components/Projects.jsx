import React, { useContext, useState } from 'react';
import { Github, ArrowUpRight, X } from 'lucide-react';
import ThemeContext from './ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
    {
        title: 'Mona Florals',
        description: 'A landing page for florals built using HTML and CSS.',
        demoLink: 'https://monali1653.github.io/PRODIGY_WD_01/',
        githubLink: 'https://github.com/monali1653/PRODIGY_WD_01.git',
        image: '/images/flower.png',
    },
    {
        title: 'Book Website',
        description: 'A marketplace for users to buy/sell books built in React.js.',
        demoLink: '#',
        githubLink: '#',
        image: '/images/boook.png',
    },
    {
        title: 'My Portfolio',
        description: 'A sleek frontend page showcasing my skills and projects using React.js.',
        demoLink: 'https://my-latest-portfolio-rouge.vercel.app/',
        githubLink: 'https://github.com/monali1653/my-latest-portfolio.git',
        image: '/images/portfolio.png',
    },
];

const Projects = () => {
    const { darkMode } = useContext(ThemeContext);
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <motion.div
            className={`${darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'} min-h-screen pt-20 px-6 md:px-20`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.h1
                className="text-3xl md:text-4xl font-bold text-center mb-4"
                style={{ fontFamily: 'EB Garamond, serif' }}
            >
                My Projects!
            </motion.h1>

            <motion.p
                className="text-center mb-12 text-xl max-w-2xl mx-auto"
                style={{ fontFamily: 'Dancing Script, cursive' }}
            >
                Here are a few cool things I've worked on. Do check them out.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        onClick={() => setSelectedProject(project)}
                        className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group 
                            ${darkMode ? 'bg-[#1e293b]' : 'bg-gray-100'}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 120 }}
                    >
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-4 right-4 bg-white/80 dark:bg-black/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-black z-20"
                        >
                            <ArrowUpRight size={20} className={`${darkMode ? 'text-white' : 'text-black'}`} />
                        </a>

                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover rounded-2xl group-hover:scale-110 transition duration-500"
                            loading="lazy"
                        />

                        <div
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent
                            px-6 py-3 rounded-b-2xl text-white text-lg font-semibold pointer-events-none"
                            style={{ fontFamily: "Signika Negative, sans-serif" }}
                        >
                            {project.title}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className={`relative w-[90%] max-w-md p-6 rounded-2xl shadow-xl ${
                                darkMode ? 'bg-[#1e293b] text-white' : 'bg-white text-black'
                            }`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 120 }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                            >
                                <X size={24} />
                            </button>

                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-44 object-cover rounded-xl mb-4"
                            />

                            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                            <p className="mb-6">{selectedProject.description}</p>

                            <div className="flex gap-4 justify-center flex-wrap">
                                <a
                                    href={selectedProject.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-full text-white font-semibold shadow-md flex items-center gap-2"
                                    style={{ fontFamily: "Signika Negative, sans-serif" }}
                                >
                                    Demo
                                </a>
                                <a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 border px-5 py-2 rounded-full font-semibold transition shadow-md ${
                                        darkMode
                                            ? 'border-white text-white hover:border-blue-400'
                                            : 'border-black text-black hover:border-blue-600'
                                    }`}
                                    style={{ fontFamily: "Signika Negative, sans-serif" }}
                                >
                                    <Github size={18} /> Get Code
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Projects;
