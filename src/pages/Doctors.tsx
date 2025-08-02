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
import SeoHead from "@/components/SeoHead"; // 匯入新的 SeoHead 元件

const Doctors = () => {
  // 定義 Doctors 頁面的 SEO 結構化資料
  const doctorsSeoSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "傑初診所的腸胃科專長醫師是誰？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "傑初診所院長柯智傑醫師專精於無痛胃腸鏡、肝膽超音波、內視鏡減重及慢性病管理，為前台北榮總肝膽腸胃科主治醫師。"
        }
      },
      {
        "@type": "Question",
        "name": "傑初診所的皮膚科醫師有誰？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "柯振得醫師為中和與永和地區資深皮膚科專科醫師，擁有三十年以上臨床經驗，擅長青春痘、蕁麻疹、異位性皮膚炎、落髮與醫學美容整合治療。"
        }
      },
      {
        "@type": "Question",
        "name": "如何預約傑初診所的醫生門診？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "您可透過 LINE 官方帳號、PinMed 網頁掛號系統或 SimplyBook 線上預約自費減重門診。"
        }
      }
    ]
  };

  const doctors = [
    {
      name: "柯智傑醫師",
      title: "院長",
      intro: "柯智傑醫師為傑初診所院長，專精於腸胃肝膽、無痛胃鏡、大腸鏡、肝膽胰超音波、內視鏡減重，曾任台北榮總肝膽腸胃科主治醫師，服務中和與永和地區患者。",
      specialties: ["腸胃科專科醫師", "內科專科醫師"],
      image: "/images/drkevin.jpg",
      education: [
        "台北榮民總醫院內科住院醫師",
        "台灣肥胖醫學會會員",
        "中國醫藥大學醫學院醫學系"
      ],
      experience: [
        "好心肝診所肝膽腸胃科 專任主治醫師",
        "永信皮膚科診所醫師",
        "臺北榮民總醫院肝膽腸胃科總醫師",
        "臺北榮民總醫院肝膽腸胃科主治醫師",
        "中華民國內科專科醫師",
        "中華民國內科消化內視鏡專科醫師"        
      ],
      expertise: [
        "胃食道逆流診治",
        "胃/十二指腸潰瘍",
        "大腸息肉檢查與切除",
        "無痛胃腸鏡檢查",
        "藥物,針劑,胃肉毒減重",
        "肝膽疾病診療",
        "腹部超音波檢查",
        "一般內科疾病",
        "便秘,痔瘡",
        "各種皮膚問題",
        "電波音波拉提",
        "雷射 除斑 美容治療"
      ],
      schedule: "週一至週六 上午/下午/晚間門診",
      bookingButtons: [
        { label: "LINE預約健保門診", url: "https://line.me/R/ti/p/@928ibhsy" },
        { label: "網頁預約健保門診", url: "https://pinmed.co/clinic/18ott42a" },
        { label: "預約自費減重門診", url: "https://jietrue.simplybook.asia/v2/#book" }
      ]
    },
    {
      name: "柯振得醫師",
      title: "皮膚科專科醫師",
      intro: "柯振得醫師為中和與永和地區資深皮膚科專科醫師，擁有三十年以上臨床經驗，擅長青春痘、蕁麻疹、異位性皮膚炎、落髮與醫學美容整合治療。曾任職於台北榮總皮膚部，並於永信皮膚科擔任院長，提供中永和民眾細緻、有效的皮膚照護。",
      specialties: ["皮膚科專科醫師", "醫學美容專家"],
      image: "/images/peter.jpg",
      education: [
        "國立陽明大學醫學院醫學系",
        "台北榮民總醫院皮膚科住院醫師",
        "台北榮民總醫院皮膚科總醫師",
        "中華民國醫用雷射學會會員"
      ],
      experience: [
        "永信皮膚科診所院長",
        "台北榮民總醫院皮膚科主治醫師",
        "聯合醫院皮膚科主治醫師",
        "國立陽明大學醫學院講師",
        "30年皮膚科臨床經驗"
      ],
      expertise: [
        "皮膚過敏反應（如接觸性皮膚炎）",
        "青春痘、粉刺、酒糟等臉部皮膚問題",
        "蕁麻疹反覆發作與急性處理",
        "異位性皮膚炎（含兒童與成人）",
        "濕疹皮膚炎診療",
        "落髮治療、掉髮、雄性禿、頭皮屑治療",
        "頭皮發炎、脂漏性皮膚炎",
        "皮膚腫瘤診斷",
        "醫學美容整合治療",
        "電波音波拉提 十倍電波 海芙音波",
        "雷射 除斑 美容治療",
        "老化皮膚處理：針對皺紋、鬆弛、膚色暗沉提供整合治療方案",
        "再生醫學療程：PRP自體血小板、生長因子應用於皮膚修復",
        "生物製劑治療：針對嚴重異位性皮膚炎或慢性蕁麻疹的專業藥物選擇"
      ],
      schedule: "週一、週三上午 特約門診",
      highlight: true,
      bookingButtons: [
        { label: "LINE預約健保門診", url: "https://line.me/R/ti/p/@928ibhsy" },
        { label: "網頁預約健保門診", url: "https://pinmed.co/clinic/18ott42a" }
      ]
    }
  ];

  return (
    <>
      {/* 使用 SeoHead 元件來設定頁面的 SEO 資訊 */}
      <SeoHead
        title="傑初診所醫師陣容｜中永和腸胃科｜皮膚專科"
        description="詳細介紹傑初診所的資深腸胃科與皮膚科專科醫師團隊，包含院長柯智傑醫師與柯振得醫師的學經歷、專長與門診時間，提供中永和地區患者專業醫療服務。"
        schema={doctorsSeoSchema}
      />
      
      <div className="min-h-screen bg-gradient-card flex flex-col">
        <Navigation />
        <main className="flex-1">
          {/* Header */}
          <section className="bg-gradient-hero text-primary-foreground py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">醫師陣容</h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
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
                    {/* Doctor Image */}
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-auto object-cover" 
                      />
                    </div>

                    <CardContent className="p-8">
                      {/* Doctor Header */}
                      <div className="flex items-start space-x-6 mb-8">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-2xl font-bold text-medical-text">{doctor.name}</h3>
                            {doctor.highlight && (
                              <Badge className="bg-primary text-primary-foreground">
                                特聘醫師
                              </Badge>
                            )}
                          </div>
                          <p className="text-lg text-muted-foreground font-medium mb-3">{doctor.title}</p>
                          <div className="flex flex-wrap gap-2">
                            {doctor.specialties.map((specialty, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Doctor Intro */}
                      <div className="mb-6 text-sm text-foreground">
                        {doctor.intro}
                      </div>

                      {/* Education */}
                      <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <GraduationCap className="w-5 h-5 text-muted-foreground" />
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
                          <Award className="w-5 h-5 text-muted-foreground" />
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
                          <Award className="w-5 h-5 text-muted-foreground" />
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
                      <div className="p-4 bg-muted rounded-lg mb-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium text-medical-text">門診時間</span>
                        </div>
                        <p className="text-sm text-foreground">{doctor.schedule}</p>
                      </div>

                      {/* Booking Buttons */}
                      {doctor.bookingButtons && (
                        <div className="flex justify-center space-x-4">
                          {doctor.bookingButtons.map((button, idx) => (
                            <Button key={idx} asChild className="flex-1 h-auto py-4 rounded-xl shadow-md text-sm text-center">
                              <Link to={button.url}>
                                {button.label.split('\n').map((line, lineIdx) => (
                                  <span key={lineIdx} className="block whitespace-pre-line leading-tight">
                                    {line}
                                  </span>
                                ))}
                              </Link>
                            </Button>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-20 bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
              <div className="max-w-3xl mx-auto">
                 
              <h3 className="text-xl font-bold mb-4">傑初診所腸胃科醫師與內視鏡專科團隊介紹</h3>
              <p className="mb-4">
                傑初診所擁有經驗豐富的腸胃科醫師與內視鏡專科團隊，提供中和、永和與新店地區患者專業、安全、準確的腸胃道檢查與診療。主治醫師 柯智傑院長 為前台北榮總肝膽腸胃科主治醫師，擅長無痛胃鏡、大腸鏡、肝膽胰超音波、慢性病管理與內視鏡減重，並致力於推廣社區化的高品質檢查流程。
              </p>
              <p className="mb-4">
                我們的團隊設有完整的內視鏡中心，採用 Fujifilm V8000 高階系統，結合 AI 偵測功能，提升胃腸病灶辨識率。搭配舒眠麻醉與一站式流程，讓患者能安心接受檢查而無需久候。除了腸胃科與內視鏡，我們亦有皮膚科醫師駐診，服務青春痘、蕁麻疹、濕疹、落髮等問題，並整合醫學美容療程。
              </p>
              <p className="mb-4">
                傑初診所的診療宗旨是提供結合「醫學中心等級品質 × 社區友善照護」的全人服務。無論是健保門診、慢性病管理、腸胃問題、體重控制或皮膚治療，均由資深醫師一對一評估，提供最貼近需求的個人化療程建議。我們深信「醫病關係」始於信任與溝通，因此每一位醫師都秉持耐心、同理與專業的態度，仔細傾聽病患需求、提供明確的診療建議。
              </p>
              <p className="mb-4 font-bold">
                歡迎有以下需求的民眾預約本院腸胃科醫師或皮膚專科醫師門診：
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4 mb-4">
                <li>反覆胃痛、胃脹、胃食道逆流</li>
                <li>大腸癌家族史欲安排大腸鏡檢查</li>
                <li>脂肪肝、B/C型肝炎追蹤</li>
                <li>需要健康檢查者（胃鏡＋超音波＋血液）</li>
                <li>體重管理與 GLP-1 減重療程需求</li>
                <li>青春痘、蕁麻疹、落髮與皮膚暗沉老化處理</li>
              </ul>
            </div>
            </div>

              {/* Contact Section */}
              <div className="mt-20 bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">預約專科門診</h3>
                  <p>
                想了解更多或預約診療，歡迎透過 LINE 或網頁掛號系統聯繫我們。傑初診所為中和與永和區居民提供一站式診療服務。
              </p>
                  <p className="text-lg text-primary-foreground/90 mb-8">
                  {/* Clinic Introduction */}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>02-8231-6869</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span>新北市中和區中安街102號</span>
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
                      className="bg-[hsl(var(--btn))] text-destructive-foreground hover:bg-[hsl(var(--btn-hover))]"
                                    asChild
                                  >
                      <Link to="/services">查看診療項目</Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="secondary"
                      className="bg-[hsl(var(--btn))] text-destructive-foreground hover:bg-[hsl(var(--btn-hover))]"
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
    </>
  );
};

export default Doctors;
