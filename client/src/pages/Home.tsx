"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Maison C.GLOW - Image Centric & Classic E-commerce Header Layout
 * * 導覽列：fixed 絕對置頂
 * * 佈局：外層加入 pt-[132px] md:pt-[168px] 避免首圖被 fixed 選單遮擋
 * * 修正：首圖使用「手機版/電腦版圖片分離」技術，手機直圖滿版，電腦橫圖滿版。
 */

const luxuryEasing = [0.16, 1, 0.3, 1]; 

const linkCards = [
  { id: "website", title: "官方網站", url: "https://cchic.shoplineapp.com/" },
  { id: "instagram", title: "Instagram", url: "https://www.instagram.com/c.chic_official/" },
  { id: "myship", title: "7-11 賣貨便", url: "https://myship.7-11.com.tw/general/detail/V2210202157530" },
  { id: "line", title: "官方 Line", url: "https://line.me/R/ti/p/@c.chic" },
];

// --- 關鍵修改：定義電腦版與手機版的首圖 ---
const heroImages = {
  // 電腦版橫圖 (你原本的圖)
  desktop: "https://images.pexels.com/photos/2122362/pexels-photo-2122362.jpeg",
  // 手機版直圖 (請換成你們自己拍攝的直立版商品圖，這裡先用高畫質直圖佔位)
  mobile: "https://images.pexels.com/photos/29858713/pexels-photo-29858713.jpeg"
};

const galleryImages = [
  "https://images.pexels.com/photos/28834218/pexels-photo-28834218.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/10632861/pexels-photo-10632861.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/19480676/pexels-photo-19480676.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/19480677/pexels-photo-19480677.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/15679652/pexels-photo-15679652.jpeg?auto=compress&cs=tinysrgb&w=1200"
];

export default function LuxuryHome() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#FCFCFC] text-[#1A1A1A] overflow-x-hidden selection:bg-[#1A1A1A] selection:text-white scroll-smooth pt-[132px] md:pt-[168px]">
      
      {/* --- 1. 雙層頂部導覽列 --- */}
      <header className="w-full z-50 fixed top-0 left-0 bg-[#FBFBF9] shadow-sm flex flex-col">
        <div className="py-6 md:py-8 flex justify-center items-center">
          <h1 className="text-zinc-800 text-xl md:text-3xl tracking-[0.3em] uppercase font-light font-display">
            Maison C.GLOW
          </h1>
        </div>
        
        <div className="w-full bg-[#8c8581] py-3 md:py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-14">
            {linkCards.map((link) => (
              <a 
                key={link.id} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[13px] md:text-[15px] font-sans tracking-[0.1em] text-white hover:text-zinc-200 hover:underline underline-offset-4 transition-all duration-300"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* --- 2. 首圖 HERO SECTION --- */}
      {/* 恢復為較高的高度 h-[70vh] md:h-[80vh]，讓手機版畫面更大氣 */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden flex flex-col items-center justify-end pb-8 md:pb-12 bg-zinc-100">
        <motion.div 
          style={{ y: yHero }}
          className="absolute inset-0 z-0 flex items-center justify-center"
        >
          {isLoaded && (
            <>
              {/* 手機版直圖 (md:hidden 表示在平板以上尺寸隱藏) */}
              <motion.img
                initial={{ opacity: 0, filter: "blur(12px)", scale: 1.02 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 2, ease: luxuryEasing }}
                src={heroImages.mobile}
                alt="Maison C.GLOW Hero Mobile"
                className="w-full h-full object-cover md:hidden mix-blend-multiply"
              />
              
              {/* 電腦版橫圖 (hidden md:block 表示只在平板以上尺寸顯示) */}
              <motion.img
                initial={{ opacity: 0, filter: "blur(12px)", scale: 1.02 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 2, ease: luxuryEasing }}
                src={heroImages.desktop}
                alt="Maison C.GLOW Hero Desktop"
                className="hidden md:block w-full h-full object-cover mix-blend-multiply"
              />
            </>
          )}
        </motion.div>

        <a href="#gallery" className="relative z-20 flex flex-col items-center justify-center cursor-pointer group opacity-90 hover:opacity-100 transition-opacity">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="text-white font-medium text-[10px] tracking-[0.4em] uppercase mb-4 font-sans drop-shadow-md"
          >
            Explore Collection
          </motion.p>
          <div className="w-[1px] h-12 md:h-16 bg-white/50 overflow-hidden relative shadow-sm">
            <motion.div 
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{ repeat: Infinity, duration: 2.5, ease: [0.77, 0, 0.175, 1] }}
              className="absolute w-full h-full bg-white"
            />
          </div>
        </a>
      </div>

      {/* --- 3. 圖片畫廊 Image Gallery --- */}
      <div id="gallery" className="w-full max-w-[1600px] mx-auto px-4 md:px-8 py-20 md:py-32 relative z-20 bg-[#FCFCFC]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: luxuryEasing, delay: index * 0.1 }}
              className="relative aspect-[4/5] overflow-hidden group bg-zinc-100 cursor-pointer"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: luxuryEasing }}
                src={src}
                alt={`Collection Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- 4. 品牌哲學 --- */}
      <div className="w-full bg-white py-32 md:py-48 px-6 relative z-20">
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
          
        <h2 className="font-display flex items-center justify-center whitespace-nowrap text-[25px] sm:text-xl md:text-5xl font-light leading-snug mb-24 text-[#1A1A1A] tracking-tight">
            <span className="italic text-zinc-400 font-serif mr-2 md:mr-3 opacity-50 text-xl md:text-5xl">"</span> 
            <span className="font-light">讓每一分優雅，都在光彩中綻放。</span>
            <span className="italic text-zinc-400 font-serif ml-2 md:ml-3 opacity-50 text-xl md:text-5xl">"</span>
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

      {/* --- 頁尾 --- */}
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