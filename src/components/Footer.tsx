import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white relative`}>
      <div className="container mx-auto px-6">
  
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
    
          <div className="md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              RapidRoot
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
  We build fast, modern, and intelligent solutions that transform your ideas into powerful digital experiences. 
  Let&apos;s create something amazing together.
</p>

            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

       
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Mobile App Development</span></li>
              <li><span className="text-gray-300">Web App Development</span></li>
              <li><span className="text-gray-300">AI & ML Solutions</span></li>
              <li><span className="text-gray-300">UI/UX Design</span></li>
            </ul>
          </div>
        </div>

 
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} RapidRoot. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;