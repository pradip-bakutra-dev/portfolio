import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, BarChart3, Database, Dice4 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Chesz AI",
      description:
        "An AI-powered web application that automates research by allowing users to submit queries and receive structured research outputs generated using multiple large language models, reducing the time required to gather and organize information.",
      icon: Dice4,
      technologies: [
        "Multiple LLMs",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
      ],
      features: [
        "AI-driven automated research based on user queries",
        "Agent-based research selection to tailor AI responses",
        "Structured research outputs for better readability and clarity",
      ],
      category: "Web Application",
    },
    {
      title: "Tech Scouting Platform",
      description:
        "A comprehensive platform for technology research and scouting, helping organizations identify and evaluate emerging technologies and solutions.",
      icon: Search,
      technologies: ["React.js", "Redux", "JavaScript", "CSS", "REST APIs"],
      features: [
        "Advanced search and filtering capabilities",
        "Technology trend analysis",
        "Interactive data visualization",
        "Real-time updates and notifications",
      ],
      category: "Web Application",
    },
    {
      title: "Research Design Tool (RDT)",
      description:
        "An intuitive design tool for researchers to create, manage, and visualize research methodologies and data structures.",
      icon: BarChart3,
      technologies: ["React.js", "React Router", "SQL", "Ant Design"],
      features: [
        "Drag-and-drop interface for research design",
        "Data flow visualization",
        "Collaborative editing capabilities",
        "Export to multiple formats",
      ],
      category: "Design Tool",
    },
    {
      title: "Research Process Automation",
      description:
        "Automated data validation and processing system that streamlines research workflows and ensures data quality.",
      icon: Database,
      technologies: ["JavaScript", "React.js"],
      features: [
        "Automated data validation",
        "Process workflow management",
        "Error detection and reporting",
        "Integration with existing systems",
      ],
      category: "Automation Tool",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of projects that demonstrate my expertise in building
            scalable, user-friendly applications with modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group hover:shadow-xl transition-all duration-500 hover:shadow-primary/10 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
