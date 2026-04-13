"use client";

import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * C.CHIC Home Page - High Fashion / Editorial Style (Chanel-inspired)
 * * Design Philosophy:
 * - Extreme Minimalism: Black, white, and subtle greys only.
 * - Borderless: No traditional "cards". Using fine lines and ample whitespace.
 * - Typography: Wide tracking (letter spacing), strong contrast between serif and sans-serif.
 * - Editorial Flow: Looks like a fashion magazine cover and index.
 */

interface LinkCard {
  id: string;
  subtitle: string;
  title: string;
  url: string;
}

const linkCards: LinkCard[] = [
  {
    id: "website",
    subtitle: "DISCOVER THE COLLECTION",
    title: "官方網站",
    url: "#",
  },
  {
    id: "instagram",
    subtitle: "LATEST INSPIRATION",
    title: "Instagram",
    url: "#",
  },
  {
    id: "myship",
    subtitle: "CONVENIENT SHOPPING",
    title: "7-11 賣貨便",
    url: "#",
  },
  {
    id: "line",
    subtitle: "CLIENT SERVICES",
    title: "官方 Line",
    url: "#",
  },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F8F7F5] text-[#3A3A3A] overflow-x-hidden selection:bg-[#3A3A3A] selection:text-white scroll-smooth">
      
      <h1 className="sr-only">C.CHIC / C.GLOW - 極簡優雅髮飾與精品配件品牌</h1>

      {/* 1. 全螢幕沉浸式 Hero 區塊 (將背景改為純白 bg-white) */}
      <div className="relative w-full h-[85vh] bg-white flex flex-col justify-between">
        
        <header className="relative z-10 w-full p-8 flex justify-center opacity-0 animate-in fade-in duration-1000">
          <p className="text-gray-400 text-xs tracking-[0.4em] uppercase font-light">
            Maison C.GLOW
          </p>
        </header>

        {/* 將圖片放回這裡，並控制大小 */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
          <div className="opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663542665447/iWexjsgpwWbWCoJ7e6xKKb/cglow-hero-bg_c6fe2f39.png"
              alt="C.GLOW Logo"
              /* 調整寬度，避免變得太大，mix-blend-multiply 可以確保邊緣完美融入白色背景 */
              className="w-[500px] md:w-[900px] h-auto object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* 底部滑動提示 */}
        <a 
          href="#explore" 
          className="relative z-10 w-full pb-12 flex flex-col items-center justify-center opacity-0 animate-in fade-in duration-1000 delay-500 hover:opacity-70 transition-opacity cursor-pointer"
        >
          <p className="text-gray-400 text-[10px] tracking-[0.3em] uppercase mb-4">Scroll to explore</p>
          <div className="w-px h-12 bg-gray-200 overflow-hidden">
            <div className="w-full h-full bg-gray-400 origin-top animate-scroll-line" />
          </div>
        </a>
      </div>

      {/* 2. 精品清單式導覽 */}
      <div id="explore" className="w-full max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col w-full border-t border-black/20">
          {linkCards.map((card, index) => (
            <a
              key={card.id}
              href={card.url}
              className={`group relative w-full border-b border-black/20 py-10 md:py-14 flex flex-col md:flex-row md:justify-between md:items-center overflow-hidden cursor-pointer opacity-0 animate-in fade-in duration-1000 fill-mode-forwards active:bg-black/5 active:scale-[0.99] transition-all`}
              style={{
                animationDelay: isLoaded ? `${(index + 1) * 150}ms` : "0ms",
              }}
            >
              <div className="absolute inset-0 bg-black translate-y-[101%] md:group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]" />

              <div className="relative z-10 flex flex-col pointer-events-none">
                <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-black/50 md:group-hover:text-white/60 transition-colors duration-700 mb-2 md:mb-4">
                  {card.subtitle}
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-light text-black md:group-hover:text-white transition-colors duration-700">
                  {card.title}
                </h3>
              </div>

              <div className="relative z-10 mt-6 md:mt-0 text-black md:group-hover:text-white transition-colors duration-700 flex justify-end pointer-events-none">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 stroke-[1] opacity-40 translate-x-0 md:opacity-0 md:-translate-x-4 md:group-hover:translate-x-0 md:group-hover:opacity-100 transition-all duration-700 ease-out" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 3. 品牌哲學區塊 */}
      <div className="w-full bg-[#FAFAFA] py-32 px-6">
        <div className="max-w-3xl mx-auto text-center opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards" style={{ animationDelay: "300ms" }}>
          <p className="text-[10px] font-sans tracking-[0.4em] uppercase text-black/40 mb-8">
            The Philosophy
          </p>
          
          <h2 className="font-display text-3xl md:text-5xl font-light leading-tight mb-16 text-black">
            " 讓每一分優雅，<br className="md:hidden" />都在光彩中綻放。"
          </h2>

          <div className="space-y-8 text-justify md:text-center">
            <p className="font-serif text-sm md:text-lg text-black/60 leading-relaxed font-light">
              C.GLOW 源於對光彩的執著與對優雅的追求。我們相信，每一件髮飾都應該成為展現獨特光芒的藝術品。
            </p>
            <p className="font-serif text-sm md:text-lg text-black/60 leading-relaxed font-light">
              從經典輪廓到創新材質，我們摒棄多餘的裝飾，只留下最純粹的質感。讓佩戴者在任何時刻，都能以最從容的姿態閃耀。
            </p>
          </div>
        </div>
      </div>

      {/* 極簡 Footer */}
      <footer className="w-full py-12 px-6 border-t border-black/10 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] md:text-[10px] font-sans tracking-[0.3em] uppercase text-black/40">
            © 2026 C.CHIC. All rights reserved.
          </p>
          <p className="text-[9px] md:text-[10px] font-sans tracking-[0.3em] uppercase text-black/40">
            Design by 澄澄
          </p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Inter:wght@300;400&display=swap');

        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }

        @keyframes slide-in-from-bottom-8 {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.1% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }

        .animate-scroll-line {
          animation: scroll-line 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }

        .animate-in {
          animation: slide-in-from-bottom-8 forwards;
        }

        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}