import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft, HiExternalLink, HiCode, HiCalendar, HiTag, HiStar, HiEye } from "react-icons/hi";
import { getProjectBySlug, getRelatedProjects } from "../../../utils/getProjectBySlug";
import MediaCarousel from "../../../components/MediaCarousel";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const { getAllProjectSlugs } = await import("../../../utils/getProjectBySlug");
  const slugs = getAllProjectSlugs();
  
  return slugs.map((slug) => ({
    slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(params.slug, 3);

  // Mock screenshots array - in a real app, this would come from the project data
  const screenshots = [
    project.image,
    `/images/projects/${project.slug}/screenshot-1.jpg`,
    `/images/projects/${project.slug}/screenshot-2.jpg`,
    `/images/projects/${project.slug}/screenshot-3.jpg`,
  ].filter(Boolean);

  // Mock features list - in a real app, this would come from the project data
  const features = [
    "Responsive design for all devices",
    "Modern UI/UX with smooth animations",
    "Performance optimized with best practices",
    "Accessibility compliant (WCAG 2.1)",
    "SEO optimized with meta tags",
    "Cross-browser compatibility",
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'web-app': 'bg-blue-500',
      'mobile-app': 'bg-green-500',
      'api': 'bg-purple-500',
      'tool': 'bg-orange-500',
      'website': 'bg-indigo-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative">
        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} hero image`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <div className="max-w-4xl">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 text-sm font-semibold rounded-full ${getCategoryColor(project.category)} text-white`}>
                    {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>
                
                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h1>
                
                {/* Short Description */}
                <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                  {project.short}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Projects Button */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <Link
          href="/#projects"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        >
          <HiArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Description */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                About This Project
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Extended description would go here in markdown format */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  This project demonstrates modern web development practices, focusing on performance, 
                  accessibility, and user experience. Built with cutting-edge technologies and following 
                  industry best practices, it showcases the ability to create robust, scalable applications 
                  that meet real-world requirements.
                </p>
              </div>
            </section>

            {/* Screenshots Carousel */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Project Screenshots
              </h2>
              <MediaCarousel 
                images={screenshots} 
                alt={project.title}
                className="w-full"
              />
            </section>

            {/* Features List */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <HiStar className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Project Details
              </h3>
              
              <div className="space-y-4">
                {/* Date */}
                <div className="flex items-center space-x-3">
                  <HiCalendar className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Completed</p>
                    <p className="text-gray-900 dark:text-white font-medium">{project.date}</p>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="flex items-center space-x-3">
                    <HiStar className="w-5 h-5 text-yellow-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                      <p className="text-yellow-600 dark:text-yellow-400 font-medium">Featured Project</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Technologies Used
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Project Links
              </h3>
              
              <div className="space-y-3">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 w-full px-4 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <HiCode className="w-5 h-5" />
                    <span>View Source Code</span>
                  </a>
                )}
                
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <HiEye className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Related Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {relatedProject.short}
                    </p>
                    
                    <Link
                      href={`/projects/${relatedProject.slug}`}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      <span>View Project</span>
                      <HiExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
} 