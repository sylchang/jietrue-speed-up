import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Stethoscope, Microscope, Beaker, UserCheck, CalendarDays, Utensils, HeartPulse, ShieldCheck, Phone, MapPin, ArrowRight } from "lucide-react";

// 定義一個通用的 Icon 元件，以保持樣式一致
const ServiceIcon = ({ src, alt, size = "w-28 h-28" }) => (
  <img
    src={src}
    alt={alt}
    className={`${size}`}
  />
);

const PainlessEndoscopy = () => {
  return (
    <div className="min-h-screen bg-gradient-card flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center">
              <Stethoscope className="w-10 h-10 mr-4" />
              無痛內視鏡檢查
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              傑初診所提供安全、精準、舒適的無痛胃鏡與大腸鏡檢查，由柯智傑院長親自主導。
            </p>
          </div>
        </section>

        {/* Introduction and Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-medical-text mb-6">為什麼選擇傑初診所的無痛內視鏡？</h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                傑初診所由經驗豐富的柯智傑院長親自執刀，結合醫學中心等級的先進設備與專業麻醉團隊，為您提供無痛、精準、舒適的腸胃鏡檢查體驗。
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-foreground">
                    <span className="font-semibold text-medical-text">精準診斷：</span>
                    採用 Fujifilm V8000 內視鏡與 CAD EYE AI 智慧輔助系統，大幅提升早期病灶偵測率。
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-foreground">
                    <span className="font-semibold text-medical-text">安全舒適：</span>
                    專業麻醉團隊全程監控，提供舒眠麻醉，讓您在熟睡中輕鬆完成檢查。
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-foreground">
                    <span className="font-semibold text-medical-text">高效治療：</span>
                    可同步完成瘜肉切除，並使用德國 Erbe Vio 200D 電燒系統，降低出血風險。
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <ServiceIcon src="/icon/painless-endoscopy-icon.png" alt="Painless Endoscopy" size="w-80 h-80" />
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-medical-text mb-12">我們的檢查設備與技術</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <Microscope className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl text-medical-text">Fujifilm V8000 內視鏡</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-foreground">
                    高畫質影像、170° 超廣角視野、高解析 CMOS 鏡頭，提供清晰細緻的檢查畫面。
                  </p>
                  <p className="text-sm text-foreground">
                    BLI / LCI 光學影像增強技術，能有效辨識微小病變與早期癌變，不錯過任何細節。
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <Beaker className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl text-medical-text">AI 智慧內視鏡 (CAD EYE)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-foreground">
                    在檢查過程中，AI 即時輔助辨識與標示病灶區域，降低人為疏失，提高診斷精準度。
                  </p>
                  <p className="text-sm text-foreground">
                    猶如「第二雙眼睛」，協助醫師更精準地發現微小瘜肉與病變。
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl text-medical-text">Erbe Vio 200D 電燒系統</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-foreground">
                    德國原廠電燒設備，用於瘜肉與腺瘤的安全電切，能有效止血，大幅降低出血與其他併發症風險。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recommended Patient Profile */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-medical-text mb-12">推薦檢查族群</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "家族有胃癌、腸癌病史",
                "中／壯年族群 (40歲以上，有家族史建議30歲起檢查)",
                "持續胃痛、反酸、吞嚥困難",
                "持續腹脹、便秘、腹瀉交替",
                "熬夜、生活作息不規律",
                "缺乏運動習慣",
                "抽菸、喝酒習慣",
                "體重過重、肥胖",
                "愛吃紅肉、燒烤",
                "害怕傳統腸胃鏡、不敢做",
                "長期服用藥物（止痛、抗凝血等）",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-900 rounded-lg p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                  <UserCheck className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Procedure Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-medical-text mb-12">檢查費用與流程</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Pricing Card */}
              <Card className="p-6">
                <CardTitle className="text-2xl font-bold text-medical-text mb-4">腸胃鏡檢查費用</CardTitle>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>健保給付範圍：</span>
                      <span>「單次做」胃鏡或大腸鏡。</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>同時做胃鏡與大腸鏡：</span>
                      <span>$1,800 - $2,500</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>舒眠麻醉：</span>
                      <span>$4,000</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>AI 智慧輔助內視鏡技術：</span>
                      <span>$3,000</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>個人專用耗材與藥品另計。</span>
                    </li>
                  </ul>
                  <p className="text-sm text-red-500 mt-4">
                    *實際費用依個人檢查項目與狀況而異，請以現場諮詢為主。
                  </p>
                </CardContent>
              </Card>

              {/* Procedure Steps */}
              <div className="space-y-8">
                <Card className="p-6">
                  <CardTitle className="text-2xl font-bold text-medical-text mb-4 flex items-center">
                    <CalendarDays className="w-6 h-6 mr-3 text-primary" />
                    術前注意事項
                  </CardTitle>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>前一日避免高纖食物，改為清淡飲食。</li>
                      <li>按醫師指示服用瀉藥以排空腸道。</li>
                      <li>慢性病藥物請與醫師確認是否需暫停。</li>
                      <li>需主動告知藥物過敏史與重大病史。</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardTitle className="text-2xl font-bold text-medical-text mb-4 flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-primary" />
                    檢查當日注意
                  </CardTitle>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>穿著寬鬆衣物，勿佩戴貴重飾品。</li>
                      <li>提前 30 分鐘報到，完成衛教與準備程序。</li>
                      <li>請安排家人陪同，勿自行駕車或騎車。</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardTitle className="text-2xl font-bold text-medical-text mb-4 flex items-center">
                    <HeartPulse className="w-6 h-6 mr-3 text-primary" />
                    術後照護與追蹤
                  </CardTitle>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>恢復區休息 1 小時，醒後再進食。</li>
                      <li>飲食從清淡湯粥開始，避免油膩刺激。</li>
                      <li>當日勿劇烈活動，避免出血與不適。</li>
                      <li>如有腹痛、發燒、血便請立即就醫。</li>
                      <li>息肉切除後建議 1~2 年定期追蹤。</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-medical-text mb-12">常見問題</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Q：無痛大腸鏡檢查會痛嗎？",
                  a: "A：本院採用鎮靜麻醉與軟管設計，幾乎無不適感，讓您在睡夢中輕鬆完成檢查。",
                },
                {
                  q: "Q：檢查要多久？",
                  a: "A：檢查過程約 15~30 分鐘，實際時間會依個人狀況而定。",
                },
                {
                  q: "Q：多久要做一次？",
                  a: "A：若曾切除瘜肉，建議 1~2 年追蹤一次；一般民眾 40 歲以上建議每 5 年追蹤。",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                  <p className="font-bold text-medical-text mb-2">{faq.q}</p>
                  <p className="text-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 mr-3" />
              <h3 className="text-2xl lg:text-3xl font-bold">立即預約您的無痛內視鏡檢查</h3>
            </div>
            <p className="text-lg text-primary-foreground/90 mb-8">
              我們提供便利的線上預約服務，專業的醫療團隊將為您提供最優質的診療服務。
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
};

export default PainlessEndoscopy;
