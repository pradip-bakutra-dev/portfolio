import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "React Developer",
      company: "IdeapokeTechnologies",
      location: "Bengaluru, India",
      period: "2022 - Present",
      type: "Full-time",
      responsibilities: [
        "Contributed to frontend development with a primary focus on React-based applications",
        "Developed and maintained dynamic, responsive web applications using React.js and Redux",
        "Improved performance and user experience through optimization techniques",
        "Collaborated with cross-functional teams using React Router for seamless navigation",
        "Integrated Ant Design for pre-built, customizable UI components for responsive layouts",
      ],
      technologies: [
        "React.js",
        "Redux",
        "React Router",
        "Ant Design",
        "JavaScript",
        "HTML/CSS",
      ],
    },
    {
      title: "Software Engineer",
      company: "IdeapokeTechnologies",
      location: "Bengaluru, India",
      period: "2021 - 2022",
      type: "Full-time",
      responsibilities: [
        "Worked on both frontend and backend development using JavaScript and Java with SQL",
        "Designed and maintained APIs using Java, implementing CRUD operations",
        "Handled database data manipulation and integration with frontend applications",
        "Worked with relational databases such as MySQL, implementing efficient queries",
        "Developed frontend features using vanilla JavaScript, HTML, and CSS",
      ],
      technologies: [
        "JavaScript",
        "Java",
        "SQL",
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
