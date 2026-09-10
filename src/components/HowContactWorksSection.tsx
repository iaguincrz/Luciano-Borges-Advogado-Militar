import React from "react";
import { siteConfig } from "../config/siteConfig";
import { MessageSquare, FileText, UserCheck, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const HowContactWorksSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-6 h-6 text-[#1D4ED8]" />;
      case 1:
        return <FileText className="w-6 h-6 text-[#1D4ED8]" />;
      case 2:
        return <UserCheck className="w-6 h-6 text-[#1D4ED8]" />;
      default:
        return <MessageSquare className="w-6 h-6 text-[#1D4ED8]" />;
    }
  };

  return (
    <section
      id="como-funciona"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-white relative border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-bold tracking-widest text-[#1D4ED8] uppercase block mb-3">
              Transparência & Procedimento
            </span>
            <h2
              id="como-funciona-title"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-snug"
            >
              {siteConfig.contactSteps.title}
            </h2>
            <p className="text-base text-slate-600 mt-4 max-w-xl mx-auto">
              Um processo direto e sem burocracia para apresentar seu caso com clareza.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Steps Horizontal / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting line between steps on desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] bg-blue-100 pointer-events-none -z-0" />

          {siteConfig.contactSteps.steps.map((step, idx) => (
            <ScrollReveal key={step.number} direction="up" delay={idx * 0.15}>
              <div
                id={`contact-step-${step.number}`}
                className="relative h-full rounded-2xl bg-white border border-slate-200 hover:border-blue-300 p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 group shadow-xs"
              >
                <div>
                  {/* Step Top: Number and Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:bg-[#1D4ED8] transition-colors shadow-xs">
                      <span className="group-hover:text-white transition-colors">
                        {getStepIcon(idx)}
                      </span>
                    </div>
                    <span className="font-mono text-3xl font-extrabold text-slate-300 group-hover:text-[#1D4ED8] transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0A2540] tracking-tight uppercase mb-3 group-hover:text-[#1D4ED8] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#1D4ED8]">
                  <span>Etapa {idx + 1} de 3</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA below steps */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-14 text-center">
            <a
              href={siteConfig.lawyer.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="como-funciona-cta-btn"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#0A2540] to-[#1D4ED8] hover:from-[#081C30] hover:to-[#1E40AF] shadow-lg shadow-blue-950/15 transition-all active:scale-98"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>Iniciar contato com Luciano pelo WhatsApp</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
