import React from 'react';
import { Smartphone, Globe, Brain, Code, Palette, Zap } from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native iOS and Android apps built with Flutter and React Native for seamless cross-platform experiences.",
      features: ["iOS & Android", "Cross-platform", "Native Performance", "App Store Deployment"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web App Development",
      description: "Modern, responsive web applications using React, Node.js, and cutting-edge technologies.",
      features: ["React & Next.js", "Full-Stack Solutions", "Cloud Deployment", "Performance Optimized"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & ML Solutions",
      description: "Intelligent solutions powered by machine learning, natural language processing, and computer vision.",
      features: ["Custom ML Models", "Data Analytics", "AI Integration", "Predictive Systems"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "API Development",
      description: "Robust, scalable APIs and backend services that power your applications with reliability.",
      features: ["RESTful APIs", "GraphQL", "Microservices", "Database Design"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that create exceptional user experiences and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Performance Optimization",
      description: "Speed up your applications with advanced optimization techniques and monitoring solutions.",
      features: ["Code Optimization", "Performance Monitoring", "Scalability", "Load Testing"],
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="services" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Comprehensive technology solutions tailored to your unique needs and business objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800/50 border border-gray-700 hover:bg-gray-800' 
                  : 'bg-gray-50 border border-gray-200 hover:bg-white hover:shadow-xl'
              }`}
            >
              <div className={`mb-6 text-white p-4 rounded-xl bg-gradient-to-r ${service.gradient} w-fit`}>
                {service.icon}
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;