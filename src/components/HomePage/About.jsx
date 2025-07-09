import React from "react";
import { Card, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { mockSkills } from "../../data/mockSkills";

const About = () => {
  const skills = mockSkills;

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg  max-w-3xl mx-auto">
            I'm a passionate MERN stack developer with expertise in building
            modern web applications. I love creating efficient, scalable
            solutions and staying up-to-date with the latest technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4 ">
              My Journey
            </h3>
            <p className=" mb-4">
              As a MERN stack developer with solid practical experience, I focus
              on building efficient and scalable web applications that deliver
              real value. I specialize in creating responsive frontends using
              React and TypeScript, alongside developing robust backends with
              Node.js, Express, and MongoDB. My approach emphasizes clean code,
              performance, and a smooth user experience.
            </p>
            <p className="">
              I'm passionate about continuous growth, actively exploring new
              tools and frameworks in the JavaScript ecosystem. Whether working
              on collaborative projects, contributing to open-source, or
              developing side projects, I’m committed to honing my skills and
              building impactful digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-background border-slate-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-sm ">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-slate-700 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  1+
                </div>
                <div className="text-sm ">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-slate-700 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">15+</div>
                <div className="text-sm ">Technologies</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-slate-700 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  100%
                </div>
                <div className="text-sm">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-background border-slate-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg ${skill.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300 `}
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 ">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-slate-700  hover:bg-slate-600 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
