import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const News = () => {
  const news = [
    {
      id: 1,
      title: "傑初診所 全方位腸胃免疫健檢方案",
      excerpt: "針對現代人腸胃健康需求，推出全方位腸胃免疫健檢方案，讓您全面了解腸胃健康狀況。",
      date: "2025/5/26",
      category: "健檢方案",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400,h_300/https://jietrue.com/wp-content/uploads/2025/05/maypromotion.jpg"
    },
    {
      id: 2,
      title: "2025 母親節醫美專案｜專業定制療程｜傑初診所",
      excerpt: "感謝母親的辛勞，特推出母親節醫美專案，讓媽媽們享受專業的美容療程。",
      date: "2025/4/28",
      category: "醫美優惠",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400,h_300/https://jietrue.com/wp-content/uploads/2025/04/IMG_5287.jpg"
    },
    {
      id: 3,
      title: "🎁 母親節專屬健檢優惠｜高階腸胃鏡檢查只要 $6,800！",
      excerpt: "傑初診所祝全天下媽媽健康美麗，推出母親節健檢優惠，守護媽媽們的健康。",
      date: "2025/4/16",
      category: "健檢優惠",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400,h_300/https://jietrue.com/wp-content/uploads/2025/04/%E6%AF%8D%E8%A6%AA%E7%AF%80%E5%84%AA%E6%83%A0.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">最新消息</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            掌握傑初診所診療異動、醫美活動與健康提醒，提供來自腸胃科、皮膚科、醫美最新消息！
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card 
                key={item.id} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <Button variant="outline" className="w-full group">
                    查看詳情
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              更多消息請關注我們的官方 LINE 帳號或來電詢問
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://lin.ee/bQKntMLD" target="_blank" rel="noopener noreferrer">
                  LINE 官方帳號
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">聯絡我們</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;