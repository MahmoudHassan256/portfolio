import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "./ui/Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold  bg-clip-text  mb-4">Portfolio</h3>
            <p className="text-muted-foreground mb-4">
              MERN stack developer passionate about creating innovative web
              solutions with MongoDB, Express.js, React, and Node.js.
            </p>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="hover:shadow-glow-primary transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:shadow-glow-accent transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:shadow-glow-primary transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-center">
              Tech Stack
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {[
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "TypeScript",
                "Socket.io",
                "Redux",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-muted px-3 py-1 rounded text-center w-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center ">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col items-center space-y-2">
              <a
                href="#about"
                className="inline-block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                About
              </a>

              <a
                href="#projects"
                className="inline-block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="inline-block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="inline-block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-code pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
