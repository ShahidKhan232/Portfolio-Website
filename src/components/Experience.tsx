import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '../content/siteContent';
import Reveal from './Reveal';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 via-purple-50/20 to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Reveal>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 dark:from-blue-900 dark:via-purple-900 dark:to-cyan-900"></div>

            {experience.map((exp, idx) => (
              <div key={idx} className="relative mb-8 md:mb-0">
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                      <div className="flex items-center gap-2 mb-4 md:justify-end">
                        <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
                          <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      </div>

                      <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{exp.company}</p>

                      <div className="flex flex-wrap gap-4 mb-6 md:justify-end">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.start} – {exp.end}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      <div className="space-y-3 text-gray-700 dark:text-gray-300 text-left md:text-right">
                        {exp.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-3 md:flex-row-reverse">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <p>{b}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2 md:justify-end">
                        {exp.techTags.map((tag, t) => (
                          <span key={t} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 md:translate-y-0 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white dark:border-gray-800 rounded-full z-10 shadow-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        </div>

      </div>

  {/* Background decorative elements */}
  <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
  <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/10 dark:to-pink-900/10 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default Experience;
