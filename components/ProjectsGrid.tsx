"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiFilter, HiX } from "react-icons/hi";
import { projects, projectCategories, allTechnologies } from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by technologies
    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter(project =>
        selectedTechnologies.every(tech =>
          project.tech.some(projectTech =>
            projectTech.toLowerCase().includes(tech.toLowerCase())
          )
        )
      );
    }

    // Sort by featured first, then by date
    return filtered
  }, [selectedCategory, selectedTechnologies]);

  const handleTechnologyToggle = (tech: string) => {
    setSelectedTechnologies(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedTechnologies([]);
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedTechnologies.length > 0;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id='projects'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Explore my latest work showcasing modern web development, mobile applications, and innovative solutions.
          </motion.p>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <ProjectCard project={project} priority={index < 3} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-500 dark:text-gray-400">
              <p className="text-lg mb-2">No projects found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Clear all filters
              </button>
            </div>
          </motion.div>
        )}

        {/* Results Count */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid; 