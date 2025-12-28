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