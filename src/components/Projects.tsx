import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

const Projects = () => {
  const projects = [
      {
      title: "Krungsri Smart Merchant",
      description: "Krungsri Smart Merchant Increase your business opportunities for your physical store or online shop. Support payment in a variety of channels with fully integrated, whether credit card, debit card or scanning QR Code via EDC or Krungsri Mung-Mee SHOP Application. Seamlessly connect with POS machine or e-commerce websites to process payments. Additionally, you can send payment requests via social media platforms.",
      image: project1,
      technologies: ["React", "Java Spring Boot", "Oracle", "AWS"],
      featured: true
    },
      {
      title: "AST : Auto Sale Tools",
      description: "The Auto Sell Tools application is designed to simplify the traditional paper-based auto loan process, thus enhancing the overall auto loan experience.",
      image: project2,
      technologies: ["React","Flutter", "Java Spring Boot","Go", "Oracle", "AWS"],
      featured: true
    },
      {
      title: "E-Report",
      description: "Report Accident",
      image: project3,
      technologies: ["React", "Java Spring Boot", "Oracle", "MinIO", "JasperReport"],
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: project4,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      featured: false
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced task tracking.",
      image: project5,
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      featured: false
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard for business intelligence with interactive charts, real-time data visualization, and custom reporting.",
      image: project6,
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL", "Docker"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
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