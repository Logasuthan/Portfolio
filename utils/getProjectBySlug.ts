import { projects, type Project } from "../data/projects";

/**
 * Get a project by its slug
 * @param slug - The project slug to search for
 * @returns The project object or null if not found
 */
export function getProjectBySlug(slug: string): Project | null {
  return projects.find(project => project.slug === slug) || null;
}

/**
 * Get all project slugs for static generation
 * @returns Array of all project slugs
 */
export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}

/**
 * Get related projects (excluding the current project)
 * @param currentSlug - The current project slug
 * @param limit - Maximum number of related projects to return
 * @returns Array of related projects
 */
export function getRelatedProjects(currentSlug: string, limit: number = 3): Project[] {
  return projects
    .filter(project => project.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize featured projects
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      // Then sort by date (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);
}

/**
 * Get projects by category
 * @param category - The category to filter by
 * @returns Array of projects in the specified category
 */
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
}

/**
 * Get projects by technology
 * @param tech - The technology to filter by
 * @returns Array of projects that use the specified technology
 */
export function getProjectsByTechnology(tech: string): Project[] {
  return projects.filter(project => 
    project.tech.some(technology => 
      technology.toLowerCase().includes(tech.toLowerCase())
    )
  );
} 