import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const GastroenteritisRelief = () => {
  return (
    <>
      <Helmet>
        <title>腸胃炎症狀大解析｜腸胃炎怎麼舒緩？傑初診所中和腸胃科</title>
        <meta name="description" content="你是否曾經因為腸胃不適而困擾，甚至影響到日常生活？突如其來的腹瀉、噁心或腹痛，可能都是腸胃炎的警訊！雖然腸胃炎是常見的急性疾病，但若處理不當，除了造成身體虛弱，也可能演變為更嚴重的併發症。" />
        <meta name="keywords" content="腸胃炎症狀,腸胃炎怎麼舒緩,腹瀉,噁心,腹痛,BRAT飲食法,傑初診所,中和腸胃科" />
        <meta property="og:title" content="腸胃炎症狀大解析｜腸胃炎怎麼舒緩？傑初診所中和腸胃科" />
        <meta property="og:description" content="你是否曾經因為腸胃不適而困擾，甚至影響到日常生活？突如其來的腹瀉、噁心或腹痛，可能都是腸胃炎的警訊！雖然腸胃炎是常見的急性疾病，但若處理不當，除了造成身體虛弱，也可能演變為更嚴重的併發症。" />
        <meta property="og:url" content="https://jietrue.com/gastroenteritis-symptoms-relief/" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://jietrue.com/wp-content/uploads/2025/04/腸胃炎怎麼舒緩.png" />
        <link rel="canonical" href="https://jietrue.com/gastroenteritis-symptoms-relief/" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-background to-muted/20 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
                腸胃炎症狀大解析：腸胃炎怎麼舒緩？7種方法一次看
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                突如其來的腹瀉、噁心或腹痛，可能都是腸胃炎的警訊！了解症狀與舒緩方法，讓您更安心面對腸胃不適。
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-8">
                  你是否曾經因為腸胃不適而困擾，甚至影響到日常生活？突如其來的腹瀉、噁心或腹痛，可能都是 <strong>腸胃炎</strong> 的警訊！雖然腸胃炎是常見的急性疾病，但若處理不當，除了造成身體虛弱，也可能演變為更嚴重的併發症。
                </p>

                <img 
                  src="https://jietrue.com/wp-content/uploads/2025/04/腸胃炎怎麼舒緩.png"
                  alt="永和腸胃科 腸胃炎怎麼舒緩？傑初診所中和腸胃科健康衛教圖示"
                  className="w-full rounded-lg mb-8"
                />

                <h2 className="text-3xl font-bold mb-6 text-primary">常見腸胃炎症狀有哪些？</h2>
                
                <Card className="p-6 mb-8">
                  <ul className="space-y-4 text-lg">
                    <li><strong>腹瀉：</strong> 最常見症狀，可能帶黏液或血絲，應補充水分。</li>
                    <li><strong>噁心與嘔吐：</strong> 可能是身體排除毒素的反應，注意電解質流失。</li>
                    <li><strong>腹痛與絞痛：</strong> 特別在進食後或腸道蠕動時加劇。</li>
                    <li><strong>發燒與畏寒：</strong> 多見於病毒或細菌感染。</li>
                    <li><strong>食慾不振與疲倦：</strong> 腸胃炎會影響食慾並導致能量不足。</li>
                    <li><strong>脫水症狀：</strong> 如口乾、尿少、眼窩凹陷、無淚、頭暈等。</li>
                  </ul>
                </Card>

                <h2 className="text-3xl font-bold mb-6 text-primary">腸胃炎怎麼舒緩？7 種有效方法</h2>
                
                <div className="grid md:grid-cols-1 gap-6 mb-8">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">1. 補充水分</h3>
                    <p>採用少量多次喝法，搭配電解質液、運動飲料。</p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">2. BRAT 飲食法</h3>
                    <p>香蕉、白飯、蘋果泥、吐司是易消化的首選。</p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">3. 避免油膩刺激性食物</h3>
                    <p>如炸物、乳製品、生冷飲品。</p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">4. 充足休息</h3>
                    <p>避免運動與熬夜，讓免疫系統好好恢復。</p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">5. 天然舒緩飲品</h3>
                    <p>如薑茶、洋甘菊茶、蜂蜜水（不適用嬰兒）。</p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">6. 補充益生菌</h3>
                    <p>建議選擇乳酸菌、雙歧桿菌，可改善腹瀉與菌叢穩定。</p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">7. 必要時使用藥物</h3>
                    <p>經醫師指示使用止瀉、止吐、胃藥等，切勿自行濫用。</p>
                  </Card>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-primary">什麼時候需要就醫？</h3>
                
                <Card className="p-6 mb-8 bg-red-50 border-red-200">
                  <p className="text-lg mb-4 font-semibold text-red-800">出現以下症狀請立即就醫：</p>
                  <ul className="space-y-2 text-red-700">
                    <li>• 持續高燒超過 38.5°C</li>
                    <li>• 嚴重脫水（尿量極少、皮膚失去彈性）</li>
                    <li>• 血便或黑便</li>
                    <li>• 劇烈腹痛或腹部僵硬</li>
                    <li>• 持續嘔吐無法進食</li>
                    <li>• 症狀持續超過 3 天未改善</li>
                  </ul>
                </Card>

                <div className="text-center mt-12">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">腸胃不適需要專業協助？</h3>
                  <p className="text-lg mb-6">
                    傑初診所提供專業的腸胃科診療服務，為您解決腸胃健康問題。
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

export default GastroenteritisRelief;