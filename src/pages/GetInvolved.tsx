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
import {
  Heart,
  Users,
  HandHeart,
  Gift,
  Building,
  UserCheck,
} from "lucide-react";

const GetInvolved = () => {
  const donationAmounts = [
    {
      amount: 50000,
      description: "Provides mental health support for 5 individuals",
    },
    { amount: 100000, description: "Funds a small business starter kit" },
    { amount: 250000, description: "Establishes a community garden" },
    { amount: 500000, description: "Sponsors skills training for 20 people" },
  ];

  const volunteerOpportunities = [
    {
      title: "Community Counselor",
      description: "Provide psycho-social support and counseling services",
      commitment: "4-6 hours/week",
      skills: "Psychology, Social Work, or related field",
    },
    {
      title: "Business Mentor",
      description: "Guide entrepreneurs in business development and planning",
      commitment: "2-4 hours/week",
      skills: "Business experience, Marketing, Finance",
    },
    {
      title: "Agricultural Trainer",
      description: "Teach sustainable farming techniques and food security",
      commitment: "8-10 hours/week",
      skills: "Agricultural knowledge, Training experience",
    },
    {
      title: "Program Coordinator",
      description: "Help organize and coordinate community programs",
      commitment: "6-8 hours/week",
      skills: "Project management, Communication skills",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Get Involved
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Join us in empowering communities and creating lasting positive
            change in Buikwe District.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Ways to Make a Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Donate",
                description:
                  "Support our programs with financial contributions",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Volunteer",
                description: "Share your skills and time with our community",
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Partner",
                description: "Collaborate with us as an organization",
              },
              {
                icon: <HandHeart className="w-8 h-8" />,
                title: "Advocate",
                description: "Spread awareness about our mission",
              },
            ].map((way, index) => (
              <Card
                key={index}
                className="text-center shadow-soft hover:shadow-medium transition-smooth"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center text-white">
                    {way.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{way.title}</h3>
                  <p className="text-muted-foreground">{way.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Make a Donation
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Your donation directly impacts the lives of vulnerable
                individuals and families in Buikwe District. Every contribution,
                no matter the size, helps us expand our reach and improve our
                programs.
              </p>

              <div className="space-y-4 mb-8">
                {donationAmounts.map((donation, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-background rounded-lg shadow-soft"
                  >
                    <div>
                      <span className="text-lg font-semibold text-primary">
                        UGX {donation.amount.toLocaleString()}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {donation.description}
                      </p>
                    </div>
                    <Button variant="cta" size="sm">
                      Select
                    </Button>
                  </div>
                ))}
              </div>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Gift className="w-5 h-5" />
                    <span>Custom Amount</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="amount">Amount (UGX)</Label>
                    <Input id="amount" placeholder="Enter custom amount" />
                  </div>
                  <div>
                    <Label htmlFor="frequency">Frequency</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="once">One-time</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant="hero" className="w-full">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Your Impact
              </h3>
              <div className="space-y-6">
                {[
                  {
                    amount: "UGX 25,000",
                    impact:
                      "Provides a month of nutritional support for one child",
                  },
                  {
                    amount: "UGX 75,000",
                    impact:
                      "Funds three counseling sessions for trauma survivors",
                  },
                  {
                    amount: "UGX 150,000",
                    impact:
                      "Supports one person through complete business training",
                  },
                  {
                    amount: "UGX 300,000",
                    impact: "Establishes seeds and tools for a family garden",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-background rounded-lg shadow-soft"
                  >
                    <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <span className="font-semibold text-primary">
                        {item.amount}
                      </span>
                      <p className="text-muted-foreground mt-1">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Volunteer With Us
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Share your skills, experience, and passion with our community.
                Whether you can commit a few hours a week or a few days a month,
                your contribution makes a difference.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {volunteerOpportunities.map((opportunity, index) => (
                  <Card
                    key={index}
                    className="shadow-soft hover:shadow-medium transition-smooth"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center space-x-2">
                        <UserCheck className="w-5 h-5 text-primary" />
                        <span>{opportunity.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {opportunity.description}
                      </p>
                      <div className="space-y-2 text-xs">
                        <div>
                          <strong>Commitment:</strong> {opportunity.commitment}
                        </div>
                        <div>
                          <strong>Skills:</strong> {opportunity.skills}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Volunteer Application</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Where are you based?" />
                  </div>
                  <div>
                    <Label htmlFor="interests">Areas of Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="counseling">
                          Psycho-social Support
                        </SelectItem>
                        <SelectItem value="business">
                          Economic Empowerment
                        </SelectItem>
                        <SelectItem value="agriculture">
                          Food Security
                        </SelectItem>
                        <SelectItem value="coordination">
                          Program Coordination
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="skills">Skills & Experience</Label>
                    <Textarea
                      id="skills"
                      placeholder="Tell us about your relevant skills and experience"
                    />
                  </div>
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Textarea
                      id="availability"
                      placeholder="When are you available to volunteer?"
                    />
                  </div>
                  <Button variant="hero" className="w-full">
                    Submit Application
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;
