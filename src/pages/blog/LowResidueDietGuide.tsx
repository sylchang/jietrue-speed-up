import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const LowResidueDietGuide = () => {
  return (
    <>
      <Helmet>
        <title>大腸鏡前低渣飲食怎麼吃？｜傑初診所中和永和腸胃科</title>
        <meta name="description" content="進行大腸鏡檢查前，需要進行低渣飲食來清空腸道，了解正確的飲食方式對檢查結果很重要。" />
        <meta name="keywords" content="大腸鏡,低渣飲食,腸胃科,內視鏡,傑初診所,中和,永和" />
        <meta property="og:title" content="大腸鏡前低渣飲食怎麼吃？｜傑初診所中和永和腸胃科" />
        <meta property="og:description" content="進行大腸鏡檢查前，需要進行低渣飲食來清空腸道，了解正確的飲食方式對檢查結果很重要。" />
        <meta property="og:url" content="https://jietrue.com/low-residue-diet-guide" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://jietrue.com/low-residue-diet-guide" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-background to-muted/20 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
                大腸鏡前低渣飲食怎麼吃？
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                進行大腸鏡檢查前，需要進行低渣飲食來清空腸道，了解正確的飲食方式對檢查結果很重要
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">什麼是低渣飲食？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">
                      低渣飲食是指減少食用高纖維、難消化食物的飲食方式，目的是減少腸道內殘渣，讓大腸鏡檢查時能清楚觀察腸壁狀況。
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">低渣飲食原則</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>避免高纖維食物（蔬菜、水果、全穀類）</li>
                      <li>選擇精緻澱粉類食物</li>
                      <li>避免帶籽、帶皮的食物</li>
                      <li>選擇嫩肉、魚類、蛋類</li>
                      <li>充足水分攝取</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">建議食物清單</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-3">✓ 可以吃的食物</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 白米飯、白麵條、白吐司</li>
                          <li>• 去皮雞肉、魚肉、蛋類</li>
                          <li>• 豆腐、豆漿</li>
                          <li>• 過濾果汁</li>
                          <li>• 清湯、雞湯</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 mb-3">✗ 避免的食物</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 蔬菜、水果（含皮、籽）</li>
                          <li>• 全穀類、糙米</li>
                          <li>• 豆類、堅果</li>
                          <li>• 油炸食物</li>
                          <li>• 辛辣調味料</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">檢查前注意事項</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>檢查前3天開始低渣飲食</li>
                      <li>檢查前1天改為流質飲食</li>
                      <li>按時服用清腸藥物</li>
                      <li>充分休息，避免過度勞累</li>
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

export default LowResidueDietGuide;