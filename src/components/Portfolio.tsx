import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface PortfolioProps {
  darkMode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ darkMode }) => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A full-featured shopping app with AI-powered recommendations, built with Flutter and integrated with machine learning algorithms.",
      category: "Mobile App",
      technologies: ["Flutter", "Python", "TensorFlow", "Firebase"],
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive web application for healthcare providers with patient management, appointment scheduling, and telemedicine features.",
      category: "Web App",
      technologies: ["React", "Node.js", "PostgreSQL", "WebRTC"],
      image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "AI-Powered Analytics Platform",
      description: "Advanced data analytics platform with machine learning models for predictive insights and automated reporting.",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "React", "MongoDB"],
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "FinTech Trading Platform",
      description: "Real-time trading platform with advanced charting, portfolio management, and automated trading algorithms.",
      category: "Web App",
      technologies: ["Next.js", "Node.js", "Redis", "WebSocket"],
      image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Smart IoT Dashboard",
      description: "IoT device management platform with real-time monitoring, data visualization, and predictive maintenance features.",
      category: "IoT/Web",
      technologies: ["React", "Python", "InfluxDB", "MQTT"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Education Learning App",
      description: "Interactive learning platform with gamification, progress tracking, and personalized learning paths powered by AI.",
      category: "Mobile App",
      technologies: ["Flutter", "Firebase", "Python", "ML Kit"],
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="portfolio" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Explore our recent projects and see how we've helped businesses transform their ideas into successful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-900/50 border border-gray-700' 
                  : 'bg-white border border-gray-200 hover:shadow-xl'
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>

                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 text-xs rounded ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Want to see more of our work or discuss your project?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;