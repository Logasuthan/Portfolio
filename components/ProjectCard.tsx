"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiCode, HiEye, HiCalendar } from "react-icons/hi";
import { HiHeart, HiStar } from "react-icons/hi";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

const ProjectCard = ({ project, priority = false }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      'web-app': 'bg-blue-500',
      'full-stack-project': 'bg-blue-500',
      'mobile-app': 'bg-green-500',
      'api': 'bg-purple-500',
      'tool': 'bg-orange-500',
      'website': 'bg-indigo-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
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
            isHovered ? 'scale-110' : 'scale-100'
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
              <div className="flex space-x-4">
                {project.repo && (
                  <motion.a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View ${project.title} source code`}
                  >
                    <HiCode className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                )}
                
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View ${project.title} live demo`}
                  >
                    <HiEye className="w-4 h-4" />
                    <span>{project.isLive?'Live':'Demo Video'}</span>
                  </motion.a>
                )}
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
              <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(project.category)} text-white`}>
                {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
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
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-medium">
                +{project.tech.length - 4} more
              </span>
            )}
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
              <span>{project.isLive?'Live Demo':'View Demo'}</span>
            </a>
          )}
        </div>
      </div>

      {/* Focus Ring for Accessibility */}
      <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-focus-within:ring-blue-500 group-focus-within:ring-offset-2 transition-all duration-200" />
    </motion.article>
  );
};

export default ProjectCard; 