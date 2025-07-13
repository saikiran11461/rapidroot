import React from 'react';
import { Code, Database, Smartphone, Brain, Palette, Server } from 'lucide-react';

interface TechStackProps {
  darkMode: boolean;
}

const TechStack: React.FC<TechStackProps> = ({ darkMode }) => {
  const techCategories = [
    {
      title: "Frontend Development",
      icon: <Code />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Development",
      icon: <Server />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Database Management",
      icon: <Database />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Mobile Applications",
      icon: <Smartphone />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "AI / Machine Learning",
      icon: <Brain />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Design & DevOps Tools",
      icon: <Palette />,
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section id="tech-stack" className={`py-24 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Our Core Stack
            </span>
          </h2>
          <p className={`text-lg mt-4 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            The essential technologies we use to craft high-quality digital products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((cat, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border group shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800/60 border-gray-700 text-white' 
                  : 'bg-white border-gray-200 text-gray-900'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-5">
                <div className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r ${cat.gradient} text-white shadow-lg`}>
                  {React.cloneElement(cat.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-semibold leading-snug">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-20 text-center rounded-3xl p-10 ${
          darkMode 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white' 
            : 'bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800 border border-gray-200'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Backed by the Best Tools in the Industry</h3>
          <p className="max-w-xl mx-auto text-lg">
            Our stack is carefully selected to provide the highest performance, scalability, and reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
