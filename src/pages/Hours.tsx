import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Phone, MapPin, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useEffect } from 'react'; // Import React and useEffect

const Hours = () => {
  // Original schedule data is no longer needed and has been removed as requested.
  // const schedule = [...]; // This data was removed.

  const specialServices = [
    {
      name: "無痛胃腸鏡檢查",
      schedule: "週一至週六 上午/下午 (需先預約看診)",
      note: "檢查前需空腹8小時",
      icon: <Clock className="w-5 h-5" />
    },
    {
      name: "腹部超音波檢查",
      schedule: "有看診的時間 (不需預約)",
      note: "檢查前需空腹6小時",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      name: "醫學美容療程",
      schedule: "有看診的時間 (需預約)",
      note: "歡迎預約免費15分鐘醫生諮詢",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  // useEffect for animation logic, moved from previous HTML conversion
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate-in]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-card">
      <Navigation />
      {/* SEO and Head content - Typically managed by a dedicated <Head> component or layout in frameworks like Next.js */}
      {/* For direct conversion, placed here */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>傑初診所門診時間｜中永和腸胃科｜皮膚科｜醫美減重門診</title>
        <meta name="description" content="查詢傑初診所門診時間表，涵蓋中永和腸胃科、永和皮膚科與中和醫美時段安排。提供無痛胃鏡、肝膽超音波、青春痘治療與減重門診，歡迎線上預約。" />

        {/* SEO FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "傑初診所有哪些門診時段？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "上午 08:30-12:00、下午 14:00-17:00、晚上 18:00-21:00（週一至週五提供夜診）。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "傑初診所提供哪些科別門診？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "傑初診所門診涵蓋中和與永和地區的腸胃科、皮膚科、內科慢性病、自費醫美與減重門診等。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "是否可以線上預約門診？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "可以，您可以透過 LINE 官方帳號、PinMed 或 SimplyBook 系統線上預約一般或自費門診。"
                  }
                }
              ]
            })
          }}
        />

        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </head>

      {/* Header */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">門診時間</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            專業醫師門診時間表，歡迎來電預約或線上掛號</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            本診所包含腸胃科（無痛胃鏡、大腸鏡、肝膽超音波）、皮膚科（濕疹、青春痘、落髮）與自費醫美（電波拉提、減重療程），門診時段分為早上、下午與夜間，服務中永和居民的健康需求。
          </p><br></br>
          <div className="mb-12 shadow-elegant animate-fade-in rounded-2xl overflow-hidden">
            <img
              src="../../public/images/傑初診所 門診時刻表 小圖.jpg"
              alt="傑初診所門診時間表"
              className="w-full h-auto object-cover rounded-2xl"
              style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
          </div>

          {/* Special Services */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {specialServices.map((service, index) => (
              <Card
                key={service.name}
                className="hover:shadow-card-medical transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-medical-text">{service.name}</h3>
                  </div>
                  <p className="text-sm text-foreground mb-2">{service.schedule}</p>
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-muted-foreground">{service.note}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Important Notes */}
          <Card className="mb-12 border-accent/20 bg-accent/5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="text-xl text-medical-text flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-accent" />
                <span>重要提醒</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-medical-text mb-3">掛號須知</h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>特殊檢查項目請提前Line/電話預約</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>初診請攜帶身分證及健保卡</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>複診請攜帶健保卡及前次診療資料</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-medical-text mb-3">檢查準備</h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>胃鏡檢查前需空腹8小時以上</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>腹部超音波檢查前需空腹6小時</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>大腸鏡檢查需提前清腸準備</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>醫美療程請提前諮詢並預約</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">預約掛號</h3>
              <p className="text-lg text-primary-foreground/90 mb-8">
                為確保您獲得最佳的診療服務，建議您提前預約
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold">預約專線</div>
                    <div className="text-primary-foreground/90">02-8231-6869</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold">診所地址</div>
                    <div className="text-primary-foreground/90">新北市中和區中安街102號</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                size="lg"
                variant="secondary"
                className="bg-[hsl(var(--btn))] text-destructive-foreground hover:bg-[hsl(var(--btn-hover))]"
                asChild
              >
                <Link to="https://line.me/R/ti/p/@928ibhsy">LINE預約</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-[hsl(var(--btn))] text-destructive-foreground hover:bg-[hsl(var(--btn-hover))]"
                asChild
              >
                <Link to="https://pinmed.co/clinic/18ott42a">網頁預約</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-[hsl(var(--btn))] text-destructive-foreground hover:bg-[hsl(var(--btn-hover))]"
                asChild
              >
                <Link to="https://jietrue.simplybook.asia/v2/#book">自費減重預約</Link>
              </Button>
                <Button
                size="lg"
                variant="secondary"
                className="bg-[hsl(var(--btn))] text-destructive-foreground hover:bg-[hsl(var(--btn-hover))]"
                asChild
              >
                <Link to="https://mainpi.com/query?i=3297">查看看診進度</Link>
              </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <StickyActions />
    </div>
  );
};

export default Hours;

