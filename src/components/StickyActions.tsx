import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyActions = () => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      {/* LINE Button */}
      <Button
        size="icon"
        className="h-12 w-12 rounded-full bg-[#00B900] hover:bg-[#00A000] text-white shadow-lg"
        onClick={() => window.open('https://line.me/ti/p/@your-line-id', '_blank')}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      {/* Phone Button */}
      <Button
        size="icon"
        className="h-12 w-12 rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg"
        onClick={() => window.open('tel:04-2461-1216', '_self')}
      >
        <Phone className="h-6 w-6" />
      </Button>
      
      {/* Facebook Button */}
      <Button
        size="icon"
        className="h-12 w-12 rounded-full bg-[#1877F2] hover:bg-[#166FE5] text-white shadow-lg"
        onClick={() => window.open('https://facebook.com/your-page', '_blank')}
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </Button>
    </div>
  );
};

export default StickyActions;