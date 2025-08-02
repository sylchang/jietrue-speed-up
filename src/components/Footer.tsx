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
              <img
                src="/logo-removebg.png"
                alt="傑初診所 Logo"
                className="h-10 w-auto"
              />
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
                href="tel:02-82316869"
                className="flex items-center space-x-2 text-sm hover:opacity-80 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                <span>02-8231-6869</span>
              </a>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>新北市中和區中安街102號</span>
              </div>
              <a
                href="https://line.me/R/ti/p/@928ibhsy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:opacity-80 transition-opacity"
              >
                {/* 這是新的 LINE 圖標，它的顏色會繼承父元素的文字顏色 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M21 12.032c0 4.965-4.48 8.968-10.001 8.968-1.57 0-3.048-.372-4.382-1.013L2 22l1.096-4.505C1.492 15.65 0 13.914 0 12.032 0 7.067 4.48 3.064 10.001 3.064c5.521 0 10.001 4.003 10.999 8.968zm-5.698-1.928h-1.39v-1.353c0-.398-.316-.714-.714-.714-.399 0-.714.316-.714.714v1.353h-1.391c-.398 0-.714.315-.714.714 0 .398.316.714.714.714h1.391v1.354c0 .397.316.713.714.713.398 0 .714-.316.714-.713v-1.354h1.39c.398 0 .714-.316.714-.714 0-.399-.316-.714-.714-.714z" />
                </svg>
                <span>@928ibhsy</span>
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
              <Link to="/news" className="hover:opacity-80 transition-opacity">
                最新消息
              </Link>
              <Link to="/hours" className="hover:opacity-80 transition-opacity">
                門診時間
              </Link>
              <Link to="/blog" className="hover:opacity-80 transition-opacity">
                衛教資訊
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-80">
            © 2025 傑初診所 JIETRUE CLINIC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;