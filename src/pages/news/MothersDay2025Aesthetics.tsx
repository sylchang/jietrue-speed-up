import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Heart, Sparkles, Phone } from "lucide-react";

const MothersDay2025Aesthetics = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead 
        title="2025 母親節醫美專案｜專業定制療程｜傑初診所"
        description="感謝母親的辛勞，特推出母親節醫美專案，讓媽媽們享受專業的美容療程。"
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4 text-primary-foreground/80">
                <Calendar className="w-5 h-5 mr-2" />
                <span>2025/4/28</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                2025 母親節醫美專案
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto flex items-center justify-center">
                <Heart className="w-6 h-6 mr-2" />
                感謝母親的辛勞，讓媽媽們享受專業的美容療程
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_600/https://jietrue.com/wp-content/uploads/2025/04/IMG_5287.jpg" 
                alt="2025 母親節醫美專案" 
                className="w-full rounded-lg shadow-elegant mb-8"
              />

              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-primary flex items-center justify-center">
                  <Sparkles className="w-8 h-8 mr-3" />
                  專為媽媽們量身打造的美麗時光
                </h2>
                <p className="text-lg text-muted-foreground">
                  在這個特別的日子裡，讓我們用專業的醫美療程，為辛勞的媽媽們帶來美麗與自信
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="shadow-card-medical">
                  <CardHeader>
                    <CardTitle className="text-primary">皮膚美容療程</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <div>
                          <strong>皮秒雷射</strong><br/>
                          淡化斑點、改善膚質、縮小毛孔
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <div>
                          <strong>音波拉皮</strong><br/>
                          緊緻肌膚、改善鬆弛、提升輪廓
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <div>
                          <strong>玻尿酸注射</strong><br/>
                          填補凹陷、豐潤唇部、改善法令紋
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card-medical">
                  <CardHeader>
                    <CardTitle className="text-primary">抗老化療程</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <div>
                          <strong>肉毒桿菌注射</strong><br/>
                          改善動態紋路、瘦小臉、改善咀嚼肌
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <div>
                          <strong>電波拉皮</strong><br/>
                          刺激膠原蛋白增生、緊緻肌膚
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <div>
                          <strong>舒顏萃注射</strong><br/>
                          漸進式改善老化、自然年輕化
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-subtle rounded-lg p-8 mb-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-primary">母親節特別優惠</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <h3 className="font-semibold text-primary mb-2">療程折扣</h3>
                    <p className="text-sm text-muted-foreground">指定療程享有特別優惠價格</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <h3 className="font-semibold text-primary mb-2">贈送療程</h3>
                    <p className="text-sm text-muted-foreground">消費滿額贈送保養護理療程</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <h3 className="font-semibold text-primary mb-2">專業諮詢</h3>
                    <p className="text-sm text-muted-foreground">免費專業醫師諮詢評估</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  *優惠活動期間限定，詳細內容請洽診所
                </p>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-primary">預約諮詢</h3>
                <p className="mb-4">想為媽媽預約專屬的美麗療程嗎？歡迎聯絡我們：</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:02-8231-6869">
                      <Phone className="w-4 h-4 mr-2" />
                      電話預約：02-8231-6869
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://line.me/ti/p/@928ibhsy" target="_blank" rel="noopener noreferrer">
                      LINE 諮詢預約
                    </a>
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

export default MothersDay2025Aesthetics;