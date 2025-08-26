import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import {
  Brain,
  DollarSign,
  Utensils,
  Users,
  MapPin,
  Calendar,
} from "lucide-react";
import psychosocialImage from "../assets/images/meeting.jpg";
import economicImage from "../assets/images/climate-farming.jpg";
import foodSecurityImage from "../assets/images/maize.jpg";

const Programs = () => {
  const programs = [
    {
      title: "Poverty reduction",
      description:
        "Many people in Uganda and Buikwe District in particular struggle to work hard but they can hardly provide for their families adequately. We think we can do something about such a situation by using the resources available to sustainably better such families e.g land, family, labour, dietary feeding, group ticket items (tractors), connecting available markets, right agro inputs, Formation of cooperatives, collective farms , communes, Savings and Credit Organizations, Village Savings and Loan Associations ) group land hire system, a group fund called Generation Fund, soil analysis laboratory, common storage system operating by receipts trading system, skilling, connect crop insurance and do critical awareness.",
      image: psychosocialImage,
      icon: <DollarSign className="w-6 h-6" />,
      beneficiaries: "1,200+",
      status: "Ongoing",
      progress: 75,
      features: [
        "Connecting available markets",
        "Right agro inputs",
        "Formation of cooperatives",
        "Village Savings and Loan Associations",
      ],
    },
    {
      title: "Mitigation of climate change.",
      description:
        "We observe and we know that a lot has changed in terms of environment, we strive to restore the environment in order to achieve better yields in farm productivity and better leaving conditions like combating air pollution. This we do encourage Tree planting especially fruit trees in a project code named “Trees for Food” or Trees for soil enhancement and water availability for production via water harvesting, surface pumping, mini irrigation systems or water acquisition by mobile tanks.",
      image: economicImage,
      icon: <DollarSign className="w-6 h-6" />,
      beneficiaries: "800+",
      status: "Expanding",
      progress: 65,
      features: [
        "Surface pumping",
        "Mini irrigation systems",
        "Water harvesting",
        "Afforestation",
      ],
    },
    {
      title: "Food Security",
      description:
        "We have observed that a number of families are not food secure where some are child headed families, widow headed families, vulnerable families, families in conflict zones like fishing families who are conflicting with the laws curbing poor fishing methods, poor fish catches due to overfishing caused by population pressure, those pulled out of wetlands and forest reserves and many on smaller plots of land already depleted but holding sizeable families whose majority members are children below 18 years, youths or women.",
      image: foodSecurityImage,
      icon: <Utensils className="w-6 h-6" />,
      beneficiaries: "2,000+",
      status: "Growing",
      progress: 80,
      features: [
        "Community gardens",
        "Sustainable farming training",
        "Nutrition education",
        "Seed distribution programs",
      ],
    },
  ];

  const projects = [
    {
      title: "Community Wellness Centers",
      location: "Central Buikwe",
      timeline: "2024-2025",
      description:
        "Establishing dedicated spaces for mental health support and community gatherings.",
      impact: "Expected to serve 500+ individuals monthly",
      status: "In Progress",
    },
    {
      title: "Youth Entrepreneurship Hub",
      location: "Nkokonjeru",
      timeline: "2024-2026",
      description:
        "Creating a dedicated space for young entrepreneurs with training facilities and incubation support.",
      impact: "Target: 200 young entrepreneurs",
      status: "Planning",
    },
    {
      title: "Agricultural Innovation Center",
      location: "Buikwe Villages",
      timeline: "2024-2025",
      description:
        "Modern farming techniques training center with demonstration plots.",
      impact: "500+ farmers to benefit",
      status: "In Progress",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Our Programs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Comprehensive initiatives designed to create lasting positive change
            in Buikwe District communities.
          </p>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Core Programs
          </h2>
          <div className="space-y-12">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-medium hover:shadow-strong transition-smooth"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
                  </div>
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-white">
                        {program.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">
                          {program.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary">{program.status}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {program.beneficiaries} beneficiaries
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">
                          Program Progress
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {program.progress}%
                        </span>
                      </div>
                      <Progress value={program.progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {program.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button variant="cta">Learn More</Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Current Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-medium transition-smooth"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge
                      variant={
                        project.status === "In Progress"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.timeline}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="text-muted-foreground">
                      {project.impact}
                    </span>
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
            Support Our Programs
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Your contribution can make a real difference in the lives of
            vulnerable communities in Buikwe District.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Donate Now
            </Button>
            <Button variant="warm" size="lg">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
