import Navigation from "@/components/Navigation";
import StickyActions from "@/components/StickyActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const HealthInfo = () => {
  const articles = [
    {
      id: 1,
      title: "猛健樂 vs 善纖達",
      excerpt: "詳細比較兩種 GLP-1 減重藥物的差異、效果與適用族群，幫助您選擇最適合的減重方案。",
      date: "2025/5/26",
      category: "減重知識",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400,h_300/https://jietrue.com/wp-content/uploads/2025/05/%E7%8C%9B%E5%81%A5%E6%A8%82vs%E5%96%84%E7%BA%96%E9%81%94.jpg"
    },
    {
      id: 2,
      title: "GLP-1 藥物有哪些? GLP-1 哪裡買?",
      excerpt: "完整介紹市面上各種 GLP-1 藥物的特性、購買管道與注意事項。",
      date: "2025/5/13",
      category: "減重知識",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400,h_300/https://jietrue.com/wp-content/uploads/2025/05/GLP1%E8%97%A5%E7%89%A9%E5%B7%AE%E7%95%B0.jpg"
    },
    {
      id: 3,
      title: "司美格魯肽 有望逆轉脂肪肝纖維化！ESSENCE 研究重大突破",
      excerpt: "最新研究顯示司美格魯肽不僅能減重，更有望逆轉脂肪肝纖維化，為患者帶來新希望。",
      date: "2025/5/3",
      category: "醫學新知",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400,h_300/https://jietrue.com/wp-content/uploads/2025/05/%E7%98%A6%E7%98%A6%E9%87%9D-%E6%B8%9B%E9%87%8D-%E7%98%A6%E7%98%A6%E7%AD%86.png"
    }
  ];

  const healthTopics = [
    {
      title: "腸胃保健",
      description: "胃食道逆流、腸躁症、消化性潰瘍等腸胃疾病的預防與治療",
      icon: "🫃"
    },
    {
      title: "肝膽健康",
      description: "B型肝炎、C型肝炎、脂肪肝、肝硬化的診斷與管理",
      icon: "🫀"
    },
    {
      title: "減重管理",
      description: "科學減重方法、GLP-1 藥物、飲食控制與運動指導",
      icon: "⚖️"
    },
    {
      title: "皮膚保養",
      description: "青春痘、濕疹、落髮等皮膚問題的治療與保養",
      icon: "🧴"
    },
    {
      title: "醫美知識",
      description: "電波拉提、音波緊緻、雷射美容等醫美療程介紹",
      icon: "✨"
    },
    {
      title: "慢性病管理",
      description: "高血壓、糖尿病、高血脂等慢性病的控制與預防",
      icon: "💊"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <StickyActions />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">衛教資訊</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            掌握傑初診所最新衛教資訊，營養保健、肝膽腸胃、心血管衛教、抗老防癌、醫美新知！
          </p>
        </div>
      </section>

      {/* Health Topics Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-medical-text mb-4">
              健康主題
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              涵蓋各種健康主題，提供專業可靠的醫療資訊
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthTopics.map((topic, index) => (
              <Card 
                key={topic.title} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-xl font-bold text-medical-text mb-3 group-hover:text-primary transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {topic.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-medical-text mb-4">
              最新文章
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              最新的醫療資訊與健康知識，由專業醫師團隊為您精心整理
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card 
                key={article.id} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Button variant="outline" className="w-full group">
                    閱讀全文
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              更多衛教資訊請關注我們的社群媒體或來電諮詢
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://lin.ee/bQKntMLD" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5 mr-2" />
                  LINE 官方帳號
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">專業諮詢</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthInfo;