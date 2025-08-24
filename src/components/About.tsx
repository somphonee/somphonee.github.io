import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const skillGroups = [
    {
      category: "Programming Languages",
      skills: ["Java", "Go", "C#", "PHP", "Dart", "Python", "TypeScript", "Javascript"]
    },
    {
      category: "Frontend & Web",
      skills: ["React", "HTML", "CSS", "Tailwind CSS", "Flutter"]
    },
    {
      category: "Backend Frameworks",
      skills: ["Spring Boot", "Node.js", "Fiber", "Laravel", "Express.js", "NestJS", "Django", "ASP.NET"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Oracle", "Redis"]
    },
    {
      category: "APIs & Communication",
      skills: ["RESTful API", "GraphQL", "Socket"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Google Cloud", "AWS", "Docker", "Podman", "Kubernetes", "Helm", "Rancher", "Harbor", "Nexus"]
    },
    {
      category: "Tools & Testing",
      skills: ["Jenkins", "Grafana", "Elastic", "SonarQube", "Maven", "JUnit", "PostMan", "jira"]
    },
    {
      category: "Version Control & Collaboration",
      skills: ["Git", "GitHub", "GitLab", "CI/CD", "Agile Methodologies", "Sprint Planning", "Code Reviews"]
    }
  ];

  const experiences = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Software Developer",
      company: "Agricultural Promotion Bank Co.,Ltd",
      period: "2025 - Present",
      description: "Built responsive web apps using TypeScript (React) Developed secure REST APIs with Spring Boot, integrated with MySQL, and connected to external vendor systems for fund transfers and payment methods. Supported CI/CD pipelines for automated testing and deployments using GitLab CI."
    },
     {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Software Developer",
      company: "SB Lab 856 Co., Ltd",
      period: "2023 - Present",
      description: "Developed and Maintained Microservices and Monolith"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Backend Developer",
      company: " Infinitech Sole Co., Ltd, a Subsidiary of Prior Solution Co., Ltd",
      period: "2023 - 2025",
      description: "Developed and Maintained RESTful APIs using Java Spring Boot, GO, React. Built scalable Microservices and implemented Docker for containerization. Created reports with JasperReports to support business decisions. Collaborated in Agile teams for code reviews and sprint planning. projects include developing the Krungsri Smart Merchant system, DDMP E-Report, SCB AST : Auto Sale Tools TPSO"
    },
   {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Printing",
      company: "seven digital sole co.ltd",
      period: "2019 - 2023",
      description: " Printing EDL Bill path time"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Internship Dataannatation", 
      company: "Startup deepvisions.co.kr",
      period: "2022",
      description: " In recognition of the valuable contribution made to “data annotation”  project which including: drawing bounding box on targeted object.collecting images for model training. drawing polygon on selected object and so on"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Computer Sciences Degree",
      company: "National University of Laos, Faculty Of Natural Sciences, Department Of Computer Programming",
      period: "2021 - 2023",
      description: "Bachelor's degree with focus on software engineering, algorithms, AI"
    },
     {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "General English Degree",
      company: "Thipvaly College ",
      period: "2021 - 2023",
      description: "Higher Diploma degree with focus on English language "
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
              <div className="space-y-6">
                {skillGroups.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    <h5 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      {group.category}
                    </h5>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {group.skills.map((skill) => (
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