import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Ideapoke Technologies",
      location: "Bengaluru, India",
      period: "Dec 2022 – Present",
      type: "Full-time",
      summary:
        "Primary frontend developer for Chesz AI, a production AI-powered research automation platform, working within a 5-person Agile team (2 developers, 1 QA, 1 project manager).",
      responsibilities: [
        "Resolved 700+ issues on the Chesz AI Jira board, serving as the primary frontend developer responsible for feature delivery and production stability.",
        "Designed and shipped core product features end-to-end, including file downloads, advanced filtering and search, Save to collections, a platform credit management system, and secure login/signup flows.",
        "Improved application performance and Google Lighthouse scores through React rendering optimization, code-splitting, and asset/bundle size reduction.",
        "Built reusable, responsive UI components using React.js and Redux, increasing development speed across the team.",
        "Implemented client-side routing with React Router, enabling seamless navigation across a multi-page enterprise application.",
        "Deployed and maintained production builds on AWS EC2, supporting reliable uptime for live users.",
      ],
      technologies: [
        "React.js",
        "Redux",
        "React Router",
        "JavaScript",
        "AWS EC2",
      ],
    },
    {
      title: "Software Engineer",
      company: "Ideapoke Technologies",
      location: "Bengaluru, India",
      period: "May 2022 – Dec 2022",
      type: "Full-time",
      summary:
        "Worked on both frontend and backend development, utilizing JavaScript, Node.js, and SQL.",
      responsibilities: [
        "Designed and built RESTful APIs using Node.js and Express.js, implementing CRUD operations that powered core frontend workflows.",
        "Worked with MySQL relational databases, writing efficient queries to support application data and reporting needs.",
        "Developed interactive frontend features using vanilla JavaScript, HTML, and CSS, contributing to early-stage product development.",
      ],
      technologies: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "HTML",
        "CSS",
        "REST APIs",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-secondary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building impactful web applications and growing expertise in modern
            development practices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:shadow-primary/10 bg-background/50 backdrop-blur-sm border-border/50"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                    <Badge variant="secondary" className="w-fit">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.summary}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
