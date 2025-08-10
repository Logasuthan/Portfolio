export interface Skill {
  id: string;
  name: string;
  proficiency: number; // 1-5 scale
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'languages';
  miniSnippet: string;
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    proficiency: 5,
    category: 'frontend',
    miniSnippet: 'Builds component-based UIs with hooks and context API',
    icon: '⚛️'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    proficiency: 4,
    category: 'frontend',
    miniSnippet: 'Implements type-safe interfaces and generics',
    icon: '📘'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    proficiency: 4,
    category: 'frontend',
    miniSnippet: 'Creates SSR/SSG applications with App Router',
    icon: '▲'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    proficiency: 5,
    category: 'frontend',
    miniSnippet: 'Writes ES6+ code with async/await patterns',
    icon: '🟨'
  },
  {
    id: 'html',
    name: 'HTML5',
    proficiency: 5,
    category: 'frontend',
    miniSnippet: 'Creates semantic markup with accessibility features',
    icon: '🌐'
  },
  {
    id: 'css',
    name: 'CSS3',
    proficiency: 4,
    category: 'frontend',
    miniSnippet: 'Implements responsive designs with Flexbox/Grid',
    icon: '🎨'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    proficiency: 4,
    category: 'frontend',
    miniSnippet: 'Builds utility-first responsive layouts',
    icon: '🎯'
  },
  {
    id: 'angular',
    name: 'Angular',
    proficiency: 3,
    category: 'frontend',
    miniSnippet: 'Implements lazy-loaded modules for performance',
    icon: '🅰️'
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    proficiency: 4,
    category: 'backend',
    miniSnippet: 'Develops REST APIs with Express.js framework',
    icon: '🟢'
  },
  {
    id: 'python',
    name: 'Python',
    proficiency: 3,
    category: 'backend',
    miniSnippet: 'Writes clean scripts and API endpoints',
    icon: '🐍'
  },
  {
    id: 'express',
    name: 'Express.js',
    proficiency: 4,
    category: 'backend',
    miniSnippet: 'Creates middleware and route handlers',
    icon: '🚂'
  },

  // Database
  {
    id: 'sql',
    name: 'SQL',
    proficiency: 4,
    category: 'database',
    miniSnippet: 'Writes complex queries with JOINs and subqueries',
    icon: '🗄️'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    proficiency: 3,
    category: 'database',
    miniSnippet: 'Designs NoSQL schemas and aggregation pipelines',
    icon: '🍃'
  },

  // DevOps
  {
    id: 'aws',
    name: 'AWS',
    proficiency: 3,
    category: 'devops',
    miniSnippet: 'Deploys applications using S3, Lambda, and EC2',
    icon: '☁️'
  },
  {
    id: 'docker',
    name: 'Docker',
    proficiency: 3,
    category: 'devops',
    miniSnippet: 'Containerizes applications with multi-stage builds',
    icon: '🐳'
  },
  {
    id: 'git',
    name: 'Git',
    proficiency: 4,
    category: 'devops',
    miniSnippet: 'Manages version control with branching strategies',
    icon: '📝'
  },

  // Tools
  {
    id: 'vscode',
    name: 'VS Code',
    proficiency: 4,
    category: 'tools',
    miniSnippet: 'Uses extensions and debugging tools efficiently',
    icon: '💻'
  },
  {
    id: 'postman',
    name: 'Postman',
    proficiency: 4,
    category: 'tools',
    miniSnippet: 'Tests APIs and creates documentation',
    icon: '📮'
  },
  {
    id: 'figma',
    name: 'Figma',
    proficiency: 3,
    category: 'tools',
    miniSnippet: 'Collaborates on UI/UX design prototypes',
    icon: '🎨'
  },

  // Languages
  {
    id: 'english',
    name: 'English',
    proficiency: 5,
    category: 'languages',
    miniSnippet: 'Native speaker with technical writing skills',
    icon: '🇺🇸'
  },
  {
    id: 'spanish',
    name: 'Spanish',
    proficiency: 3,
    category: 'languages',
    miniSnippet: 'Conversational level for team collaboration',
    icon: '🇪🇸'
  }
];

export const skillCategories = [
  { key: 'frontend', label: 'Frontend', color: 'blue' },
  { key: 'backend', label: 'Backend', color: 'green' },
  { key: 'database', label: 'Database', color: 'purple' },
  { key: 'devops', label: 'DevOps', color: 'orange' },
  { key: 'tools', label: 'Tools', color: 'indigo' },
  { key: 'languages', label: 'Languages', color: 'pink' }
]; 