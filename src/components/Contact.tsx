import { useState } from 'react';
import { Send, Github, Linkedin } from 'lucide-react';
import { contact } from '../content/siteContent';
import Reveal from './Reveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // If a backend/form endpoint is configured in siteContent, POST there.
    const endpoint = (contact as any).formEndpoint as string | undefined;

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } catch (err) {
        console.error('Send message failed', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } else {
      // Fallback: open user's email client with a pre-filled message
      try {
        const to = contact.contactInfo[0]?.value || '';
        const subject = encodeURIComponent(`Contact from ${formData.name || 'Website'}`);
        const body = encodeURIComponent(`${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`);
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } catch (err) {
        console.error('Mailto fallback failed', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // contact data is now provided from content/siteContent

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-pink-50/20 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Let's discuss how I can help with your DevOps needs
          </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contact.contactInfo.map((info, index) => {
                  const Icon = info.icon as any;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className={`flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                        info.label === 'Location' ? 'cursor-default' : ''
                      }`}
                    >
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {info.label}
                        </p>
                        <p className="text-gray-900 dark:text-white font-medium">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ShahidKhan232"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/shahid-khan-985919317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Call to action box */}
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-blue-100 dark:border-gray-600">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Looking for a DevOps Engineer?
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm currently open to new opportunities and would love to discuss how I can contribute to your team.
              </p>
              <a
                href={(contact.cta as any).resumeDriveLink || contact.cta.resumePath}
                {...(((contact.cta as any).resumeDriveLink)
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : { download: true })}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg">
                    <p className="text-green-700 dark:text-green-400 text-center font-medium">
                      Message sent successfully!
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">{contact.footerText}</p>
        </div>
      </div>

  {/* Background decorative elements */}
  <div className="absolute top-1/4 left-20 w-80 h-80 bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900/10 dark:to-purple-900/10 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
  <div className="absolute bottom-1/4 right-20 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default Contact;
