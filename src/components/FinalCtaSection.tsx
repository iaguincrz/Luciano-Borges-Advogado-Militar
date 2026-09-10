import React from "react";
import { siteConfig } from "../config/siteConfig";
import { MessageSquare, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      id="contato-final"
      className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-[#F4F8FC] border-t border-slate-200"
    >
      {/* Subtle deep glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-100/50 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <ScrollReveal direction="up">
          {/* Monogram emblem */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#1D4ED8] border border-blue-900 flex items-center justify-center mb-6 shadow-xl shadow-blue-950/20">
            <Shield className="w-8 h-8 text-white" />
          </div>

          {/* Headline */}
          <h2
            id="final-cta-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18] mb-6"
          >
            {siteConfig.finalCta.headline}
          </h2>

          {/* Subheadline */}
          <p
            id="final-cta-subheadline"
            className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {siteConfig.finalCta.subheadline}
          </p>

          {/* WhatsApp Call to Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.lawyer.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="final-cta-whatsapp-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#0A2540] via-[#0F3260] to-[#1D4ED8] hover:from-[#081C30] hover:via-[#0C274B] hover:to-[#1E40AF] shadow-2xl shadow-blue-950/25 transition-all duration-200 active:scale-[0.99] group border border-blue-900"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                <MessageSquare className="w-4 h-4 text-white fill-white" />
              </div>
              <span>{siteConfig.finalCta.buttonText}</span>
              <ArrowRight className="w-5 h-5 text-blue-200 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Reassurance items */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 font-semibold">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Atendimento direto e individualizado</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Atuação em todo o Brasil</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Especialista em Direito Militar</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
