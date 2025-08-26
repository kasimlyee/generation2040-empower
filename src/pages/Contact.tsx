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
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            We're here to help. Reach out to us for consultancy services,
            partnerships, or any questions about our work.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <Label htmlFor="organization">
                      Organization (Optional)
                    </Label>
                    <Input
                      id="organization"
                      placeholder="Enter your organization name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">
                          Partnership Opportunity
                        </SelectItem>
                        <SelectItem value="volunteer">
                          Volunteer Interest
                        </SelectItem>
                        <SelectItem value="donation">
                          Donation Information
                        </SelectItem>
                        <SelectItem value="consultancy">
                          Consultancy Services
                        </SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button variant="hero" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll respond to your message within 24 hours during
                    business days.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're always ready to help and answer any questions you might
                  have. Whether you're interested in our programs, looking for
                  partnership opportunities, or need consultancy services, don't
                  hesitate to reach out.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Email Us
                        </h3>
                        <a
                          href="mailto:info@generation2040.org"
                          className="text-primary hover:underline"
                        >
                          info@generation2040.org
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Call Us
                        </h3>
                        <a
                          href="tel:+256752978368"
                          className="text-primary hover:underline"
                        >
                          +256 752 978 368
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Visit Us
                        </h3>
                        <p className="text-muted-foreground">
                          Buikwe District, Uganda
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-warm rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Office Hours
                        </h3>
                        <div className="text-muted-foreground space-y-1 text-sm">
                          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p>Saturday: 9:00 AM - 1:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <Card className="bg-gradient-to-r from-primary to-secondary text-white shadow-medium">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">
                    We Are Just A Call Away!
                  </h3>
                  <p className="mb-4 opacity-90">
                    Call us now for consultancy services and partnership
                    opportunities.
                  </p>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Find Us
          </h2>
          <Card className="shadow-medium overflow-hidden">
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Buikwe District, Uganda
                </h3>
                <p className="text-muted-foreground">
                  Interactive map will be integrated here showing our exact
                  location and service areas.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
