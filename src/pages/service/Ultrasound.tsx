import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyActions from '@/components/StickyActions';
import SeoHead from '@/components/SeoHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Shield, FileText, Activity } from 'lucide-react';

const Ultrasound = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "高解析腹部超音波檢查",
    "description": "採用日本頂級 Fujifilm Arietta 65 彩色高解析超音波儀器，醫學中心等級設備，觀察肝膽胰脾腎與甲狀腺等器官。",
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

  const diseases = [
    "脂肪肝、肝硬化、肝癌",
    "膽結石、膽息肉",
    "胰臟癌、胰腺腫塊",
    "腎臟結石、水腎、腫瘤",
    "甲狀腺腫瘤、結節"
  ];

  const preExamNotes = [
    "檢查前空腹 4~8 小時，避免氣體影響影像",
    "避免碳酸飲料與易產氣食物",
    "檢查為非侵入性，結束後可立即恢復日常活動與飲食"
  ];

  const features = [
    {
      icon: Activity,
      title: "醫學中心等級設備",
      description: "日本頂級 Fujifilm Arietta 65 彩色高解析超音波儀器"
    },
    {
      icon: Shield,
      title: "無痛無輻射",
      description: "非侵入性檢查，安全無副作用"
    },
    {
      icon: Clock,
      title: "快速便利",
      description: "檢查時間短，無需特殊準備"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="中和高解析腹部超音波｜肝膽胰腎甲狀腺彩色超音波｜傑初診所"
        description="傑初診所採用日本頂級 Fujifilm Arietta 65 彩色高解析超音波儀器，醫學中心等級設備，由專業醫師親自操作，觀察肝膽胰脾腎與甲狀腺等器官，早期發現疾病、追蹤慢性病變。"
        schema={schema}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              高解析超音波檢查
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              肝膽胰腎甲狀腺彩色超音波
            </h1>
            <p className="text-xl mb-8 text-white/90">
              採用日本頂級 Fujifilm Arietta 65 彩色高解析超音波儀器，醫學中心等級設備
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="https://pinmed.co/clinic/18ott42a" target="_blank" rel="noopener noreferrer">
                  網頁預約
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="https://lin.ee/bQKntMLD" target="_blank" rel="noopener noreferrer">
                  LINE 預約
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Equipment Image */}
          <section className="max-w-4xl mx-auto mb-16 text-center">
            <img 
              src="/images/超音波image-removebg-preview.png" 
              alt="中和高解析腹部超音波 彩色超音波 Fujifilm Arietta 65 儀器診所設備" 
              className="mx-auto h-64 object-contain mb-8"
            />
            <p className="text-lg text-muted-foreground">
              傑初診所採用日本頂級 <strong className="text-primary">Fujifilm Arietta 65</strong> 彩色高解析超音波儀器，醫學中心等級設備，由專業醫師親自操作，觀察肝膽胰脾腎與甲狀腺等器官，早期發現疾病、追蹤慢性病變。
            </p>
          </section>

          {/* Features */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">檢查特色</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center border-2 border-primary/20">
                    <CardHeader>
                      <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Diseases */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">可檢查疾病與器官</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {diseases.map((disease, index) => (
                  <Card key={index} className="p-4">
                    <CardContent className="p-0 flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium">{disease}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Frequency */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-subtle border-none">
                <CardHeader>
                  <CardTitle className="text-3xl text-center text-primary mb-4">
                    腹部超音波檢查建議頻率
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg leading-relaxed">
                    一般成人如無特別症狀或風險因素，可每 <strong className="text-primary">2~3 年</strong> 進行一次檢查。
                    如有肝炎帶原、脂肪肝、家族病史等，建議 <strong className="text-primary">每半年</strong> 一次。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Pre-exam Notes */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">檢查前後注意事項</h2>
              <div className="space-y-6">
                {preExamNotes.map((note, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-lg">{note}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Examination Principle */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-subtle border-none">
                <CardHeader>
                  <CardTitle className="text-3xl text-center text-primary mb-4">
                    檢查原理與補充說明
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed mb-6">
                    腹部超音波是醫師的「聽診器」，透過無痛、無輻射的方式觀察肝臟質地與器官異常狀況，例如肝實質病變、腫瘤、囊腫、纖維化或硬化。
                  </p>
                  <div className="bg-white/80 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-primary">搭配抽血檢查更完整</h4>
                    <p className="text-muted-foreground">
                      檢查 <strong>搭配抽血</strong> 使用更為完整。抽血可評估肝功能與發炎指數，超音波提供形態判斷，兩者相輔相成，更能早期發現肝硬化或肝癌。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-gradient-primary border-none text-white">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">立即預約超音波檢查</h2>
                  <p className="mb-6 text-white/90">
                    專業醫師親自操作，為您的健康把關
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white text-primary hover:bg-white/90"
                      asChild
                    >
                      <a href="https://lin.ee/bQKntMLD" target="_blank" rel="noopener noreferrer">
                        LINE 預約
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white/10"
                      asChild
                    >
                      <a href="https://pinmed.co/clinic/18ott42a" target="_blank" rel="noopener noreferrer">
                        網頁預約
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

export default Ultrasound;