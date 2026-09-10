import React from "react";
import { siteConfig } from "../config/siteConfig";
import { ScrollReveal } from "./ScrollReveal";

export const DifferentialsSection: React.FC = () => {
  return (
    <section
      id="diferenciais"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F8FAFC] relative border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-bold tracking-widest text-[#1D4ED8] uppercase block mb-3">
              Método de Atendimento
            </span>
            <h2
              id="diferenciais-title"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-snug"
            >
              {siteConfig.differentials.title}
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.differentials.items.map((item, idx) => (
            <ScrollReveal key={item.number} direction="up" delay={idx * 0.1}>
              <div
                id={`differential-card-${item.number}`}
                className="h-full p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xs hover:shadow-xl hover:shadow-blue-900/10"
              >
                <div>
                  {/* Number Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-[#1D4ED8]">
                      {item.number}
                    </span>
                    <div className="w-8 h-[2px] bg-blue-100 group-hover:bg-[#1D4ED8] transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#0A2540] tracking-tight uppercase mb-3 leading-snug group-hover:text-[#1D4ED8] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <span className="text-[11px] font-bold tracking-wider text-blue-600 uppercase">
                    Padrão Luciano Borges
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
