import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  darkMode: boolean;
}

const iconMap = {
  mission: <Target className="w-12 h-12 text-blue-500" />,
  vision: <Lightbulb className="w-12 h-12 text-purple-500" />,
  team: <Users className="w-12 h-12 text-orange-500" />,
};

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const cards = [
    {
      title: 'Our Mission',
      description:
        'Empowering businesses and individuals by transforming innovative ideas into powerful, scalable digital solutions that drive growth and success.',
      icon: iconMap.mission,
    },
    {
      title: 'Our Vision',
      description:
        'To be the leading development partner that bridges the gap between imagination and reality through innovative technology solutions.',
      icon: iconMap.vision,
    },
    {
      title: 'Our Team',
      description:
        'A passionate team of experts in mobile development, web technologies, and AI/ML, committed to delivering excellence in every project.',
      icon: iconMap.team,
    },
  ];

  return (
    <section id="about" className={`py-24 relative ${darkMode ? 'bg-[#0a0a0a]' : 'bg-[#f9fafb]'}`}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500 opacity-20 rounded-full filter blur-3xl -top-24 -left-24" />
        <div className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full filter blur-3xl top-1/2 -right-24" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 tracking-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              RapidRoot
            </span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Creating futuristic digital experiences through design, technology, and intelligence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl shadow-xl backdrop-blur-md ${
                darkMode
                  ? 'bg-gray-800/50 border border-gray-700 text-gray-100'
                  : 'bg-white/90 border border-gray-200 text-gray-900'
              } hover:shadow-2xl hover:scale-105 transition-all duration-300`}
            >
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-base leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className={`mt-24 p-10 md:p-14 rounded-3xl text-center shadow-xl ${
            darkMode
              ? 'bg-gradient-to-r from-purple-800 to-blue-800 text-white'
              : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Ideas?
          </h3>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            We build robust, fast, and scalable solutions tailored to your ideas — whether it's an app, website, or an AI/ML project.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow-md"
          >
            Get a Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
