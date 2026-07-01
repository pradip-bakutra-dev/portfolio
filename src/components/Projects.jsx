import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Dice4 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Chesz AI",
      description:
        "AI-powered research automation platform generating structured insights from user queries using LLM-based processing.",
      icon: Dice4,
      technologies: [
        "React",
        "JavaScript",
        "Redux",
        "Node.js",
        "AWS EC2",
      ],
      features: [
        "Designed prompt-driven workflows to extract, structure, and summarize AI-generated research outputs.",
        "Built a multi-stage AI response handling pipeline to improve output clarity and usability.",
        "Developed a frontend dashboard to visualize AI-generated structured data for end users.",
      ],
      category: "Live Production Platform",
    },
    {
      title: "Tech Scouting, Research Design Tool (RDT) & Signalz",
      description:
        "Three client-facing research and analytics tools built for Ideapoke clients, covering company/technology scouting, data relationship mapping, and structured market/company search.",
      icon: Search,
      technologies: [
        "React.js",
        "JavaScript",
        "Redux",
        "REST APIs",
        "ChatGPT Integration",
      ],
      features: [
        "Integrated ChatGPT-based ML data processing to structure company insights into JSON for frontend consumption.",
        "Delivered end-to-end; later sunset by the business as part of product portfolio prioritization.",
      ],
      category: "Enterprise Research Tools",
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
