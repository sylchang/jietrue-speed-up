import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Shield, 
  Award, 
  Users,
  Stethoscope,
  Eye,
  Target,
  Clock,
  MapPin,
  Phone,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "以人為本",
      description: "始終將病患的健康與福祉放在第一位，提供溫暖貼心的醫療服務"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "專業安全",
      description: "嚴格遵循醫療標準，使用先進設備，確保每一項檢查與治療的安全性"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "品質卓越",
      description: "持續追求醫療品質的提升，為患者提供最優質的診療體驗"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "精準診療",
      description: "運用 AI 智慧內視鏡等先進技術，提供精準的診斷與個人化治療"
    }
  ];

  const equipment = [
    {
      name: "Fujifilm V8000 內視鏡",
      description: "高解析度內視鏡系統，提供清晰影像協助精準診斷"
    },
    {
      name: "Fujifilm CAD EYE",
      description: "AI 智慧輔助內視鏡，精準辨識早期病變"
    },
    {
      name: "Fujifilm Arietta 65",
      description: "彩色超音波系統，檢查肝膽胰脾腎臟與甲狀腺"
    },
    {
      name: "舒眠麻醉設備",
      description: "提供安全舒適的無痛檢查體驗"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">關於傑初</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            健康．專業．安心
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-medical-text mb-6">
                專業醫療，守護健康
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                傑初診所位於中和與永和交界，服務中永和居民多年。我們致力於提供全方位的醫療服務，從預防保健到專科治療，以專業的醫療團隊與先進的設備，守護每一位患者的健康。
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                診所主打無痛腸胃鏡檢查、肝膽超音波診斷、內視鏡減重與醫學美容等特色服務。由前北榮主治醫師領軍，結合內科、皮膚專科與慢性病管理經驗，提供安全、舒適與個人化的診療品質。
              </p>
              <Button size="lg" asChild>
                <Link to="/services">了解診療項目</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://jietrue.com/wp-content/uploads/2025/04/%E3%80%90%E5%82%91%E5%88%9D%E8%A8%BA%E6%89%80%E3%80%91%E7%B2%89%E5%B0%88Banner-%E5%B0%8F%E5%9C%96-scaled-e1743944849218-1024x517.jpg" 
                alt="傑初診所" 
                className="rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-medical-text mb-4">
              我們的理念
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              以專業、安心、貼心的服務精神，為每一位患者提供最優質的醫療照護
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-medical-text mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-medical-text mb-4">
              先進醫療設備
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              引進國際先進醫療設備，提供精準診斷與舒適的治療體驗
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <Card 
                key={item.name} 
                className="group hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-medical-text mb-2 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">聯絡傑初診所</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">預約專線</div>
                <div className="text-primary-foreground/90">02-8921-2345</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">門診時間</div>
                <div className="text-primary-foreground/90">週一至週六</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">診所位置</div>
                <div className="text-primary-foreground/90">新北市中和區</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white/90 text-primary hover:bg-white"
              asChild
            >
              <Link to="/contact">線上預約掛號</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-primary-foreground hover:bg-white/10"
              asChild
            >
              <Link to="/hours">查看門診時間</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;