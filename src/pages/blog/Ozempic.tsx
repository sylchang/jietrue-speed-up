import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StickyActions } from "@/components/StickyActions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const Ozempic = () => {
  return (
    <>
      <Helmet>
        <title>司美格魯肽 有望逆轉脂肪肝纖維化 | 傑初診所瘦瘦針推薦</title>
        <meta name="description" content="在剛發表的 ESSENCE phase III 臨床試驗中，GLP-1 類藥物 司美格魯肽 首次在人體肝切片中證實能有效改善脂肪性肝炎（NASH）所導致的肝纖維化，並兼具減重、控糖與心血管保護效果，成為目前最具潛力的脂肪肝藥物。" />
        <meta name="keywords" content="司美格魯肽,Semaglutide,脂肪肝,NASH,瘦瘦針,減重,傑初診所,GLP-1" />
        <meta property="og:title" content="司美格魯肽 有望逆轉脂肪肝纖維化 | 傑初診所瘦瘦針推薦" />
        <meta property="og:description" content="在剛發表的 ESSENCE phase III 臨床試驗中，GLP-1 類藥物 司美格魯肽 首次在人體肝切片中證實能有效改善脂肪性肝炎（NASH）所導致的肝纖維化，並兼具減重、控糖與心血管保護效果，成為目前最具潛力的脂肪肝藥物。" />
        <meta property="og:url" content="https://jietrue.com/ozempic/" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://jietrue.com/wp-content/uploads/2025/05/瘦瘦針-減重-瘦瘦筆.png" />
        <link rel="canonical" href="https://jietrue.com/ozempic/" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-background to-muted/20 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
                GLP-1 類藥物司美格魯肽 改善脂肪肝纖維化
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                ESSENCE phase III 臨床試驗首次證實司美格魯肽能有效改善脂肪性肝炎所導致的肝纖維化
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-8">
                  在剛發表的 ESSENCE phase III 臨床試驗中，GLP-1 類藥物 <strong>司美格魯肽</strong> 首次在人體肝切片中證實能有效改善脂肪性肝炎（NASH）所導致的肝纖維化，並兼具減重、控糖與心血管保護效果，成為目前最具潛力的脂肪肝藥物。
                </p>

                <img 
                  src="https://jietrue.com/wp-content/uploads/2025/05/瘦瘦針-減重-瘦瘦筆.png"
                  alt="司美格魯肽 瘦瘦針 減重 瘦瘦筆"
                  className="w-full rounded-lg mb-8"
                />

                <h2 className="text-3xl font-bold mb-6 text-primary">司美格魯肽 多重作用機制</h2>
                
                <Card className="p-6 mb-8">
                  <ul className="space-y-3 text-lg">
                    <li>• 延緩胃排空與食慾抑制，促進減重</li>
                    <li>• 刺激胰島素分泌，改善糖尿病控制</li>
                    <li>• 抗發炎作用，抑制肝臟纖維化進程</li>
                    <li>• 降低心血管風險因子，提高代謝健康</li>
                  </ul>
                </Card>

                <h3 className="text-2xl font-semibold mb-4 text-primary">ESSENCE 試驗亮點</h3>
                
                <p className="text-lg mb-6">
                  試驗共納入 100 位 NASH 合併肝纖維化患者，治療 72 週後，約 45% 患者的肝纖維化指數有顯著改善，這是過去藥物（如 Pioglitazone、維他命 E）無法達成的效果。
                </p>

                <h3 className="text-2xl font-semibold mb-4 text-primary">傑初診所提供 司美格魯肽 瘦瘦針療程</h3>
                
                <p className="text-lg mb-8">
                  司美格魯肽 不僅幫助減重，也能改善脂肪肝與血糖控制，歡迎洽詢本院專業醫師進行評估，讓您由內而外恢復健康。
                </p>

                <div className="text-center mb-12">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <a href="https://lin.ee/bQKntMLD" target="_blank" rel="noopener noreferrer">
                        LINE 線上預約
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://pinmed.co/clinic/18ott42a" target="_blank" rel="noopener noreferrer">
                        網頁預約
                      </a>
                    </Button>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-primary">常見問題 Q&A</h3>
                
                <Card className="p-6 mb-6">
                  <h4 className="text-xl font-semibold mb-3">Q1：瘦瘦針是什麼？</h4>
                  <p className="text-lg">
                    A：瘦瘦針多為 GLP-1 類藥物如 司美格魯肽，能有效幫助減重、穩定血糖，同時改善脂肪肝，是近年減重與代謝治療的重要突破。
                  </p>
                </Card>

                <Card className="p-6 mb-6">
                  <h4 className="text-xl font-semibold mb-3">Q2：誰適合使用 司美格魯肽？</h4>
                  <p className="text-lg">
                    A：肥胖、糖尿病或脂肪肝患者，經醫師評估後皆可能受惠於 司美格魯肽 療程。
                  </p>
                </Card>

                <Card className="p-6 mb-6">
                  <h4 className="text-xl font-semibold mb-3">Q3：療程多久見效？</h4>
                  <p className="text-lg">
                    A：一般在 4~8 週可見食慾降低與體重下降，肝功能改善通常需要更長時間觀察。
                  </p>
                </Card>
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

export default Ozempic;