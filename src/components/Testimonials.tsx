import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  darkMode: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "RapidRoot delivered our Next.js application ahead of schedule with exceptional quality. Their attention to detail is remarkable.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateLab",
      content: "The AI/ML solution they built transformed our business operations. Highly professional and innovative team.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, StartupXYZ",
      content: "Outstanding Next.js development. The web application works flawlessly across all platforms.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "David Kim",
      role: "CTO, FutureTech",
      content: "RapidRoot's expertise in modern web technologies is unmatched. They delivered exactly what we envisioned.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Lisa Thompson",
      role: "Director, DigitalFlow",
      content: "Exceptional service and cutting-edge solutions. Our Next.js platform exceeded all performance expectations.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Alex Martinez",
      role: "Founder, CloudVision",
      content: "The AI integration they implemented revolutionized our workflow. Truly innovative and reliable partners.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className={`py-20 overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            What Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Don't just take our word for it - hear from the clients who've experienced our exceptional service
          </p>
        </div>

        {/* Infinite Scrolling Testimonials */}
        <div className="relative">
          <div className="flex animate-scroll space-x-6">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-80 p-6 rounded-2xl ${
                  darkMode 
                    ? 'bg-gray-900/50 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                } hover:scale-105 transition-transform duration-300`}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                </div>

                {/* Testimonial Content */}
                <p className={`text-lg mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className={`absolute top-0 left-0 w-32 h-full bg-gradient-to-r ${
            darkMode ? 'from-gray-800 to-transparent' : 'from-gray-50 to-transparent'
          } pointer-events-none z-10`}></div>
          <div className={`absolute top-0 right-0 w-32 h-full bg-gradient-to-l ${
            darkMode ? 'from-gray-800 to-transparent' : 'from-gray-50 to-transparent'
          } pointer-events-none z-10`}></div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Ready to join our satisfied clients?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;