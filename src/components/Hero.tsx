import { Button } from "@/components/ui/button";
import { ChevronDown, Download, FileText } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePicture}
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover border-4 border-primary/30 shadow-2xl animate-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text">
            Alex Johnson
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">
            Software Engineer
          </h2>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate full-stack developer with 5+ years of experience building scalable web applications.
            Specialized in React, Node.js, and cloud technologies. I love turning complex problems into
            simple, elegant solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              className="hero-button"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10"
              onClick={() => scrollToSection("cv")}
            >
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;