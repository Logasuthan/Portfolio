"use client";

import { motion } from "framer-motion";
import { HiBriefcase, HiAcademicCap, HiCalendar, HiArrowRight } from "react-icons/hi";

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      type: "career",
      title: "Associate Software Engineer",
      company: "Current Role",
      period: "2024 - Present",
      description: "Functioning as a Software Engineer-level contributor in frontend development, building scalable web applications and contributing to user experience improvements.",
      icon: HiBriefcase,
      color: "blue",
    },
    {
      id: 2,
      type: "career",
      title: "Trainee Software Engineer",
      company: "Codelantic",
      period: "2023 -July - 2024-February",
      description: "Built and enhanced UI components, focusing on responsive and user-friendly design & Integrated frontend components with REST APIs and handled basic state management",
      icon: HiBriefcase,
      color: "purple",
    },
    {
      id: 3,
      type: "education",
      title: "Software Engineering Degree",
      company: "ESOFT UNI",
      period: "2023 - Present",
      description: "Currently pursuing degree in Software Engineering, balancing studies with practical development experience.",
      icon: HiAcademicCap,
      color: "green",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500 text-white border-blue-500",
      purple: "bg-purple-500 text-white border-purple-500",
      green: "bg-green-500 text-white border-green-500",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 dark:text-blue-400",
      purple: "text-purple-600 dark:text-purple-400",
      green: "text-green-600 dark:text-green-400",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Over 2.5 years, I’ve built real-world web apps using React, Next.js, and Angular. I thrive on creating intuitive interfaces and solving problems with elegant, efficient code.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <ul className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.li
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 ${getColorClasses(item.color)} transform md:-translate-x-1/2 z-10 flex items-center justify-center`}>
                    <item.icon className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}>
                    <motion.div
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 font-medium">
                            {item.company}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <HiCalendar className="w-4 h-4" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Type Badge */}
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          item.type === "career" 
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                            : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        }`}>
                          {item.type === "career" ? (
                            <>
                              <HiBriefcase className="w-3 h-3 mr-1" />
                              Career
                            </>
                          ) : (
                            <>
                              <HiAcademicCap className="w-3 h-3 mr-1" />
                              Education
                            </>
                          )}
                        </span>
                        
                        {/* Arrow for mobile */}
                        <div className="md:hidden">
                          <HiArrowRight className={`w-4 h-4 ${getIconColorClasses(item.color)}`} />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Future Arrow */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-12"
            >
              <div className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <span className="text-lg font-medium">More to come...</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <HiArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 