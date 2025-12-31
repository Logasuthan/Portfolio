"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiFilter, HiX } from "react-icons/hi";
import { projects, projectCategories, allTechnologies, type Project } from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter projects based on selected category and technologies
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

        {/* Filter Bar */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200 lg:hidden"
            >
              <HiFilter className="w-5 h-5" />
              <span>Filters</span>
            </button>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">Active filters:</span>
                {selectedCategory !== "all" && (
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    {projectCategories.find(cat => cat.key === selectedCategory)?.label}
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className="ml-2 hover:text-blue-600 dark:hover:text-blue-300"
                    >
                      <HiX className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedTechnologies.map(tech => (
                  <span key={tech} className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                    {tech}
                    <button
                      onClick={() => handleTechnologyToggle(tech)}
                      className="ml-2 hover:text-green-600 dark:hover:text-green-300"
                    >
                      <HiX className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Category Filter */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Project Category
                    </h3>
                    <div className="space-y-2">
                      {projectCategories.map((category) => (
                        <label key={category.key} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="category"
                            value={category.key}
                            checked={selectedCategory === category.key}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
                          />
                          <span className="text-gray-700 dark:text-gray-300">{category.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Technology Filter */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies
                    </h3>
                    <div className="max-h-48 overflow-y-auto space-y-2">
                      {allTechnologies.map((tech) => (
                        <label key={tech} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedTechnologies.includes(tech)}
                            onChange={() => handleTechnologyToggle(tech)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
                          />
                          <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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