import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Play, Download, Share, Eye } from "lucide-react";

const Gallery = () => {
  const categories = ["All", "Programs", "Events", "Community", "Team", "Projects"];

  const photos = [
    {
      id: 1,
      title: "Community Garden Training",
      category: "Programs",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      description: "Farmers learning sustainable agriculture techniques in our food security program."
    },
    {
      id: 2,
      title: "Mental Health Workshop",
      category: "Programs",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      description: "Community members participating in group therapy and support sessions."
    },
    {
      id: 3,
      title: "Annual Fundraising Gala",
      category: "Events",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      description: "Our successful 2023 fundraising event with community leaders and supporters."
    },
    {
      id: 4,
      title: "Youth Leadership Summit",
      category: "Events",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      description: "Young leaders from across Buikwe District gathered for skills development."
    },
    {
      id: 5,
      title: "Women's Economic Empowerment",
      category: "Programs",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
      description: "Women entrepreneurs showcase their businesses and share success stories."
    },
    {
      id: 6,
      title: "Community Outreach",
      category: "Community",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
      description: "Our team engaging with community members during outreach programs."
    },
    {
      id: 7,
      title: "Business Training Session",
      category: "Programs",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description: "Entrepreneurs receiving business development and financial literacy training."
    },
    {
      id: 8,
      title: "Team Building Activity",
      category: "Team",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      description: "Generation 2040 staff and volunteers during our annual team retreat."
    },
    {
      id: 9,
      title: "Community Center Opening",
      category: "Projects",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
      description: "Grand opening ceremony of our new community wellness center."
    },
    {
      id: 10,
      title: "Children's Program",
      category: "Community",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
      description: "Children participating in educational and recreational activities."
    },
    {
      id: 11,
      title: "Agricultural Demo Plot",
      category: "Projects",
      image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=800&h=600&fit=crop",
      description: "Our demonstration agricultural site showcasing sustainable farming techniques."
    },
    {
      id: 12,
      title: "Partnership Meeting",
      category: "Team",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop",
      description: "Strategic planning meeting with local government and partner organizations."
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Generation 2040 Impact Story",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop",
      duration: "3:45",
      description: "Documentary showcasing the transformation in Buikwe District communities."
    },
    {
      id: 2,
      title: "Community Testimonials",
      thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=450&fit=crop",
      duration: "5:20",
      description: "Beneficiaries share their stories of empowerment and growth."
    },
    {
      id: 3,
      title: "Sustainable Farming Training",
      thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=450&fit=crop",
      duration: "7:15",
      description: "Comprehensive guide to our agricultural empowerment programs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Explore visual stories of transformation, community engagement, and positive impact across Buikwe District.
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
                <Camera className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Photos Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth group cursor-pointer">
                <div className="relative">
                  <img 
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <Eye className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">View Image</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      {photo.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">{photo.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{photo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Video Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth group cursor-pointer">
                <div className="relative">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <Badge className="bg-black/70 text-white text-xs">
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">{video.title}</h3>
                  <p className="text-xs text-muted-foreground">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Photos Captured</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Events Documented</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground">Video Stories</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">People Featured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Share Your Story
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Have photos or videos from our programs? We'd love to feature your perspective in our gallery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Share className="w-4 h-4 mr-2" />
              Share Content
            </Button>
            <Button variant="warm" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download Media Kit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;