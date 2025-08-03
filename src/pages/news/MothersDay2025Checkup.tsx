import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, DollarSign, Phone, CheckCircle } from "lucide-react";

const MothersDay2025Checkup = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead 
        title="🎁 母親節專屬健檢優惠｜高階腸胃鏡檢查只要 $6,800！"
        description="傑初診所祝全天下媽媽健康美麗，推出母親節健檢優惠，守護媽媽們的健康。"
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4 text-primary-foreground/80">
                <Calendar className="w-5 h-5 mr-2" />
                <span>2025/4/16</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 flex items-center justify-center flex-wrap">
                🎁 母親節專屬健檢優惠
              </h1>
              <div className="flex items-center justify-center mb-4">
                <Badge className="text-lg px-4 py-2 bg-accent text-accent-foreground">
                  <DollarSign className="w-5 h-5 mr-1" />
                  高階腸胃鏡檢查只要 $6,800
                </Badge>
              </div>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto flex items-center justify-center">
                <Heart className="w-6 h-6 mr-2" />
                守護媽媽們的健康，從腸胃保健開始
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_600/https://jietrue.com/wp-content/uploads/2025/04/%E6%AF%8D%E8%A6%AA%E7%AF%80%E5%84%AA%E6%83%A0.jpg" 
                alt="母親節專屬健檢優惠" 
                className="w-full rounded-lg shadow-elegant mb-8"
              />

              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-primary">為什麼選擇傑初診所？</h2>
                <p className="text-lg text-muted-foreground">
                  專業、安全、舒適的醫療環境，讓媽媽們享有最優質的健康檢查體驗
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="shadow-card-medical">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      優惠內容
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                        <h3 className="font-semibold text-primary mb-2">高階腸胃鏡檢查</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground line-through">原價 $12,000</span>
                          <span className="text-xl font-bold text-primary">特價 $6,800</span>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• 包含胃鏡 + 大腸鏡檢查</li>
                        <li>• 舒眠麻醉，無痛檢查</li>
                        <li>• 專科醫師親自執行</li>
                        <li>• 完整檢查報告與建議</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card-medical">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center">
                      <Heart className="w-5 h-5 mr-2" />
                      適合對象
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                        45歲以上的媽媽們
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                        有腸胃不適症狀者
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                        家族有腸胃疾病史
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                        重視健康管理的女性
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                        想為媽媽安排健檢的子女
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-subtle rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-primary text-center">檢查流程</h2>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                    <h3 className="font-semibold mb-1">預約諮詢</h3>
                    <p className="text-xs text-muted-foreground">電話或LINE預約</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                    <h3 className="font-semibold mb-1">檢查前準備</h3>
                    <p className="text-xs text-muted-foreground">清腸藥物使用</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                    <h3 className="font-semibold mb-1">舒眠檢查</h3>
                    <p className="text-xs text-muted-foreground">無痛腸胃鏡檢查</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
                    <h3 className="font-semibold mb-1">報告說明</h3>
                    <p className="text-xs text-muted-foreground">醫師詳細解說</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-primary">立即預約</h3>
                <p className="mb-4">母親節優惠期間限定，數量有限，請把握機會為媽媽預約健康檢查！</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:02-8231-6869">
                      <Phone className="w-4 h-4 mr-2" />
                      電話預約：02-8231-6869
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://line.me/ti/p/@928ibhsy" target="_blank" rel="noopener noreferrer">
                      LINE 快速預約
                    </a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  *優惠活動期間限定，實際價格以現場諮詢為準
                </p>
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

export default MothersDay2025Checkup;