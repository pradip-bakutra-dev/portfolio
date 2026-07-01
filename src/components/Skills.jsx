import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Code2,
  FileCode2,
  Palette,
  Repeat,
  Database,
  Boxes,
  GitBranch,
  SquareCode,
  GraduationCap,
  Box,
  Wind,
  Server,
  Cloud,
  Sparkles,
  Zap,
  Users,
  Gauge,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5", level: 85 },
        { name: "CSS3", level: 85 },
        { name: "SQL", level: 70 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 75 },
        { name: "Redux", level: 80 },
        { name: "React Router", level: 85 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Ant Design", level: 70 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 75 },
        { name: "REST APIs", level: 80 },
        { name: "MySQL", level: 65 },
      ],
    },
    {
      title: "AI & Tools",
      skills: [
        { name: "LLM Integration", level: 85 },
        { name: "Prompt Engineering", level: 80 },
        { name: "Cursor AI", level: 95 },
        { name: "VS Code", level: 90 },
        { name: "Antigravity", level: 80 },
        { name: "Git", level: 80 },
        { name: "Vite", level: 85 },
        { name: "Postman", level: 75 },
      ],
    },
    {
      title: "Practices",
      skills: [
        { name: "Agile/Scrum", level: 85 },
        { name: "AWS EC2", level: 75 },
        { name: "Performance Optimization (Lighthouse)", level: 85 },
      ],
    },
  ];

  const certifications = [
    {
      title: "Software Development",
      issuer: "jSpider Institute, Bengaluru",
      description:
        "Certificate course focused on advanced concepts of frontend and backend development",
    },
    {
      title: "React – The Complete Guide",
      issuer: "Udemy, Maximilian Schwarzmüller",
      description: "Hooks, React Router, Redux",
    },
  ];

  const iconMap = {
    "JavaScript (ES6+)": <FileCode2 className="size-4" />,
    HTML5: <Palette className="size-4" />,
    CSS3: <Palette className="size-4" />,
    SQL: <Database className="size-4" />,
    "React.js": <Code2 className="size-4" />,
    "Next.js": <Code2 className="size-4" />,
    Redux: <Repeat className="size-4" />,
    "React Router": <Repeat className="size-4" />,
    "Tailwind CSS": <Wind className="size-4" />,
    "Ant Design": <Boxes className="size-4" />,
    "Node.js": <Server className="size-4" />,
    "Express.js": <Server className="size-4" />,
    "REST APIs": <Server className="size-4" />,
    MySQL: <Database className="size-4" />,
    "LLM Integration": <Sparkles className="size-4" />,
    "Prompt Engineering": <Sparkles className="size-4" />,
    "Cursor AI": <Box className="size-4" />,
    "VS Code": <SquareCode className="size-4" />,
    Antigravity: <Zap className="size-4" />,
    Git: <GitBranch className="size-4" />,
    Vite: <Zap className="size-4" />,
    Postman: <Server className="size-4" />,
    "Agile/Scrum": <Users className="size-4" />,
    "AWS EC2": <Cloud className="size-4" />,
    "Performance Optimization (Lighthouse)": <Gauge className="size-4" />,
  };

  return (
    <section id="skills" className="relative py-20 bg-background">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A snapshot of my core capabilities across the stack.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="group relative overflow-hidden border border-border/50 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-primary" />
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-6 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-xl border border-border/50 bg-muted/20 p-3 transition-colors hover:bg-muted/30"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            {iconMap[skill.name] ?? (
                              <span className="text-base">{skill.icon}</span>
                            )}
                          </div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="mt-2">
                        <Progress value={skill.level} className="h-1.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">
            Certifications{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              & Learning
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border border-border/50 bg-card/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-primary" />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                      <GraduationCap className="size-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
