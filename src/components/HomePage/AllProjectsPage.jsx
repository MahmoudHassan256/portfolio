import { Badge } from "../ui/Badge"; // or wherever your Badge is from
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { FaJava } from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiCss3,
  SiTailwindcss,
  SiLucide,
  SiJavascript,
  SiSupabase,
  SiRedux,
} from "react-icons/si";

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { HiX } from "react-icons/hi";

const techIcons = {
  React: SiReact,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Java: FaJava,
  TypeScript: SiTypescript,
  CSS: SiCss3,
  "Tailwind CSS": SiTailwindcss,
  "Lucide React": SiLucide, // no exact icon but using SiLucide for demo
  "Custom Toast Notifications": SiRedux, // no icon, reused Redux icon for custom UI
  "React Hooks": SiReact,
  "REST API (PokeAPI)": SiNodedotjs,
  Supabase: SiSupabase,
  JavaScript: SiJavascript,
};

export const AllProjectsPage = ({ onClose, allProjects }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">All Projects</h2>
          <Button
            variant="ghost"
            onClick={onClose}
            className="text-white hover:bg-slate-800"
          >
            <HiX className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group transform hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center justify-between">
                    {project.title}
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        Featured
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-300">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => {
                      const Icon = techIcons[tech];
                      return (
                        <Badge key={tech} className="flex items-center gap-1">
                          {Icon && <Icon className="w-4 h-4" />}
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white hover:bg-slate-700"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      disabled={!project.githubUrl}
                    >
                      <FiGithub className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white hover:bg-slate-700"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      disabled={!project.liveUrl}
                    >
                      <FiExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
