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
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

const News = () => {
  const articles = [
    {
      title: "New Community Wellness Center Opens in Central Buikwe",
      excerpt:
        "Generation 2040 celebrates the opening of our latest facility dedicated to mental health support and community healing programs.",
      date: "March 15, 2024",
      author: "Sarah Nakimuli",
      category: "Facilities",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      featured: true,
    },
    {
      title: "500 Farmers Graduate from Sustainable Agriculture Program",
      excerpt:
        "Our food security initiative reaches a major milestone as local farmers complete advanced training in sustainable farming techniques.",
      date: "March 8, 2024",
      author: "James Mukasa",
      category: "Programs",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    },
    {
      title: "Mental Health Awareness Week Success",
      excerpt:
        "Community-wide initiatives during Mental Health Awareness Week reached over 2,000 residents across Buikwe District.",
      date: "February 28, 2024",
      author: "Grace Nakalema",
      category: "Community",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
    },
    {
      title: "Partnership with Local Schools Expands Youth Programs",
      excerpt:
        "New collaborations will bring psycho-social support and economic empowerment training directly to students.",
      date: "February 20, 2024",
      author: "Sarah Nakimuli",
      category: "Partnerships",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    },
    {
      title: "Microfinance Initiative Supports 100 New Businesses",
      excerpt:
        "Local entrepreneurs receive funding and mentorship to launch sustainable businesses in their communities.",
      date: "February 10, 2024",
      author: "James Mukasa",
      category: "Economic Empowerment",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    },
    {
      title: "Annual Impact Report 2023 Released",
      excerpt:
        "Comprehensive review of our achievements, challenges, and plans for continued community empowerment.",
      date: "January 25, 2024",
      author: "Generation 2040 Team",
      category: "Reports",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
  ];

  const categories = [
    "All",
    "Programs",
    "Community",
    "Partnerships",
    "Economic Empowerment",
    "Reports",
    "Facilities",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            News & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Stay informed about our latest programs, community achievements, and
            organizational developments.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {articles
        .filter((article) => article.featured)
        .map((article, index) => (
          <section key={index} className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="overflow-hidden shadow-strong">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <Badge variant="secondary">{article.category}</Badge>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {article.title}
                    </h2>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <Button variant="cta" className="self-start">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        ))}

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles
              .filter((article) => !article.featured)
              .map((article, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth"
                >
                  <div className="relative h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary">{article.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-medium text-primary hover:text-primary-dark"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter to receive the latest news and updates
            from Generation 2040.
          </p>
          <Card className="max-w-md mx-auto shadow-medium">
            <CardContent className="p-6">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="hero" className="w-full">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
