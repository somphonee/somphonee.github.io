import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Facebook, Phone } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "Phone / WhatsApp",
      icon: <Phone className="h-5 w-5" />,
      url: "https://wa.me/message/BPDUJ2BG7RPIE1",
      display: "+856 20 98995586"
    },
     {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://www.facebook.com/somphone.xayyalath.2025",
      display: "somphone Xayyalath"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "https://mail.google.com/mail/?view=cm&to=sp.xayyalath@gmail.com",
      display: "sp.xayyalath@gmail.com"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/somphone-xayyalath",
      display: "linkedin.com/in/somphone-xayyalath"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/somphonee",
      display: "github.com/somphonee"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/SpXieng",
      display: "@SpXieng"
    }
  ];


  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto text-center">
          {/* Contact Info */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Work Together</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities, interesting projects, 
              or just having a chat about technology. Feel free to reach out if you'd like to 
              collaborate or discuss any ideas.
            </p>
            
            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-left justify-left gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group max-w-md mx-auto"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{link.name}</p>
                    <p className="text-sm text-muted-foreground">{link.display}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;