import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Instagram, MessageSquare, Shield, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="rodape"
      className="bg-[#0A2540] text-slate-300 text-sm border-t border-blue-900/80 pt-16 pb-24 sm:pb-16 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Identity Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                <Shield className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white uppercase tracking-tight">
                  {siteConfig.lawyer.name}
                </h3>
                <p className="text-xs font-bold text-blue-200 uppercase tracking-wider">
                  {siteConfig.lawyer.profession}
                </p>
              </div>
            </div>

            <p className="text-xs text-blue-100/80 max-w-sm leading-relaxed">
              Atuação jurídica focada no universo militar, prestando orientações sobre carreira, pensão militar, direitos e vida funcional.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-white font-medium">
              <span>Atuação em todo o Brasil</span>
            </div>

            {/* Editable OAB block (Displays if filled or placeholder) */}
            <div className="pt-1">
              <span className="text-xs font-mono text-blue-200">
                {siteConfig.lawyer.oab && siteConfig.lawyer.oab.trim() !== ""
                  ? siteConfig.lawyer.oab
                  : "OAB/UF: [PREENCHER NO CONFIG]"}
              </span>
            </div>
          </div>

          {/* Direct Contacts Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-200">
              Canais Oficiais
            </h4>
            
            <div className="space-y-3">
              <a
                href={siteConfig.lawyer.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-link"
                className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                  <MessageSquare className="w-4 h-4 text-emerald-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="block text-[11px] text-blue-200 font-medium">WhatsApp Oficial</span>
                  <span className="font-bold text-sm text-white">{siteConfig.lawyer.whatsappFormatted}</span>
                </div>
              </a>

              <a
                href={siteConfig.lawyer.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-link"
                className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center group-hover:bg-rose-500 transition-colors">
                  <Instagram className="w-4 h-4 text-rose-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="block text-[11px] text-blue-200 font-medium">Instagram Oficial</span>
                  <span className="font-bold text-sm text-white">{siteConfig.lawyer.instagramHandle}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Location & Address Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-200">
              Atendimento Presencial
            </h4>

            <div className="text-xs text-slate-200 space-y-1">
              <p className="flex items-start gap-1.5 font-medium leading-snug">
                <span className="text-rose-400 shrink-0">📍</span>
                <span>Rua Quintino Bocaiúva, nº 1.504 — Centro</span>
              </p>
              <p className="pl-5 text-blue-100/80">Anápolis — Goiás</p>
              <p className="pl-5 text-blue-100/70 font-mono">CEP: 75024-060</p>
            </div>

            <div className="pt-1">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+Quintino+Bocai%C3%BAva%2C+1504%2C+Centro%2C+An%C3%A1polis%2C+GO%2C+75024-060"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-maps-link"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white transition-colors"
              >
                <span>Ver no Google Maps →</span>
              </a>
            </div>
          </div>

          {/* Back to top column */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              id="footer-scroll-top"
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              aria-label="Voltar ao início da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono text-blue-200 mt-6 md:mt-0 font-medium">
              {siteConfig.lawyer.experience} de atuação
            </span>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright Notice */}
        <div className="pt-8 space-y-4">
          <p
            id="footer-disclaimer"
            className="text-xs text-blue-100/70 leading-relaxed text-center sm:text-left bg-white/5 p-4 rounded-xl border border-white/10"
          >
            {siteConfig.footer.disclaimer}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
            <p>© {new Date().getFullYear()} {siteConfig.lawyer.name}. Todos os direitos reservados.</p>
            <p>Página institucional informativa.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
