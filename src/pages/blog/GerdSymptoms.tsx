import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const GerdSymptoms = () => {
  return (
    <>
      <Helmet>
        <title>胃食道逆流的常見症狀有哪些？｜傑初診所中和永和腸胃科</title>
        <meta name="description" content="胃食道逆流是常見的消化系統疾病，了解症狀有助於及早發現和治療。" />
        <meta name="keywords" content="胃食道逆流,GERD,胃酸逆流,腸胃科,傑初診所,中和,永和" />
        <meta property="og:title" content="胃食道逆流的常見症狀有哪些？｜傑初診所中和永和腸胃科" />
        <meta property="og:description" content="胃食道逆流是常見的消化系統疾病，了解症狀有助於及早發現和治療。" />
        <meta property="og:url" content="https://jietrue.com/gerd-symptoms" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://jietrue.com/gerd-symptoms" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-background to-muted/20 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
                胃食道逆流的常見症狀有哪些？
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                胃食道逆流是常見的消化系統疾病，了解症狀有助於及早發現和治療
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">什麼是胃食道逆流？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">
                      胃食道逆流（GERD）是指胃酸和胃內容物逆流到食道，造成食道黏膜發炎的疾病。這是現代人常見的消化系統問題，與生活習慣、飲食型態密切相關。
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">典型症狀</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-3">🔥 主要症狀</h4>
                        <ul className="space-y-2">
                          <li>• <strong>火燒心：</strong>胸口灼熱感</li>
                          <li>• <strong>胃酸逆流：</strong>酸液上湧</li>
                          <li>• <strong>胸痛：</strong>類似心臟病的胸痛</li>
                          <li>• <strong>吞嚥困難：</strong>食物卡住感</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-3">⚠️ 次要症狀</h4>
                        <ul className="space-y-2">
                          <li>• <strong>慢性咳嗽：</strong>夜間加劇</li>
                          <li>• <strong>聲音沙啞：</strong>聲帶受損</li>
                          <li>• <strong>喉嚨痛：</strong>持續性不適</li>
                          <li>• <strong>口臭：</strong>胃酸味道</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">症狀出現時機</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>飯後：</strong>用餐後30分鐘到2小時內</li>
                      <li><strong>躺下時：</strong>睡覺或平躺時加劇</li>
                      <li><strong>彎腰時：</strong>腹部壓力增加</li>
                      <li><strong>運動後：</strong>劇烈運動可能誘發</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">嚴重併發症警訊</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <p className="text-red-800 font-semibold mb-2">以下症狀需立即就醫：</p>
                      <ul className="list-disc pl-6 space-y-1 text-red-700">
                        <li>嚴重胸痛伴隨呼吸困難</li>
                        <li>吞嚥劇痛或完全無法吞嚥</li>
                        <li>嘔吐物帶血或呈咖啡色</li>
                        <li>體重急劇下降</li>
                        <li>持續性聲音沙啞</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">預防與改善方法</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-3">✓ 生活調整</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 少量多餐，避免過飽</li>
                          <li>• 睡前3-4小時停止進食</li>
                          <li>• 抬高床頭15-20公分</li>
                          <li>• 維持理想體重</li>
                          <li>• 戒菸戒酒</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-3">✓ 飲食建議</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 避免油膩、辛辣食物</li>
                          <li>• 減少咖啡、茶、可樂</li>
                          <li>• 避免柑橘類水果</li>
                          <li>• 細嚼慢嚥</li>
                          <li>• 充足水分攝取</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">何時需要就醫？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>症狀每週發生超過2次</li>
                      <li>症狀持續超過數週</li>
                      <li>影響日常生活品質</li>
                      <li>自我調整無效</li>
                      <li>出現併發症警訊</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <h3 className="text-xl font-semibold mb-4">胃食道逆流困擾您嗎？</h3>
                <p className="text-muted-foreground mb-6">
                  傑初診所提供專業的胃食道逆流診療服務，幫助您改善症狀
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

export default GerdSymptoms;