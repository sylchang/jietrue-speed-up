import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "首頁" },
    { href: "/news", label: "最新消息" },
    { href: "/services", label: "診療項目" },
    { href: "/about", label: "關於傑初" },
    { href: "/doctors", label: "醫師陣容" },
    { href: "/hours", label: "門診時間" },
    { href: "/blog", label: "衛教資訊" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-white backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card-medical">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
          <img 
    src="/logo-removebg.png" 
    alt="傑初診所 Logo" 
    className="h-10 w-auto" // 調整圖片大小
  />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-medical-text">傑初診所</span>
              <span className="text-xs text-muted-foreground">JIETRUE CLINIC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`transition-colors hover:text-muted-foreground ${
                  isActive(item.href)
                    ? "text-muted-foreground font-medium border-b-2 border-primary pb-1"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-border">
              <a
                href="tel:02-82316869"
                className="flex items-center space-x-1 text-foreground hover:text-muted-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">02-8231-6869</span>
              </a>
              <Button variant="outline" size="sm" asChild>
                <Link to="https://line.me/R/ti/p/@928ibhsy?oat_content=url&ts=03250025">預約掛號</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base transition-colors ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-border">
              <a
                href="tel:02-82316869"
                className="flex items-center space-x-2 px-3 py-2 text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                <span>02-8231-6869</span>
              </a>
              <Button variant="outline" size="sm" className="mx-3 mt-2" asChild>
                <Link to="https://line.me/R/ti/p/@928ibhsy?oat_content=url&ts=03250025">預約掛號</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;