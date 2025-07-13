"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
    <Header
      darkMode={darkMode} 
      toggleDarkMode={toggleDarkMode}
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
    />
    <Hero darkMode={darkMode} />
    <About darkMode={darkMode} />
    <Services darkMode={darkMode} />
    <TechStack darkMode={darkMode} />
    <WhyChooseUs darkMode={darkMode} />
    <Portfolio darkMode={darkMode} />
    <Testimonials darkMode={darkMode} />
    <Contact darkMode={darkMode} />
    <Footer darkMode={darkMode} />
  </div>
  );
}
