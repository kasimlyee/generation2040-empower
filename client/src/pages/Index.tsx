import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, TrendingUp, Award, ArrowRight, Quote, Star, CheckCircle, Brain, DollarSign, Utensils } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import psychosocialImage from "@/assets/psychosocial-program.jpg";
import economicImage from "@/assets/economic-empowerment.jpg";
import foodSecurityImage from "@/assets/food-security.jpg";

const Index = () => {
  const stats = [
    { 
      icon: <Users className="w-8 h-8" />, 
      number: "4,000+", 
      label: "Lives Transformed",
      description: "Individuals directly impacted by our programs"
    },
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      number: "350+", 
      label: "Businesses Launched",
      description: "Small businesses created through our economic empowerment"
    },
    { 
      icon: <Heart className="w-8 h-8" />, 
      number: "1,200+", 
      label: "Mental Health Support",
      description: "People receiving psycho-social empowerment services"
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      number: "4+", 
      label: "Years of Impact",
      description: "Dedicated to community transformation since 2020"
    }
  ];

  const programs = [
    {
      title: "Psycho-Social Empowerment",
      description: "Mental health support, counseling services, and community healing programs that build resilience and emotional well-being in vulnerable populations.",
      image: psychosocialImage,
      icon: <Brain className="w-6 h-6" />,
      beneficiaries: "1,200+",
      highlights: ["Group therapy sessions", "Individual counseling", "Community healing circles"]
    },
    {
      title: "Economic Empowerment",
      description: "Skills training, microfinance support, and business development programs that create sustainable livelihoods and economic independence.",
      image: economicImage,
      icon: <DollarSign className="w-6 h-6" />,
      beneficiaries: "800+",
      highlights: ["Business training", "Microfinance loans", "Market linkage support"]
    },
    {
      title: "Food Security Initiative",
      description: "Agricultural training, community gardens, and nutrition programs that address food insecurity and promote sustainable farming practices.",
      image: foodSecurityImage,
      icon: <Utensils className="w-6 h-6" />,
      beneficiaries: "2,000+",
      highlights: ["Community gardens", "Sustainable farming", "Nutrition education"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Namutebi",
      role: "Business Owner",
      content: "Thanks to Generation 2040's business training program, I was able to start my tailoring business. Now I employ 5 women in my community and support my family comfortably.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&h=400&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "James Mukisa",
      role: "Farmer",
      content: "The agricultural training transformed my farm. My crop yields increased by 300%, and I can now feed my family year-round while selling surplus to the market.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Grace Nalongo",
      role: "Community Counselor",
      content: "After receiving psycho-social support, I became empowered to help others. I now serve as a peer counselor, supporting 20+ community members through their healing journeys.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      rating: 5
    }
  ];

  const partners = [
    "Ministry of Health Uganda",
    "Buikwe District Local Government", 
    "USAID Uganda",
    "World Vision Uganda",
    "Caritas Uganda",
    "ActionAid Uganda"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Generation 2040 Community Impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm">
              Buikwe District, Uganda
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              Empowering Communities,
              <span className="gradient-hero bg-clip-text text-transparent"> Transforming Lives</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up">
              We envision realising psycho-socially and economically empowered communities in Buikwe District with abilities to determine and strategically pursue their own destiny.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-involved">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Link>
              </Button>
              <Button variant="warm" size="lg" asChild>
                <Link to="/programs">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              Measurable change that makes a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive initiatives designed to create lasting positive change in vulnerable communities
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden shadow-medium hover:shadow-strong transition-smooth">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-foreground">
                        {program.beneficiaries} beneficiaries
                      </Badge>
                    </div>
                  </div>
                  <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-white">
                        {program.icon}
                      </div>
                      <CardTitle className="text-2xl">{program.title}</CardTitle>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {program.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-secondary" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="cta" className="self-start">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stories of Transformation
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from the people whose lives have been changed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white shadow-strong">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed opacity-95">
                Our mission is the psycho-social and economic empowerment of vulnerable persons in Buikwe District through access to interventions that are commensurate with their respective improved welfare.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-muted-foreground">
              Working together to create lasting change
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="p-6 text-center shadow-soft hover:shadow-medium transition-smooth">
                <div className="text-sm font-medium text-muted-foreground">{partner}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-hero text-white shadow-strong">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Us in Creating Change
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Your support can transform lives and empower entire communities. Together, we can build a better future for Buikwe District.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/get-involved">
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Today
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/get-involved">
                    <Users className="w-5 h-5 mr-2" />
                    Volunteer With Us
                  </Link>
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-center opacity-90">
                  <strong>We Are Just A Call Away!</strong> Call us now for consultancy services.
                </p>
                <p className="text-center mt-2">
                  <a href="tel:+256752978368" className="underline hover:no-underline">
                    +256 752 978 368
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;