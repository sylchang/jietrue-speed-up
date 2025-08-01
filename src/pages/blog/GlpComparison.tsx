import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const GlpComparison = () => {
  return (
    <>
      <Helmet>
        <title>GLP-1 藥物有哪些？猛健樂、瑞備氏、Wegovy（Semaglutide）、Orforglipron 完整比較</title>
        <meta name="description" content="GLP-1（胰高血糖素樣胜肽-1）藥物因同時兼顧血糖控制和減重效果，成為糖尿病與肥胖治療的熱門選擇。本文將比較市面上最受矚目的四款療法──猛健樂（Mounjaro）、瑞備氏（Rybelsus）、Wegovy（Semaglutide），以及尚未在台灣上市的口服小分子 GLP-1 Orforglipron。" />
        <meta name="keywords" content="GLP-1,猛健樂,瑞備氏,Wegovy,Semaglutide,Orforglipron,減重,糖尿病,傑初診所" />
        <meta property="og:title" content="GLP-1 藥物有哪些？猛健樂、瑞備氏、Wegovy（Semaglutide）、Orforglipron 完整比較" />
        <meta property="og:description" content="GLP-1（胰高血糖素樣胜肽-1）藥物因同時兼顧血糖控制和減重效果，成為糖尿病與肥胖治療的熱門選擇。本文將比較市面上最受矚目的四款療法──猛健樂（Mounjaro）、瑞備氏（Rybelsus）、Wegovy（Semaglutide），以及尚未在台灣上市的口服小分子 GLP-1 Orforglipron。" />
        <meta property="og:url" content="https://jietrue.com/glp1-comparison/" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://jietrue.com/glp1-comparison/" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-background to-muted/20 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
                GLP-1 藥物有哪些？猛健樂、瑞備氏、Wegovy（Semaglutide）、Orforglipron 完整比較
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                GLP-1（胰高血糖素樣胜肽-1）藥物因同時兼顧血糖控制和減重效果，成為糖尿病與肥胖治療的熱門選擇。
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-8">
                  本文將比較市面上最受矚目的四款療法──猛健樂（Mounjaro）、瑞備氏（Rybelsus）、Wegovy（Semaglutide），以及尚未在台灣上市的口服小分子 GLP-1 Orforglipron。
                </p>

                <h2 className="text-3xl font-bold mb-6 text-primary">GLP-1 藥物完整比較表</h2>
                
                <Card className="p-6 mb-8 overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-gray-300 p-3 text-left">項目</th>
                        <th className="border border-gray-300 p-3 text-left">猛健樂 (Mounjaro)</th>
                        <th className="border border-gray-300 p-3 text-left">瑞備氏 (Rybelsus)</th>
                        <th className="border border-gray-300 p-3 text-left">Wegovy (Semaglutide 注射劑)</th>
                        <th className="border border-gray-300 p-3 text-left">Orforglipron (口服，尚未在台上市)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">劑型</td>
                        <td className="border border-gray-300 p-3">注射劑</td>
                        <td className="border border-gray-300 p-3">口服藥</td>
                        <td className="border border-gray-300 p-3">注射劑</td>
                        <td className="border border-gray-300 p-3">口服藥</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">作用機制</td>
                        <td className="border border-gray-300 p-3">GLP-1 & GIP 雙重促效劑</td>
                        <td className="border border-gray-300 p-3">GLP-1 受體促效劑</td>
                        <td className="border border-gray-300 p-3">GLP-1 受體促效劑</td>
                        <td className="border border-gray-300 p-3">GLP-1 受體促效劑</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">用藥頻率</td>
                        <td className="border border-gray-300 p-3">每週注射一次</td>
                        <td className="border border-gray-300 p-3">每日一次</td>
                        <td className="border border-gray-300 p-3">每週注射一次</td>
                        <td className="border border-gray-300 p-3">每日一次</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">減重效果</td>
                        <td className="border border-gray-300 p-3 font-bold text-primary">平均減重 15%</td>
                        <td className="border border-gray-300 p-3">平均減重約 8–10%</td>
                        <td className="border border-gray-300 p-3">平均減重約 15%</td>
                        <td className="border border-gray-300 p-3">平均減重 7.9%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">糖尿病控制(HbA1c 變化)</td>
                        <td className="border border-gray-300 p-3">平均下降約 1.8%</td>
                        <td className="border border-gray-300 p-3">平均下降約 1.2–1.5%</td>
                        <td className="border border-gray-300 p-3">平均下降約 1.5–2%</td>
                        <td className="border border-gray-300 p-3">平均下降 1.3–1.6%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">使用便利性</td>
                        <td className="border border-gray-300 p-3">每週注射，不需每日服用</td>
                        <td className="border border-gray-300 p-3">無需注射，每日口服即可</td>
                        <td className="border border-gray-300 p-3">每週注射，簡化用藥頻率</td>
                        <td className="border border-gray-300 p-3">每日口服，無需飲食限制</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">適用人群</td>
                        <td className="border border-gray-300 p-3">需強效減重及血糖控制的患者</td>
                        <td className="border border-gray-300 p-3">不喜歡注射但需要減重的患者</td>
                        <td className="border border-gray-300 p-3">專注於減重需求的患者</td>
                        <td className="border border-gray-300 p-3">不喜歡注射，追求方便口服者</td>
                      </tr>
                    </tbody>
                  </table>
                </Card>

                <h3 className="text-2xl font-semibold mb-4 text-primary">GLP-1 口服哪裡買？</h3>
                
                <p className="text-lg mb-6">
                  傑初診所目前提供：<strong>猛健樂 (Mounjaro)</strong>，<strong>瑞備氏 (Rybelsus)</strong>，以及未來可望引進的 <strong>Orforglipron</strong>（尚未在台上市）。
                </p>

                <div className="text-center mt-12">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">想了解更多 GLP-1 減重療程？</h3>
                  <p className="text-lg mb-6">
                    傑初診所提供專業的 GLP-1 減重門診諮詢，為您制定最適合的治療計畫。
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

export default GlpComparison;