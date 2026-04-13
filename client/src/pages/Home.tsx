"use client";

import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

/**
 * Maison C.GLOW - Ultimate Luxury Edition (Final Fixed)
 * * 修復：解決 Unterminated string constant 錯誤（補齊 className 引號）
 * * 排版：加寬標題容器，確保標語不隨意斷行。
 * * 動態：3秒電影級 Focus Pull 對焦開場。
 */

const luxuryEasing = [0.16, 1, 0.3, 1]; 

const linkCards = [
  { id: "website", subtitle: "DISCOVER THE COLLECTION", title: "官方網站", url: "https://cchic.shoplineapp.com/" },
  { id: "instagram", subtitle: "LATEST INSPIRATION", title: "Instagram", url: "https://www.instagram.com/c.chic_official/" },
  { id: "myship", subtitle: "CONVENIENT SHOPPING", title: "7-11 賣貨便", url: "https://myship.7-11.com.tw/general/detail/V2210202157530" },
  { id: "line", subtitle: "CLIENT SERVICES", title: "官方 Line", url: "https://line.me/R/ti/p/@c.chic" },
];

export default function LuxuryHome() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 滾動視差
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yLogo = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const opacityLogo = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#FCFCFC] text-[#1A1A1A] overflow-x-hidden selection:bg-[#1A1A1A] selection:text-white scroll-smooth">
      
      {/* 氛圍背景光暈 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[90vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-100/60 via-[#FCFCFC]/20 to-transparent pointer-events-none -z-10 blur-3xl" />

      {/* --- 1. HERO SECTION (電影開場) --- */}
      <div className="relative w-full h-[100vh] flex flex-col justify-between">
        
        <header className="relative z-20 w-full p-10 flex justify-center overflow-hidden">
          <AnimatePresence>
            {isLoaded && (
              <motion.p 
                initial={{ y: "100%", opacity: 0, filter: "blur(5px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 2, ease: luxuryEasing, delay: 0.8 }}
                className="text-zinc-400 text-[10px] tracking-[0.6em] uppercase font-light"
              >
                Maison C.GLOW
              </motion.p>
            )}
          </AnimatePresence>
        </header>

        {/* 核心對焦動態 */}
        <motion.div 
          style={{ y: yLogo, opacity: opacityLogo }}
          className="relative z-10 flex flex-col items-center justify-center flex-grow px-6"
        >
          {isLoaded && (
            <motion.img
              initial={{ scale: 1.1, opacity: 0, filter: "blur(24px)" }}
              animate={{ scale: 1, opacity: 0.95, filter: "blur(0px)" }}
              transition={{ duration: 3, ease: luxuryEasing }}
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663542665447/iWexjsgpwWbWCoJ7e6xKKb/cglow-hero-bg_c6fe2f39.png"
              alt="C.GLOW Logo"
              className="w-[320px] md:w-[750px] h-auto object-contain mix-blend-multiply"
            />
          )}
        </motion.div>

        {/* 底部滾動按鈕 */}
        <a 
          href="#explore"
          className="relative z-20 w-full pb-16 flex flex-col items-center justify-center cursor-pointer group opacity-80 hover:opacity-100 transition-opacity"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2.2 }}
            className="text-zinc-400 text-[9px] tracking-[0.4em] uppercase mb-8 font-sans group-hover:text-zinc-600 transition-colors"
          >
            Scroll to explore
          </motion.p>
          <div className="w-[1px] h-20 bg-zinc-200 overflow-hidden">
            <motion.div 
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5, 
                ease: [0.77, 0, 0.175, 1],
              }}
              className="w-full h-full bg-zinc-500"
            />
          </div>
        </a>
      </div>

      {/* --- 2. 導覽清單 --- */}
      <div id="explore" className="w-full max-w-5xl mx-auto px-6 py-32 md:py-48 relative z-20 bg-[#FCFCFC]">
        <div className="flex flex-col w-full border-t border-zinc-200">
          {linkCards.map((card, index) => (
            <motion.a
              key={card.id}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, margin: "-10%" }}
              variants={{
                initial: { opacity: 0, y: 30, filter: "blur(8px)" },
                animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.5, ease: luxuryEasing, delay: index * 0.15 } }
              }}
              className="group relative w-full border-b border-zinc-200 py-12 md:py-16 flex flex-col md:flex-row md:justify-between md:items-center overflow-hidden cursor-pointer bg-[#FCFCFC]"
            >
              <motion.div 
                variants={{
                  initial: { y: "101%" },
                  hover: { y: "0%" }
                }}
                transition={{ duration: 0.8, ease: luxuryEasing }}
                className="absolute inset-0 bg-[#1A1A1A] z-0" 
              />

              <div className="relative z-10 flex flex-col pointer-events-none px-4 md:px-8">
                <motion.span 
                  variants={{ hover: { color: "#A1A1AA" } }}
                  className="text-[9px] md:text-[10px] font-sans tracking-[0.4em] uppercase text-zinc-400 mb-3 md:mb-5 transition-colors duration-500"
                >
                  {card.subtitle}
                </motion.span>
                <h3 className="font-display text-3xl md:text-5xl font-light text-[#1A1A1A] group-hover:text-white transition-colors duration-700">
                  {card.title}
                </h3>
              </div>

              <div className="relative z-10 mt-8 md:mt-0 px-4 md:px-8 flex justify-end pointer-events-none">
                <motion.div
                  variants={{
                    initial: { x: -20, opacity: 0 },
                    hover: { x: 0, opacity: 1, color: "#FFFFFF" }
                  }}
                  transition={{ duration: 0.8, ease: luxuryEasing }}
                  className="text-[#1A1A1A] opacity-40 md:opacity-0"
                >
                  <ArrowRight strokeWidth={1} className="w-8 h-8 md:w-10 md:h-10" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* --- 3. 品牌哲學 (排版優化版) --- */}
      <div className="w-full bg-white py-48 px-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.8, ease: luxuryEasing }}
          className="max-w-4xl mx-auto text-center" 
        >
          <p className="text-[9px] font-sans tracking-[0.6em] uppercase text-zinc-400 mb-16">
            The Philosophy
          </p>
          
          <h2 className="font-display text-3xl md:text-5xl font-light leading-snug mb-24 text-[#1A1A1A] tracking-tight">
            <span className="italic text-zinc-400 font-serif mr-3 opacity-50">"</span> 
            <span className="md:whitespace-nowrap font-light">讓每一分優雅，都在光彩中綻放。</span>
            <span className="italic text-zinc-400 font-serif ml-3 opacity-50">"</span>
          </h2>

          <div className="space-y-12 text-justify md:text-center px-4 max-w-2xl mx-auto">
            <p className="font-serif text-sm md:text-base text-zinc-500 leading-[2.8] font-light tracking-widest">
              C.GLOW 是一種對優雅的執著，更是對美好生活的精準策展。我們相信，每一件單品都該是展現獨特光芒的藝術品。
            </p>
            <p className="font-serif text-sm md:text-base text-zinc-500 leading-[2.8] font-light tracking-widest">
              跨越品類的界線，我們嚴格把關輪廓與材質，摒棄多餘的裝飾，淬鍊出最純粹的質感。讓你在任何時刻，都能以最從容的姿態閃耀。
            </p>
          </div>
        </motion.div>
      </div>

      {/* 頁尾 */}
      <footer className="w-full py-16 px-6 bg-[#FCFCFC] relative z-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-zinc-100 pt-16">
          <p className="text-[9px] font-sans tracking-[0.4em] uppercase text-zinc-400">
            © 2026 Maison C.GLOW.
          </p>
          <p className="text-[9px] font-sans tracking-[0.4em] uppercase text-zinc-300">
            Designed with elegance
          </p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400&display=swap');

        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>
    </div>
  );
}