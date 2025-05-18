import React, { useContext, useState } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import ThemeContext from './ThemeContext';
import { motion } from 'framer-motion';

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
        demoLink: '#',
        githubLink: '#',
        image: '/images/portfolio.png',
    },
];

const pageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Projects = () => {
    const { darkMode } = useContext(ThemeContext);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleCardClick = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <motion.div
            className={`${darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'} min-h-screen pt-20 px-6 md:px-20`}
            variants={pageVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
                className="text-3xl md:text-4xl font-bold text-center mb-4"
                style={{ fontFamily: 'EB Garamond, serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                My Projects!
            </motion.h1>

            <motion.p
                className="text-center mb-12 text-xl max-w-2xl mx-auto"
                style={{ fontFamily: 'Dancing Script, cursive' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                Here are a few cool things I've worked on. Do check them out.
            </motion.p>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {projectsData.map((project, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <motion.div
                            key={index}
                            onClick={() => handleCardClick(index)}
                            className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer
                                ${darkMode ? 'bg-[#1e293b]' : 'bg-gray-100'}
                                group
                            `}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 120 }}
                        >
                            {/* Top Right Arrow Icon */}
                            <motion.a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-4 right-4 bg-white/80 dark:bg-black/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-black z-20"
                                aria-label={`Open demo of ${project.title}`}
                                whileHover={{ scale: 1.2, opacity: 1 }}
                                initial={{ opacity: 0.7 }}
                                transition={{ duration: 0.3 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ArrowUpRight size={20} className={`${darkMode ? 'text-white' : 'text-black'}`} />
                            </motion.a>

                            {/* Project Image */}
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Bottom Title Bar */}
                            <motion.div
                                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t
                                    from-black/80 dark:from-black/90 to-transparent
                                    px-6 py-3 rounded-b-2xl
                                    text-white text-lg font-semibold
                                    pointer-events-none
                                `}
                                style={{ fontFamily: "Signika Negative, sans-serif" }}
                                initial={{ opacity: 1 }}
                                variants={{
                                    hover: { opacity: 0 },
                                    rest: { opacity: 1 },
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {project.title}
                            </motion.div>

                            {/* Expanded Content - visible on hover (desktop) and click (mobile) */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-t from-black/90 dark:from-black/95 to-transparent
                                    flex flex-col justify-center items-center p-6 rounded-2xl text-white
                                    transition-opacity duration-500 ease-in-out
                                    ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                                    group-hover:opacity-100 group-hover:pointer-events-auto
                                `}
                            >
                                <p
                                    className="mb-6 text-center text-sm sm:text-base font-light max-w-[90%]"
                                    style={{ fontFamily: 'Signika Negative, sans-serif' }}
                                >
                                    {project.description}
                                </p>
                                <div className="flex gap-6">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded text-white font-semibold shadow-md flex items-center gap-2"
                                        style={{ fontFamily: "Signika Negative, sans-serif" }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 border border-white hover:border-blue-400 px-5 py-2 rounded font-semibold transition text-white shadow-md"
                                        style={{ fontFamily: "Signika Negative, sans-serif" }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Get Code <Github size={18} />
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};

export default Projects;
