import React, { useState } from "react";
import { ExternalLink, Github, ArrowRight, X } from "lucide-react";
import { mockProjects } from "../../data/mockProjects";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { AllProjectsPage } from "./AllProjectsPage";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = mockProjects;
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <>
      <section
        id="projects"
        className="py-24 px-4 bg-gradient-to-b from-slate-800 to-slate-900 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in
              full-stack development, from concept to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group transform hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span className="text-xl">{project.title}</span>
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      Featured
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-slate-700 text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500 text-blue-400 hover:bg-blue-500/10 p-2"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-2"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group transform hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-white">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs bg-slate-700 text-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-slate-600 text-gray-400"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white hover:bg-slate-700"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white hover:bg-slate-700"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300"
              onClick={() => setShowAllProjects(true)}
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Go to All Projects Page
            </Button>
          </div>
        </div>
      </section>

      {/* All Projects Modal */}
      {showAllProjects && (
        <AllProjectsPage
          onClose={() => setShowAllProjects(false)}
          allProjects={projects}
        />
      )}
    </>
  );
};

export default Projects;
