import React from "react";
import { siteConfig } from "../config/siteConfig";
import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const IntermediateCtaSection: React.FC = () => {
  return (
    <section
      id="cta-intermediario"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0F3260] to-[#1D4ED8] text-white shadow-inner"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/15 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-300/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <ScrollReveal direction="up">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-blue-100 mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>Orientação Especializada</span>
          </span>

          {/* Title */}
          <h2
            id="cta-intermediario-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug mb-5"
          >
            {siteConfig.intermediateCta.title}
          </h2>

          {/* Text */}
          <p
            id="cta-intermediario-text"
            className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            {siteConfig.intermediateCta.text}
          </p>

          {/* WhatsApp Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.lawyer.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-intermediario-whatsapp-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl text-base font-extrabold text-[#0A2540] bg-white hover:bg-blue-50 shadow-2xl shadow-blue-950/40 transition-all duration-200 active:scale-[0.99] group"
            >
              <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare className="w-4 h-4 text-white fill-white" />
              </div>
              <span>{siteConfig.intermediateCta.buttonText}</span>
              <ArrowRight className="w-4 h-4 text-[#1D4ED8] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Small reassurance */}
          <p className="text-xs text-blue-200 mt-5 font-medium">
            Atendimento sigiloso • Em conformidade estrita com o Código de Ética da OAB
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
