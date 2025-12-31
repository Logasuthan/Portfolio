"use client";

import { motion } from "framer-motion";
import { HiHeart, HiMail, HiGlobe, HiCode } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:contact@loga.dev",
      icon: HiMail,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "Website",
      href: "https://loga.dev",
      icon: HiGlobe,
      color: "text-green-600 dark:text-green-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/loga",
      icon: HiCode,
      color: "text-gray-600 dark:text-gray-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Loga
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Frontend-focused Software Engineer passionate about creating beautiful, functional, and user-friendly web applications.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["About", "Projects", "Skills", "Contact", "Resume"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
       
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} Loga. Made with</span>
            <motion.span
              className="text-red-500 mx-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <HiHeart className="h-4 w-4" />
            </motion.span>
            <span>and Next.js</span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 