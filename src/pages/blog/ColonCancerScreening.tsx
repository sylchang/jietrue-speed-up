import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ColonCancerScreening = () => {
  return (
    <>
      <Helmet>
        <title>腸癌篩檢糞便檢查異常怎麼辦？｜傑初診所中和永和腸胃科</title>
        <meta name="description" content="糞便潛血檢查異常不一定是癌症，了解後續檢查步驟讓您安心面對。" />
        <meta name="keywords" content="腸癌篩檢,糞便潛血,大腸癌,腸胃科,傑初診所,中和,永和" />
        <meta property="og:title" content="腸癌篩檢糞便檢查異常怎麼辦？｜傑初診所中和永和腸胃科" />
        <meta property="og:description" content="糞便潛血檢查異常不一定是癌症，了解後續檢查步驟讓您安心面對。" />
        <meta property="og:url" content="https://jietrue.com/colon-cancer-screening" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://jietrue.com/colon-cancer-screening" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-background to-muted/20 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
                腸癌篩檢糞便檢查異常怎麼辦？
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                糞便潛血檢查異常不一定是癌症，了解後續檢查步驟讓您安心面對
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">糞便潛血檢查是什麼？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed mb-4">
                      糞便潛血檢查（FOBT）是國健署推廣的大腸癌篩檢方式，檢測糞便中是否含有肉眼看不到的微量血液。這是一個簡單、非侵入性的初步篩檢工具。
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-blue-800"><strong>篩檢對象：</strong>50-74歲民眾，每2年1次免費篩檢</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">檢查結果異常代表什麼？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
                      <p className="text-yellow-800 font-semibold">重要提醒：異常結果≠罹患大腸癌！</p>
                    </div>
                    <p className="leading-relaxed mb-4">
                      糞便潛血檢查陽性反應可能的原因包括：
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-3">🚨 良性原因</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 痔瘡出血</li>
                          <li>• 肛裂</li>
                          <li>• 大腸息肉</li>
                          <li>• 腸道發炎</li>
                          <li>• 憩室症</li>
                          <li>• 月經污染（女性）</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-3">⚠️ 需進一步檢查</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 大腸癌</li>
                          <li>• 大腸腺瘤</li>
                          <li>• 發炎性腸病</li>
                          <li>• 其他腸道病變</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">後續檢查步驟</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-blue-600">步驟一：尋求專科醫師諮詢</h4>
                        <p className="text-sm text-gray-600">建議至腸胃科或大腸直腸外科門診，由專科醫師評估</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-green-600">步驟二：安排大腸鏡檢查</h4>
                        <p className="text-sm text-gray-600">這是最準確的診斷工具，可直接觀察腸道內部狀況</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-purple-600">步驟三：根據結果制定治療計畫</h4>
                        <p className="text-sm text-gray-600">若發現異常，醫師會依病情給予適當的治療建議</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">大腸鏡檢查的重要性</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-3">✓ 檢查優點</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 直接觀察腸道內部</li>
                          <li>• 可同時切除息肉</li>
                          <li>• 取得組織化驗</li>
                          <li>• 準確度最高</li>
                          <li>• 一次檢查多重效果</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-3">📊 檢查發現</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 約70%為良性病變</li>
                          <li>• 約20%為息肉</li>
                          <li>• 約5-10%為大腸癌</li>
                          <li>• 早期發現治癒率高</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">檢查前準備</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">🥗 飲食調整</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>檢查前3天開始低渣飲食</li>
                          <li>檢查前1天改為流質飲食</li>
                          <li>避免紅色食物和飲料</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-600 mb-2">💊 清腸準備</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>按時服用清腸藥物</li>
                          <li>大量喝水幫助清腸</li>
                          <li>確認排便呈清澈液體</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">檢查後的注意事項</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>正常結果：</strong>建議3-5年後再次篩檢</li>
                      <li><strong>發現息肉：</strong>依醫師建議定期追蹤</li>
                      <li><strong>確診大腸癌：</strong>盡早開始治療，預後通常良好</li>
                      <li><strong>持續追蹤：</strong>即使結果正常也要定期篩檢</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-800">預防大腸癌的生活習慣</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3">🥗 飲食建議</h4>
                        <ul className="space-y-1 text-sm text-green-800">
                          <li>• 增加蔬果攝取</li>
                          <li>• 選擇全穀類食物</li>
                          <li>• 減少紅肉和加工肉品</li>
                          <li>• 避免高溫烹調</li>
                          <li>• 充足水分攝取</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3">🏃 生活習慣</h4>
                        <ul className="space-y-1 text-sm text-green-800">
                          <li>• 規律運動</li>
                          <li>• 維持理想體重</li>
                          <li>• 戒菸戒酒</li>
                          <li>• 規律作息</li>
                          <li>• 定期健康檢查</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <h3 className="text-xl font-semibold mb-4">糞便潛血檢查異常需要進一步檢查？</h3>
                <p className="text-muted-foreground mb-6">
                  傑初診所提供專業的大腸鏡檢查服務，幫助您安心面對篩檢結果
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

export default ColonCancerScreening;