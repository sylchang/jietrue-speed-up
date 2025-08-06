import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Shield, 
  Award, 
  Users,
  Stethoscope,
  Eye,
  Clock,
  MapPin,
  Phone,
  Star,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "肝膽腸胃科內科",
      description: "專業的消化系統疾病診療，提供無痛胃鏡、AI智慧內視鏡檢查與腹部超音波診斷",
      services: ["無痛胃鏡", "AI智慧內視鏡", "腹部超音波", "幽門螺旋桿菌檢測"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "減重與代謝管理", 
      description: "提供GLP-1瘦瘦針、內視鏡減重、營養諮詢等綜合減重療程與代謝症候群管理",
      services: ["GLP-1減重療程", "內視鏡減重", "營養諮詢", "代謝症候群管理"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "皮膚科",
      description: "資深皮膚科醫師提供青春痘、濕疹、落髮等皮膚疾病的專業診療",
      services: ["青春痘治療", "濕疹皮膚炎", "落髮治療", "皮膚腫瘤檢查"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "醫學美容",
      description: "專業的醫美療程，包含電波拉提、音波緊緻、雷射皮秒等非侵入性美容治療",
      services: ["電波拉提", "音波緊緻", "雷射皮秒", "微整形注射"]
    }
  ];

  const doctors = [
    {
      name: "柯智傑醫師",
      title: "院長 | 腸胃科專科醫師",
      specialties: ["消化系專科", "內科專科", "超音波專科"],
      experience: "台北榮總胃腸肝膽科主治醫師"
    },
    {
      name: "柯振得醫師", 
      title: "皮膚科專科醫師",
      specialties: ["皮膚專科", "醫學美容", "30年經驗"],
      experience: "永信皮膚科診所院長",
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        
        {/* Clinic Introduction */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-medical-text mb-4">
              傑初診所
              <span className="block text-2xl lg:text-3xl font-normal text-muted-foreground mt-2">
                中永和腸胃科與皮膚科專科診所
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              提供專業的無痛胃鏡檢查、肝膽超音波診斷、皮膚科治療與醫美療程，
              守護您和家人的健康，讓專業成為您的安心選擇。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="default"
                asChild
              >
                <Link to="/contact">線上預約掛號</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <Link to="/services">了解診療項目</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-12 max-w-2xl mx-auto">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm">專業醫療</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">安全無痛</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm">資深經驗</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm">在地信賴</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-medical-text mb-4">
                專業醫療服務
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                提供全方位的醫療服務，從預防保健到專科治療，守護您的健康
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title} 
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-medical-text mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Services Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-medical-text mb-4">
                本院特設
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                專業設備與技術，提供更優質的醫療服務體驗
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-medical-text mb-4">無痛胃腸鏡檢查</h3>
                <div className="space-y-3 text-medical-text">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium">舒適安全的內視鏡檢查</div>
                      <div className="text-sm text-muted-foreground">靜脈麻醉技術，無痛無負擔</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-medical-text mb-4">高階超音波檢查</h3>
                <div className="space-y-3 text-medical-text">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium">肝纖維化掃描、腹部超音波</div>
                      <div className="text-sm text-muted-foreground">精準診斷，即時檢測</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-medical-text mb-4">專業醫美設備</h3>
                <div className="space-y-3 text-medical-text">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium">雷射皮秒、電音波拉提</div>
                      <div className="text-sm text-muted-foreground">先進設備，專業療程</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-medical-text mb-4">
                專業醫師團隊
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                經驗豐富的專科醫師，提供專業、安心的醫療服務
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {doctors.map((doctor, index) => (
                <Card 
                  key={doctor.name} 
                  className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                    doctor.highlight ? 'ring-2 ring-primary/20 shadow-medical' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground">
                        <Users className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-xl font-bold text-medical-text">{doctor.name}</h3>
                          {doctor.highlight && (
                            <Badge className="bg-primary text-primary-foreground">
                              <Star className="w-3 h-3 mr-1" />
                              特聘
                            </Badge>
                          )}
                        </div>
                        <p className="text-primary font-medium">{doctor.title}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {doctor.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm">{doctor.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <Link to="/doctors">了解更多醫師資訊</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">預約您的健康檢查</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              專業的醫療團隊與先進的設備，為您提供最優質的醫療服務
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-semibold">預約專線</div>
                  <div className="text-primary-foreground/90">02-8231-6869</div>
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
                <Link to="/services">查看診療項目</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
};

export default Index;
