import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Download,
  Heart,
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "pradipbakutra002@gmail.com",
      href: "mailto:pradipbakutra002@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9409557927",
      href: "tel:+919409557927",
      description: "Call me for quick discussion",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, India",
      href: "https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9501935,77.5256586,12z/data=!4m15!1m8!3m7!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!2sBengaluru,+Karnataka!3b1!8m2!3d12.9628669!4d77.577509!16zL20vMDljMTc!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9628669!4d77.577509!16zL20vMDljMTc?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
      description: "Available for on-site opportunities",
    },
  ];

  const socialLinks = [
    // {
    //   icon: Github,
    //   title: "GitHub",
    //   href: "#",
    //   description: "Check out my code",
    // },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/pradip-bakutra-dev/",
      description: "Let's connect professionally",
    },
  ];

  return (
    <section id="contact" className="pt-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to work on new projects and collaborate with
            talented teams. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method) => (
              <Card
                key={method.title}
                className="group hover:shadow-lg transition-all duration-300 hover:shadow-primary/20 bg-gradient-secondary border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {method.description}
                  </p>
                  <a
                    href={method.href}
                    target="_blank"
                    className="text-sm font-medium text-primary hover:underline block"
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-8">
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.title}
                  variant="outline"
                  size="lg"
                  className="group hover:shadow-lg hover:shadow-primary/20"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    {social.title}
                  </a>
                </Button>
              ))}
            </div>

            <div className="bg-gradient-secondary rounded-2xl p-8 border border-border/50">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h3 className="text-2xl font-semibold">
                  Ready to start a project?
                </h3>
                <p className="text-muted-foreground">
                  Whether you're looking for a Fronted developer to join your
                  team or need help building a new application, I'd love to hear
                  about your project and discuss how I can contribute.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="gradient" size="lg" className="group">
                    <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    <a href="mailto:pradipbakutra002@gmail.com">
                      Send an Email
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="group">
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    <a
                      href={
                        "https://drive.google.com/file/d/1iLbE5LyaqxgsKqYpn1j68DoGG1gkqrfS/view?usp=sharing"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
