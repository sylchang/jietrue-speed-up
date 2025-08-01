import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const MounjaroBlog = () => {
  return (
    <>
      <Helmet>
        <title>猛健樂 Mounjaro 減重針劑｜GLP1、GIP 雙重腸泌素｜中和減重門診｜傑初診所</title>
        <meta name="description" content="猛健樂（Mounjaro）是目前國際最受矚目的雙重腸泌素瘦瘦針，結合 GLP1 + GIP 雙重作用，幫助控制食慾、改善胰島素敏感度與代謝。傑初診所提供專業減重門診。" />
        <meta name="keywords" content="猛健樂,Mounjaro,減重針劑,GLP1,GIP,雙重腸泌素,瘦瘦針,中和減重門診,傑初診所" />
        <meta property="og:title" content="猛健樂 Mounjaro 減重針劑｜GLP1、GIP 雙重腸泌素｜中和減重門診｜傑初診所" />
        <meta property="og:description" content="猛健樂（Mounjaro）是目前國際最受矚目的雙重腸泌素瘦瘦針，結合 GLP1 + GIP 雙重作用，幫助控制食慾、改善胰島素敏感度與代謝。傑初診所提供專業減重門診。" />
        <meta property="og:url" content="https://jietrue.com/mounjaro-blog/" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://jietrue.com/wp-content/uploads/2025/04/猛健樂注射筆操作流程.webp" />
        <link rel="canonical" href="https://jietrue.com/mounjaro-blog/" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-background to-muted/20 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
                猛健樂 Mounjaro 減重針劑介紹｜中和減重門診｜傑初診所
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                目前國際最受矚目的雙重腸泌素瘦瘦針，結合 GLP1 + GIP 雙重作用
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-8">
                  <strong>猛健樂（Mounjaro）</strong> 是目前國際最受矚目的雙重腸泌素瘦瘦針，結合 GLP1 + GIP 雙重作用，幫助控制食慾、改善胰島素敏感度與代謝。
                </p>

                <h2 className="text-3xl font-bold mb-6 text-primary">猛健樂是什麼？</h2>
                
                <p className="text-lg mb-8">
                  由禮來藥廠研發，每週注射一次。結合 GLP1 與 GIP 雙重腸泌素受體促效劑，有效控制體重與血糖。
                </p>

                <h3 className="text-2xl font-semibold mb-4 text-primary">📈 劑量建議</h3>
                
                <img 
                  src="https://jietrue.com/wp-content/uploads/2025/04/猛健樂Mounjaro劑量建議.webp"
                  alt="猛健樂劑量建議圖"
                  className="w-full rounded-lg mb-8"
                />

                <Card className="p-6 mb-8">
                  <p className="text-lg">
                    初始為 2.5mg，每 4 週提升劑量，依醫師指示至 5mg、7.5mg、10mg、15mg。
                  </p>
                </Card>

                <h3 className="text-2xl font-semibold mb-4 text-primary">📦 注射筆操作流程</h3>
                
                <div className="grid md:grid-cols-1 gap-4 mb-8">
                  <img 
                    src="https://jietrue.com/wp-content/uploads/2025/04/猛健樂注射筆操作流程.webp"
                    alt="注射筆操作總覽"
                    className="w-full rounded-lg"
                  />
                  <img 
                    src="https://jietrue.com/wp-content/uploads/2025/04/猛健樂注射筆操作流程-detail.webp"
                    alt="注射筆流程細節"
                    className="w-full rounded-lg"
                  />
                  <img 
                    src="https://jietrue.com/wp-content/uploads/2025/04/猛健樂注射筆操作流程-減重.webp"
                    alt="減重注射操作圖"
                    className="w-full rounded-lg"
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-primary">⚠️ 使用注意事項</h3>
                
                <Card className="p-6 mb-8">
                  <ul className="space-y-3 text-lg">
                    <li>• 每週固定同一天注射，餐前餐後皆可</li>
                    <li>• 注射間隔至少 3 天，超過 4 天未打請跳過</li>
                    <li>• 請勿與胰島素同時混合注射</li>
                    <li>• 禁忌：孕婦、哺乳、腸胃重病、MTC 家族病史</li>
                  </ul>
                </Card>

                <h3 className="text-2xl font-semibold mb-4 text-primary">📍減重門診 預約方式</h3>
                
                <p className="text-lg mb-8">
                  傑初診所提供 GLP1/胃肉毒/Mounjaro 藥物，完整體重管理計畫。歡迎預約諮詢，讓專業醫師為您制定最適合的減重方案。
                </p>

                <div className="text-center mt-12">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">想了解更多猛健樂療程？</h3>
                  <p className="text-lg mb-6">
                    傑初診所提供專業的猛健樂減重門診，為您制定個人化的治療計畫。
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

export default MounjaroBlog;