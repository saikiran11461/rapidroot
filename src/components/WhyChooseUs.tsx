import React from 'react';
import { Clock, Shield, Rocket, Award, HeartHandshake, Cog } from 'lucide-react';

interface WhyChooseUsProps {
  darkMode: boolean;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ darkMode }) => {
  const reasons = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Modern Tech Stack",
      description: "We use the latest technologies and frameworks to ensure your project is future-proof and scalable."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous testing and code reviews ensure we deliver bug-free, high-performance solutions."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Agile development methodology ensures rapid turnaround without compromising on quality."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Futuristic Design",
      description: "Cutting-edge UI/UX design that's not just beautiful but also highly functional and user-friendly."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "24/7 support and maintenance to ensure your application runs smoothly at all times."
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Built to grow with your business, our solutions can handle increased load and new features seamlessly."
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Why Choose <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              RapidRoot?
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            We combine technical expertise with a passion for innovation to deliver solutions that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-900/50 border border-gray-700' 
                  : 'bg-white border border-gray-200 hover:shadow-lg'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-500 mr-4">
                  {reason.icon}
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {reason.title}
                </h3>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-16 p-8 md:p-12 rounded-3xl ${
          darkMode 
            ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700' 
            : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200'
        }`}>
          <div className="text-center">
            <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready to Transform Your Ideas?
            </h3>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's discuss your project and see how we can bring your vision to life with cutting-edge technology.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;