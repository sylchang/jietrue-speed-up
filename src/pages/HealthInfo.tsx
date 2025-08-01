
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const HealthInfo = () => {
  const blogPosts = [
    {
      title: "【減重突破】猛健樂 (Tirzepatide) vs 善纖達 (Semaglutide)：史上最強瘦瘦針對決",
      excerpt: "《新英格蘭醫學期刊》2024年最新研究揭示猛健樂(Tirzepatide)與善纖達(Semaglutide)在減重效果上的驚人差異！",
      link: "/tirzepatide-semaglutide-weight-loss-comparison-yonghe-zhonghe",
      image: "https://jietrue.com/wp-content/uploads/2025/05/猛健樂vs善纖達.jpg"
    },
    {
      title: "GLP-1 藥物有哪些？猛健樂、瑞備氏、Wegovy（Semaglutide）、Orforglipron 完整比較",
      excerpt: "GLP-1（胰高血糖素樣胜肽-1）藥物因同時兼顧血糖控制和減重效果，成為糖尿病與肥胖治療的熱門選擇。",
      link: "/glp1-comparison",
      image: "https://jietrue.com/wp-content/uploads/2025/04/GLP-1藥物比較.jpg"
    },
    {
      title: "司美格魯肽 有望逆轉脂肪肝纖維化",
      excerpt: "在剛發表的 ESSENCE phase III 臨床試驗中，GLP-1 類藥物 司美格魯肽 首次在人體肝切片中證實能有效改善脂肪性肝炎（NASH）所導致的肝纖維化。",
      link: "/ozempic",
      image: "https://jietrue.com/wp-content/uploads/2025/05/瘦瘦針-減重-瘦瘦筆.png"
    },
    {
      title: "幽門螺旋桿菌檢查｜吹氣檢查、糞便、胃鏡取樣一次看懂",
      excerpt: "想檢查是否感染幽門螺旋桿菌（H. pylori）時，常見的三種方式包括：吹氣測試、糞便檢體、與胃鏡取樣。",
      link: "/hpylori-test",
      image: "https://jietrue.com/wp-content/uploads/2025/04/幽門螺旋桿菌檢查.png"
    },
    {
      title: "減痛麻醉 vs 舒眠麻醉比較｜內視鏡鎮靜選擇介紹",
      excerpt: "進行無痛胃鏡或大腸鏡檢查前，該選哪種麻醉方式呢？傑初診所提供「減痛麻醉（Midazolam+Fentanyl）」與「舒眠麻醉（Propofol）」。",
      link: "/anesthesia-info",
      image: "https://jietrue.com/wp-content/uploads/2025/04/傑初診所_減痛與舒眠麻醉衛教單.jpg"
    },
    {
      title: "猛健樂 Mounjaro 減重針劑介紹｜中和減重門診",
      excerpt: "猛健樂（Mounjaro）是目前國際最受矚目的雙重腸泌素瘦瘦針，結合 GLP1 + GIP 雙重作用。",
      link: "/mounjaro-blog",
      image: "https://jietrue.com/wp-content/uploads/2025/04/猛健樂注射筆操作流程.webp"
    },
    {
      title: "腸胃炎症狀大解析：腸胃炎怎麼舒緩？7種方法一次看",
      excerpt: "突如其來的腹瀉、噁心或腹痛，可能都是腸胃炎的警訊！了解症狀與舒緩方法，讓您更安心面對腸胃不適。",
      link: "/gastroenteritis-symptoms-relief",
      image: "https://jietrue.com/wp-content/uploads/2025/04/腸胃炎怎麼舒緩.png"
    },
    {
      title: "便利商店也能完成低渣飲食？大腸鏡前懶人飲食推薦",
      excerpt: "面臨大腸鏡檢查，最困擾的就是「不知道該吃什麼」。其實，低渣飲食不需要特別下廚，台灣便利商店就能輕鬆搞定。",
      link: "/low-residue-convenience-food",
      image: "https://jietrue.com/wp-content/uploads/2025/04/便利商店也能完成低渣飲食.png"
    }
  ];

  return (
    <>
      <Helmet>
        <title>衛教資訊｜健康知識分享｜傑初診所中和永和腸胃科皮膚科</title>
        <meta name="description" content="傑初診所提供專業醫療衛教資訊，包含腸胃科、皮膚科、減重門診等健康知識分享，幫助您了解疾病預防與治療方式。" />
        <meta name="keywords" content="衛教資訊,健康知識,腸胃科,皮膚科,減重,傑初診所,中和,永和" />
        <meta property="og:title" content="衛教資訊｜健康知識分享｜傑初診所中和永和腸胃科皮膚科" />
        <meta property="og:description" content="傑初診所提供專業醫療衛教資訊，包含腸胃科、皮膚科、減重門診等健康知識分享，幫助您了解疾病預防與治療方式。" />
        <meta property="og:url" content="https://jietrue.com/blog/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://jietrue.com/blog/" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-background to-muted/20 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
                衛教資訊
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                傑初診所提供專業醫療衛教資訊，幫助您了解健康知識與疾病預防
              </p>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2 text-lg">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link to={post.link}>閱讀全文</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
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

export default HealthInfo;
