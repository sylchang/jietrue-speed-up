import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  Stethoscope, // 導入新的圖示
  Scale, // 導入新的圖示
  HeartPulse, // 導入新的圖示
  Sparkles // 導入新的圖示
} from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

// 定義一個通用的 Icon 元件，以保持樣式一致
const ServiceIcon = ({ src, alt, size = "w-28 h-28" }) => (
  <img
    src={src}
    alt={alt}
    className={`${size}`}
  />
);

const Services = () => {
  const services = [
    {
      category: "肝膽腸胃科內科",
      // 使用 lucide-react 的 Stethoscope 圖示
      icon: <Stethoscope className="w-8 h-8" />,
      color: "bg-primary",
      services: [
        {
          name: "腸胃鏡檢查",
          description: "使用Fujifilm V8000內視鏡，搭配無痛/舒眠麻醉進行無痛胃鏡與大腸鏡，快速、安全、舒適。",
          features: ["Fujifilm V8000內視鏡", "舒眠麻醉", "無痛無感"],
          // 對應: painless-endoscopyicon.png
          icon: <ServiceIcon src="/icon/painless-endoscopy-icon.png" alt="Painless Endoscopy" />,
          learnMoreLink: "/painless-endoscopy" 
        },
        {
          name: "AI 智慧內視鏡",
          description: "導入Fujifilm CAD EYE人工智慧輔助內視鏡，精準辨識早期病變，提高檢查準確率。",
          features: ["AI智慧輔助", "早期病變辨識", "提高準確率"],
          highlight: true,
          // 對應: AI 智慧內視鏡icon.png
          icon: <ServiceIcon src="/icon/ai-endoscopy-icon.png" alt="AI Endoscopy" />,
          learnMoreLink: "/ai-endoscopy"
        },
        {
          name: "高解析腹部超音波檢查",
          description: "使用 Fujifilm Arietta 65 彩色超音波，精準偵測肝膽胰脾腎臟與甲狀腺病灶。",
          features: ["Fujifilm Arietta 65", "精準偵測病灶", "追蹤脂肪肝、膽結石等"],
          // 對應: 肝膽超音波icon.png
          icon: <ServiceIcon src="/icon/abdominal-ultrasound-icon.png" alt="Abdominal Ultrasound" />
        },
        {
          name: "腸胃症狀診療",
          description: "診療腸胃炎、幽門螺旋桿菌檢測與根除治療、胃/十二指腸潰瘍、腹痛、腹脹、腹瀉、便祕、消化性潰瘍等常見腸胃問題。",
          features: ["腹痛、腹瀉、便秘診療", "消化性潰瘍治療", "幽門螺旋桿菌檢測"],
          // 對應: 胃腸功能診療icon.png
          icon: <ServiceIcon src="/icon/gastroenterology-icon.png" alt="Gastroenterology" />
        },
        {
          name: "胃食道逆流與巴瑞特氏食道專治",
          description: "專治胃酸逆流、巴瑞特氏食道診斷與追蹤，並提供抗逆流黏膜燒灼術（ARMS）治療。",
          features: ["藥物治療", "生活指導", "巴瑞特氏食道診斷", "ARMS治療"],
          highlight: true,
          // 對應: 胃食道逆icon.png
          icon: <ServiceIcon src="/icon/gerd-icon.png" alt="Acid Reflux Treatment" />
        },
        {
          name: "腸躁症整合治療",
          description: "診療腹脹、腸胃不適，提供腸道菌叢分析與客製化益生菌植入療程，全方位整合治療。",
          features: ["腸道菌叢分析", "客製化益生菌", "全方位整合治療"],
          // 對應: 腸躁症icon.png
          icon: <ServiceIcon src="/icon/ibs-treatment-icon.png" alt="IBS Treatment" />
        },
        {
          name: "B、C型肝炎治療",
          description: "定期檢查肝功能與病毒量，預防肝硬化、肝癌，提供完整B、C型肝炎管理。",
          features: ["肝功能檢查", "病毒量監測", "肝硬化預防", "完整疾病管理"],
          // 對應: B型肝炎C型肝炎治療icon.png
          icon: <ServiceIcon src="/icon/hepatitis-b-c-treatment-icon.png" alt="Hepatitis B & C" />
        },
        {
          name: "慢性病管理",
          description: "提供高血壓、高血脂、糖尿病、痛風與甲狀腺功能等慢性病專業管理。",
          features: ["藥物調整", "生活指導", "定期追蹤"],
          // 對應: 慢性病管理icon.png
          icon: <ServiceIcon src="/icon/chronic-disease-management-icon.png" alt="Chronic Disease Management" />
        },
        {
          name: "成人健檢與疫苗",
          description: "提供血液檢查、腸胃功能、疫苗注射與健康篩檢等服務。",
          features: ["健康篩檢", "疫苗注射", "血液檢查", "腸胃功能評估"],
          // 對應: 成人健檢與疫苗icon.png
          icon: <ServiceIcon src="/icon/health-check-vaccine-icon.png" alt="Health Check & Vaccine" />
        },
        {
          name: "肝纖維化掃描",
          description: "非侵入性肝纖維化程度評估",
          features: ["快速檢查", "精準評估", "無痛無創"],
          // 對應: 肝膽超音波icon.png (重複使用)
          icon: <ServiceIcon src="/icon/abdominal-ultrasound-icon.png" alt="Liver Fibrosis Scan" />
        }
      ]
    },
    {
      category: "減重與代謝管理",
      // 使用 lucide-react 的 Scale 圖示
      icon: <Scale className="w-8 h-8" />,
      color: "bg-accent",
      services: [
        {
          name: "減重藥物、針劑療程",
          description: "衛服部核准減重藥 、瘦瘦針、司美格魯肽、善纖達、猛健樂GLP-1等減重藥物治療，搭配專業諮詢。",
          features: ["專業評估", "個人化療程", "定期追蹤", "InBody分析", "猛健樂"],
          highlight: true,
          // 對應: 減重與代謝管理icon.png
          icon: <ServiceIcon src="/icon/glp-1-weight-loss-program-icon.png" alt="GLP-1 Weight Loss" />
        },
        {
          name: "內視鏡減重",
          description: "微創胃鏡與胃鏡減重方案，胃鏡縮胃與肉毒減重，安全有效恢復快速。",
          features: ["微創手術", "安全有效", "快速恢復"],
          // 對應: 減重與代謝管理icon.png
          icon: <ServiceIcon src="/icon/endoscopic-weight-loss-icon.png" alt="Endoscopic Weight Loss" />
        },
        {
          name: "營養諮詢",
          description: "專業營養師提供個人化飲食計劃，輔以 InBody 分析與營養建議，從根本改善飲食習慣。",
          features: ["營養評估", "飲食設計", "長期指導"],
          // 對應: 減重與代謝管理icon.png
          icon: <ServiceIcon src="/icon/nutritional-counseling-icon.png" alt="Nutrition Counseling" />
        },
        {
          name: "代謝症候群管理",
          description: "高血壓、糖尿病、高血脂的綜合管理，降低心血管疾病風險。",
          features: ["血糖監測", "藥物調整", "生活指導"],
          // 對應: 減重與代謝管理icon.png
          icon: <ServiceIcon src="/icon/metabolic-syndrome-management-icon.png" alt="Metabolic Syndrome" />
        }
      ]
    },
    {
      category: "皮膚科",
      // 使用 lucide-react 的 HeartPulse 圖示
      icon: <HeartPulse className="w-8 h-8" />,
      color: "bg-secondary",
      services: [
        {
          name: "青春痘治療",
          description: "各種痘痘類型的專業治療與護理指導，有效改善膚況。",
          features: ["口服藥物", "外用治療", "護膚建議"],
          // 對應: 皮膚科診療icon.png
          icon: <ServiceIcon src="/icon/acne-icon.png" alt="Acne Treatment" />
        },
        {
          name: "濕疹皮膚炎",
          description: "異位性皮膚炎、接觸性皮膚炎診療，從根源解決皮膚問題。",
          features: ["過敏原檢測", "藥物治療", "日常照護"],
          // 對應: 皮膚科診療icon.png
          icon: <ServiceIcon src="/icon/eczema-and-dermatitis-icon.png" alt="Eczema Treatment" />
        },
        {
          name: "落髮治療",
          description: "雄性禿、圓形禿等各種落髮問題治療，幫助您找回自信。",
          features: ["毛髮檢測", "藥物治療", "生髮療程"],
          // 對應: 皮膚科診療icon.png
          icon: <ServiceIcon src="/icon/hair-loss-treatment-icon.png" alt="Hair Loss Treatment" />
        },
        {
          name: "皮膚腫瘤檢查",
          description: "良性與惡性皮膚腫瘤的診斷與處理，保障您的皮膚健康。",
          features: ["皮膚鏡檢查", "切片檢查", "手術切除"],
          // 對應: 皮膚科診療icon.png
          icon: <ServiceIcon src="/icon/skin-tumor-examination-icon.png" alt="Skin Tumor Check" />
        }
      ]
    },
    {
      category: "醫學美容",
      // 使用 lucide-react 的 Sparkles 圖示
      icon: <Sparkles className="w-8 h-8" />,
      color: "bg-gradient-accent",
      services: [
        {
          name: "電波拉提",
          description: "非侵入性緊膚拉提，改善鬆弛與細紋，重現青春光采。",
          features: ["Thermage技術", "即時緊緻", "持續改善"],
          // 對應: 醫學美容icon.png
          icon: <ServiceIcon src="/icon/medical-aesthetics-icon.png" alt="Radiofrequency Lifting" />
        },
        {
          name: "音波緊緻",
          description: "深層SMAS筋膜層拉提，重塑輪廓，效果自然持久。",
          features: ["Ulthera音波", "深層拉提", "自然效果"],
          // 對應: 醫學美容icon.png
          icon: <ServiceIcon src="/icon/medical-aesthetics-icon.png" alt="Ultrasound Lifting" />
        },
        {
          name: "雷射皮秒",
          description: "斑點、細紋、毛孔粗大的雷射治療，讓肌膚煥然一新。",
          features: ["皮秒技術", "深淺層治療", "恢復快速"],
          // 對應: 醫學美容icon.png
          icon: <ServiceIcon src="/icon/pico-laser-treatment-icon.png" alt="Pico Laser" />
        },
        {
          name: "微整形注射",
          description: "玻尿酸、肉毒桿菌等微整形療程，精準塑形，打造完美輪廓。",
          features: ["原廠藥劑", "精準注射", "自然美感"],
          // 對應: 醫學美容icon.png
          icon: <ServiceIcon src="/icon/cosmetic-injectables-icon.png" alt="Microsurgery Injection" />
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">診療項目</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              傑初診所為中永和地區專業腸胃肝膽、減重與代謝管理、皮膚科與醫學美容診所，提供無痛胃鏡、AI 內視鏡、肝膽超音波、青春痘與落髮治療、電波拉提、GLP1減重與營養指導。服務涵蓋永和、中和與新店周邊地區，並由前北榮醫師與專科團隊主導診療。
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
                    {/* 使用與 CategoryIcon 相同樣式的 div 包裹 lucide-react 圖示 */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full p-4 ${category.color} text-white mb-4`}>
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-medical-text mb-2">{category.category}</h2>
                  </div>

                  {/* 這是一個水平滾動容器，包含所有服務卡片 */}
                  <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar">
                    {category.services.map((service, serviceIndex) => (
                      <Card
                        key={service.name}
                        // 使用 flex-shrink-0 和 w-80 設定卡片固定寬度，並加入 snap-center 實現滑動吸附
                        className={`flex-shrink-0 w-80 snap-center group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${service.highlight ? 'ring-2 ring-primary/20 shadow-medical' : ''
                          }`}
                      >
                        <CardHeader className="pb-4 flex flex-col items-center">
                          <div className="mb-4">
                            {service.icon}
                          </div>
                          <div className="flex items-center justify-between w-full">
                            <CardTitle className="text-lg text-medical-text group-hover:text-primary-foreground transition-colors text-center w-full">
                              {service.name}
                            </CardTitle>
                          </div>
                          {service.highlight && (
                            <Badge variant="outline" className="bg-primary/10 text-accent border-primary/20 mt-2">
                              <Star className="w-3 h-3 mr-1" />
                              推薦
                            </Badge>
                          )}
                          <p className="text-muted-foreground text-sm leading-relaxed text-center mt-2">
                            {service.description}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                <span className="text-sm text-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6">
                            {/* 只有當 service.learnMoreLink 存在時才顯示此連結 */}
                            {service.learnMoreLink && (
                              <Link to={service.learnMoreLink} className="block w-full">
                                <Button variant="ghost" className="w-full justify-center text-btn-hover group-hover:text-primary-foreground transition-colors">
                                  <span>了解更多</span>
                                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              </Link>
                            )}
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
                    variant="secondary"
                    className="bg-[hsl(var(--btn))] text-destructive-foreground hover:bg-[hsl(var(--btn-hover))]"
                    asChild
                  >
                    <Link to="https://jietrue.simplybook.asia/v2/#book">自費減重預約</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-[hsl(var(--btn))] text-destructive-foreground hover:bg-[hsl(var(--btn-hover))]"
                    asChild
                  >
                    <Link to="/doctors">認識醫師</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
};

export default Services;
