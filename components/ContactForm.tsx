"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMail, HiUser, HiChatAlt2, HiCheck, HiX, HiPaperAirplane } from "react-icons/hi";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface Toast {
  id: string;
  type: "success" | "error";
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  
  const formRef = useRef<HTMLFormElement>(null);

  // EmailJS Configuration
  // Replace these with your actual EmailJS credentials
  const EMAILJS_CONFIG = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key",
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const addToast = (type: "success" | "error", message: string) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, type, message }]);
    
    // Auto-remove toast after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Option 1: Use EmailJS (client-side)
      if (EMAILJS_CONFIG.serviceId !== "your_service_id") {
        const emailjs = await import("@emailjs/browser");
        const result = await emailjs.default.sendForm(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          formRef.current!,
          EMAILJS_CONFIG.publicKey
        );

        if (result.status === 200) {
          addToast("success", "Message sent successfully! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error("Failed to send message");
        }
      } 
      // Option 2: Use serverless API (server-side)
      else {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          addToast("success", "Message sent successfully! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error(result.error || 'Failed to send message');
        }
      }
    } catch (error) {
      console.error("Contact form error:", error);
      addToast("error", "Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200";
  const errorClasses = "border-red-500 focus:ring-red-500";

  return (
    <div className="max-w-2xl mx-auto" id="contact">
      {/* Form Header */}
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-300"
        >
          Have a question or want to work together? Send me a message!
        </motion.p>
      </div>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name *
          </label>
          <div className="relative">
            <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`${inputClasses} ${errors.name ? errorClasses : ""} pl-10`}
              placeholder="Your full name"
              disabled={isSubmitting}
            />
          </div>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-600 dark:text-red-400"
            >
              {errors.name}
            </motion.p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email *
          </label>
          <div className="relative">
            <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${inputClasses} ${errors.email ? errorClasses : ""} pl-10`}
              placeholder="your.email@example.com"
              disabled={isSubmitting}
            />
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-600 dark:text-red-400"
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <div className="relative">
            <HiChatAlt2 className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className={`${inputClasses} ${errors.message ? errorClasses : ""} pl-10 resize-none`}
              placeholder="Tell me about your project or ask me anything..."
              disabled={isSubmitting}
            />
          </div>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-600 dark:text-red-400"
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            isSubmitting
              ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <HiPaperAirplane className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </motion.form>

      {/* Toast Notifications */}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.8 }}
              className={`flex items-center space-x-3 p-4 rounded-lg shadow-lg max-w-sm ${
                toast.type === "success"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {toast.type === "success" ? (
                <HiCheck className="w-5 h-5 flex-shrink-0" />
              ) : (
                <HiX className="w-5 h-5 flex-shrink-0" />
              )}
              <span className="text-sm font-medium">{toast.message}</span>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-auto text-white/80 hover:text-white transition-colors duration-200"
              >
                <HiX className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Setup Instructions */}
      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
          Setup Required
        </h3>
        <p className="text-xs text-blue-800 dark:text-blue-200 mb-3">
          Choose one of these options to enable the contact form:
        </p>
        
        {/* EmailJS Setup */}
        <div className="mb-3">
          <h4 className="text-xs font-medium text-blue-900 dark:text-blue-100 mb-1">
            Option 1: EmailJS (Client-side)
          </h4>
          <div className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
            <p><code>NEXT_PUBLIC_EMAILJS_SERVICE_ID</code> - Your EmailJS service ID</p>
            <p><code>NEXT_PUBLIC_EMAILJS_TEMPLATE_ID</code> - Your EmailJS template ID</p>
            <p><code>NEXT_PUBLIC_EMAILJS_PUBLIC_KEY</code> - Your EmailJS public key</p>
          </div>
        </div>

        {/* Serverless API Setup */}
        <div>
          <h4 className="text-xs font-medium text-blue-900 dark:text-blue-100 mb-1">
            Option 2: Serverless API (Recommended for Vercel)
          </h4>
          <div className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
            <p><code>EMAIL_USER</code> - Your email address</p>
            <p><code>EMAIL_PASS</code> - Your email password/app password</p>
            <p><code>CONTACT_EMAIL</code> - Where to receive submissions (optional)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 