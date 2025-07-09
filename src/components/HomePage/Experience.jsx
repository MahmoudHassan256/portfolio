import { Calendar, MapPin, Building } from "lucide-react";
import { mockExperiences } from "../../data/mockExperoences";
import { mockEducation } from "../../data/mockEducation";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";

const Experience = () => {
  const experiences = mockExperiences;
  const education = mockEducation;

  return (
    <section id="experience" className="py-24 px-4 bg-background  ">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg   max-w-3xl mx-auto">
            My professional journey and educational background in software
            development.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Building className="mr-3 h-6 w-6 text-blue-500" />
            Professional Experience
          </h3>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-background  hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 ">
                        <div className="flex items-center">
                          <Building className="mr-2 h-4 w-4" />
                          {exp.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    <Badge className="mt-2 md:mt-0 w-fit bg-gradient-to-r from-purple-500 to-pink-500 ">
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
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

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Calendar className="mr-3 h-6 w-6 text-blue-500" />
            Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-background  hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                  <div className="flex flex-wrap items-center gap-4 ">
                    <div className="flex items-center">
                      <Building className="mr-2 h-4 w-4" />
                      {edu.school}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
