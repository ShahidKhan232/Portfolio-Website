import { about } from '../content/siteContent';
import Reveal from './Reveal';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

    </Reveal>

    <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg border border-blue-100 dark:border-gray-600">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {about.bio}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  {about.education.degree}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {about.education.school}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  {about.education.status}
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="grid gap-6">
              {about.skills.map((skillGroup, index) => {
                const Icon = skillGroup.icon as any;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

  {/* Background decorative elements */}
  <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/10 dark:to-pink-900/10 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
  <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-teal-200 to-green-200 dark:from-teal-900/10 dark:to-green-900/10 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default About;
