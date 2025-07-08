import { Code, Database, Server, Smartphone } from "lucide-react";

export const mockSkills = [
  {
    category: "Frontend",
    icon: <Code className="h-6 w-6" />,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Material-UI",
      "Redux",
    ],
    color: "bg-gradient-to-r from-blue-500 to-purple-500",
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    technologies: ["Node.js", "Express.js", "REST APIs", "Socket.io"],
    color: "bg-gradient-to-r from-green-500 to-teal-500",
  },
  {
    category: "Database ",
    icon: <Database className="h-6 w-6" />,
    technologies: ["MongoDB", "MySQL"],
    color: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    category: "Tools & DevOps",
    icon: <Smartphone className="h-6 w-6" />,
    technologies: ["Git", "Jest", "Postman", "Vercel"],
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
];
