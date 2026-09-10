import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Award, Landmark, Scale, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const PositioningSection: React.FC = () => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "carreira":
        return <Award className="w-6 h-6 text-[#1D4ED8]" />;
      case "pensao":
        return <Landmark className="w-6 h-6 text-[#1D4ED8]" />;
      case "direitos":
        return <Scale className="w-6 h-6 text-[#1D4ED8]" />;
      case "honra":
        return <ShieldCheck className="w-6 h-6 text-[#1D4ED8]" />;
      default:
        return <Scale className="w-6 h-6 text-[#1D4ED8]" />;
    }
  };

  return (
    <section
      id="atuacao"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-white relative border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="max-w-3xl mb-14 sm:mb-16">
            <span className="text-xs font-bold tracking-widest text-[#1D4ED8] uppercase block mb-3">
              Atuação & Princípios
            </span>
            <h2
              id="posicionamento-title"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-snug mb-6"
            >
              {siteConfig.positioning.title}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p id="posicionamento-text">
                {siteConfig.positioning.text}
              </p>
              <p id="posicionamento-complement" className="text-slate-500">
                {siteConfig.positioning.complement}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid with Bidirectional Staggered Scroll Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {siteConfig.positioning.cards.map((card, idx) => (
            <ScrollReveal key={card.id} direction="up" delay={idx * 0.1}>
              <div
                id={`positioning-card-${card.id}`}
                className="group h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:border-blue-700 transition-colors shadow-xs">
                    <span className="group-hover:text-white transition-colors">
                      {getIcon(card.icon)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] tracking-tight mb-2.5 group-hover:text-[#1D4ED8] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#1D4ED8] font-semibold transition-colors">
                  <span className="tracking-wider uppercase text-[11px]">Direito Militar</span>
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
