import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Users, 
  Clock,
  MapPin,
  Phone,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const Doctors = () => {
  const doctors = [
    {
      name: "柯智傑醫師",
      title: "院長",
      specialties: ["腸胃科專科醫師", "內科專科醫師"],
      image: "/placeholder.svg",
      education: [
        "國立陽明大學醫學院醫學系",
        "台北榮民總醫院內科住院醫師",
        "台北榮民總醫院胃腸肝膽科總醫師"
      ],
      experience: [
        "台北榮民總醫院胃腸肝膽科主治醫師",
        "中華民國內科專科醫師",
        "中華民國消化系專科醫師",
        "中華民國超音波醫學會專科醫師"
      ],
      expertise: [
        "胃食道逆流診治",
        "胃/十二指腸潰瘍",
        "大腸息肉檢查與切除",
        "無痛胃腸鏡檢查",
        "肝膽疾病診療",
        "腹部超音波檢查"
      ],
      schedule: "週一至週六 上午/下午門診"
    },
    {
      name: "柯振得醫師",
      title: "皮膚科專科醫師",
      specialties: ["皮膚科專科醫師", "醫學美容專家"],
      image: "/placeholder.svg",
      education: [
        "國立陽明大學醫學院醫學系",
        "台北榮民總醫院皮膚科住院醫師",
        "台北榮民總醫院皮膚科總醫師"
      ],
      experience: [
        "永信皮膚科診所院長",
        "台北榮民總醫院皮膚科主治醫師",
        "聯合醫院皮膚科主治醫師",
        "國立陽明大學醫學院講師",
        "30年皮膚科臨床經驗"
      ],
      expertise: [
        "青春痘治療",
        "濕疹皮膚炎診療",
        "落髮治療",
        "皮膚腫瘤診斷",
        "醫學美容整合治療",
        "電波音波拉提",
        "雷射美容治療"
      ],
      schedule: "週二、週四、週六 特約門診",
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">醫師陣容</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              資深專科醫師團隊，提供專業、安心的醫療服務
            </p>
          </div>
        </section>

        {/* Doctors */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {doctors.map((doctor, index) => (
                <Card 
                  key={doctor.name} 
                  className={`group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in ${
                    doctor.highlight ? 'ring-2 ring-primary/20 shadow-medical' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    {/* Doctor Header */}
                    <div className="flex items-start space-x-6 mb-8">
                      <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-12 h-12 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-medical-text">{doctor.name}</h3>
                          {doctor.highlight && (
                            <Badge className="bg-primary text-primary-foreground">
                              特聘醫師
                            </Badge>
                          )}
                        </div>
                        <p className="text-lg text-primary font-medium mb-3">{doctor.title}</p>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-medical-text">學歷與訓練</h4>
                      </div>
                      <ul className="space-y-1 text-sm text-foreground">
                        {doctor.education.map((edu, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Experience */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Award className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-medical-text">經歷與認證</h4>
                      </div>
                      <ul className="space-y-1 text-sm text-foreground">
                        {doctor.experience.map((exp, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expertise */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Award className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-medical-text">專精領域</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {doctor.expertise.map((skill, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-foreground">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Schedule */}
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-medium text-medical-text">門診時間</span>
                      </div>
                      <p className="text-sm text-foreground">{doctor.schedule}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-20 bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">預約專科門診</h3>
                <p className="text-lg text-primary-foreground/90 mb-8">
                  歡迎來電預約或線上掛號，我們將為您安排最適合的診療時間
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>02-8921-2345</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>新北市中和區</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>週一至週六</span>
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
                    <Link to="/hours">查看門診時間</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
};

export default Doctors;