"use client";

import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactForm = () => {
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

  const contactLinks = [
    {
      name: "Email",
      value: "logasuthan4@gmail.com",
      href: "mailto:logasuthan4@gmail.com",
      icon: HiMail,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      name: "LinkedIn",
      value: "Loga suthan",
      href: "https://www.linkedin.com/in/loga-suthan-946b78244",
      icon: FaLinkedin,
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      name: "GitHub",
      value: "Logasuthan",
      href: "https://github.com/Logasuthan",
      icon: FaGithub,
      color: "bg-gray-800 dark:bg-gray-700",
      hoverColor: "hover:bg-gray-900 dark:hover:bg-gray-600",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
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
                <HiMail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Get In Touch
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4">
              Open to frontend / full-stack roles and collaborations.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Contact Information Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {contactLinks.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.a
                  key={contact.name}
                  href={contact.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 flex flex-col items-center text-center"
                >
                  <div className={`w-14 h-14 ${contact.color} ${contact.hoverColor} rounded-full flex items-center justify-center mb-4 transition-colors duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {contact.value}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm always interested in hearing about new opportunities, interesting projects, 
                or just connecting with fellow developers. Feel free to reach out!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm; 