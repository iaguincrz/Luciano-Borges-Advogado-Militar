import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import { MessageSquare, X } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Show after slight delay or on scroll
    const timer = setTimeout(() => setVisible(true), 1200);
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      {/* Interactive Tooltip in White & Blue Aesthetic */}
      {showTooltip && (
        <div className="hidden xs:flex items-center gap-2 bg-white/95 border border-slate-200 text-[#0A2540] text-xs py-2 px-3.5 rounded-full shadow-xl backdrop-blur-md">
          {siteConfig.images.portrait ? (
            <img
              src={siteConfig.images.portrait}
              alt="Luciano Borges"
              className="w-5 h-5 rounded-full object-cover border border-slate-200"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "/assets/luciano_borges.png";
              }}
            />
          ) : (
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          )}
          <span className="font-bold text-[#0A2540]">Falar com Luciano</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 p-0.5 ml-1 transition-colors cursor-pointer"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={siteConfig.lawyer.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Abrir conversa no WhatsApp com Luciano Borges"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-40 group-hover:opacity-75" />

        <MessageSquare className="w-7 h-7 text-white fill-white transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
};
