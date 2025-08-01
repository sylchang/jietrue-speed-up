import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const AnesthesiaInfo = () => {
  return (
    <>
      <Helmet>
        <title>減痛麻醉 vs 舒眠麻醉比較｜內視鏡鎮靜選擇介紹｜傑初診所</title>
        <meta name="description" content="進行無痛胃鏡或大腸鏡檢查前，該選哪種麻醉方式呢？傑初診所提供「減痛麻醉（Midazolam+Fentanyl）」與「舒眠麻醉（Propofol）」，幫助您更舒適地完成內視鏡檢查。" />
        <meta name="keywords" content="減痛麻醉,舒眠麻醉,無痛胃鏡,大腸鏡,內視鏡,Midazolam,Fentanyl,Propofol,傑初診所" />
        <meta property="og:title" content="減痛麻醉 vs 舒眠麻醉比較｜內視鏡鎮靜選擇介紹｜傑初診所" />
        <meta property="og:description" content="進行無痛胃鏡或大腸鏡檢查前，該選哪種麻醉方式呢？傑初診所提供「減痛麻醉（Midazolam+Fentanyl）」與「舒眠麻醉（Propofol）」，幫助您更舒適地完成內視鏡檢查。" />
        <meta property="og:url" content="https://jietrue.com/anesthesia-info/" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://jietrue.com/wp-content/uploads/2025/04/傑初診所_減痛與舒眠麻醉衛教單.jpg" />
        <link rel="canonical" href="https://jietrue.com/anesthesia-info/" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-background to-muted/20 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
                減痛麻醉 VS 舒眠麻醉｜傑初診所內視鏡鎮靜比較
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                進行無痛胃鏡或大腸鏡檢查前，該選哪種麻醉方式呢？
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-8">
                  傑初診所提供「減痛麻醉（Midazolam+Fentanyl）」與「舒眠麻醉（Propofol）」，幫助您更舒適地完成內視鏡檢查。
                </p>

                <h2 className="text-3xl font-bold mb-6 text-primary">🆚 兩種麻醉方式比較</h2>
                
                <img 
                  src="https://jietrue.com/wp-content/uploads/2025/04/傑初診所_減痛與舒眠麻醉衛教單.jpg"
                  alt="減痛麻醉與舒眠麻醉比較圖表 中永和無痛腸胃鏡"
                  className="w-full rounded-lg mb-8"
                />

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">減痛麻醉 (Midazolam+Fentanyl)</h3>
                    <div className="space-y-3">
                      <div><strong>特點：</strong> 輕度鎮靜，保持意識</div>
                      <div><strong>費用：</strong> 較經濟實惠</div>
                      <div><strong>適合：</strong> 可接受輕微不適的患者</div>
                      <div><strong>恢復：</strong> 較快</div>
                      <div><strong>感受：</strong> 會有輕微的檢查感覺</div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">舒眠麻醉 (Propofol)</h3>
                    <div className="space-y-3">
                      <div><strong>特點：</strong> 深度鎮靜，完全無感</div>
                      <div><strong>費用：</strong> 費用較高</div>
                      <div><strong>適合：</strong> 害怕痛或曾有不良經驗</div>
                      <div><strong>恢復：</strong> 需要觀察時間</div>
                      <div><strong>感受：</strong> 完全無檢查記憶</div>
                    </div>
                  </Card>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-primary">💰 為什麼費用不同？</h3>
                
                <Card className="p-6 mb-8">
                  <ul className="space-y-3 text-lg">
                    <li>💉 Propofol 需麻醉專科醫師與監測儀器</li>
                    <li>💊 藥品成本高，耗材與人力要求較高</li>
                    <li>📋 健保規定皆為自費，舒眠麻醉費用相對更高</li>
                  </ul>
                </Card>

                <h3 className="text-2xl font-semibold mb-4 text-primary">🔎 如何選擇適合自己的麻醉？</h3>
                
                <Card className="p-6 mb-8">
                  <ul className="space-y-3 text-lg">
                    <li>✅ 害怕痛、曾有不良檢查經驗 → 建議選擇舒眠麻醉</li>
                    <li>✅ 長期服用安眠藥／酒精使用者 → 建議選擇舒眠麻醉</li>
                    <li>✅ 希望費用較經濟／可接受輕微不適 → 可考慮減痛麻醉</li>
                  </ul>
                </Card>

                <h3 className="text-2xl font-semibold mb-4 text-primary">💬 常見問答整理</h3>
                
                <img 
                  src="https://jietrue.com/wp-content/uploads/2025/04/傑初診所_減痛與舒眠麻醉衛教單_常見問答.jpg"
                  alt="舒眠麻醉與減痛麻醉常見問答"
                  className="w-full rounded-lg mb-8"
                />

                <h3 className="text-2xl font-semibold mb-4 text-primary">✅ 鎮靜安全皆有保障</h3>
                
                <Card className="p-6 mb-8">
                  <ul className="space-y-3 text-lg">
                    <li>🩺 檢查全程皆有心跳、血壓、血氧監測</li>
                    <li>📋 檢查前麻醉醫師將評估風險</li>
                    <li>🚑 診所設有急救設備與完整麻醉系統</li>
                    <li>🧑‍⚕️ 檢查後將觀察恢復情況，安全離院</li>
                  </ul>
                </Card>

                <div className="text-center mt-12">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">📌 預約內視鏡與麻醉諮詢</h3>
                  <p className="text-lg mb-6">
                    傑初診所提供專業 <a href="/painless-endoscopy/" className="text-primary underline">無痛內視鏡</a> 檢查服務，讓您安心完成健康檢查。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <a href="https://lin.ee/bQKntMLD" target="_blank" rel="noopener noreferrer">
                        LINE 線上預約
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="/contact">聯絡我們</a>
                    </Button>
                  </div>
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

export default AnesthesiaInfo;