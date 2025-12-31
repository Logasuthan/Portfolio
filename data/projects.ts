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
  isLive:boolean
  category: 'web-app' | 'mobile-app' | 'api' | 'tool' | 'website'|'full-stack-project';
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
    isLive:true
  },
  {
    id: 'ecommerce-platform',
    title: 'Online Stationery Shop',
    slug: 'online-stationery-shop',
    short: 'Full-stack e-commerce app with customer shopping and admin management',
    description: 'Online Stationery Shop is a full-stack e-commerce application built using Next.js and Node.js. It allows customers to browse products, manage carts, and place orders, while admins can manage products and orders through a secure dashboard.',
    tech: ['NextJs','React','Node.js','PostgreSQL','Express.js','JWT','Prisma'],
    image: '/ebookshop.png',
    repo: 'https://github.com/Logasuthan/ebookshop.git',
    live: 'https://youtu.be/sFRPYJPjD5o',
    featured: true,
    category: 'full-stack-project',
    isLive:false
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
    isLive:false
  }
];

export const projectCategories = [
  { key: 'all', label: 'All Projects', color: 'gray' },
  { key: 'full-stack-project', label: 'Full-Stack Project', color: 'blue' },
  { key: 'mobile-app', label: 'Mobile Apps', color: 'green' },
  { key: 'api', label: 'APIs', color: 'purple' },
  { key: 'tool', label: 'Tools', color: 'orange' },
  { key: 'website', label: 'Websites', color: 'indigo' }
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.tech))
).sort(); 