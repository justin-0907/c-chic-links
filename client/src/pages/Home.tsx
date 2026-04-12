import { ExternalLink, Instagram, MessageCircle, Globe } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * C.CHIC Home Page - Warm Minimalism Design
 * 
 * Design Philosophy:
 * - Minimalist layout with ample whitespace
 * - Warm beige background (#E8DCC8) with gold accents (#D4A574)
 * - Elegant typography: Playfair Display for titles, Lora for body
 * - Subtle shadows and hover effects for depth
 * - Smooth animations for page load and interactions
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
    url: "#",
    icon: <Globe className="w-8 h-8" />,
    color: "from-amber-100 to-amber-50",
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "追蹤最新的髮飾造型靈感",
    url: "#",
    icon: <Instagram className="w-8 h-8" />,
    color: "from-pink-100 to-pink-50",
  },
  {
    id: "myship",
    title: "7-11 賣貨便",
    description: "便利超商取貨購物",
    url: "#",
    icon: <ExternalLink className="w-8 h-8" />,
    color: "from-green-100 to-green-50",
  },
  {
    id: "line",
    title: "官方 Line",
    description: "客服諮詢與最新優惠資訊",
    url: "#",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "from-blue-100 to-blue-50",
  },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-96 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663542665447/iWexjsgpwWbWCoJ7e6xKKb/hero-background-bFR9B6CdM5M8gEBCf8if8H.webp')`,
        }}
      >
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

        {/* Brand Logo and Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Brand Logo with Title */}
          <div className="mb-6 opacity-0 animate-in fade-in duration-700 fill-mode-forwards">
            <img
              src="https://files.manuscdn.com/canvas/images/2026/04/12/2f309a2d-527c-4811-a786-832333bf3725.png"
              alt="C.CHIC Logo"
              className="w-[584px] h-auto drop-shadow-lg pb-[100px]"
            />
          </div>


        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16 md:py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            選擇您的購物方式
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Link Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {linkCards.map((card, index) => (
            <a
              key={card.id}
              href={card.url}
              className={`group relative overflow-hidden rounded-lg border-2 border-border bg-card p-8 transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-1 cursor-pointer opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards`}
              style={{
                animationDelay: isLoaded ? `${(index + 1) * 100}ms` : "0ms",
              }}
            >
              {/* Background Accent Pattern */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-serif text-sm md:text-base text-foreground/70 mb-4 group-hover:text-foreground transition-colors duration-300">
                  {card.description}
                </p>

                {/* Arrow Indicator */}
                <div className="flex items-center text-accent font-semibold text-sm">
                  前往
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Subtle border animation on hover */}
              <div className="absolute inset-0 rounded-lg border-2 border-accent opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
            </a>
          ))}
        </div>

        {/* Brand Story Section */}
        <div className="mt-24 pt-16 border-t border-border/30">
          <div className="max-w-3xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                我們的故事
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            </div>

            {/* Brand Story Content */}
            <div className="space-y-6 opacity-0 animate-in fade-in duration-700 fill-mode-forwards" style={{ animationDelay: "600ms" }}>
              <p className="font-serif text-lg text-foreground/80 leading-relaxed">
                C.CHIC 源於對優雅的執著與對夢想的堅持。我們相信，每一件髮飾都不僅是裝飾品，更是展現個人風格與品味的藝術作品。
              </p>
              
              <p className="font-serif text-lg text-foreground/80 leading-relaxed">
                從精選每一根珍珠、每一條絲帶，到精心設計每一個細節，我們致力於為您打造兼具精緻感與實穿性的髮飾。每一次的設計創新，都源於我們對美的追求與對您的了解。
              </p>
              
              <p className="font-serif text-lg text-foreground/80 leading-relaxed">
                「DREAMS COME TRUE」不只是我們的標語，更是我們的承諾。我們希望透過 C.CHIC 的髮飾，讓您在每一個重要時刻都能綻放自信與優雅，讓夢想在每一次佩戴中成真。
              </p>
              
              <p className="font-serif text-base text-foreground/60 italic mt-8">
                — 感謝您選擇 C.CHIC，一起譜寫優雅的故事。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8 mt-16">
        <div className="container text-center">
          <p className="font-serif text-sm text-foreground/60">
            © 2024 C.CHIC. All rights reserved.
          </p>
          <p className="font-serif text-xs text-foreground/40 mt-2">
            澄澄出品 · 優雅風格
          </p>
        </div>
      </footer>

      {/* Animation Styles */}
      <style>{`
        @keyframes slide-in-from-bottom-4 {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: slide-in-from-bottom-4 forwards;
        }

        .slide-in-from-bottom-4 {
          animation: slide-in-from-bottom-4 forwards;
        }

        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
}
