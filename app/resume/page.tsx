import { motion } from "framer-motion";
import { HiDownload, HiEye, HiDocumentText, HiCalendar, HiLocationMarker, HiAcademicCap, HiBriefcase } from "react-icons/hi";
import Link from "next/link";
import { generateMetadata } from "../../lib/metadata";

export const metadata = generateMetadata({
  title: "Resume",
  description: "Download my resume and view my professional experience, skills, and qualifications as a Frontend Software Engineer.",
  url: "/resume"
});

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Resume & Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Frontend-focused Associate Software Engineer with 2+ years of experience building modern web applications
            </motion.p>
          </div>
        </div>
      </section>

      {/* Resume Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Summary */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <HiDocumentText className="w-6 h-6 mr-2 text-blue-600" />
                    Contact Information
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <HiLocationMarker className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">Remote / Worldwide</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <HiCalendar className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">Available for opportunities</span>
                    </div>
                  </div>
                </div>

                {/* Current Role */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <HiBriefcase className="w-6 h-6 mr-2 text-green-600" />
                    Current Role
                  </h2>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Associate Software Engineer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Frontend-focused developer building modern web applications with React, Next.js, and TypeScript.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <HiCalendar className="w-4 h-4" />
                      <span>2+ years experience</span>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <HiAcademicCap className="w-6 h-6 mr-2 text-purple-600" />
                    Education
                  </h2>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Computer Science Degree
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Currently pursuing a degree in Computer Science with focus on software engineering and web development.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <HiCalendar className="w-4 h-4" />
                      <span>In Progress</span>
                    </div>
                  </div>
                </div>

                {/* Download CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-3">Get the Full Resume</h3>
                  <p className="text-blue-100 mb-6">
                    Download the complete PDF version with detailed experience, skills, and achievements.
                  </p>
                  <a
                    href="/resume.pdf"
                    download="Loga_Resume.pdf"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    <HiDownload className="w-5 h-5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>

              {/* Right Column - PDF Preview */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <HiEye className="w-6 h-6 mr-2 text-indigo-600" />
                    Resume Preview
                  </h2>
                  
                  {/* PDF Viewer */}
                  <div className="relative aspect-[3/4] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
                    <iframe
                      src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                      className="w-full h-full"
                      title="Resume PDF Preview"
                      aria-label="Resume preview - PDF document"
                    />
                    
                    {/* PDF Loading Placeholder */}
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-gray-600 dark:text-gray-400">Loading PDF preview...</p>
                      </div>
                    </div>
                  </div>

                  {/* PDF Controls */}
                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors duration-200"
                    >
                      <HiEye className="w-4 h-4" />
                      <span>Open in New Tab</span>
                    </a>
                    <a
                      href="/resume.pdf"
                      download="Loga_Resume.pdf"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      <HiDownload className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>

                {/* Accessibility Note */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Accessibility Note
                  </h3>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300 mb-3">
                    PDF documents may not be fully accessible to screen readers. For better accessibility:
                  </p>
                  <ul className="text-xs text-yellow-700 dark:text-yellow-300 space-y-1 list-disc list-inside">
                    <li>Use the "Open in New Tab" option for better PDF navigation</li>
                    <li>Consider using a screen reader-friendly PDF viewer</li>
                    <li>Contact me directly for alternative formats if needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
          >
            <span>← Back to Portfolio</span>
          </Link>
        </div>
      </section>
    </div>
  );
} 