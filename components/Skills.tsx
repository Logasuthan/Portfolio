"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, skillCategories, type Skill } from "../data/skills";
import { HiCode, HiStar, HiFilter } from "react-icons/hi";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const getCategoryColor = (category: string) => {
    const categoryData = skillCategories.find(cat => cat.key === category);
    if (!categoryData) return "gray";
    
    const colors = {
      blue: "bg-blue-500 text-white",
      green: "bg-green-500 text-white",
      purple: "bg-purple-500 text-white",
      orange: "bg-orange-500 text-white",
      indigo: "bg-indigo-500 text-white",
      pink: "bg-pink-500 text-white",
    };
    return colors[categoryData.color as keyof typeof colors] || "bg-gray-500 text-white";
  };

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 4) return "bg-green-500";
    if (proficiency >= 3) return "bg-blue-500";
    if (proficiency >= 2) return "bg-yellow-500";
    return "bg-gray-400";
  };

  const renderProficiencyBar = (proficiency: number) => {
    return (
      <div className="flex items-center space-x-1">
        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${getProficiencyColor(proficiency)} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${(proficiency / 5) * 100}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 min-w-[1.5rem] text-right">
          {proficiency}/5
        </span>
      </div>
    );
  };

  const renderProficiencyDots = (proficiency: number) => {
    return (
      <div className="flex items-center space-x-1">
        <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">
          {proficiency}/5
        </span>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={`w-2 h-2 rounded-full ${
                level <= proficiency 
                  ? getProficiencyColor(proficiency) 
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <HiCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Skills & Expertise
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
              }`}
              aria-label="Show all skills"
            >
              <HiFilter className="w-4 h-4 inline mr-2" />
              All Skills
            </button>
            
            {skillCategories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.key
                    ? `${getCategoryColor(category.key)} shadow-lg`
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
                }`}
                aria-label={`Filter by ${category.label} skills`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={itemVariants}
                  layout
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onFocus={() => setHoveredSkill(skill.id)}
                  onBlur={() => setHoveredSkill(null)}
                >
                  {/* Skill Card */}
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {skill.icon && (
                          <span className="text-2xl" role="img" aria-label={`${skill.name} icon`}>
                            {skill.icon}
                          </span>
                        )}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </h3>
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(skill.category)}`}>
                            {skillCategories.find(cat => cat.key === skill.category)?.label}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="mb-4">
                      {renderProficiencyBar(skill.proficiency)}
                    </div>

                    {/* Proficiency Dots (Alternative view) */}
                    <div className="mb-4">
                      {renderProficiencyDots(skill.proficiency)}
                    </div>

                    {/* Mini Snippet (Hidden by default, shown on hover) */}
                    <AnimatePresence>
                      {hoveredSkill === skill.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
                        >
                          <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                            {skill.miniSnippet}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Hover Indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <HiStar className="w-4 h-4 text-yellow-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Skills Overview
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {skills.filter(s => s.proficiency >= 4).length}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Advanced</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {skills.filter(s => s.proficiency === 3).length}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Intermediate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                    {skills.filter(s => s.proficiency === 2).length}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Basic</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                    {skills.length}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Total</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 