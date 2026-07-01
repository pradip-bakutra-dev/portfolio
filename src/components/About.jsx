import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Users, Target } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";

const About = () => {
  const strengths = [
    {
      icon: Zap,
      title: "Adaptability",
      description:
        "Quickly adapted to the React ecosystem at Ideapoke Technologies and began contributing to projects within the first few months.",
    },
    {
      icon: Users,
      title: "Communication",
      description:
        "Effectively communicated with cross-functional teams, ensuring smooth collaboration. Actively provided clear updates to ensure everyone stayed informed.",
    },
    // {
    //   icon: Code,
    //   title: "Technical Excellence",
    //   description:
    //     "Proficient in React.js, JavaScript and modern development practices with focus on scalable and maintainable code.",
    // },
    {
      icon: Target,
      title: "Impact Focused",
      description:
        "Passionate about creating impactful experiences and exploring new techniques and methodologies to deliver value.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Ideas Into{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Applications
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate developer dedicated to transforming ideas into
            powerful, user-friendly applications that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              With over {EXPERIENCE} years of experience as a Developer, I've
              successfully contributed to multiple projects, delivering scalable
              and maintainable code. My journey began with a strong foundation
              in Engineering, and I've since specialized in modern web
              development practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I thrive on building responsive, user-friendly web applications
              that not only meet technical requirements but also provide
              exceptional user experiences. My approach combines technical
              expertise with creative problem-solving to deliver impactful
              digital solutions.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "React.js",
                "JavaScript",
                "Redux",
                "React Router",
                "HTML/CSS",
                "Java",
                "SQL",
              ].map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="hover:bg-primary/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-secondary rounded-2xl p-8 border border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Experience
                  </span>
                  <span className="font-semibold">{EXPERIENCE}+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Specialization
                  </span>
                  <span className="font-semibold">Frontend Development</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Location
                  </span>
                  <span className="font-semibold">Bengaluru, India</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Education
                  </span>
                  <span className="font-semibold">B.E. Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <Card
              key={strength.title}
              className="group hover:shadow-lg transition-all duration-300 hover:shadow-primary/20 bg-gradient-secondary border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <strength.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h4 className="font-semibold mb-2">{strength.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
