import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Target, Scale, Stethoscope, Phone, Users } from "lucide-react";

const WeightManagementClinic = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead 
        title="傑初診所 減重與代謝管理 中和減重門診"
        description="提供專業減重諮詢與代謝管理服務，運用最新的醫療技術幫助您達成健康減重目標。"
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4 text-primary-foreground/80">
                <Calendar className="w-5 h-5 mr-2" />
                <span>2025/3/15</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                減重與代謝管理門診
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto flex items-center justify-center">
                <Target className="w-6 h-6 mr-2" />
                專業醫療團隊，科學減重方案，健康達成理想體重
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <img 
                src="/images/傑初診所 減重與代謝管理 中和減重門診 瘦瘦針 胃肉毒減重 GLP1.jpg" 
                alt="傑初診所 減重與代謝管理" 
                className="w-full rounded-lg shadow-elegant mb-8"
              />

              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-primary">為什麼選擇醫療減重？</h2>
                <p className="text-lg text-muted-foreground">
                  相較於一般減重方式，醫療減重更安全、更有效、更持久
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="shadow-card-medical">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center">
                      <Stethoscope className="w-5 h-5 mr-2" />
                      專業治療項目
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <div>
                          <strong>GLP-1 減重針劑</strong><br/>
                          <span className="text-sm">Ozempic、Mounjaro等新型減重藥物</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <div>
                          <strong>胃內肉毒桿菌注射</strong><br/>
                          <span className="text-sm">減緩胃部蠕動，增加飽足感</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <div>
                          <strong>代謝症候群管理</strong><br/>
                          <span className="text-sm">血糖、血脂、血壓綜合治療</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <div>
                          <strong>營養諮詢與指導</strong><br/>
                          <span className="text-sm">個人化飲食計畫規劃</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card-medical">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      適合對象
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Scale className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                        BMI ≥ 27 且有併發症者
                      </li>
                      <li className="flex items-start">
                        <Scale className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                        BMI ≥ 30 的肥胖患者
                      </li>
                      <li className="flex items-start">
                        <Scale className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                        有糖尿病前期或糖尿病
                      </li>
                      <li className="flex items-start">
                        <Scale className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                        高血壓、高血脂患者
                      </li>
                      <li className="flex items-start">
                        <Scale className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                        多次減重失敗者
                      </li>
                      <li className="flex items-start">
                        <Scale className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                        有代謝症候群者
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-subtle rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-primary text-center">治療流程</h2>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
                    <h3 className="font-semibold mb-2">健康評估</h3>
                    <p className="text-sm text-muted-foreground">詳細病史詢問、身體檢查、血液檢查</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
                    <h3 className="font-semibold mb-2">個人化治療</h3>
                    <p className="text-sm text-muted-foreground">根據評估結果制定專屬減重計畫</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
                    <h3 className="font-semibold mb-2">執行治療</h3>
                    <p className="text-sm text-muted-foreground">開始減重療程，定期回診追蹤</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-sm font-bold">4</div>
                    <h3 className="font-semibold mb-2">長期管理</h3>
                    <p className="text-sm text-muted-foreground">維持理想體重，預防復胖</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">GLP-1 減重針劑特色</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 有效抑制食慾，減少進食量</li>
                    <li>• 延緩胃排空，增加飽足感</li>
                    <li>• 改善胰島素敏感性</li>
                    <li>• 每週注射一次，使用便利</li>
                    <li>• 臨床實證減重效果顯著</li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">胃內肉毒治療優勢</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 非手術性治療，安全性高</li>
                    <li>• 門診即可完成，不需住院</li>
                    <li>• 效果維持 6-12 個月</li>
                    <li>• 適合懼怕手術的患者</li>
                    <li>• 可重複治療</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-primary">預約諮詢</h3>
                <p className="mb-4">
                  想了解更多減重與代謝管理資訊嗎？歡迎預約專業醫師諮詢，為您量身打造健康減重計畫。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:02-8231-6869">
                      <Phone className="w-4 h-4 mr-2" />
                      電話諮詢：02-8231-6869
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://line.me/ti/p/@928ibhsy" target="_blank" rel="noopener noreferrer">
                      LINE 預約諮詢
                    </a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  *治療效果因人而異，實際療程需由醫師評估後決定
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

export default WeightManagementClinic;