import React from "react";
import Hero from "../components/HomePage/Hero";
import About from "../components/HomePage/About";
import Projects from "../components/HomePage/Projects";
import Experience from "../components/HomePage/Experience";
import Contact from "../components/HomePage/Contact";

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default HomePage;
