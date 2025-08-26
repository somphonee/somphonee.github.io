import { Mail, Github, Linkedin, Twitter, Facebook, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/somphonee"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/somphone-xayyalath"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:sp.xayyalath@gmail.com"
    },
    {
      name: "Phone",
      icon: <Phone className="h-5 w-5" />,
      url: "https://wa.me/message/BPDUJ2BG7RPIE1"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/SpXieng"
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://www.facebook.com/somphone.xayyalath.2025",
    }
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold glow-text mb-2"> Somphone Xayyalath</h3>
            <p className="text-muted-foreground">Software Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                aria-label={link.name}
              >
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Somphone Xayyalath
  
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;