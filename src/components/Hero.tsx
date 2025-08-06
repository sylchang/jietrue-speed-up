import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/Banner-0.jpg')` }}
      ></div>
      
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                傑初診所
                <span className="block text-2xl lg:text-3xl font-normal text-primary-foreground/90 mt-2">
                  中永和腸胃科與皮膚科專科診所
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
                提供專業的無痛胃鏡檢查、肝膽超音波診斷、皮膚科治療與醫美療程，
                守護您和家人的健康，讓專業成為您的安心選擇。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white/90 text-primary hover:bg-white transition-all duration-300 shadow-elegant"
                asChild
              >
                <Link to="/contact">線上預約掛號</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-primary-foreground hover:bg-white/10 transition-all duration-300"
                asChild
              >
                <Link to="/services">了解診療項目</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Heart className="w-5 h-5" />
                <span className="text-sm">專業醫療</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Shield className="w-5 h-5" />
                <span className="text-sm">安全無痛</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Award className="w-5 h-5" />
                <span className="text-sm">資深經驗</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Users className="w-5 h-5" />
                <span className="text-sm">在地信賴</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;