import { Github, Linkedin, Mail, Download, ChevronDown, Cloud, Server, Database, GitBranch, Container, Cpu } from 'lucide-react';
import { hero } from '../content/siteContent';
import Reveal from './Reveal';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal className="text-center">
          {/* Animated greeting */}
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {hero.greeting}
            </p>
          </div>

          {/* Name with gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
            {hero.name}
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            {hero.title}
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            {hero.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
            <a
              href={hero.resumeDriveLink || hero.resumePath}
              {...(hero.resumeDriveLink
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : { download: true })}
              className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-blue-600 dark:border-blue-400 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16 relative z-20">
            <a
              href={hero.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={hero.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={hero.socials.email}
              onClick={(e) => {
                // ensure mailto opens even if browser blocks navigation from an anchor
                e.preventDefault();
                if (hero?.socials?.email) {
                  // use window.location to trigger the mail client
                  window.location.href = hero.socials.email;
                }
              }}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </Reveal>
      </div>

      {/* Decorative gradient blobs */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300 to-cyan-300 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-40 animate-pulse pointer-events-none"></div>
  <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-40 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-300 to-green-300 dark:from-teal-900/10 dark:to-green-900/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Floating DevOps icons */}
      <div className="absolute top-1/4 left-1/4 text-blue-400/20 dark:text-blue-400/10 animate-float-slow pointer-events-none">
        <Cloud className="w-16 h-16" />
      </div>
      <div className="absolute top-1/3 right-1/4 text-purple-400/20 dark:text-purple-400/10 animate-float-medium pointer-events-none" style={{ animationDelay: '0.5s' }}>
        <Server className="w-20 h-20" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 text-cyan-400/20 dark:text-cyan-400/10 animate-float-slow pointer-events-none" style={{ animationDelay: '1s' }}>
        <Database className="w-14 h-14" />
      </div>
      <div className="absolute top-1/2 right-1/3 text-teal-400/20 dark:text-teal-400/10 animate-float-medium pointer-events-none" style={{ animationDelay: '1.5s' }}>
        <Container className="w-18 h-18" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-green-400/20 dark:text-green-400/10 animate-float-slow pointer-events-none" style={{ animationDelay: '2s' }}>
        <GitBranch className="w-16 h-16" />
      </div>
      <div className="absolute top-2/3 left-1/4 text-pink-400/20 dark:text-pink-400/10 animate-float-medium pointer-events-none" style={{ animationDelay: '2.5s' }}>
        <Cpu className="w-12 h-12" />
      </div>
    </section>
  );
};

export default Hero;
