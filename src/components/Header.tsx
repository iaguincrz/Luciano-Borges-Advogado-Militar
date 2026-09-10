import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import { MessageSquare, Instagram, Shield, Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm"
          : "bg-white/70 backdrop-blur-sm py-4 sm:py-5 border-b border-slate-100"
      }`}
    >
      {/* Dynamic Scroll Progress Bar (Scrolls with user up & down) */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#0A2540] via-[#1D4ED8] to-[#3B82F6] transition-all duration-150 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#inicio"
          id="header-brand-link"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A2540] to-[#1E40AF] border border-blue-900 flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-md shadow-blue-900/15">
            <Shield className="w-5 h-5 text-blue-100 group-hover:text-white transition-colors" />
          </div>
          <div>
            <span className="block font-bold tracking-tight uppercase text-sm sm:text-base text-[#0A2540]">
              {siteConfig.lawyer.name}
            </span>
            <span className="block text-[11px] tracking-wider uppercase text-blue-700 font-semibold">
              {siteConfig.lawyer.profession}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a
            href="#atuacao"
            className="hover:text-[#0A2540] transition-colors py-1 hover:border-b-2 hover:border-[#1D4ED8]"
          >
            Atuação
          </a>
          <a
            href="#sobre"
            className="hover:text-[#0A2540] transition-colors py-1 hover:border-b-2 hover:border-[#1D4ED8]"
          >
            Sobre
          </a>
          <a
            href="#conteudo"
            className="hover:text-[#0A2540] transition-colors py-1 hover:border-b-2 hover:border-[#1D4ED8]"
          >
            Conteúdo
          </a>
          <a
            href="#como-funciona"
            className="hover:text-[#0A2540] transition-colors py-1 hover:border-b-2 hover:border-[#1D4ED8]"
          >
            Primeiro Contato
          </a>
          <a
            href="#onde-estamos"
            className="hover:text-[#0A2540] transition-colors py-1 hover:border-b-2 hover:border-[#1D4ED8]"
          >
            Localização
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={siteConfig.lawyer.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-instagram-button"
            className="p-2.5 rounded-lg text-slate-500 hover:text-blue-700 hover:bg-blue-50 border border-slate-200/80 transition-all"
            aria-label="Instagram de Luciano Borges"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href={siteConfig.lawyer.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-whatsapp-cta"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#0A2540] to-[#1D4ED8] hover:from-[#0E355C] hover:to-[#2563EB] text-white border border-blue-900 transition-all shadow-md shadow-blue-950/15 active:scale-98"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="header-mobile-toggle"
          className="md:hidden p-2 rounded-lg text-slate-700 hover:text-[#0A2540] hover:bg-slate-100 border border-slate-200"
          aria-label="Menu principal"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-white/98 border-b border-slate-200 backdrop-blur-xl px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-3 text-base font-semibold text-slate-800">
            <a
              href="#atuacao"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#1D4ED8]"
            >
              Atuação
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#1D4ED8]"
            >
              Sobre Luciano
            </a>
            <a
              href="#conteudo"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#1D4ED8]"
            >
              Conteúdos & Dúvidas
            </a>
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#1D4ED8]"
            >
              Como Funciona o Contato
            </a>
            <a
              href="#onde-estamos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#1D4ED8]"
            >
              Onde Estamos
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={siteConfig.lawyer.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-drawer-whatsapp"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0A2540] to-[#1D4ED8] text-white flex items-center justify-center gap-2 text-sm font-bold tracking-wide shadow-md shadow-blue-900/20"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              Falar pelo WhatsApp
            </a>

            <a
              href={siteConfig.lawyer.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center gap-2 text-sm font-medium hover:bg-slate-100"
            >
              <Instagram className="w-4 h-4 text-rose-500" />
              {siteConfig.lawyer.instagramHandle}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
