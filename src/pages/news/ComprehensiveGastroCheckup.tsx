import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ComprehensiveGastroCheckup = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead 
        title="傑初診所 全方位腸胃免疫健檢方案"
        description="針對現代人腸胃健康需求，推出全方位腸胃免疫健檢方案，讓您全面了解腸胃健康狀況。"
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4 text-primary-foreground/80">
                <Calendar className="w-5 h-5 mr-2" />
                <span>2025/5/26</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                傑初診所 全方位腸胃免疫健檢方案
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                針對現代人腸胃健康需求，推出全方位腸胃免疫健檢方案，讓您全面了解腸胃健康狀況
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_600/https://jietrue.com/wp-content/uploads/2025/05/maypromotion.jpg" 
                alt="全方位腸胃免疫健檢方案" 
                className="w-full rounded-lg shadow-elegant mb-8"
              />

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="shadow-card-medical">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      檢查項目
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 胃鏡檢查（含幽門螺旋桿菌檢測）</li>
                      <li>• 大腸鏡檢查</li>
                      <li>• 腹部超音波</li>
                      <li>• 血液生化檢查</li>
                      <li>• 免疫功能評估</li>
                      <li>• 營養狀況分析</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card-medical">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      適用對象
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 40歲以上成年人</li>
                      <li>• 有家族腸胃疾病史</li>
                      <li>• 長期腸胃不適者</li>
                      <li>• 工作壓力大的上班族</li>
                      <li>• 飲食不規律者</li>
                      <li>• 關注健康的民眾</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">方案特色</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">無痛檢查</h3>
                    <p className="text-muted-foreground">採用最新舒眠麻醉技術，讓您在睡夢中完成檢查，無疼痛感。</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">專業團隊</h3>
                    <p className="text-muted-foreground">由經驗豐富的腸胃科專科醫師親自執行，確保檢查品質。</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">完整報告</h3>
                    <p className="text-muted-foreground">提供詳細檢查報告及個人化健康建議，協助您維護腸胃健康。</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">後續追蹤</h3>
                    <p className="text-muted-foreground">提供長期健康管理建議，必要時安排後續治療計畫。</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-primary">預約資訊</h3>
                <p className="mb-4">如需預約或了解更多詳情，請聯絡傑初診所：</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:02-8231-6869">
                      <Phone className="w-4 h-4 mr-2" />
                      電話預約：02-8231-6869
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://line.me/ti/p/@928ibhsy" target="_blank" rel="noopener noreferrer">
                      LINE 預約
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

export default ComprehensiveGastroCheckup;