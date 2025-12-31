"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiCode, HiX } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

const ProjectCard = ({ project, priority = false }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTecHovered, setIsTecHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollPositionRef = useRef<number>(0);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    if (isModalOpen) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = scrollPositionRef.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      // Use requestAnimationFrame to ensure DOM is updated before scrolling
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
    }

    // Cleanup function
    return () => {
      if (!isModalOpen) {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
      }
    };
  }, [isModalOpen]);

  const getCategoryColor = (category: string) => {
    const colors = {
      "web-app": "bg-blue-500",
      "full-stack-project": "bg-blue-500",
      "mobile-app": "bg-green-500",
      api: "bg-purple-500",
      tool: "bg-orange-500",
      website: "bg-indigo-500",
    };
    return colors[category as keyof typeof colors] || "bg-gray-500";
  };
  return (
    <motion.article
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="article"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg">
            <HiStar className="w-3 h-3" />
            <span>Featured</span>
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 flex items-center justify-center z-10"
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-3 p-4 pb-0">
              <div className="flex space-x-4">
                <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true);
                    }}
                    className="flex items-center space-x-2 px-4 py-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View ${project.title} details`}
                  >
                    <span>View Details</span>
                  </motion.button>
              </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3
              id={`project-title-${project.id}`}
              className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
            >
              {project.title}
            </h3>

            {/* Category and Date */}
            <div className="flex items-center space-x-3 mb-3">
              <span
                className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(project.category)} text-white`}
              >
                {project.category
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.short}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-medium z-10"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span onFocus={()=>{
                setIsTecHovered(true)
                console.log('focusedd');
                }} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-medium z-10">
                +{project.tech.length - 4} more
              </span>
              
            )}
            {isTecHovered ? <div>{project.tech}</div>:null}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
              aria-label={`View ${project.title} source code`}
            >
              <HiCode className="w-4 h-4" />
              <span>Repository</span>
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
              aria-label={`View ${project.title} live demo`}
            >
              <HiExternalLink className="w-4 h-4" />
              <span>{project.isLive ? "Live Demo" : "View Demo"}</span>
            </a>
          )}
        </div>
      </div>

      {/* Focus Ring for Accessibility */}
      <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-focus-within:ring-blue-500 group-focus-within:ring-offset-2 transition-all duration-200" />

      {/* Project Details Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div key={project.id}>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
              style={{
                x: '-50%',
                y: '-50%',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden w-full max-h-[90vh] flex flex-col"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  aria-label="Close"
                >
                  <HiX className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
                </button>

                {/* Modal Content */}
                <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 modal-scrollbar">
                  {/* Header Section */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="mb-6"
                  >
                    {/* Project Image */}
                    <div className="relative w-full h-48 sm:h-64 mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover h-auto w-full"
                        width={800}
                        height={500}
                      />
                    </div>

                    {/* Title and Category */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                          {project.title}
                        </h2>
                        <span
                          className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(project.category)} text-white`}
                        >
                          {project.category
                            .replace("-", " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                      </div>
                      {project.featured && (
                        <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full">
                          <HiStar className="w-3 h-3" />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>

                  {/* Tech Stack Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="mb-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-wide">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Features Section */}
                  {project.features && project.features.length > 0 && project.features[0] !== "" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="mb-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                    >
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-wide">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mt-1.5 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-3"
                  >
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors duration-200"
                        aria-label={`View ${project.title} source code`}
                      >
                        <HiCode className="w-5 h-5" />
                        <span>View Repository</span>
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <HiExternalLink className="w-5 h-5" />
                        <span>{project.isLive ? "Live Demo" : "View Demo"}</span>
                      </a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default ProjectCard;
