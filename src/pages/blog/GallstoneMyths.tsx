import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const GallstoneMyths = () => {
  return (
    <>
      <Helmet>
        <title>膽結石是因為不愛喝水？｜傑初診所中和永和腸胃科</title>
        <meta name="description" content="膽結石的成因很多，不只是喝水不足，了解正確的預防方法很重要。" />
        <meta name="keywords" content="膽結石,膽囊,腸胃科,傑初診所,中和,永和,預防" />
        <meta property="og:title" content="膽結石是因為不愛喝水？｜傑初診所中和永和腸胃科" />
        <meta property="og:description" content="膽結石的成因很多，不只是喝水不足，了解正確的預防方法很重要。" />
        <meta property="og:url" content="https://jietrue.com/gallstones-myths" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://jietrue.com/gallstones-myths" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-background to-muted/20 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
                膽結石是因為不愛喝水？
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                膽結石的成因很多，不只是喝水不足，了解正確的預防方法很重要
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">膽結石真的是因為不喝水嗎？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                      <p className="text-blue-800 font-semibold">答案：不完全正確！</p>
                    </div>
                    <p className="leading-relaxed">
                      雖然水分不足可能間接影響膽結石形成，但膽結石的主要成因其實更複雜。膽結石是膽汁中的成分（如膽固醇、膽紅素）結晶沉積形成，與膽汁濃度、膽囊收縮功能等多種因素有關。
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">膽結石的真正成因</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">🧬 主要因素</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><strong>膽固醇過高：</strong>膽汁中膽固醇濃度過高</li>
                          <li><strong>膽囊功能異常：</strong>膽囊收縮不良</li>
                          <li><strong>膽汁成分失衡：</strong>膽鹽不足或膽紅素過多</li>
                          <li><strong>遺傳因素：</strong>家族史增加風險</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">⚠️ 危險因子</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><strong>性別：</strong>女性風險較高（荷爾蒙影響）</li>
                          <li><strong>年齡：</strong>40歲以上風險增加</li>
                          <li><strong>肥胖：</strong>BMI過高</li>
                          <li><strong>快速減重：</strong>短期內體重劇降</li>
                          <li><strong>懷孕：</strong>孕期荷爾蒙變化</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">常見的膽結石迷思</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-red-600">❌ 迷思一：只要多喝水就不會得膽結石</h4>
                        <p className="text-sm text-gray-600">雖然充足水分有助健康，但無法直接預防膽結石形成</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-red-600">❌ 迷思二：膽結石一定會痛</h4>
                        <p className="text-sm text-gray-600">約80%的膽結石患者沒有症狀，可能多年都不知道</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-red-600">❌ 迷思三：瘦的人不會得膽結石</h4>
                        <p className="text-sm text-gray-600">快速減重反而會增加膽結石風險</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-red-600">❌ 迷思四：膽結石可以用藥物完全溶解</h4>
                        <p className="text-sm text-gray-600">藥物溶解效果有限，且復發率高</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">膽結石的症狀</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-600 mb-3">⚡ 急性症狀</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 右上腹劇烈疼痛</li>
                          <li>• 疼痛放射至肩胛骨</li>
                          <li>• 噁心嘔吐</li>
                          <li>• 發燒寒顫</li>
                          <li>• 黃疸（皮膚眼白變黃）</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-3">📊 慢性症狀</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 飯後上腹不適</li>
                          <li>• 脹氣打嗝</li>
                          <li>• 消化不良</li>
                          <li>• 對油膩食物敏感</li>
                          <li>• 間歇性右上腹痛</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">正確的預防方法</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-3">🥗 飲食調整</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 低脂飲食，避免高膽固醇食物</li>
                          <li>• 增加纖維攝取</li>
                          <li>• 規律進食，避免空腹過久</li>
                          <li>• 適量堅果（富含不飽和脂肪）</li>
                          <li>• 減少精緻糖攝取</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-600 mb-3">🏃 生活習慣</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 維持理想體重</li>
                          <li>• 規律運動</li>
                          <li>• 避免快速減重</li>
                          <li>• 充足睡眠</li>
                          <li>• 定期健康檢查</li>
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
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <p className="text-red-800 font-semibold mb-2">出現以下症狀請立即就醫：</p>
                      <ul className="list-disc pl-6 space-y-1 text-red-700">
                        <li>右上腹持續劇痛超過30分鐘</li>
                        <li>發燒合併腹痛</li>
                        <li>皮膚或眼白變黃</li>
                        <li>嚴重噁心嘔吐</li>
                        <li>茶色尿液或灰白色糞便</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <h3 className="text-xl font-semibold mb-4">擔心膽結石問題？</h3>
                <p className="text-muted-foreground mb-6">
                  傑初診所提供專業的膽結石診療服務，幫助您及早發現和治療
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

export default GallstoneMyths;