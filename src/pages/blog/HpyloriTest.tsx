import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StickyActions } from "@/components/StickyActions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const HpyloriTest = () => {
  return (
    <>
      <Helmet>
        <title>幽門螺旋桿菌檢查｜吹氣檢查、糞便、胃鏡取樣一次看懂｜傑初診所</title>
        <meta name="description" content="想檢查是否感染幽門螺旋桿菌（H. pylori）時，常見的三種方式包括：吹氣測試、糞便檢體、與胃鏡取樣。每種檢查方式都有各自的優點與限制，傑初診所為您整理如下。" />
        <meta name="keywords" content="幽門螺旋桿菌檢查,H. pylori,吹氣測試,糞便檢查,胃鏡取樣,傑初診所,碳13吹氣測試" />
        <meta property="og:title" content="幽門螺旋桿菌檢查｜吹氣檢查、糞便、胃鏡取樣一次看懂｜傑初診所" />
        <meta property="og:description" content="想檢查是否感染幽門螺旋桿菌（H. pylori）時，常見的三種方式包括：吹氣測試、糞便檢體、與胃鏡取樣。每種檢查方式都有各自的優點與限制，傑初診所為您整理如下。" />
        <meta property="og:url" content="https://jietrue.com/hpylori-test/" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://jietrue.com/wp-content/uploads/2025/04/幽門螺旋桿菌檢查.png" />
        <link rel="canonical" href="https://jietrue.com/hpylori-test/" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-background to-muted/20 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
                幽門螺旋桿菌檢查方式介紹
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                想檢查是否感染幽門螺旋桿菌（H. pylori）時，常見的三種方式包括：吹氣測試、糞便檢體、與胃鏡取樣
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-8">
                  每種檢查方式都有各自的優點與限制，傑初診所為您整理如下：
                </p>

                <img 
                  src="https://jietrue.com/wp-content/uploads/2025/04/幽門螺旋桿菌檢查.png"
                  alt="幽門螺旋桿菌檢查流程示意圖"
                  className="w-full rounded-lg mb-8"
                />

                <h2 className="text-3xl font-bold mb-6 text-primary">1️⃣ 碳13吹氣測試</h2>
                
                <Card className="p-6 mb-8">
                  <div className="space-y-4">
                    <div>
                      <span className="text-green-600 font-semibold">✅ 優點：</span>
                      <span className="text-lg ml-2">非侵入性、快速、無需麻醉</span>
                    </div>
                    <div>
                      <span className="text-primary font-semibold">💰 費用：</span>
                      <span className="text-lg ml-2">自費：1300 元</span>
                    </div>
                    <div>
                      <span className="text-orange-600 font-semibold">📋 注意事項：</span>
                      <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                        <li>需空腹 2~3 小時（不可喝水、吃東西）</li>
                        <li>若有服用胃藥，需事先停藥，請就診時告知醫師</li>
                        <li>建議於上午 09:30 前到診，當天送檢誤差較低</li>
                      </ul>
                    </div>
                    <div>
                      <span className="text-blue-600 font-semibold">🔬 檢查流程：</span>
                      <ol className="list-decimal list-inside ml-4 space-y-2 mt-2">
                        <li>到診所掛號開單</li>
                        <li>先吹第一次氣體</li>
                        <li>飲用測試藥水後等待 30 分鐘</li>
                        <li>吹第二次氣體即可完成</li>
                        <li>1～2 天後回診看報告</li>
                      </ol>
                    </div>
                  </div>
                </Card>

                <h2 className="text-3xl font-bold mb-6 text-primary">2️⃣ 幽門桿菌糞便檢驗採檢法</h2>
                
                <Card className="p-6 mb-8">
                  <div className="space-y-4">
                    <div>
                      <span className="text-green-600 font-semibold">✅ 優點：</span>
                      <span className="text-lg ml-2">非侵入性，精準度高</span>
                    </div>
                    <div>
                      <span className="text-primary font-semibold">💰 費用：</span>
                      <span className="text-lg ml-2">自費：500 元</span>
                    </div>
                    <div>
                      <span className="text-orange-600 font-semibold">📋 注意事項：</span>
                      <span className="text-lg ml-2">無法當場完成，需帶檢體盒回家再送回診所</span>
                    </div>
                    <div>
                      <span className="text-blue-600 font-semibold">🔬 檢查流程：</span>
                      <ol className="list-decimal list-inside ml-4 space-y-2 mt-2">
                        <li>到診所開檢查單並領取藍蓋檢體管</li>
                        <li>回家如廁時採檢，裝入管中</li>
                        <li>隔日送回診所給護理師即可</li>
                      </ol>
                    </div>
                  </div>
                </Card>

                <h2 className="text-3xl font-bold mb-6 text-primary">3️⃣ 胃鏡取樣檢查</h2>
                
                <Card className="p-6 mb-8">
                  <div className="space-y-4">
                    <div>
                      <span className="text-green-600 font-semibold">✅ 優點：</span>
                      <span className="text-lg ml-2">精準度最高，可同步觀察胃部狀況</span>
                    </div>
                    <div>
                      <span className="text-primary font-semibold">💰 費用：</span>
                      <span className="text-lg ml-2">健保條件內給付，若無症狀需自費 1250 元</span>
                    </div>
                    <div>
                      <span className="text-orange-600 font-semibold">📋 注意事項：</span>
                      <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                        <li>需空腹 6~8 小時</li>
                        <li>建議搭配 <a href="/painless-endoscopy/" className="text-primary underline">無痛胃鏡</a> 同步進行</li>
                      </ul>
                    </div>
                    <div>
                      <span className="text-blue-600 font-semibold">🔬 檢查流程：</span>
                      <ol className="list-decimal list-inside ml-4 space-y-2 mt-2">
                        <li>到診所掛號開單，空腹狀態下與醫師討論</li>
                        <li>若有胃炎、潰瘍或符合健保規定 → 可健保檢測</li>
                        <li>若無病灶可能需自費檢測</li>
                      </ol>
                    </div>
                  </div>
                </Card>

                <div className="text-center mt-12">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">需要幽門螺旋桿菌檢查？</h3>
                  <p className="text-lg mb-6">
                    傑初診所提供完整的幽門螺旋桿菌檢查服務，為您選擇最適合的檢查方式。
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

export default HpyloriTest;