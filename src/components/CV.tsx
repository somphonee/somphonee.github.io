import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Eye, FileText } from "lucide-react";

const CV = () => {
  const handleViewCV = () => {
    window.open("/somphoneXayyalathCV.pdf", "_blank");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/somphoneXayyalathCV.pdf";
    link.download = "Somphone_Xayyalath_CV.pdf";
    link.click();
  };

  return (
    <section id="cv" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Resume & CV</h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="project-card text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Professional Resume</CardTitle>
              <CardDescription className="text-lg">
                Download or view my complete professional resume with detailed experience, 
                education, and technical skills.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  className="hero-button"
                  onClick={handleViewCV}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Resume Online
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                  onClick={handleDownloadCV}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>Last updated: December 2024</p>
                <p>File size: 245 KB</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Quick Summary */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold text-primary mb-2">5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Technologies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;