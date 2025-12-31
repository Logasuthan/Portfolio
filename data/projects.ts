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
  isLive: boolean;
  category:
    | "web-app"
    | "mobile-app"
    | "api"
    | "tool"
    | "website"
    | "full-stack-project";
  features: string[];
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Online Stationery Shop",
    slug: "online-stationery-shop",
    short:
      "Full-stack e-commerce app with customer shopping and admin management",
    description:
      "Online Stationery Shop is a full-stack e-commerce application built using Next.js and Node.js. It allows customers to browse products, manage carts, and place orders, while admins can manage products and orders through a secure dashboard.",
    tech: [
      "NextJs",
      "React",
      "Node.js",
      "PostgreSQL",
      "Express.js",
      "JWT",
      "Prisma",
    ],
    image: "/ebookshop.png",
    repo: "https://github.com/Logasuthan/ebookshop",
    live: "https://youtu.be/sFRPYJPjD5o",
    featured: true,
    category: "full-stack-project",
    isLive: false,
    features: [
      "Browse stationery products with search & category filters",
      "View detailed product pages",
      "Add to cart and manage quantities",
      "Checkout and place orders",
      "Secure admin authentication",
      "Add, edit, and delete products (CRUD)",
      "Upload product images",
      "View and manage customer orders",
    ],
  },
  {
    id: "blog-platform",
    title: "Recipe Blog Application (Ongoing)",
    slug: "blog-platform",
    short: "Headless CMS with markdown support and SEO optimization",
    description:
      "A modern, SEO-friendly recipe blog platform built with Next.js, focused on performance, clean UI, and scalable architecture. The project is currently in active development, with core user-facing features completed and backend/admin functionality in progress.",
    tech: ["Next.js", "Zod", "Tailwind CSS", "Netlify", "React Hook Form"],
    image: "/recipe-blog.png",
    repo: "https://github.com/Logasuthan/Recipe_blog",
    live: "https://myrecipeblog.netlify.app",
    featured: false,
    category: "website",
    isLive: false,
    features: [
      " Responsive recipe listing and detail pages using Next.js App Router",
      "Server-Side Rendering (SSR) for improved SEO and faster initial load",
      "Recipe search and filtering using URL query parameters",
      "“Add New Recipe” form with React Hook Form + Zod validation",
      "Client-side form validation with clear error handling and UX feedback",
      "Sample recipe data integrated for UI and feature demonstration",
      "Deployed frontend UI on Netlify",
    ],
  },
  {
    id: "portfolio-website",
    title: "Developer Portfolio Website",
    slug: "portfolio-website",
    short:
      "Personal portfolio website built with Next.js to showcase projects, skills, and experience.",
    description:
      "A fully responsive personal portfolio website featuring dark/light theme toggle, smooth animations, and optimized performance. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "GitHub",
      "Netlify",
      "Framer Motion",
    ],
    image: "/portfolio.png",
    repo: "https://github.com/Logasuthan/Portfolio",
    live: "https://loga.dev",
    featured: true,
    category: "website",
    isLive: true,
    features: [
      "Built with Next.js & React for performance and SEO",
      "Responsive design using Tailwind CSS",
      "Modular, reusable UI components",
      "Projects section with demo videos & GitHub links",
      "Deployed on Netlify",
    ],
  },
];

export const projectCategories = [
  { key: "all", label: "All Projects", color: "gray" },
  { key: "full-stack-project", label: "Full-Stack Project", color: "blue" },
  { key: "mobile-app", label: "Mobile Apps", color: "green" },
  { key: "api", label: "APIs", color: "purple" },
  { key: "tool", label: "Tools", color: "orange" },
  { key: "website", label: "Websites", color: "indigo" },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.tech))
).sort();
