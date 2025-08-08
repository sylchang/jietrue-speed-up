import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyActions from '@/components/StickyActions';
import SeoHead from '@/components/SeoHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Eye, Brain, Shield } from 'lucide-react';

const AiEndoscopy = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "AI 智慧內視鏡檢查",
    "description": "導入Fujifilm CAD EYE人工智慧輔助內視鏡，精準辨識早期病變，提高檢查準確率。",
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

  const features = [
    {
      icon: Eye,
      title: "AI 實時輔助",
      description: "即時偵測畫面異常，輔助醫師不漏看",
      color: "bg-medical-50 text-medical-600 border-medical-200"
    },
    {
      icon: Brain,
      title: "專家級準確率",
      description: "判讀腺瘤準確率達 95%，減少誤切與漏診",
      color: "bg-accent-50 text-accent-600 border-accent-200"
    },
    {
      icon: Shield,
      title: "顏色提示更易懂",
      description: "黃色提示癌前病變，綠色代表良性息肉",
      color: "bg-green-50 text-green-600 border-green-200"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="AI 內視鏡檢查｜中和腸胃鏡推薦｜中永和腸胃鏡診所｜傑初診所"
        description="傑初診所導入日本 Fujifilm CAD EYE AI 智慧輔助內視鏡技術，讓每一次腸胃鏡檢查更準確，守護每一公分腸道健康，是中和與永和地區腸胃鏡診所的首選。"
        schema={schema}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              AI 智慧醫療
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI 智慧內視鏡檢查
            </h1>
            <p className="text-xl mb-8 text-white/90">
              不再讓息肉偷偷長大！體驗來自日本的 AI 內視鏡科技，為健康把關每一公分
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="https://pinmed.co/clinic/18ott42a" target="_blank" rel="noopener noreferrer">
                  立即預約檢查
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
          {/* Introduction */}
          <section className="max-w-4xl mx-auto mb-16">
            <Card className="p-8">
              <CardContent className="p-0">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  你知道嗎？即使是資深醫師，在大腸鏡檢查中仍可能 <strong className="text-primary">錯過高達四分之一的息肉</strong>，而這些病灶可能就是未來癌症的起點。傑初診所導入來自日本的 <strong className="text-primary">AI 智慧輔助內視鏡技術 —— CAD EYE</strong>，讓每一次腸胃鏡檢查更準確，守護每一公分腸道健康，是中和與永和地區腸胃鏡診所的首選。
                </p>
              </CardContent>
            </Card>
          </section>

          {/* What is CAD EYE */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">什麼是 Fujifilm CAD EYE？</h2>
                <p className="text-xl text-muted-foreground">
                  內視鏡檢查的新革命，AI 實時輔助，不漏看任何病灶
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    CAD EYE 是由日本 Fujifilm 推出的 <strong className="text-primary">AI 人工智慧輔助內視鏡系統</strong>，能於醫師操作內視鏡過程中，實時標記息肉或病變，大幅提升病灶辨識率。
                  </p>
                  <p className="text-lg leading-relaxed">
                    當醫師操作內視鏡時，CAD EYE 會同步分析畫面，主動標記出可能的息肉或病變。就像多了一位冷靜的副駕駛，幫醫師盯緊每個角落。
                  </p>
                </div>
                <div>
                  <img 
                    src="/images/ai-endoscopy-cad-eye-colonic-type.png" 
                    alt="AI 內視鏡 CAD EYE 判讀良性與惡性息肉影像" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">為什麼選擇 CAD EYE？</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className={`border-2 ${feature.color}`}>
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 rounded-full bg-current/10 w-16 h-16 flex items-center justify-center">
                        <feature.icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Detection Image */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <img 
                src="/images/ai-endoscopy-detection-mode.png" 
                alt="AI 內視鏡 CAD 模式實際顯示偵測病灶與視覺輔助圈" 
                className="w-full h-auto rounded-lg shadow-lg mx-auto"
              />
            </div>
          </section>

          {/* Commitment */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-subtle border-none">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-primary mb-4">我們的承諾</CardTitle>
                  <p className="text-xl text-muted-foreground">
                    給您「不只是看到」的內視鏡檢查，而是「看得更準、發現更早」
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg leading-relaxed mb-8">
                    無論您是定期健檢、腸胃不適或家族有腸癌病史，選擇 <strong className="text-primary">AI 智慧內視鏡檢查</strong> 就是為自己爭取早期發現與早期治療的機會。
                  </p>
                  <div className="bg-white/80 p-6 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-4">
                      傑初診所為中和與永和地區少數引進此技術的腸胃診所，這項技術目前僅有部分醫學中心與高階診所導入，邀您親身體驗智慧守護的新世代醫療。
                    </p>
                    <Button size="lg" asChild>
                      <a href="https://pinmed.co/clinic/18ott42a" target="_blank" rel="noopener noreferrer">
                        立即預約 AI 內視鏡檢查
                      </a>
                    </Button>
                  </div>
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

export default AiEndoscopy;