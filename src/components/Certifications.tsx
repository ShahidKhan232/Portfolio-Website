import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../content/siteContent';
import Reveal from './Reveal';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-50 via-teal-50/20 to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Continuous learning and professional development
          </p>
  </div>
  </Reveal>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg">
                      <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {cert.issuer}
                </p>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Gradient bottom border on hover */}
              <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Valid certification links available on{' '}
            <a
              href="https://www.credly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Credly
            </a>
            {' '}and{' '}
            <a
              href="https://kodekloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              KodeKloud
            </a>
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
  <div className="absolute top-1/3 left-10 w-72 h-72 bg-gradient-to-r from-teal-200 to-cyan-200 dark:from-teal-900/10 dark:to-cyan-900/10 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
  <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-900/10 dark:to-blue-900/10 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default Certifications;
