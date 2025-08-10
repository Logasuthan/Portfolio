export interface Project {
  id: string;
  title: string;
  slug: string;
  short: string;
  description: string;
  tech: string[];
  image: string;
  repo: string;
  live?: string;
  featured: boolean;
  category: 'web-app' | 'mobile-app' | 'api' | 'tool' | 'website';
  date: string;
}

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    slug: 'portfolio-website',
    short: 'Modern, responsive portfolio built with Next.js and Framer Motion',
    description: 'A fully responsive personal portfolio website featuring dark/light theme toggle, smooth animations, and optimized performance. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
    image: '/images/projects/portfolio.jpg',
    repo: 'https://github.com/loga/portfolio',
    live: 'https://loga.dev',
    featured: true,
    category: 'website',
    date: '2024-12'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    short: 'Full-stack e-commerce solution with payment integration',
    description: 'A comprehensive e-commerce platform featuring product management, shopping cart, user authentication, payment processing with Stripe, and admin dashboard. Built with React, Node.js, and MongoDB.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express.js', 'JWT'],
    image: '/images/projects/ecommerce.jpg',
    repo: 'https://github.com/loga/ecommerce-platform',
    live: 'https://ecommerce-demo.loga.dev',
    featured: true,
    category: 'web-app',
    date: '2024-10'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    slug: 'task-management-app',
    short: 'Collaborative task management with real-time updates',
    description: 'A real-time collaborative task management application featuring drag-and-drop functionality, team collaboration, progress tracking, and notifications. Built with React, Socket.io, and PostgreSQL.',
    tech: ['React', 'Socket.io', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
    image: '/images/projects/task-app.jpg',
    repo: 'https://github.com/loga/task-management',
    live: 'https://tasks.loga.dev',
    featured: false,
    category: 'web-app',
    date: '2024-08'
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    slug: 'weather-dashboard',
    short: 'Real-time weather data with interactive charts',
    description: 'An interactive weather dashboard displaying current conditions, forecasts, and historical data with beautiful charts and maps. Integrates with multiple weather APIs and features location-based services.',
    tech: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation API', 'CSS Grid'],
    image: '/images/projects/weather.jpg',
    repo: 'https://github.com/loga/weather-dashboard',
    live: 'https://weather.loga.dev',
    featured: false,
    category: 'web-app',
    date: '2024-06'
  },
  {
    id: 'rest-api-service',
    title: 'REST API Service',
    slug: 'rest-api-service',
    short: 'Scalable REST API with authentication and rate limiting',
    description: 'A production-ready REST API service featuring user authentication, rate limiting, request validation, comprehensive error handling, and automated testing. Built with Node.js, Express, and MongoDB.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Rate Limiting', 'Jest'],
    image: '/images/projects/api.jpg',
    repo: 'https://github.com/loga/rest-api-service',
    featured: false,
    category: 'api',
    date: '2024-05'
  },
  {
    id: 'mobile-todo-app',
    title: 'Mobile Todo App',
    slug: 'mobile-todo-app',
    short: 'Cross-platform mobile app with offline support',
    description: 'A cross-platform mobile todo application built with React Native, featuring offline support, push notifications, and cloud synchronization. Available on both iOS and Android platforms.',
    tech: ['React Native', 'Expo', 'AsyncStorage', 'Push Notifications', 'Firebase'],
    image: '/images/projects/mobile-todo.jpg',
    repo: 'https://github.com/loga/mobile-todo',
    live: 'https://expo.dev/@loga/mobile-todo',
    featured: false,
    category: 'mobile-app',
    date: '2024-04'
  },
  {
    id: 'code-snippet-manager',
    title: 'Code Snippet Manager',
    slug: 'code-snippet-manager',
    short: 'Developer tool for organizing and sharing code snippets',
    description: 'A developer-focused tool for organizing, categorizing, and sharing code snippets. Features syntax highlighting, search functionality, and team collaboration features.',
    tech: ['Vue.js', 'Prism.js', 'IndexedDB', 'PWA', 'Service Workers'],
    image: '/images/projects/snippet-manager.jpg',
    repo: 'https://github.com/loga/code-snippet-manager',
    live: 'https://snippets.loga.dev',
    featured: false,
    category: 'tool',
    date: '2024-03'
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    slug: 'blog-platform',
    short: 'Headless CMS with markdown support and SEO optimization',
    description: 'A modern blog platform built as a headless CMS with markdown support, SEO optimization, and a clean, minimalist design. Features include content management, categories, and search functionality.',
    tech: ['Next.js', 'Markdown', 'MDX', 'SEO', 'Tailwind CSS', 'Vercel'],
    image: '/images/projects/blog.jpg',
    repo: 'https://github.com/loga/blog-platform',
    live: 'https://blog.loga.dev',
    featured: false,
    category: 'website',
    date: '2024-02'
  }
];

export const projectCategories = [
  { key: 'all', label: 'All Projects', color: 'gray' },
  { key: 'web-app', label: 'Web Apps', color: 'blue' },
  { key: 'mobile-app', label: 'Mobile Apps', color: 'green' },
  { key: 'api', label: 'APIs', color: 'purple' },
  { key: 'tool', label: 'Tools', color: 'orange' },
  { key: 'website', label: 'Websites', color: 'indigo' }
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.tech))
).sort(); 