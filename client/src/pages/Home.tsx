import { ExternalLink, Instagram, MessageCircle, Globe, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * C.CHIC Home Page - Enhanced Warm Minimalism
 * * Optimized Features:
 * - Fixed Glassmorphism Navbar
 * - Centered Elegant Brand Slogan Section
 * - Refined Link Cards with smooth hover states
 * - Responsive typography and spacing
 */

interface LinkCard {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const linkCards: LinkCard[] = [
  {
    id: "website",
    title: "官方網站",
    description: "瀏覽我們的完整髮飾系列",
    url: "#", // 請在此處替換實際網址
    icon: <Globe className="w-6 h-6" />,
    color: "from-amber-100/40 to-transparent",
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "追蹤最新的髮飾造型靈感",
    url: "#", // 請在此處替換實際網址
    icon: <Instagram className="w-6 h-6" />,
    color: "from-pink-100/40 to-transparent",
  },
  {
    id: "myship",
    title: "7-11 賣貨便",
    description: "便利超商取貨購物",
    url: "#", // 請在此處替換實際網址
    icon: <ExternalLink className="w-6 h-6" />,
    color: "from-green-100/40 to-transparent",
  },
  {
    id: "line",
    title: "官方 Line",
    description: "客服諮詢與最新優惠資訊",
    url: "#", // 請在此處替換實際網址
    icon: <MessageCircle className="w-6 h-6" />,
    color: "from-blue-100/40 to-transparent",
  },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      
      {/* 1. 固定式導覽列 (Navbar) - 提升品牌質感 */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/60 backdrop-blur-md">
        <div className="container h-16 flex items-center justify-center">
           <span className="font-display text-xl font-bold tracking-[0.3em] text-primary">C.CHIC</span>
        </div>
      </nav>

      {/* 2. Hero Section - 視覺張力 */}
      <div
        className="relative h-[45vh] flex items-center justify-center bg-cover bg-center mt-16"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663542665447/iWexjsgpwWbWCoJ7e6xKKb/hero-background-bFR9B6CdM5M8gEBCf8if8H.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/5" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            C.CHIC
          </h1>
          <p className="font-serif text-white/90 italic tracking-[0.2em] mt-4 animate-in fade-in duration-1000 delay-500">
            Dreams Come True.
          </p>
        </div>
      </div>

      {/* 3. 品牌標語區塊 (Brand Slogan) - 你要求的優雅中央區塊 */}
      <div className="py-24 bg-secondary/10 border-y border-border/20">
        <div className="container text-center max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-8 text-accent/40">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <h2 className="font-display text-2xl md:text-4xl leading-relaxed tracking-[0.2em] text-foreground/90 font-medium animate-in fade-in duration-1000">
            『 為日常注入優雅靈魂 』
          </h2>
          <div className="mt-10 w-20 h-[1px] bg-accent/30 mx-auto" />
        </div>
      </div>

      {/* 4. Main Content - 連結卡片 */}
      <div className="container py-24">
        <div className="text-center mb-16">
          <h3 className="font-display text-2xl font-semibold mb-3 text-foreground/80">
            選擇您的購物方式
          </h3>
          <p className="font-serif text-sm text-foreground/40 italic tracking-widest uppercase">Explore our collection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {linkCards.map((card, index) => (
            <a
              key={card.id}
              href={card.url}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 hover:border-accent hover:shadow-[0_20px_50px_-12px_rgba(212,165,116,0.2)] hover:-translate-y-1 opacity-0 animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${(index + 1) * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* 背景漸層裝飾 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex items-center gap-6">
                <div className="p-4 rounded-xl bg-background border border-border/50 text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-500 shadow-sm">
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                    {card.title}
                  </h4>
                  <p className="font-serif text-xs text-foreground/50 leading-relaxed tracking-wide">
                    {card.description}
                  </p>
                </div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-border/30 group-hover:border-accent/50 group-hover:bg-accent/5 transition-all">
                  <ExternalLink className="w-3 h-3 text-border group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 5. Footer */}
      <footer className="py-20 border-t border-border/40 bg-secondary/20">
        <div className="container text-center space-y-6">
          <p className="font-display text-2xl font-bold tracking-[0.4em] text-primary/40">C.CHIC</p>
          <div className="flex justify-center gap-8 text-foreground/30">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
            <Globe className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
            <MessageCircle className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
          </div>
          <div className="pt-8">
            <p className="text-[10px] font-serif tracking-[0.3em] text-foreground/20 uppercase">
              © 2024 C.CHIC. 精緻髮飾 · 優雅風格
            </p>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-bottom-4 {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in { animation: slide-in-from-bottom-4 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}
