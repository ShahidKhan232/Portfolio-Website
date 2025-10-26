import { ExternalLink } from 'lucide-react';
import { projects } from '../content/siteContent';
import Reveal from './Reveal';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-cyan-50/20 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Hands-on experience building scalable cloud solutions
          </p>
  </div>
  </Reveal>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6 flex-1">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-1 justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Details</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
  <div className="absolute top-1/4 right-10 w-80 h-80 bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-900/10 dark:to-blue-900/10 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
  <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-to-r from-green-200 to-teal-200 dark:from-green-900/10 dark:to-teal-900/10 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default Projects;
