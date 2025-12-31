export interface Skill {
  id: string;
  name: string;
  proficiency: number; // 1-5 scale
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'libraries';
  miniSnippet: string;
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend
  

  {
    id: 'javascript',
    name: 'JavaScript',
    proficiency: 4,
    category: 'frontend',
    miniSnippet: 'Writes ES6+ code with async/await patterns',
    icon: '/logo/js.png'
  },
    {
    id: 'typescript',
    name: 'TypeScript',
    proficiency: 4,
    category: 'frontend',
    miniSnippet: 'Implements type-safe interfaces and generics',
    icon: '/logo/typescript.png'
  },
  {
    id: 'html',
    name: 'HTML5',
    proficiency: 5,
    category: 'frontend',
    miniSnippet: 'Creates semantic markup with accessibility features',
    icon: '/logo/HTML.SVG'
  },
  {
    id: 'css',
    name: 'CSS3',
    proficiency: 5,
    category: 'frontend',
    miniSnippet: 'Implements responsive designs with Flexbox/Grid',
    icon: '/logo/CSS3.png'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    proficiency: 4,
    category: 'frontend',
    miniSnippet: 'Builds utility-first responsive layouts',
    icon: '/logo/tailwind.svg'
  },
  {
    id: 'react',
    name: 'React',
    proficiency: 4,
    category: 'frontend',
    miniSnippet: 'Builds scalable UIs using hooks, context, and reusable components',
    icon: '/logo/react.png'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    proficiency: 4,
    category: 'frontend',
    miniSnippet: 'Develops SEO-friendly apps using SSR, SSG, and App Router',
    icon: '/logo/nextjs.png'
  },
  {
    id: 'angular',
    name: 'Angular',
    proficiency: 4,
    category: 'frontend',
    miniSnippet: 'Implements lazy-loaded modules for performance',
    icon: '/logo/angular.jfif'
  },
  {
    id: 'tanstack-query',
    name: 'TanStack Query',
    proficiency: 2,
    category: 'frontend',
    miniSnippet: 'Handles server-state caching, background refetching, and sync',
    icon: '/logo/tanstack-query.svg'
  },
  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    proficiency: 3,
    category: 'backend',
    miniSnippet: 'Builds REST APIs with authentication and validation',
    icon: '/logo/nodejs.svg'
  },
  {
    id: 'express',
    name: 'Express.js',
    proficiency: 3,
    category: 'backend',
    miniSnippet: 'Creates middleware and route handlers',
    icon: '/logo/expressjs.svg'
  },

  // Database
  {
    id: 'sql',
    name: 'PostgreSQL',
    proficiency: 3,
    category: 'database',
    miniSnippet: 'Designs relational schemas and optimizes complex queries',
    icon: '/logo/postgre.png'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    proficiency: 3,
    category: 'database',
    miniSnippet: 'Designs NoSQL schemas and aggregation pipelines',
    icon: '/logo/mongodb.svg'
  },

  // DevOps
  {
    id: 'docker',
    name: 'Docker',
    proficiency: 3,
    category: 'devops',
    miniSnippet: 'Containerizes applications with multi-stage builds',
    icon: '/logo/docker.svg'
  },
  {
    id: 'git',
    name: 'Git',
    proficiency: 4,
    category: 'devops',
    miniSnippet: 'Manages version control with branching strategies',
    icon: '/logo/git.png'
  },
  {
    id: 'nginx',
    name: 'Nginx',
    proficiency: 3,
    category: 'devops',
    miniSnippet: 'Web server, reverse proxy, and production deployment',
    icon: '/logo/nginx.png'
  },

  // Tools
  {
    id: 'vscode',
    name: 'VS Code',
    proficiency: 4,
    category: 'tools',
    miniSnippet: 'Uses extensions and debugging tools efficiently',
    icon: '/logo/vscode.png'
  },
  {
    id: 'postman',
    name: 'Postman',
    proficiency: 4,
    category: 'tools',
    miniSnippet: 'Tests APIs and creates documentation',
    icon: '/logo/postman.svg'
  },
  {
    id: 'figma',
    name: 'Figma',
    proficiency: 3,
    category: 'tools',
    miniSnippet: 'Collaborates on UI/UX design prototypes',
    icon: '/logo/figma.svg'
  },
  //Libraries
  {
  id: 'redux',
  name: 'Redux',
  proficiency: 3,
  category: 'libraries',
  miniSnippet: 'Manages global state in React applications',
  icon: '/logo/redux.png'
},
{
  id: 'ngrx',
  name: 'NgRx',
  proficiency: 3,
  category: 'libraries',
  miniSnippet: 'Implements reactive state management in Angular apps',
  icon: '/logo/ngrx.svg'
},
{
  id: 'ngzorro',
  name: 'NG-ZORRO',
  proficiency: 3,
  category: 'libraries',
  miniSnippet: 'Uses Angular UI components for enterprise applications',
  icon: '/logo/ngzorro.svg'
},
{
  id: 'react-hook-form',
  name: 'React Hook Form',
  proficiency: 3,
  category: 'libraries',
  miniSnippet: 'Creates type-safe forms with Zod validation and RHF',
  icon: '/logo/react-hook-form.png'
},
{
  id: 'zod',
  name: 'Zod',
  proficiency: 3,
  category: 'libraries',
  miniSnippet: 'Implements schema-based form and data validation',
  icon: '/logo/zod.png'
}
];

export const skillCategories = [
  { key: 'frontend', label: 'Frontend', color: 'blue' },
  { key: 'backend', label: 'Backend', color: 'green' },
  { key: 'database', label: 'Database', color: 'purple' },
  { key: 'devops', label: 'DevOps', color: 'orange' },
  { key: 'tools', label: 'Tools', color: 'indigo' },
  { key: 'libraries', label: 'libraries', color: 'vilot' },
]; 