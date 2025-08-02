import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ColonoscopyPrepGuide = () => {
  return (
    <>
      <Helmet>
        <title>大腸鏡前清腸5問：清腸藥怎麼喝？｜傑初診所中和永和腸胃科</title>
        <meta name="description" content="大腸鏡檢查前的清腸準備是檢查成功的關鍵，了解正確的清腸藥服用方式。" />
        <meta name="keywords" content="大腸鏡,清腸藥,腸胃科,內視鏡,傑初診所,中和,永和" />
        <meta property="og:title" content="大腸鏡前清腸5問：清腸藥怎麼喝？｜傑初診所中和永和腸胃科" />
        <meta property="og:description" content="大腸鏡檢查前的清腸準備是檢查成功的關鍵，了解正確的清腸藥服用方式。" />
        <meta property="og:url" content="https://jietrue.com/colonoscopy-prep-guide" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://jietrue.com/colonoscopy-prep-guide" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-background to-muted/20 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
                大腸鏡前清腸5問：清腸藥怎麼喝？
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                大腸鏡檢查前的清腸準備是檢查成功的關鍵，了解正確的清腸藥服用方式
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Q1: 清腸藥什麼時候開始喝？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">
                      通常在檢查前一天晚上開始服用清腸藥。具體時間會依據您的檢查時間而定：
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li><strong>上午檢查：</strong>前一天下午6點開始第一次服藥</li>
                      <li><strong>下午檢查：</strong>前一天晚上8點開始第一次服藥</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Q2: 清腸藥要喝多少水？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">
                      清腸藥需要配合大量水分才能發揮效果：
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>每包清腸藥需配合500-1000ml的水</li>
                      <li>總計需要喝2-3公升的液體</li>
                      <li>可分次飲用，避免一次喝太多造成不適</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Q3: 喝清腸藥後多久會有反應？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">
                      一般情況下：
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>服藥後30分鐘到2小時內開始排便</li>
                      <li>排便會持續數小時</li>
                      <li>最後排出的應該是清澈或淡黃色液體</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Q4: 清腸藥味道難喝怎麼辦？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">
                      改善口感的小技巧：
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>冷藏後飲用，低溫可減少異味</li>
                      <li>加入少量檸檬汁或蜂蜜調味</li>
                      <li>使用吸管快速飲用</li>
                      <li>喝完後可用清水漱口</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Q5: 清腸效果不佳怎麼辦？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">
                      如果排便仍有固體殘渣：
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>繼續多喝水，幫助清腸</li>
                      <li>可適度活動，促進腸蠕動</li>
                      <li>聯繫診所，可能需要額外清腸措施</li>
                      <li>必要時可能需要延後檢查</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-yellow-50 border-yellow-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-yellow-800">重要提醒</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2 text-yellow-800">
                      <li>清腸期間避免攝取任何固體食物</li>
                      <li>可飲用透明液體（白開水、透明果汁）</li>
                      <li>如有嚴重不適，立即聯繫診所</li>
                      <li>按時服藥，不可自行調整劑量</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <h3 className="text-xl font-semibold mb-4">需要進行大腸鏡檢查嗎？</h3>
                <p className="text-muted-foreground mb-6">
                  如有疑問或需要預約大腸鏡檢查，歡迎聯繫傑初診所
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="https://line.me/R/ti/p/@928ibhsy" target="_blank" rel="noopener noreferrer">
                      LINE 預約諮詢
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">聯絡我們</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <StickyActions />
        <Footer />
      </div>
    </>
  );
};

export default ColonoscopyPrepGuide;