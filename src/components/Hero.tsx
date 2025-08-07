import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative text-primary-foreground overflow-hidden w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/9]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/Banner-0.jpg')` }}
      ></div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            傑初診所
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90">
            專業腸胃科與皮膚科診療，守護您的健康
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-[hsl(var(--btn))] text-destructive-foreground hover:bg-[hsl(var(--btn-hover))]"
              asChild
            >
              <Link to="https://line.me/R/ti/p/@928ibhsy">LINE預約</Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-[hsl(var(--btn))] text-destructive-foreground hover:bg-[hsl(var(--btn-hover))]"
              asChild
            >
              <Link to="https://pinmed.co/clinic/18ott42a">網頁預約</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-primary-foreground hover:bg-white/10"
              asChild
            >
              <Link to="/services">了解診療項目</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;