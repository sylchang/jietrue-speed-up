import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import News from "./pages/News";
import Services from "./pages/Services";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Hours from "./pages/Hours";
import Contact from "./pages/Contact";
import HealthInfo from "./pages/HealthInfo";
import NotFound from "./pages/NotFound";

// Blog post pages
import TirzepatideComparison from "./pages/blog/TirzepatideComparison";
import GlpComparison from "./pages/blog/GlpComparison";
import Ozempic from "./pages/blog/Ozempic";
import HpyloriTest from "./pages/blog/HpyloriTest";
import AnesthesiaInfo from "./pages/blog/AnesthesiaInfo";
import MounjaroBlog from "./pages/blog/MounjaroBlog";
import GastroenteritisRelief from "./pages/blog/GastroenteritisRelief";
import LowResidueFoodBlog from "./pages/blog/LowResidueFoodBlog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/hours" element={<Hours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<HealthInfo />} />
          
          {/* Blog post routes */}
          <Route path="/tirzepatide-semaglutide-weight-loss-comparison-yonghe-zhonghe" element={<TirzepatideComparison />} />
          <Route path="/glp1-comparison" element={<GlpComparison />} />
          <Route path="/ozempic" element={<Ozempic />} />
          <Route path="/hpylori-test" element={<HpyloriTest />} />
          <Route path="/anesthesia-info" element={<AnesthesiaInfo />} />
          <Route path="/mounjaro-blog" element={<MounjaroBlog />} />
          <Route path="/gastroenteritis-symptoms-relief" element={<GastroenteritisRelief />} />
          <Route path="/low-residue-convenience-food" element={<LowResidueFoodBlog />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
