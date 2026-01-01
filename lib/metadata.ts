import { Metadata } from 'next';

// Base metadata configuration
const baseMetadata = {
  title: {
    default: 'Loga - Frontend Software Engineer Portfolio',
    template: '%s | Loga Portfolio'
  },
  description: 'Frontend-focused Associate Software Engineer with 2+ years of experience building modern web applications. Specializing in React, Next.js, TypeScript, and responsive design.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Software Engineer',
    'Web Developer',
    'Portfolio',
    'Frontend Development',
    'React Native',
    'Tailwind CSS',
    'Framer Motion'
  ],
  authors: [{ name: 'Loga' }],
  creator: 'Loga',
  publisher: 'Loga',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://logasuthan.netlify.app'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
};

// Open Graph metadata
const openGraph = {
  type: 'website',
  locale: 'en_US',
  url: 'https://logasuthan.netlify.app',
  siteName: 'Loga Portfolio',
  title: 'Loga - Frontend Software Engineer Portfolio',
  description: 'Frontend-focused Associate Software Engineer with 2+ years of experience building modern web applications. Specializing in React, Next.js, TypeScript, and responsive design.',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Loga - Frontend Software Engineer Portfolio',
    },
  ],
};

// Function to generate metadata for specific pages
export function generateMetadata({
  title,
  description,
  image,
  url,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
} = {}): Metadata {
  const pageTitle = title ? `${title} | Loga Portfolio` : baseMetadata.title.default;
  const pageDescription = description || baseMetadata.description;
  const pageImage = image || '/og-image.png';
  const pageUrl = url || '';

  return {
    ...baseMetadata,
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      ...openGraph,
      title: pageTitle,
      description: pageDescription,
      url: pageUrl ? `${baseMetadata.metadataBase}${pageUrl}` : baseMetadata.metadataBase.href,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    alternates: {
      canonical: pageUrl || '/',
    },
  };
}

// Default metadata export
export const defaultMetadata: Metadata = {
  ...baseMetadata,
  openGraph,
};

// Page-specific metadata presets
export const pageMetadata = {
  home: {
    title: 'Frontend Software Engineer Portfolio',
    description: 'Frontend-focused Associate Software Engineer with 2+ years of experience building modern web applications. Specializing in React, Next.js, TypeScript, and responsive design.',
    keywords: ['Portfolio', 'Frontend Developer', 'React', 'Next.js', 'TypeScript'],
  },
  about: {
    title: 'About Me',
    description: 'Learn more about my journey as a Frontend Software Engineer, my education, and what drives me in software development.',
    keywords: ['About', 'Experience', 'Education', 'Career'],
  },
  projects: {
    title: 'Projects',
    description: 'Explore my portfolio of web applications, mobile apps, and tools built with modern technologies like React, Next.js, and TypeScript.',
    keywords: ['Projects', 'Portfolio', 'Web Apps', 'Mobile Apps', 'React', 'Next.js'],
  },
  skills: {
    title: 'Skills & Technologies',
    description: 'Comprehensive overview of my technical skills including React, Next.js, TypeScript, Tailwind CSS, and more.',
    keywords: ['Skills', 'Technologies', 'React', 'Next.js', 'TypeScript', 'Frontend'],
  },
  contact: {
    title: 'Contact Me',
    description: 'Get in touch with me for collaboration opportunities, project inquiries, or just to say hello.',
    keywords: ['Contact', 'Get In Touch', 'Collaboration', 'Hire Me'],
  },
  resume: {
    title: 'Resume',
    description: 'Download my resume and view my professional experience, skills, and qualifications as a Frontend Software Engineer.',
    keywords: ['Resume', 'CV', 'Experience', 'Qualifications', 'Download'],
  },
}; 