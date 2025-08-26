import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link
                to="/"
                className="flex items-center space-x-2 transition-smooth hover:scale-105"
              >
                <img src={Logo} className="w-10 h-10 text-white" />

                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">
                    Generation 2040
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Buikwe District, Uganda
                  </span>
                </div>
              </Link>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              We envision realising psycho-socially and economically empowered
              communities in Buikwe District with abilities to determine and
              strategically pursue their own destiny.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-background/80 hover:text-background transition-smooth"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-sm text-background/80 hover:text-background transition-smooth"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved"
                  className="text-sm text-background/80 hover:text-background transition-smooth"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  to="/impact"
                  className="text-sm text-background/80 hover:text-background transition-smooth"
                >
                  Impact Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Focus Areas</h4>
            <ul className="space-y-2">
              <li className="text-sm text-background/80">
                Psycho-social Empowerment
              </li>
              <li className="text-sm text-background/80">
                Economic Empowerment
              </li>
              <li className="text-sm text-background/80">
                Mindset Change Programs
              </li>
              <li className="text-sm text-background/80">
                Food Security Initiatives
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:info@generation2040.org"
                  className="text-sm text-background/80 hover:text-background transition-smooth"
                >
                  info@generation2040.org
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+256752978368"
                  className="text-sm text-background/80 hover:text-background transition-smooth"
                >
                  +256 752 978 368 <br /> +256 703 439214 <br /> +256 772 453613
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-background/80">
                  P.O Box 21, Lugazi, <br /> Buikwe District, Uganda
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 pt-2">
              <a
                href="#"
                className="text-background/80 hover:text-background transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-background transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-background transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-background transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-background/70">
              © {currentYear} Generation 2040. All rights reserved.
            </p>
            <p className="text-sm text-background/70">
              We Are Just A Call Away! Call us now for consultancy services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
