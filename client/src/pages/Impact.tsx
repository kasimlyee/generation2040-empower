import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Download, TrendingUp, Users, Target, Heart, DollarSign, Utensils, Brain } from "lucide-react";

const Impact = () => {
  const keyMetrics = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "People Reached",
      value: "4,000+",
      description: "Individuals directly impacted by our programs",
      color: "text-primary"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Lives Transformed",
      value: "1,200+",
      description: "People receiving psycho-social support",
      color: "text-secondary"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Businesses Supported",
      value: "350+",
      description: "Small businesses launched and supported",
      color: "text-accent"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Food Security",
      value: "800",
      description: "Families with improved food access",
      color: "text-primary"
    }
  ];

  const programImpact = [
    {
      title: "Psycho-Social Empowerment",
      description: "Mental health support and community healing programs",
      participants: 1200,
      target: 1500,
      achievements: [
        "85% reduction in reported stress levels",
        "200+ individuals completed group therapy",
        "15 trained community counselors",
        "95% satisfaction rate from beneficiaries"
      ],
      progress: 80
    },
    {
      title: "Economic Empowerment",
      description: "Business training and microfinance support",
      participants: 800,
      target: 1000,
      achievements: [
        "350+ new businesses launched",
        "UGX 120M distributed in microloans",
        "70% business survival rate after 2 years",
        "Average income increase of 150%"
      ],
      progress: 75
    },
    {
      title: "Food Security Initiative",
      description: "Agricultural training and community gardens",
      participants: 2000,
      target: 2500,
      achievements: [
        "25 community gardens established",
        "500+ farmers trained in sustainable practices",
        "40% increase in crop yields",
        "300 families achieved food self-sufficiency"
      ],
      progress: 85
    }
  ];

  const stories = [
    {
      name: "Sarah Namutebi",
      program: "Economic Empowerment",
      story: "After participating in our business training program, Sarah launched a successful tailoring business that now employs 5 other women in her community.",
      impact: "Generated UGX 2.5M revenue in first year",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Mukisa",
      program: "Food Security",
      story: "Through our agricultural training, James transformed his family's subsistence farming into a profitable venture, improving nutrition and income.",
      impact: "300% increase in crop yield",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Grace Nalongo",
      program: "Psycho-Social Support",
      story: "After receiving counseling support, Grace became a peer counselor helping other trauma survivors in her community rebuild their lives.",
      impact: "Now supports 20+ community members",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const reports = [
    {
      title: "Annual Impact Report 2023",
      description: "Comprehensive overview of our achievements, challenges, and future plans",
      pages: 32,
      year: "2023",
      downloadUrl: "#"
    },
    {
      title: "Program Evaluation Report",
      description: "Independent evaluation of our psycho-social empowerment programs",
      pages: 24,
      year: "2023",
      downloadUrl: "#"
    },
    {
      title: "Financial Transparency Report",
      description: "Detailed breakdown of funding sources and expenditure allocation",
      pages: 16,
      year: "2023",
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Our Impact
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Measuring the positive change we're creating in Buikwe District communities through data-driven insights and real stories.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Impact by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center text-white`}>
                    {metric.icon}
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Program Impact Analysis
          </h2>
          <div className="space-y-8">
            {programImpact.map((program, index) => (
              <Card key={index} className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <p className="text-muted-foreground">{program.description}</p>
                    </div>
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      {program.progress}% Complete
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Participants</span>
                          <span className="text-sm text-muted-foreground">
                            {program.participants.toLocaleString()} / {program.target.toLocaleString()}
                          </span>
                        </div>
                        <Progress value={program.progress} className="h-3" />
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                          Key Achievements
                        </h4>
                        {program.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-6">
                      <h4 className="font-semibold mb-4">Impact Highlights</h4>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{program.participants.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">Total Beneficiaries</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-secondary">{program.progress}%</div>
                          <div className="text-sm text-muted-foreground">Success Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{story.name}</h3>
                    <Badge variant="secondary" className="text-xs">{story.program}</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{story.story}"
                  </p>
                  
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-sm font-medium text-primary">Impact</div>
                    <div className="text-xs text-muted-foreground">{story.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & Downloads */}
      <section className="py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Impact Reports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    {report.title}
                    <Badge variant="outline">{report.year}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{report.pages} pages</span>
                    <Button variant="cta" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Be Part of Our Impact
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us in creating positive change and help us reach even more communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Support Our Mission
            </Button>
            <Button variant="warm" size="lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;