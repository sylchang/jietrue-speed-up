import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Phone, MapPin, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hours = () => {
  const schedule = [
    {
      day: "週一",
      morning: { time: "08:30-12:00", doctor: "柯智傑醫師", specialty: "腸胃科" },
      afternoon: { time: "14:00-17:30", doctor: "柯智傑醫師", specialty: "腸胃科" },
      evening: { time: "18:00-21:00", doctor: "柯智傑醫師", specialty: "腸胃科" }
    },
    {
      day: "週二",
      morning: { time: "08:30-12:00", doctor: "柯智傑醫師", specialty: "腸胃科" },
      afternoon: { time: "14:00-17:30", doctor: "柯振得醫師", specialty: "皮膚科", highlight: true },
      evening: { time: "18:00-21:00", doctor: "柯智傑醫師", specialty: "腸胃科" }
    },
    {
      day: "週三",
      morning: { time: "08:30-12:00", doctor: "柯智傑醫師", specialty: "腸胃科" },
      afternoon: { time: "14:00-17:30", doctor: "柯智傑醫師", specialty: "腸胃科" },
      evening: { time: "18:00-21:00", doctor: "柯智傑醫師", specialty: "腸胃科" }
    },
    {
      day: "週四",
      morning: { time: "08:30-12:00", doctor: "柯智傑醫師", specialty: "腸胃科" },
      afternoon: { time: "14:00-17:30", doctor: "柯振得醫師", specialty: "皮膚科", highlight: true },
      evening: { time: "18:00-21:00", doctor: "柯智傑醫師", specialty: "腸胃科" }
    },
    {
      day: "週五",
      morning: { time: "08:30-12:00", doctor: "柯智傑醫師", specialty: "腸胃科" },
      afternoon: { time: "14:00-17:30", doctor: "柯智傑醫師", specialty: "腸胃科" },
      evening: { time: "18:00-21:00", doctor: "柯智傑醫師", specialty: "腸胃科" }
    },
    {
      day: "週六",
      morning: { time: "08:30-12:00", doctor: "柯智傑醫師", specialty: "腸胃科" },
      afternoon: { time: "14:00-17:30", doctor: "柯振得醫師", specialty: "皮膚科", highlight: true },
      evening: null
    },
    {
      day: "週日",
      morning: null,
      afternoon: null,
      evening: null,
      closed: true
    }
  ];

  const specialServices = [
    {
      name: "無痛胃腸鏡檢查",
      schedule: "週一至週六 上午 (需預約)",
      note: "檢查前需空腹8小時",
      icon: <Clock className="w-5 h-5" />
    },
    {
      name: "腹部超音波檢查",
      schedule: "週一至週六 上午/下午 (需預約)",
      note: "檢查前需空腹6小時",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      name: "醫學美容療程",
      schedule: "週二、週四、週六 下午 (需預約)",
      note: "柯振得醫師親自操作",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card">
      {/* Header */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">門診時間</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            專業醫師門診時間表，歡迎來電預約或線上掛號
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Schedule Table */}
          <Card className="mb-12 shadow-elegant animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-medical-text flex items-center justify-center space-x-2">
                <Calendar className="w-6 h-6" />
                <span>門診時間表</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-6 py-4 text-left font-semibold text-medical-text">星期</th>
                      <th className="px-6 py-4 text-center font-semibold text-medical-text">上午<br /><span className="text-sm font-normal">08:30-12:00</span></th>
                      <th className="px-6 py-4 text-center font-semibold text-medical-text">下午<br /><span className="text-sm font-normal">14:00-17:30</span></th>
                      <th className="px-6 py-4 text-center font-semibold text-medical-text">晚上<br /><span className="text-sm font-normal">18:00-21:00</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((day, index) => (
                      <tr key={day.day} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                        <td className="px-6 py-4 font-medium text-medical-text">
                          {day.day}
                          {day.closed && <Badge variant="outline" className="ml-2 text-xs">休診</Badge>}
                        </td>
                        
                        {/* Morning */}
                        <td className="px-6 py-4 text-center">
                          {day.morning ? (
                            <div className="space-y-1">
                              <div className="font-medium text-medical-text">{day.morning.doctor}</div>
                              <Badge variant={day.morning.highlight ? "default" : "secondary"} className="text-xs">
                                {day.morning.specialty}
                              </Badge>
                            </div>
                          ) : (
                            <span className="text-muted-foreground">休診</span>
                          )}
                        </td>
                        
                        {/* Afternoon */}
                        <td className="px-6 py-4 text-center">
                          {day.afternoon ? (
                            <div className="space-y-1">
                              <div className="font-medium text-medical-text">{day.afternoon.doctor}</div>
                              <Badge variant={day.afternoon.highlight ? "default" : "secondary"} className="text-xs">
                                {day.afternoon.specialty}
                              </Badge>
                              {day.afternoon.highlight && (
                                <div className="text-xs text-primary font-medium">特聘醫師</div>
                              )}
                            </div>
                          ) : (
                            <span className="text-muted-foreground">休診</span>
                          )}
                        </td>
                        
                        {/* Evening */}
                        <td className="px-6 py-4 text-center">
                          {day.evening ? (
                            <div className="space-y-1">
                              <div className="font-medium text-medical-text">{day.evening.doctor}</div>
                              <Badge variant={day.evening.highlight ? "default" : "secondary"} className="text-xs">
                                {day.evening.specialty}
                              </Badge>
                            </div>
                          ) : (
                            <span className="text-muted-foreground">休診</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

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
                      <span>現場掛號請於診療開始前30分鐘到達</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>特殊檢查項目請提前電話預約</span>
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
                    <div className="text-primary-foreground/90">02-8921-2345</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold">診所地址</div>
                    <div className="text-primary-foreground/90">新北市中和區</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white/90 text-primary hover:bg-white"
                  asChild
                >
                  <Link to="/contact">線上預約</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 text-primary-foreground hover:bg-white/10"
                  asChild
                >
                  <Link to="/services">查看診療項目</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hours;