import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail,
  Navigation as NavigationIcon,
  Car,
  Bus,
  Train,
  Calendar,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = {
    address: "新北市中和區景平路123號1樓",
    phone: "02-8231-6869",
    email: "info@jietrue.com",
    hours: "週一至週六 08:30-21:00",
    parking: "診所附近有多個付費停車場",
    transportation: [
      { type: "捷運", info: "中和新蘆線 - 景安站 (步行5分鐘)" },
      { type: "公車", info: "57、201、245、307、311、793" },
      { type: "開車", info: "國道3號中和交流道下，沿景平路直行" }
    ]
  };

  const services = [
    "腸胃科門診",
    "皮膚科門診", 
    "無痛胃腸鏡檢查",
    "腹部超音波檢查",
    "醫學美容諮詢",
    "健康檢查套餐"
  ];

  return (
    <div className="min-h-screen bg-gradient-card flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">聯絡資訊</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              歡迎與我們聯繫，專業醫療團隊為您提供最優質的服務
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in">
                {/* Basic Info */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl text-medical-text flex items-center space-x-2">
                      <MapPin className="w-6 h-6 text-primary" />
                      <span>診所資訊</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-medical-text">診所地址</div>
                        <div className="text-foreground">{contactInfo.address}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-medical-text">預約專線</div>
                        <a 
                          href={`tel:${contactInfo.phone}`}
                          className="text-primary hover:text-primary-dark transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-medical-text">電子信箱</div>
                        <a 
                          href={`mailto:${contactInfo.email}`}
                          className="text-primary hover:text-primary-dark transition-colors"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-medical-text">營業時間</div>
                        <div className="text-foreground">{contactInfo.hours}</div>
                        <div className="text-sm text-muted-foreground">週日休診</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Transportation */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl text-medical-text flex items-center space-x-2">
                      <NavigationIcon className="w-5 h-5 text-primary" />
                      <span>交通方式</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactInfo.transportation.map((transport, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {transport.type === "捷運" && <Train className="w-4 h-4 text-primary" />}
                          {transport.type === "公車" && <Bus className="w-4 h-4 text-primary" />}
                          {transport.type === "開車" && <Car className="w-4 h-4 text-primary" />}
                        </div>
                        <div>
                          <div className="font-medium text-medical-text">{transport.type}</div>
                          <div className="text-sm text-foreground">{transport.info}</div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Car className="w-4 h-4 text-primary" />
                        <span className="font-medium text-medical-text">停車資訊</span>
                      </div>
                      <p className="text-sm text-foreground">{contactInfo.parking}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Appointment Form */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl text-medical-text flex items-center space-x-2">
                      <Calendar className="w-6 h-6 text-primary" />
                      <span>線上預約</span>
                    </CardTitle>
                    <p className="text-muted-foreground">請填寫以下資訊，我們將儘快與您聯繫確認預約時間</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-medical-text mb-2">
                          姓名 *
                        </label>
                        <Input placeholder="請輸入您的姓名" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-medical-text mb-2">
                          手機號碼 *
                        </label>
                        <Input placeholder="請輸入手機號碼" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-medical-text mb-2">
                        預約項目 *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="justify-center py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-medical-text mb-2">
                          希望日期
                        </label>
                        <Input type="date" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-medical-text mb-2">
                          時段偏好
                        </label>
                        <select className="w-full p-2 border border-input rounded-md bg-background">
                          <option>上午 (08:30-12:00)</option>
                          <option>下午 (14:00-17:30)</option>
                          <option>晚上 (18:00-21:00)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-medical-text mb-2">
                        備註說明
                      </label>
                      <Textarea 
                        placeholder="請描述您的症狀或特殊需求"
                        rows={4}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">
                        我同意診所聯繫我確認預約時間
                      </span>
                    </div>

                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-hero hover:opacity-90 transition-opacity"
                    >
                      送出預約申請
                    </Button>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        急診或緊急預約請直接來電
                      </p>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-primary hover:text-primary-dark font-medium"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-card-medical transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-medical-text mb-2">電話預約</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    直接撥打預約專線，專人為您服務
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`tel:${contactInfo.phone}`}>立即撥打</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-card-medical transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-medical-text mb-2">門診時間</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    查看詳細的門診時間表
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/hours">查看時間</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-card-medical transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-medical-text mb-2">診所位置</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    中和新蘆線景安站步行5分鐘
                  </p>
                  <Button variant="outline" size="sm">
                    Google地圖
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
};

export default Contact;