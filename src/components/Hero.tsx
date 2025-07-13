import React from 'react';
import { ArrowRight, Code, Smartphone, Brain } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating Icons */}
          <div className="flex justify-center space-x-8 mb-8 opacity-60">
            <div className="animate-bounce delay-100">
              <Code className="w-8 h-8 text-blue-500" />
            </div>
            <div className="animate-bounce delay-200">
              <Smartphone className="w-8 h-8 text-purple-500" />
            </div>
            <div className="animate-bounce delay-300">
              <Brain className="w-8 h-8 text-orange-500" />
            </div>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            We Build <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              Fast, Modern
            </span> and <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Intelligent
            </span> Solutions
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Transform your ideas into powerful digital experiences with cutting-edge mobile apps, 
            web applications, and AI-powered solutions that drive real business results.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Let's Build Together</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Support Available
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;