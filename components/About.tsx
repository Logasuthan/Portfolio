"use client";

import { motion } from "framer-motion";
import { HiUser, HiAcademicCap, HiCode, HiLightBulb } from "react-icons/hi";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const skills = [
    "React","Angular", "TypeScript", "JavaScript", "Next.js","Tailwind CSS", 
    ,"Node.js","Express.js","REST APIs", 
    "PostgreSQL", "Git & GitHub", "Docker", "Postman","VS Code","Figma"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <HiUser className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Current Role
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I&apos;m currently working as Associate Software Engineer, where I focus on 
                    frontend development and contribute to building scalable web applications. 
                    My passion lies in creating intuitive user experiences and writing clean, 
                    maintainable code.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <HiAcademicCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Education in Progress
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I&apos;m actively pursuing my degree in Software Engineering, balancing my studies 
                    with real-world development experience. This combination allows me to apply 
                    theoretical knowledge to practical projects and stay current with industry trends.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <HiLightBulb className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    What Drives Me
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I&apos;m passionate about continuous learning and staying at the forefront of 
                    web development technologies. I believe in writing code that not only works 
                    but is also maintainable, scalable, and provides excellent user experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 