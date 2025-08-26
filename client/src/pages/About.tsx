import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Eye, Award } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Nakimuli",
      role: "Executive Director",
      bio: "Leading community development initiatives for over 15 years with expertise in psycho-social empowerment.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Mukasa",
      role: "Programs Manager",
      bio: "Experienced in economic empowerment programs with a focus on sustainable community development.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Grace Nakalema",
      role: "Community Outreach Coordinator",
      bio: "Passionate about grassroots engagement and building lasting relationships with local communities.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community-Centered",
      description: "We put the community at the heart of everything we do, ensuring local ownership and participation."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "We measure our success by the tangible improvements in the lives of the people we serve."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparent",
      description: "We maintain open communication and accountability in all our operations and programs."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for the highest standards in program delivery and community impact."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            About Generation 2040
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Empowering communities in Buikwe District to build a better future through psycho-social and economic development.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-medium border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is the psycho-social and economic empowerment of vulnerable persons in Buikwe District through access to interventions that are commensurate with their respective improved welfare.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-l-4 border-l-secondary">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-2" />
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We envision realising psycho-socially and economically empowered communities in Buikwe District with abilities to determine and strategically pursue their own destiny.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {[
              { year: "2020", event: "Generation 2040 was founded with a vision to empower Buikwe District communities" },
              { year: "2021", event: "Launched our first psycho-social empowerment programs reaching 500+ individuals" },
              { year: "2022", event: "Expanded to include economic empowerment training, impacting 200+ small businesses" },
              { year: "2023", event: "Introduced food security initiatives, establishing 15 community gardens" },
              { year: "2024", event: "Celebrating 4 years of community transformation and continued growth" }
            ].map((milestone, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {milestone.year}
                </div>
                <p className="text-muted-foreground">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;