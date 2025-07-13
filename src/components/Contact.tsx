import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, MessageCircle } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={`py-14 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
  <div className="container mx-auto px-4 md:px-6">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Get In <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Touch
        </span>
      </h2>
      <p className={`text-base max-w-2xl mx-auto ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Let’s discuss your ideas and bring your vision to life.
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Contact Info */}
      <div>
        <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Let's Start a Conversation
        </h3>

        <div className="space-y-5 mb-6">
          {/* Info Item */}
          {[
            { Icon: Mail, label: "Email", value: "hello@rapidroot.dev", gradient: "from-blue-500 to-purple-600" },
            { Icon: Phone, label: "Phone", value: "+1 (555) 123-4567", gradient: "from-purple-500 to-pink-500" },
            { Icon: MapPin, label: "Location", value: "San Francisco, CA", gradient: "from-orange-500 to-red-500" }
          ].map(({ Icon, label, value, gradient }, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${gradient}`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{label}</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition">
            <Calendar className="w-4 h-4" />
            <span>Schedule a Free Consultation</span>
          </button>

          <button className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium transition ${
            darkMode 
              ? 'bg-gray-700 text-white hover:bg-gray-600' 
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
          }`}>
            <MessageCircle className="w-4 h-4" />
            <span>Live Chat Support</span>
          </button>
        </div>
      </div>

      {/* Form */}
      <div className={`p-6 rounded-xl ${
        darkMode 
          ? 'bg-gray-900/50 border border-gray-700' 
          : 'bg-white border border-gray-200'
      }`}>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className={`text-sm font-medium mb-1 block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 focus:ring-blue-500 transition ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-600 text-white' 
                    : 'bg-gray-50 border-gray-300 text-gray-900'
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <label className={`text-sm font-medium mb-1 block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 focus:ring-blue-500 transition ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-600 text-white' 
                    : 'bg-gray-50 border-gray-300 text-gray-900'
                }`}
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className={`text-sm font-medium mb-1 block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company (optional)"
              className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 focus:ring-blue-500 transition ${
                darkMode 
                  ? 'bg-gray-800 border-gray-600 text-white' 
                  : 'bg-gray-50 border-gray-300 text-gray-900'
              }`}
            />
          </div>

          {/* Service */}
          <div>
            <label className={`text-sm font-medium mb-1 block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Service Interested In
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 focus:ring-blue-500 transition ${
                darkMode 
                  ? 'bg-gray-800 border-gray-600 text-white' 
                  : 'bg-gray-50 border-gray-300 text-gray-900'
              }`}
            >
              <option value="">Select a service</option>
              <option value="mobile">Mobile App Development</option>
              <option value="web">Web App Development</option>
              <option value="ai-ml">AI & ML Solutions</option>
              <option value="api">API Development</option>
              <option value="design">UI/UX Design</option>
              <option value="optimization">Performance Optimization</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className={`text-sm font-medium mb-1 block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Project Details *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Briefly describe your project..."
              className={`w-full px-3 py-2.5 rounded-md border resize-none focus:ring-2 focus:ring-blue-500 transition ${
                darkMode 
                  ? 'bg-gray-800 border-gray-600 text-white' 
                  : 'bg-gray-50 border-gray-300 text-gray-900'
              }`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
          >
            <span>Send Message</span>
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;