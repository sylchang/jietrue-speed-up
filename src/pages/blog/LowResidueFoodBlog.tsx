import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StickyActions } from "@/components/StickyActions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const LowResidueFoodBlog = () => {
  return (
    <>
      <Helmet>
        <title>便利商店低渣飲食推薦菜單｜大腸鏡前怎麼吃？傑初診所中和腸胃科</title>
        <meta name="description" content="面臨大腸鏡檢查，最困擾的就是「不知道該吃什麼」。其實，低渣飲食不需要特別下廚，台灣便利商店（7-11、全家、萊爾富）就能輕鬆搞定。傑初診所中和腸胃科提醒您，大腸鏡檢查前三天應避免纖維太高、太油或刺激的食物。" />
        <meta name="keywords" content="低渣飲食,大腸鏡前飲食,便利商店,7-11,全家,萊爾富,大腸鏡檢查,傑初診所,中和腸胃科" />
        <meta property="og:title" content="便利商店低渣飲食推薦菜單｜大腸鏡前怎麼吃？傑初診所中和腸胃科" />
        <meta property="og:description" content="面臨大腸鏡檢查，最困擾的就是「不知道該吃什麼」。其實，低渣飲食不需要特別下廚，台灣便利商店（7-11、全家、萊爾富）就能輕鬆搞定。傑初診所中和腸胃科提醒您，大腸鏡檢查前三天應避免纖維太高、太油或刺激的食物。" />
        <meta property="og:url" content="https://jietrue.com/low-residue-convenience-food/" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://jietrue.com/wp-content/uploads/2025/04/便利商店也能完成低渣飲食.png" />
        <link rel="canonical" href="https://jietrue.com/low-residue-convenience-food/" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-background to-muted/20 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
                便利商店也能完成低渣飲食？大腸鏡前懶人飲食推薦
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                面臨大腸鏡檢查，最困擾的就是「不知道該吃什麼」
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <img 
                  src="https://jietrue.com/wp-content/uploads/2025/04/便利商店也能完成低渣飲食.png"
                  alt="便利商店也能完成低渣飲食 永和腸胃科"
                  className="w-full rounded-lg mb-8"
                />

                <p className="text-lg mb-8">
                  <strong>面臨大腸鏡檢查，最困擾的就是「不知道該吃什麼」。</strong> 其實，低渣飲食不需要特別下廚，台灣便利商店（7-11、全家、萊爾富）就能輕鬆搞定。
                </p>

                <p className="text-lg mb-8">
                  傑初診所 <strong>中和腸胃科</strong> 提醒您， <strong>大腸鏡檢查前三天</strong> 應避免纖維太高、太油或刺激的食物，並以 <strong>白色系、無渣、易消化</strong> 為主。本文將提供便利商店中常見、符合「低渣飲食」標準的食物選擇。
                </p>

                <h2 className="text-3xl font-bold mb-6 text-primary">低渣飲食便利商店推薦組合</h2>
                
                <Card className="p-6 mb-8 overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-gray-300 p-3 text-left">餐別</th>
                        <th className="border border-gray-300 p-3 text-left">便利商店推薦項目</th>
                        <th className="border border-gray-300 p-3 text-left">注意事項</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">早餐</td>
                        <td className="border border-gray-300 p-3">茶葉蛋 + 白吐司（不夾料）</td>
                        <td className="border border-gray-300 p-3">避免全麥吐司與有蔬菜夾層</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">午餐</td>
                        <td className="border border-gray-300 p-3">清粥便當（白粥 + 魚鬆/蒸蛋）</td>
                        <td className="border border-gray-300 p-3">避免蔬菜、海帶、豆干等配菜</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">晚餐</td>
                        <td className="border border-gray-300 p-3">雞肉飯糰 + 蒸蛋杯</td>
                        <td className="border border-gray-300 p-3">選擇無油炸、無蔬菜餡料</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">點心</td>
                        <td className="border border-gray-300 p-3">原味布丁、果凍、蜂蜜水</td>
                        <td className="border border-gray-300 p-3">避免奶類飲品與含渣果汁</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">飲品</td>
                        <td className="border border-gray-300 p-3">水、運動飲料、鋁箔果汁</td>
                        <td className="border border-gray-300 p-3">無渣、無果粒、無氣泡為原則</td>
                      </tr>
                    </tbody>
                  </table>
                </Card>

                <h3 className="text-2xl font-semibold mb-4 text-primary">外食族小提醒</h3>
                
                <Card className="p-6 mb-8">
                  <ul className="space-y-3 text-lg">
                    <li>• 盡量選擇「白色系」食物（白米、白麵、白粥）</li>
                    <li>• 避免夾蔬菜、海帶、豆皮、全穀類食材</li>
                    <li>• 蒸蛋、嫩豆腐是方便又穩定的低渣來源</li>
                    <li>• 乳製品容易脹氣，檢查前不建議攝取</li>
                  </ul>
                </Card>

                <h3 className="text-2xl font-semibold mb-4 text-primary">清流質飲食階段怎麼吃？</h3>
                
                <p className="text-lg mb-6">
                  檢查前一天轉為「清流質飲食」，建議選擇便利商店中這些飲品：
                </p>

                <Card className="p-6 mb-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">✅ 可以喝：</h4>
                      <ul className="space-y-1">
                        <li>• 米湯、清雞湯</li>
                        <li>• 蜂蜜水</li>
                        <li>• 運動飲料</li>
                        <li>• 無渣果汁</li>
                        <li>• 清湯類（去除固體）</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">❌ 避免：</h4>
                      <ul className="space-y-1">
                        <li>• 牛奶、豆漿</li>
                        <li>• 含果粒飲品</li>
                        <li>• 氣泡飲料</li>
                        <li>• 紅色液體</li>
                        <li>• 酒精類飲品</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <h3 className="text-2xl font-semibold mb-4 text-primary">溫馨提醒</h3>
                
                <Card className="p-6 mb-8 bg-blue-50 border-blue-200">
                  <ul className="space-y-3 text-blue-800">
                    <li>• 每個人的腸道清潔效果不同，請遵循醫師指示</li>
                    <li>• 若有特殊疾病或藥物使用，請事先告知醫師</li>
                    <li>• 檢查當天請記得攜帶健保卡及相關文件</li>
                    <li>• 建議有人陪同，檢查後避免開車</li>
                  </ul>
                </Card>

                <div className="text-center mt-12">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">需要大腸鏡檢查諮詢？</h3>
                  <p className="text-lg mb-6">
                    傑初診所提供專業的大腸鏡檢查服務，包含完整的檢查前飲食指導。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <a href="https://lin.ee/bQKntMLD" target="_blank" rel="noopener noreferrer">
                        LINE 線上預約
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="/contact">聯絡我們</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <StickyActions />
        <Footer />
      </div>
    </>
  );
};

export default LowResidueFoodBlog;