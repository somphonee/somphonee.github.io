import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "AWS", "Docker",
    "MongoDB", "PostgreSQL", "GraphQL", "Next.js", "Tailwind CSS"
  ];

  const experiences = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Lead development of microservices architecture serving 1M+ users"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full Stack Developer", 
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built and maintained React applications with Node.js backends"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Computer Science Degree",
      company: "University of Technology",
      period: "2016 - 2020",
      description: "Bachelor's degree with focus on software engineering and algorithms"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate software engineer with over 5 years of experience creating 
                digital solutions that make a difference. My journey began during university 
                where I discovered my love for coding and problem-solving.
              </p>
              <p>
                Throughout my career, I've worked with startups and established companies, 
                helping them build scalable applications and improve their development processes. 
                I specialize in full-stack development with a focus on modern web technologies.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, 
                learning new technologies, or mentoring junior developers. I believe in 
                continuous learning and sharing knowledge with the community.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-primary">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="project-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-primary mt-1">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{exp.title}</h4>
                        <p className="text-primary font-medium mb-1">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;