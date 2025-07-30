import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Clinic Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">傑初診所</span>
                <span className="text-xs opacity-80">JIETRUE CLINIC</span>
              </div>
            </Link>
            <p className="text-sm opacity-90">
              提供專業的醫療服務，致力於您的健康與美麗
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">聯絡資訊</h3>
            <div className="space-y-2">
              <a
                href="tel:02-89212345"
                className="flex items-center space-x-2 text-sm hover:opacity-80 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                <span>02-8921-2345</span>
              </a>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>台北市中山區復興北路</span>
              </div>
              <a
                href="mailto:info@jietrueclinic.com"
                className="flex items-center space-x-2 text-sm hover:opacity-80 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span>info@jietrueclinic.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">快速連結</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/services" className="hover:opacity-80 transition-opacity">
                診療項目
              </Link>
              <Link to="/doctors" className="hover:opacity-80 transition-opacity">
                醫師陣容
              </Link>
              <Link to="/hours" className="hover:opacity-80 transition-opacity">
                門診時間
              </Link>
              <Link to="/contact" className="hover:opacity-80 transition-opacity">
                預約掛號
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-80">
            © 2024 傑初診所 JIETRUE CLINIC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;