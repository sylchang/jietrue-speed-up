import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyActions from '@/components/StickyActions';
import SeoHead from '@/components/SeoHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Scale, Heart, Target, Users, DollarSign } from 'lucide-react';

const WeightLossGlp1 = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "減重與代謝管理",
    "description": "體重管理門診結合專業醫療團隊、InBody 580 分析、GLP1 減重與胃鏡肉毒減重，提供全方位個人化體重控制計畫。",
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

  const suitableGroups = [
    "體重過重或肥胖，希望透過醫學方式健康減重",
    "體脂率過高，期望降低脂肪、維持健康體態",
    "減重困難族群，嘗試多種方式仍無法成功減重",
    "有高血糖、高血壓、高血脂等代謝異常問題者",
    "產後體重控制需求，協助恢復理想體態",
    "過度消瘦、營養不良等需增加體重者"
  ];

  const treatmentContent = [
    {
      title: "InBody 580 精準量測",
      description: "了解身體組成，找出影響體重的根本原因"
    },
    {
      title: "個人化飲食建議",
      description: "營養師協助建立健康飲食習慣"
    },
    {
      title: "運動與生活習慣調整",
      description: "提升新陳代謝，穩定脂肪燃燒"
    },
    {
      title: "藥物與醫療輔助",
      description: "GLP1 減重、胃鏡縮胃、胃肉毒注射"
    },
    {
      title: "行為調整與心理支持",
      description: "習慣建立與情緒支持，幫助長期穩定"
    }
  ];

  const pricing = [
    {
      title: "初診",
      price: "$1,000",
      description: "需空腹8小時！INBODY 體組成測量、內分泌抽血評估、醫師諮詢"
    },
    {
      title: "複診",
      price: "$500",
      description: "INBODY追蹤、醫師諮詢"
    },
    {
      title: "營養師諮詢",
      price: "$1,500",
      description: "線上一對一營養師諮詢"
    }
  ];

  const faqs = [
    {
      question: "GLP1 減重是什麼？",
      answer: "GLP1 是一種抑制食慾、延緩胃排空的藥物，可幫助控制體重與血糖。"
    },
    {
      question: "GLP1 減重會有副作用嗎？",
      answer: "常見副作用包含噁心、脹氣、腸胃不適，通常在初期調整劑量即可緩解。"
    },
    {
      question: "胃肉毒減重多久見效？",
      answer: "通常 2~4 週內可見食量下降與體重變化，效果約持續 4~6 個月。"
    },
    {
      question: "療程是否安全？",
      answer: "由專業醫師操作、設備齊全，副作用少，安全性高。"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="減重與代謝管理｜中永和減重門診｜GLP1、胃肉毒減重｜傑初診所"
        description="體重管理不只是減重，更是健康的長期投資！傑初診所的體重管理門診結合專業醫療團隊、InBody 580 分析、GLP1 減重與胃鏡肉毒減重，提供全方位個人化體重控制計畫。"
        schema={schema}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              減重與代謝管理
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              中和減重門診｜瘦瘦針｜胃肉毒減重
            </h1>
            <p className="text-xl mb-8 text-white/90">
              體重管理不只是減重，更是健康的長期投資！結合專業醫療團隊、InBody 580 分析、GLP1 減重與胃鏡肉毒減重
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="https://jietrue.simplybook.asia/" target="_blank" rel="noopener noreferrer">
                  立即預約減重療程
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
          {/* InBody Image */}
          <section className="max-w-4xl mx-auto mb-16 text-center">
            <img 
              src="/images/inbody.png" 
              alt="InBody 580 體脂分析機，進行精準體組成評估" 
              className="mx-auto rounded-lg shadow-lg mb-8"
            />
          </section>

          {/* Suitable Groups */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">門診適合對象</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {suitableGroups.map((group, index) => (
                  <Card key={index} className="p-4">
                    <CardContent className="p-0 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{group}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Treatment Content */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">體重管理療程內容</h2>
              <div className="space-y-6">
                {treatmentContent.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Service Images */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              <img 
                src="/images/傑初診所 體重管理 體重控制 泡芙族 高血壓 高血脂 高血糖.jpg" 
                alt="體重控制與代謝問題常見族群：泡芙族、高血壓、高血脂、高血糖患者" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <img 
                src="/images/傑初診所 減重與代謝管理 中和減重門診 瘦瘦針 胃肉毒減重 GLP1.jpg" 
                alt="傑初診所減重門診服務項目：瘦瘦針、GLP1、胃肉毒減重" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">費用</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {pricing.map((item, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <div className="text-2xl font-bold text-primary">{item.price}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  治療選擇（藥物、內視鏡以及其他體重管理方式）依照醫師諮詢後建議自行決定是否自費購買
                </p>
              </div>
            </div>
          </section>

          {/* Consultation Image */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <img 
                src="/images/Plan-2-1.jpg" 
                alt="傑初診所減重門診，提供一對一醫師諮詢" 
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* GLP1 Info */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-subtle border-none">
                <CardHeader>
                  <CardTitle className="text-3xl text-center mb-4">GLP1 減重是什麼？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed mb-6">
                    <strong className="text-primary">GLP-1（Glucagon-like peptide 1 agonists）</strong> 是一種常見的減重輔助藥物，也被稱為「瘦瘦筆」、「消脂針」。原本是為治療第二型糖尿病所開發，但其抑制食慾與延緩胃排空的特性，後來被廣泛應用於減重治療。
                  </p>
                  <p className="text-lg leading-relaxed">
                    使用 GLP1 的過程中，除抑制食慾，也能幫助身體燃燒脂肪。建議使用時間為三個月至一年，並搭配正確飲食與運動習慣，才能達到長期穩定的效果。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Weight Loss Image */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <img 
                src="/images/瘦瘦針-inbody-wright-loss-glp1.png" 
                alt="瘦瘦針 GLP1 InBody 胃肉毒減重" 
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Gastric Botox Info */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl text-center mb-4">胃肉毒減重是什麼？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed mb-8">
                    <strong className="text-primary">胃肉毒減重療程</strong> 是透過內視鏡將肉毒桿菌素注射至胃部，降低胃蠕動與排空速度，延長飽足感，減少食量，特別適合 BMI 在 30-40 或無法接受手術的族群。
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4 text-green-600">✅ 適應症</h4>
                      <ul className="space-y-2">
                        <li>• 中度肥胖</li>
                        <li>• 想避免侵入性減重療法者</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-4 text-red-600">❌ 禁忌症</h4>
                      <ul className="space-y-2">
                        <li>• 有神經肌肉疾病</li>
                        <li>• 嚴重胃腸疾病</li>
                        <li>• 對肉毒過敏者</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">🌟 病患實際見證</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-subtle border-none">
                  <CardContent className="p-6">
                    <blockquote className="text-lg italic mb-4">
                      「原本 BMI 超過 33，試過各種方法都減不了，醫師幫我安排胃肉毒與 GLP1 搭配療程，2 個月內穩定減重 6 公斤！」
                    </blockquote>
                    <p className="text-sm text-muted-foreground">— 38 歲／女性／上班族</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-subtle border-none">
                  <CardContent className="p-6">
                    <blockquote className="text-lg italic mb-4">
                      「我血壓高又糖尿邊緣，透過 InBody 跟營養師追蹤，一步步改善代謝，精神也好多了！」
                    </blockquote>
                    <p className="text-sm text-muted-foreground">— 52 歲／男性／工程師</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">常見問題</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-gradient-primary border-none text-white">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">開始您的健康減重之旅</h2>
                  <p className="mb-6 text-white/90">
                    專業醫療團隊為您量身打造個人化減重計畫
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <a href="https://jietrue.simplybook.asia/" target="_blank" rel="noopener noreferrer">
                      立即預約減重療程
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

export default WeightLossGlp1;