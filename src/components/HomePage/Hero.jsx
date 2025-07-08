import React from "react";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

function Hero() {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 animate-pulse" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <Badge
            variant="secondary"
            className="mb-6 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
          >
            MERN Stack Developer
          </Badge>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-fade-in">
          Full Stack Developer
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
          Building scalable web applications with MongoDB, Express.js, React,
          and Node.js. Passionate about creating seamless user experiences and
          robust backend solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-400 hover:bg-purple-400/10 hover:border-purple-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-12 animate-fade-in">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white hover:bg-gray-800 hover:shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white hover:bg-gray-800 hover:shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white hover:bg-gray-800 hover:shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            <Mail className="h-6 w-6" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNext}
          className="animate-bounce text-gray-400 hover:text-white hover:bg-gray-800 hover:shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default Hero;
