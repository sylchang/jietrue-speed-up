import Navigation from "@/components/Navigation";
import StickyActions from "@/components/StickyActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Stethoscope, 
  Heart, 
  Eye, 
  Sparkles, 
  Shield, 
  Clock,
  CheckCircle,
  Star,
  Scale,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      category: "肝膽腸胃科內科",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "bg-primary",
      services: [
        {
          name: "胃食道逆流治療",
          description: "專業診斷與治療胃酸逆流、胸悶、火燒心等症狀",
          features: ["藥物治療", "生活指導", "長期追蹤"]
        },
        {
          name: "胃/十二指腸潰瘍",
          description: "幽門螺旋桿菌檢測與根除治療",
          features: ["細菌培養", "藥物治療", "復發預防"]
        },
        {
          name: "無痛胃鏡檢查",
          description: "舒適安全的上消化道內視鏡檢查",
          features: ["靜脈麻醉", "高清影像", "即時診斷"],
          highlight: true
        },
        {
          name: "無痛大腸鏡",
          description: "完整的大腸癌篩檢與息肉切除",
          features: ["無痛麻醉", "息肉切除", "病理檢查"],
          highlight: true
        },
        {
          name: "腹部超音波",
          description: "肝膽胰脾腎等器官的超音波檢查",
          features: ["高解析度", "即時報告", "無輻射傷害"]
        },
        {
          name: "肝纖維化掃描",
          description: "非侵入性肝纖維化程度評估",
          features: ["快速檢查", "精準評估", "無痛無創"]
        }
      ]
    },
    {
      category: "減重與代謝管理",
      icon: <Scale className="w-8 h-8" />,
      color: "bg-accent",
      services: [
        {
          name: "GLP-1 減重療程",
          description: "司美格魯肽、善纖達等新一代減重藥物治療",
          features: ["專業評估", "個人化療程", "定期追蹤"],
          highlight: true
        },
        {
          name: "內視鏡減重",
          description: "胃內水球、內視鏡縮胃等微創減重手術",
          features: ["微創手術", "安全有效", "快速恢復"]
        },
        {
          name: "營養諮詢",
          description: "專業營養師提供個人化飲食計劃",
          features: ["營養評估", "飲食設計", "長期指導"]
        },
        {
          name: "代謝症候群管理",
          description: "高血壓、糖尿病、高血脂的綜合管理",
          features: ["血糖監測", "藥物調整", "生活指導"]
        }
      ]
    },
    {
      category: "皮膚科",
      icon: <Eye className="w-8 h-8" />,
      color: "bg-secondary",
      services: [
        {
          name: "青春痘治療",
          description: "各種痘痘類型的專業治療與護理指導",
          features: ["口服藥物", "外用治療", "護膚建議"]
        },
        {
          name: "濕疹皮膚炎",
          description: "異位性皮膚炎、接觸性皮膚炎診療",
          features: ["過敏原檢測", "藥物治療", "日常照護"]
        },
        {
          name: "落髮治療",
          description: "雄性禿、圓形禿等各種落髮問題治療",
          features: ["毛髮檢測", "藥物治療", "生髮療程"]
        },
        {
          name: "皮膚腫瘤檢查",
          description: "良性與惡性皮膚腫瘤的診斷與處理",
          features: ["皮膚鏡檢查", "切片檢查", "手術切除"]
        }
      ]
    },
    {
      category: "醫學美容",
      icon: <Sparkles className="w-8 h-8" />,
      color: "bg-gradient-accent",
      services: [
        {
          name: "電波拉提",
          description: "非侵入性緊膚拉提，改善鬆弛與細紋",
          features: ["Thermage技術", "即時緊緻", "持續改善"]
        },
        {
          name: "音波緊緻",
          description: "深層SMAS筋膜層拉提，重塑輪廓",
          features: ["Ulthera音波", "深層拉提", "自然效果"]
        },
        {
          name: "雷射皮秒",
          description: "斑點、細紋、毛孔粗大的雷射治療",
          features: ["皮秒技術", "深淺層治療", "恢復快速"]
        },
        {
          name: "微整形注射",
          description: "玻尿酸、肉毒桿菌等微整形療程",
          features: ["原廠藥劑", "精準注射", "自然美感"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card">
      <Navigation />
      <StickyActions />
      {/* Header */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">診療項目</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            提供專業的肝膽腸胃科內科、減重與代謝管理、皮膚科與醫學美容服務
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((category, categoryIndex) => (
              <div key={category.category} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.color} text-white mb-4`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-medical-text mb-2">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Card 
                      key={service.name} 
                      className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${
                        service.highlight ? 'ring-2 ring-primary/20 shadow-medical' : ''
                      }`}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg text-medical-text group-hover:text-primary transition-colors">
                            {service.name}
                          </CardTitle>
                          {service.highlight && (
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              <Star className="w-3 h-3 mr-1" />
                              推薦
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 mr-3" />
                <h3 className="text-2xl lg:text-3xl font-bold">預約您的健康檢查</h3>
              </div>
              <p className="text-lg text-primary-foreground/90 mb-8">
                我們提供便利的線上預約服務，專業的醫療團隊將為您提供最優質的診療服務
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white/90 text-primary hover:bg-white"
                  asChild
                >
                  <Link to="/contact">立即預約</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 text-primary-foreground hover:bg-white/10"
                  asChild
                >
                  <Link to="/doctors">認識醫師</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;