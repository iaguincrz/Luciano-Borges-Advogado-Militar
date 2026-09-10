import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Instagram, ArrowUpRight, BookOpen } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const ContentAuthoritySection: React.FC = () => {
  return (
    <section
      id="conteudo"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-white relative border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#1D4ED8] uppercase mb-3">
                <Instagram className="w-4 h-4" />
                <span>Educação & Esclarecimento</span>
              </div>
              <h2
                id="conteudo-title"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-snug mb-4"
              >
                {siteConfig.contentAuthority.title}
              </h2>
              <p
                id="conteudo-subtitle"
                className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
              >
                {siteConfig.contentAuthority.subtitle}
              </p>
            </div>

            <a
              href={siteConfig.lawyer.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="conteudo-instagram-header-link"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0A2540] bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all self-start md:self-auto shrink-0 shadow-xs"
            >
              <span>Ver perfil no Instagram</span>
              <ArrowUpRight className="w-4 h-4 text-[#1D4ED8]" />
            </a>
          </div>
        </ScrollReveal>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.contentAuthority.items.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={index * 0.1}>
              <a
                href={siteConfig.lawyer.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`content-card-${index + 1}`}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-blue-300 p-6 sm:p-7 flex flex-col justify-between min-h-[230px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 shadow-xs"
              >
                {/* Card Top: Category Badge & Arrow */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#1D4ED8] border border-blue-200">
                    <BookOpen className="w-3 h-3" />
                    {item.category}
                  </span>
                  
                  <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center text-slate-500 group-hover:text-[#1D4ED8] transition-colors border border-slate-200">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Card Middle: Title */}
                <div className="relative z-10 my-6">
                  <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-[#1D4ED8] transition-colors leading-snug">
                    “{item.title}”
                  </h3>
                </div>

                {/* Card Bottom: Instagram Reference */}
                <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5 group-hover:text-slate-800">
                    <Instagram className="w-3.5 h-3.5 text-rose-500" />
                    <span>{siteConfig.lawyer.instagramHandle}</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#1D4ED8]">
                    Acessar conteúdo →
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500">
            Temas baseados em dúvidas recorrentes sobre a legislação e a rotina funcional militar.
          </p>
        </div>

      </div>
    </section>
  );
};
