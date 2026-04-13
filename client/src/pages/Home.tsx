"use client";

import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * C.CHIC Home Page - High Fashion / Editorial Style
 * * Design Philosophy:
 * - Silver & Cool Tone: Matches the metallic silver logo.
 * - Pure White Canvas: Ensures the logo blends flawlessly.
 * - Typography: Wide tracking, strong contrast between serif and sans-serif.
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
    /* 背景改為純白，文字改為碳灰色 (zinc-800)，反白選取顏色也改為優雅的冷灰色 */
    <div className="relative min-h-screen bg-white text-zinc-800 overflow-x-hidden selection:bg-zinc-200 selection:text-zinc-900 scroll-smooth">
      
      <h1 className="sr-only">C.CHIC / C.GLOW - 極簡優雅髮飾與精品配件品牌</h1>

      {/* 1. 全螢幕沉浸式 Hero 區塊 (純白畫布) */}
      <div className="relative w-full h-[85vh] bg-white flex flex-col justify-between">
        
        <header className="relative z-10 w-full p-8 flex justify-center opacity-0 animate-in fade-in duration-1000">
          <p className="text-zinc-400 text-xs tracking-[0.4em] uppercase font-light">
            Maison C.GLOW
          </p>
        </header>

        {/* Logo 圖片區塊 */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
          <div className="opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
            <img
              /* 請確認這裡的路徑是否正確指向你上傳的圖片 */
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663542665447/iWexjsgpwWbWCoJ7e6xKKb/cglow-hero-bg_c6fe2f39.png"
              alt="C.GLOW Logo"
              /* 調整了比例，加上 mix-blend-multiply 確保即使有些微色差也能融入純白背景 */
              className="w-[400px] md:w-[800px] h-auto object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* 底部滑動提示 */}
        <a 
          href="#explore" 
          className="relative z-10 w-full pb-12 flex flex-col items-center justify-center opacity-0 animate-in fade-in duration-1000 delay-500 hover:opacity-70 transition-opacity cursor-pointer"
        >
          <p className="text-zinc-400 text-[10px] tracking-[0.3em] uppercase mb-4">Scroll to explore</p>
          <div className="w-px h-12 bg-zinc-200 overflow-hidden">
            <div className="w-full h-full bg-zinc-400 origin-top animate-scroll-line" />
          </div>
        </a>
      </div>

      {/* 2. 精品清單式導覽 */}
      <div id="explore" className="w-full max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col w-full border-t border-zinc-200">
          {linkCards.map((card, index) => (
            <a
              key={card.id}
              href={card.url}
              /* 將框線改為更輕盈的 border-zinc-200 */
              className={`group relative w-full border-b border-zinc-200 py-10 md:py-14 flex flex-col md:flex-row md:justify-between md:items-center overflow-hidden cursor-pointer opacity-0 animate-in fade-in duration-1000 fill-mode-forwards active:bg-zinc-50 active:scale-[0.99] transition-all`}
              style={{
                animationDelay: isLoaded ? `${(index + 1) * 150}ms` : "0ms",
              }}
            >
              {/* Hover 時的背景色從純黑改為高級的深碳灰色 (bg-zinc-900) */}
              <div className="absolute inset-0 bg-zinc-900 translate-y-[101%] md:group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]" />

              <div className="relative z-10 flex flex-col pointer-events-none">
                <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-zinc-400 md:group-hover:text-zinc-300 transition-colors duration-700 mb-2 md:mb-4">
                  {card.subtitle}
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-light text-zinc-800 md:group-hover:text-white transition-colors duration-700">
                  {card.title}
                </h3>
              </div>

              <div className="relative z-10 mt-6 md:mt-0 text-zinc-800 md:group-hover:text-white transition-colors duration-700 flex justify-end pointer-events-none">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 stroke-[1] opacity-30 translate-x-0 md:opacity-0 md:-translate-x-4 md:group-hover:translate-x-0 md:group-hover:opacity-100 transition-all duration-700 ease-out" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 3. 品牌哲學區塊 */}
      {/* 配合整體冷色調，背景改為極淺的冷灰色 (bg-zinc-50) */}
      <div className="w-full bg-zinc-50 py-32 px-6">
        <div className="max-w-3xl mx-auto text-center opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards" style={{ animationDelay: "300ms" }}>
          <p className="text-[10px] font-sans tracking-[0.4em] uppercase text-zinc-400 mb-8">
            The Philosophy
          </p>
          
          <h2 className="font-display text-3xl md:text-5xl font-light leading-tight mb-16 text-zinc-800">
            " 讓每一分優雅，<br className="md:hidden" />都在光彩中綻放。"
          </h2>

          <div className="space-y-8 text-justify md:text-center">
            <p className="font-serif text-sm md:text-lg text-zinc-500 leading-relaxed font-light">
              C.GLOW 是一種對優雅的執著，更是對美好生活的精準策展。我們相信，每一件單品都該是展現獨特光芒的藝術品。
            </p>
            <p className="font-serif text-sm md:text-lg text-zinc-500 leading-relaxed font-light">
              跨越品類的界線，我們嚴格把關輪廓與材質，摒棄多餘的裝飾，淬鍊出最純粹的質感。讓你在任何時刻，都能以最從容的姿態閃耀。
            </p>
          </div>
        </div>
      </div>

      {/* 極簡 Footer */}
      <footer className="w-full py-12 px-6 border-t border-zinc-100 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] md:text-[10px] font-sans tracking-[0.3em] uppercase text-zinc-400">
            © 2026 C.CHIC. All rights reserved.
          </p>
          <p className="text-[9px] md:text-[10px] font-sans tracking-[0.3em] uppercase text-zinc-400">
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