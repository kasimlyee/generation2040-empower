import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Calendar, MapPin, Clock, Users, Ticket } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Community Mental Health Workshop",
      description:
        "Interactive workshop on stress management and emotional well-being for community members and families.",
      date: "April 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Generation 2040 Community Center",
      category: "Workshop",
      capacity: "50 participants",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      featured: true,
    },
    {
      title: "Small Business Expo 2024",
      description:
        "Showcase of local businesses supported by our economic empowerment programs, with networking opportunities.",
      date: "April 22, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Buikwe District Center",
      category: "Expo",
      capacity: "200+ attendees",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    },
    {
      title: "Sustainable Farming Training",
      description:
        "Hands-on training session covering modern agricultural techniques and food security practices.",
      date: "May 5, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "Agricultural Demo Site",
      category: "Training",
      capacity: "30 farmers",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    },
    {
      title: "Youth Leadership Summit",
      description:
        "Empowering young people with leadership skills and entrepreneurship knowledge for community development.",
      date: "May 12, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Local Secondary School",
      category: "Summit",
      capacity: "100 youth",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    },
  ];

  const pastEvents = [
    {
      title: "Annual Fundraising Gala 2023",
      description:
        "Successful fundraising event that raised over UGX 50 million for our programs.",
      date: "December 10, 2023",
      location: "Kampala Conference Center",
      attendees: "150+",
      impact: "Funded 3 new community programs",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
    },
    {
      title: "Mental Health Awareness Week",
      description:
        "Week-long community outreach program promoting mental health awareness and support services.",
      date: "February 26 - March 3, 2024",
      location: "Multiple Community Centers",
      attendees: "2,000+",
      impact: "200+ individuals received counseling",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
    },
    {
      title: "Women's Economic Empowerment Conference",
      description:
        "Conference focused on supporting women entrepreneurs and business leaders in Buikwe District.",
      date: "January 20, 2024",
      location: "Women's Community Hall",
      attendees: "80+",
      impact: "30 new women-led businesses launched",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Join us at our upcoming events and be part of the positive change in
            Buikwe District communities.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      {upcomingEvents
        .filter((event) => event.featured)
        .map((event, index) => (
          <section key={index} className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="overflow-hidden shadow-strong">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured Event
                    </Badge>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge variant="secondary">{event.category}</Badge>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {event.title}
                    </h2>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>

                    <Button variant="hero" size="lg" className="self-start">
                      <Ticket className="w-4 h-4 mr-2" />
                      Register Now
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        ))}

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents
              .filter((event) => !event.featured)
              .map((event, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth"
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary">{event.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                      {event.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <Button variant="cta" size="sm" className="w-full">
                      Register
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-muted text-muted-foreground">
                      Completed
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {event.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-primary">
                      <Users className="w-3 h-3" />
                      <span>{event.attendees} attendees</span>
                    </div>
                    <div className="text-xs font-medium text-secondary">
                      Impact: {event.impact}
                    </div>
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
            Want to Host an Event?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Partner with us to organize community events that create positive
            impact in Buikwe District.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Partner With Us
            </Button>
            <Button variant="warm" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
