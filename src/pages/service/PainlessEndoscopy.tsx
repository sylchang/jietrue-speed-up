import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Clock, Shield, Users, Eye, Stethoscope, Award } from "lucide-react";

// Utility component for displaying service icons
const ServiceIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-12 h-12 object-contain" />
);

const PainlessEndoscopy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>中和腸胃鏡｜無痛胃鏡大腸鏡｜傑初診所 柯智傑醫師主治</title>
        <meta name="description" content="前好心肝診所肝膽腸胃科主治醫師 柯智傑醫師，擁有近萬例腸胃鏡經驗。採用醫學中心等級設備，提供安全、精準、舒適的無痛胃鏡與大腸鏡檢查。" />
        <meta name="keywords" content="中和腸胃鏡,無痛胃鏡,無痛大腸鏡,傑初診所,柯智傑醫師,中和內視鏡,永和腸胃鏡,AI內視鏡" />
        <link rel="canonical" href="https://jietrue.com/painless-endoscopy/" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            中和腸胃鏡｜無痛胃鏡大腸鏡
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
            傑初診所 柯智傑醫師主治
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            前好心肝診所肝膽腸胃科主治醫師 柯智傑醫師，擁有近萬例腸胃鏡經驗
          </p>
          <p className="text-lg mb-8 text-muted-foreground">
            傑初診所由柯智傑院長親自主導，熟悉各類腸胃問題與瘜肉切除操作。結合醫學中心等級設備與專業團隊，為中和、永和、台北地區民眾提供安全、精準、舒適的無痛胃鏡與大腸鏡檢查。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://line.me/R/ti/p/@928ibhsy" target="_blank" rel="noopener noreferrer">
                LINE預約檢查
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://pinmed.co/clinic/18ott42a" target="_blank" rel="noopener noreferrer">
                網頁預約檢查
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            醫學中心等級設備
          </h2>
          
          {/* Fujifilm V8000 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Eye className="w-8 h-8 text-primary" />
                日本 Fujifilm V8000 內視鏡系統
              </h3>
              <p className="text-muted-foreground mb-6">
                採用醫學中心等級影像設備，擁有 BLI / LCI 光學影像增強技術、170 度超廣角與高解析 CMOS 鏡頭，大幅提升早期息肉與癌變偵測率。
              </p>
              <p className="text-muted-foreground">
                新一代軟管設計提升患者舒適度，孔徑配置允許同步完成瘜肉切除。
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/傑初診所1.png" 
                alt="Fujifilm V8000 內視鏡系統" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Erbe Vio 200D */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 flex justify-center">
              <img 
                src="/images/傑初診所2.png" 
                alt="Erbe Vio 200D 電燒系統" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                德國 Erbe Vio 200D 電燒系統
              </h3>
              <p className="text-muted-foreground">
                智慧型電阻偵測與 EndoCut Q 切割系統，針對瘜肉與腺瘤進行安全電切，降低出血與併發症風險，與醫學中心同等級規格。
              </p>
            </div>
          </div>

          {/* AI System */}
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                AI 內視鏡輔助系統｜醫師的第三隻眼
              </h3>
              <p className="text-muted-foreground">
                本診所同步導入 <strong>Fujifilm CAD EYE AI 智慧內視鏡</strong>，在醫師操作過程中即時分析畫面、標示病灶區域，輔助診斷更精準，減少遺漏風險。
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <a href="/services" target="_blank" rel="noopener noreferrer">
                  了解 AI 內視鏡輔助技術
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Recommended Groups */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            推薦檢查族群
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            （您中幾項）
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "家族有 #胃癌、#腸癌 病史",
              "中／壯年族群 (40 歲以上，有家族史建議 30 歲起檢查)",
              "持續胃痛、反酸、吞嚥困難",
              "持續腹脹、便秘、腹瀉交替",
              "熬夜、生活作息不規律",
              "缺乏運動習慣",
              "抽菸、喝酒習慣",
              "體重過重、肥胖",
              "愛吃紅肉、燒烤",
              "害怕傳統腸胃鏡、不敢做",
              "長期服用藥物（止痛、抗凝血等）"
            ].map((item, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                <CardContent className="flex items-center gap-3 p-0">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            腸胃鏡檢查費用
          </h2>
          <div className="bg-muted/30 p-6 rounded-lg mb-8">
            <p className="text-muted-foreground mb-4">
              我們提供專業的「腸胃鏡」醫療諮詢與檢查前評估，凡預約大腸鏡檢查或胃鏡檢查前，請先掛號看診，以讓醫師評估狀況：
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">基本檢查費用</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>「單次做」胃鏡或大腸鏡</span>
                  <span className="font-semibold text-primary">健保免費</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>「同時做」胃鏡與大腸鏡</span>
                  <span className="font-semibold">1800 - 2500 元</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  * 單次做麻醉費用請洽詢傑初診所
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">麻醉選項</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>減痛麻醉（單項）</span>
                  <span className="font-semibold">2500 元</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>減痛麻醉（胃鏡+大腸鏡）</span>
                  <span className="font-semibold">4300 - 5000 元</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>舒眠麻醉（單項）</span>
                  <span className="font-semibold">4000 元</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>舒眠麻醉（胃鏡+大腸鏡）</span>
                  <span className="font-semibold">5800 - 6500 元</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">進階選項</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>AI智慧輔助內視鏡技術</span>
                  <span className="font-semibold">3000 元</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">個人專用耗材</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>胃鏡口咬器</span>
                  <span className="font-semibold">100 元</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>大腸鏡清腸藥</span>
                  <span className="font-semibold">580 元</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  * 胃瘜肉 / 大腸瘜肉切除處置費依個人實際狀況計
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Procedure Information */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            檢查須知與流程
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  術前注意事項
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 前一日避免高纖食物，改為清淡飲食</li>
                  <li>• 按指示服用瀉藥以排空腸道</li>
                  <li>• 慢性病藥物請與醫師確認是否需暫停</li>
                  <li>• 術前需主動告知藥物過敏史與重大病史</li>
                  <li>• 請安排家人陪同，勿自行駕車</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="w-6 h-6 text-primary" />
                  檢查當日注意
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 穿著寬鬆衣物，勿佩戴貴重飾品</li>
                  <li>• 提前 30 分鐘報到，完成衛教與準備程序</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  術後照護與追蹤
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 恢復區休息 1 小時，醒後再進食</li>
                  <li>• 飲食從清淡湯粥開始，避免油膩刺激</li>
                  <li>• 當日勿劇烈活動，避免出血與不適</li>
                  <li>• 如有腹痛、發燒、血便請立即就醫</li>
                  <li>• 息肉切除後建議 1~2 年定期追蹤</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            常見問題
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Q：無痛大腸鏡檢查會痛嗎？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  本院採用鎮靜麻醉與軟管設計，幾乎無不適感。
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Q：檢查要多久？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  檢查過程約 15~30 分鐘，視個案而定。
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Q：多久要做一次？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  如曾切除瘜肉，建議 1~2 年一次；一般民眾 40 歲以上每 5 年追蹤。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            立即預約腸胃鏡檢查
          </h2>
          <p className="text-lg mb-8 opacity-90">
            專業團隊為您提供安全舒適的檢查體驗
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://line.me/R/ti/p/@928ibhsy" target="_blank" rel="noopener noreferrer">
                LINE 立即預約
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://pinmed.co/clinic/18ott42a" target="_blank" rel="noopener noreferrer">
                網頁預約
              </a>
            </Button>
          </div>
        </div>
      </section>

      <StickyActions />
      <Footer />
    </div>
  );
};

export default PainlessEndoscopy;