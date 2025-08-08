import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyActions from '@/components/StickyActions';
import SeoHead from '@/components/SeoHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Volume2, Syringe, Clock, Shield, Star } from 'lucide-react';

const Aesthetic = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "醫學美容",
    "description": "電波音波拉提、雷射除斑等醫學美容服務",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "傑初診所",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "中安街102號",
        "addressLocality": "中和區",
        "addressRegion": "新北市",
        "addressCountry": "TW"
      },
      "telephone": "02-8231-6869"
    }
  };

  const thermaFeatures = [
    {
      title: "四種探頭",
      description: "分別針對臉部與身體不同區域設計"
    },
    {
      title: "七段式冷噴技術",
      description: "幾乎無痛、無恢復期"
    },
    {
      title: "膠原蛋白增生",
      description: "臨床研究顯示效果優於他牌"
    }
  ];

  const thermaProbes = [
    "緊膚探頭（5cm² / 4cm²）：對應臉部不同區域",
    "亮眼探頭（0.25cm²）：改善眼周細紋",
    "身體探頭（20cm²）：快速拉提腿部線條"
  ];

  const hifuFeatures = [
    "雙模式：點狀與連續聚焦，417 個熱凝結點",
    "探頭種類多達 10 種，無死角治療",
    "治療時間短、舒適性提升 2.5 倍"
  ];

  const botoxFeatures = [
    "治療時間 5–10 分鐘，快速無恢復期",
    "效果可持續約 4–6 個月，長期施打可延長效果",
    "適合治療腋下多汗、法令紋、蘋果肌下垂等"
  ];

  const treatments = [
    {
      icon: Zap,
      title: "十倍電波（10THERMA）",
      image: "/images/十倍電波-image.png",
      features: thermaFeatures,
      details: thermaProbes,
      description: "韓國大吉醫院臨床顯示，膠原增生明顯高於他牌；非侵入性、舒適快速、幾乎無恢復期。"
    },
    {
      icon: Volume2,
      title: "海芙音波 Ultraformer 媚必提",
      image: "/images/海芙音波.webp",
      features: hifuFeatures,
      description: "使用高強度聚焦超聲波（HIFU），分層傳送能量至皮膚不同層次，精準刺激膠原蛋白增生並達到拉提效果。海芙媚必提採用 MPT 微脈衝技術，全面升級拉提力道與治療效率。"
    },
    {
      icon: Syringe,
      title: "肉毒注射",
      image: "/images/肉毒.jpg",
      features: botoxFeatures,
      description: "由醫師精準注射肉毒桿菌素A型至動態紋路肌群，放鬆肌肉、撫平皺紋，恢復年輕外觀。常見部位：抬頭紋、皺眉紋、魚尾紋。常見品牌：BOTOX®、Dysport® 皇家肉毒。"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="醫學美容｜電波音波拉提、雷射除斑｜傑初診所"
        description="傑初診所提供專業醫學美容服務，包含十倍電波拉提、海芙音波拉提、肉毒注射等療程，幫您重拾青春美麗。"
        schema={schema}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              醫學美容
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              電波音波拉提、雷射除斑
            </h1>
            <p className="text-xl mb-8 text-white/90">
              專業醫學美容服務，重拾青春美麗，展現自信光采
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="https://jietrue.simplybook.asia/" target="_blank" rel="noopener noreferrer">
                  預約醫美諮詢
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="https://lin.ee/bQKntMLD" target="_blank" rel="noopener noreferrer">
                  LINE 諮詢
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Treatments */}
          {treatments.map((treatment, index) => (
            <section key={index} className="mb-20">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-full bg-primary/10">
                        <treatment.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">{treatment.title}</h2>
                    </div>
                    
                    <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                      {treatment.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {treatment.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Star className="w-3 h-3 text-white" />
                          </div>
                          <div>
                            {typeof feature === 'string' ? (
                              <p>{feature}</p>
                            ) : (
                              <>
                                <h4 className="font-semibold">{feature.title}</h4>
                                <p className="text-muted-foreground text-sm">{feature.description}</p>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Details for specific treatments */}
                    {treatment.details && (
                      <Card className="bg-gradient-subtle border-none">
                        <CardContent className="p-6">
                          <ul className="space-y-2">
                            {treatment.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-sm">
                                • {detail}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                  
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">為什麼選擇傑初診所醫美？</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center border-2 border-primary/20">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">專業安全</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      專業醫師操作，醫學中心等級設備，確保治療安全有效
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center border-2 border-primary/20">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">快速恢復</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      微創無痛技術，恢復期短，不影響日常生活作息
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center border-2 border-primary/20">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">自然效果</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      追求自然美感，個人化治療方案，展現您的獨特魅力
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-gradient-primary border-none text-white">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">開始您的美麗蛻變之旅</h2>
                  <p className="mb-6 text-white/90">
                    專業醫療團隊為您量身打造個人化美容方案
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <a href="https://jietrue.simplybook.asia/" target="_blank" rel="noopener noreferrer">
                      預約醫美諮詢
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <StickyActions />
      <Footer />
    </div>
  );
};

export default Aesthetic;