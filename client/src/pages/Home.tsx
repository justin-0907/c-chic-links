import { ExternalLink, Instagram, MessageCircle, Globe, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

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
    url: "#",
    icon: <Globe className="w-6 h-6" />,
    color: "from-amber-100/50 to-transparent",
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "追蹤最新的髮飾造型靈感",
    url: "#",
    icon: <Instagram className="w-6 h-6" />,
    color: "from-pink-100/50 to-transparent",
  },
  {
    id: "myship",
    title: "7-11 賣貨便",
    description: "便利超商取貨購物",
    url: "#",
    icon: <ExternalLink className="w-6 h-6" />,
    color: "from-green-100/50 to-transparent",
  },
  {
    id: "line",
    title: "官方 Line",
    description: "客服諮詢與最新優惠資訊",
    url: "#",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "from-blue-100/50 to-transparent",
  },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/60 backdrop-blur-md">
        <div className="container h-16 flex items-center justify-center">
           <span className="font-display text-xl font-bold tracking-[0.2em] text-primary">C.CHIC</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative h-[45vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663542665447/iWexjsgpwWbWCoJ7e6xKKb/hero-background-bFR9B6CdM5M8gEBCf8if8H.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white drop-shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            C.CHIC
          </h1>
          <p className="font-serif text-white/90 italic tracking-widest mt-2 animate-in fade-in duration-1000 delay-500">
            Dreams Come True.
          </p>
        </div>
      </div>

      {/* 品牌標語區塊 - 這裡加入了你要的優雅區塊 */}
      <div className="py-20 bg-secondary/20 border-y border-border/30">
        <div className="container text-center max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-6 text-accent/60">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="font-display text-2xl md:text-4xl leading-relaxed tracking-[0.15em] text-foreground font-medium animate-in fade-in duration-1000">
            『 為日常注入優雅靈魂 』
          </h2>
          <div className="mt-8 w-24 h-[1px] bg-accent/40 mx-auto" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-20">
        <div className="text-center mb-16">
          <h3 className="font-display text-2xl font-semibold mb-2 text-foreground/80">
            選擇您的購物方式
          </h3>
          <p className="font-serif text-sm text-foreground/40 italic">Explore our collection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {linkCards.map((card, index) => (
            <a
              key={card.id}
              href={card.url}
              className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-6 transition-all duration-500 hover:border-accent hover:shadow-[0_20px_40px_-15px_rgba(212,165,116,0.15)] hover:-translate-y-1 opacity-0 animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${(index + 1) * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex items-center gap-6">
                <div className="p-4 rounded-full bg-secondary text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-lg font-bold mb-1 group-hover:text-accent transition-colors">
                    {card.title}
                  </h4>
                  <p className="font-serif text-xs text-foreground/50 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-border group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 border-t border-border/40 bg-secondary/30">
        <div className="container text-center space-y-4">
          <p className="font-display text-2xl font-bold tracking-widest text-primary/40">C.CHIC</p>
          <div className="flex justify-center gap-6 text-foreground/30">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
            <Globe className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
          </div>
          <p className="text-[10px] font-serif tracking-[0.2em] text-foreground/30 uppercase mt-8">
            © 2024 C.CHIC. 精緻髮飾 · 優雅風格
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-bottom-4 {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in { animation: slide-in-from-bottom-4 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
}
