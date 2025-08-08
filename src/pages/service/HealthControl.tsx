import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyActions from '@/components/StickyActions';
import SeoHead from '@/components/SeoHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, DollarSign, Phone, MapPin } from 'lucide-react';

const HealthControl = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "傑初健檢方案",
    "description": "永和健檢推薦｜傑初診所專業六大方案全面涵蓋腸胃鏡、過敏原檢查、腸漏與營養分析",
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

  const healthPlans = [
    {
      id: 1,
      title: "輕鬆安心專案",
      price: "$7,700",
      tags: ["首次健檢者", "小資族首選", "想做無痛腸胃鏡"],
      features: [
        "無痛胃鏡＋藍光掃描（早期食道癌）",
        "無痛大腸鏡＋藍光掃描（早期大腸癌）",
        "77項生化血液尿液篩檢（含多項腫瘤指標）",
        "二氧化碳充氣系統",
        "個人化拋棄式口腔器與鏡檢專用褲",
        "大腸鏡專用簡易代餐包+高適口性清腸水劑"
      ]
    },
    {
      id: 2,
      title: "全方位腸胃健檢",
      price: "$9,900",
      tags: ["腸胃功能基楚評估", "有腹脹便秘困擾者", "胸悶心悸"],
      features: [
        "含方案1全部項目",
        "肝膽胰脾超音波",
        "心電圖",
        "幽門桿菌篩檢"
      ]
    },
    {
      id: 3,
      title: "進階腸胃肝臟檢測專案",
      price: "$11,400",
      tags: ["肝指數異常", "脂肪肝", "應酬族必備", "熬夜", "代謝異常", "飲酒", "肥胖"],
      features: [
        "含方案2全部項目",
        "非侵入性肝纖維化掃描，評估肝硬化與脂肪肝程度，及早預防肝臟疾病，取代肝臟切片"
      ]
    },
    {
      id: 4,
      title: "腸胃＋過敏原整合檢測專案",
      price: "$14,500",
      tags: ["慢性皮膚問題", "腸胃過敏", "經常疲勞"],
      features: [
        "含方案2全部項目",
        "112項急慢性過敏原檢測"
      ]
    },
    {
      id: 5,
      title: "腸道功能深度健檢專案",
      price: "$23,500",
      tags: ["癌症風險評估", "難治性腸胃問題", "腸漏症", "慢性發炎", "調整過敏體質", "腦霧疲勞", "自體免疫調理"],
      features: [
        "含方案3全部項目",
        "腸道菌相分析 (透過尖端次世代基因定序NGS，精準解析腸道菌DNA，深度揭示腸道環境，癌症風險評估)",
        "腸漏檢測(檢測腸道通透性，了解腸道屏障是否受損，與慢性發炎、過敏、自體免疫等相關）"
      ]
    },
    {
      id: 6,
      title: "頂級全方位健康御守專案",
      price: "$38,800",
      tags: ["給自己或家人的頂級禮物", "深度健康規劃", "追求極致健康", "最全面過敏原檢測", "最全面腫瘤篩檢"],
      features: [
        "含方案5全部項目",
        "224項急慢性過敏原",
        "多項重要營養素深度評估（鈣、鎂、維生素D、B群等）",
        "進階腫瘤指標 (補充「77項生化血液尿液篩檢」未涵蓋之進階腫瘤指標)"
      ]
    }
  ];

  const additionalItems = [
    { name: "鏡檢無痛升級舒眠", price: "$1,500" },
    { name: "Al智能腸胃鏡系統", price: "$3,000" },
    { name: "非侵入肝纖維化掃描", price: "$1,500" },
    { name: "過敏原檢測: 66項", price: "$3,600" },
    { name: "過敏原檢測: 112項", price: "$4,800" },
    { name: "過敏原檢測: 224項", price: "$10,000" },
    { name: "腸漏檢測", price: "$2,600" },
    { name: "腸道菌相分析", price: "$10,000" },
    { name: "多項重要營養素深度評估（鈣、鎂、維生素D、B群 等）", price: "$2,400" },
    { name: "進階腫瘤指標", price: "$1,700" }
  ];

  const faqs = [
    {
      question: "這些健檢方案需要空腹嗎？",
      answer: "胃鏡、大腸鏡與抽血項目皆需空腹 6~8 小時，請依照診所指示時間完成前一天飲食與清腸準備。"
    },
    {
      question: "腸漏檢測與菌相分析怎麼採檢？",
      answer: "為尿液糞便採檢，於檢查當日或回家後完成取樣並送回診所即可，無侵入性。"
    },
    {
      question: "健檢方案中的內視鏡有包含息肉切除嗎？",
      answer: "內視鏡中如發現病灶需切除，會另外說明費用與自費項目，未含於方案內。"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="永和健檢推薦｜傑初診所六大健檢方案｜腸胃鏡・過敏原・肝功能檢查"
        description="永和健檢推薦｜傑初診所專業六大方案全面涵蓋腸胃鏡、過敏原檢查、腸漏與營養分析，由內而外幫助中和、永和與中永和民眾規劃個人化健康方案。"
        schema={schema}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              健康檢查方案
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              傑初健檢方案總覽
            </h1>
            <p className="text-xl mb-8 text-white/90">
              永和健檢推薦｜專業六大方案全面涵蓋腸胃鏡、過敏原檢查、腸漏與營養分析
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="https://lin.ee/bQKntMLD" target="_blank" rel="noopener noreferrer">
                  立即預約健檢諮詢
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="tel:02-8231-6869">
                  來電洽詢
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <section className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              本方案設計採用功能醫學概念，由消化專科醫師親自評估，包含舒眠/無痛腸胃鏡、肝膽超音波、77項抽血、幽門桿菌、腸道菌相、腸漏與過敏原分析等。
            </p>
          </section>

          {/* Health Plans */}
          <section className="mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">健檢方案選擇</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {healthPlans.map((plan) => (
                  <Card key={plan.id} className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <CardTitle className="text-xl mb-2">{plan.id}️⃣ {plan.title}</CardTitle>
                          <div className="text-3xl font-bold text-primary">{plan.price}</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {plan.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Items */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">🔍 自費選購項目</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {additionalItems.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm">{item.name}</span>
                        <span className="font-semibold text-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">❓ 常見問題</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">Q{index + 1}：{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">A：{faq.answer}</p>
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
                  <h2 className="text-2xl font-bold mb-4">立即預約健檢諮詢</h2>
                  <p className="mb-6 text-white/90">
                    專業醫療團隊為您量身打造個人化健康方案
                  </p>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg" 
                        className="bg-white text-primary hover:bg-white/90"
                        asChild
                      >
                        <a href="https://lin.ee/bQKntMLD" target="_blank" rel="noopener noreferrer">
                          👉 LINE 線上預約
                        </a>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-white text-white hover:bg-white/10"
                        asChild
                      >
                        <a href="tel:02-8231-6869">
                          <Phone className="w-4 h-4 mr-2" />
                          02-8231-6869
                        </a>
                      </Button>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>傑初診所 中和區中安街102號</span>
                    </div>
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

export default HealthControl;