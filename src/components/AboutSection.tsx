import React from "react";
import { siteConfig } from "../config/siteConfig";
import { CheckCircle2, Shield, Calendar, Share2, Globe, MessageSquare, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const AboutSection: React.FC = () => {
  const getDifferentialIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Calendar className="w-5 h-5 text-[#1D4ED8]" />;
      case 1:
        return <Shield className="w-5 h-5 text-[#1D4ED8]" />;
      case 2:
        return <Share2 className="w-5 h-5 text-[#1D4ED8]" />;
      case 3:
        return <Globe className="w-5 h-5 text-[#1D4ED8]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#1D4ED8]" />;
    }
  };

  return (
    <section
      id="sobre"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F8FAFC] relative border-b border-slate-200/80 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photography Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal direction="right">
              <div
                id="about-portrait-frame"
                className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-[#0A2540] via-[#0F3260] to-[#081829] border-2 border-blue-900/30 shadow-2xl shadow-blue-950/20 p-6 sm:p-8 flex flex-col justify-between group"
              >
                {siteConfig.images.portrait ? (
                  <>
                    <img
                      src={siteConfig.images.portrait}
                      alt="Luciano Borges - Advogado Militar"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/luciano_borges.png";
                      }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/30 to-transparent pointer-events-none" />

                    {/* Top floating label */}
                    <div className="relative z-10 flex justify-between items-center">
                      <span className="px-3 py-1.5 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md text-[11px] font-bold tracking-wider text-[#0A2540] uppercase shadow-md">
                        Advogado Especialista
                      </span>
                      <span className="px-3 py-1.5 rounded-xl bg-[#0A2540]/90 border border-white/20 backdrop-blur-md text-[11px] text-blue-100 font-bold uppercase shadow-md">
                        +7 ANOS
                      </span>
                    </div>

                    {/* Bottom credential overlay */}
                    <div className="relative z-10 mt-auto p-4 sm:p-5 rounded-2xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-xl">
                      <h3 className="text-base font-extrabold text-[#0A2540] uppercase tracking-tight">
                        {siteConfig.lawyer.name}
                      </h3>
                      <p className="text-xs text-[#1D4ED8] font-semibold mt-0.5">
                        Defesa jurídica e orientação para militares em todo o Brasil
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="relative z-10 my-auto text-center py-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Shield className="w-9 h-9 text-[#1D4ED8]" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase">{siteConfig.lawyer.name}</h3>
                    <p className="text-xs text-blue-200 uppercase mt-1">{siteConfig.lawyer.profession}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Bio, Statement & Differentiators */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <ScrollReveal direction="left">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#1D4ED8] uppercase block mb-3">
                  Trajetória & Propósito
                </span>
                <h2
                  id="about-title"
                  className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight mb-6"
                >
                  {siteConfig.about.title}
                </h2>

                {/* First-Person Quote in Blue & White Theme */}
                <div className="p-6 sm:p-7 rounded-2xl bg-blue-50/70 border-l-4 border-[#1D4ED8] border-y border-r border-blue-200/60 my-6 shadow-xs">
                  <blockquote
                    id="about-quote"
                    className="text-lg sm:text-xl font-medium text-slate-800 italic leading-relaxed"
                  >
                    “{siteConfig.about.quote}”
                  </blockquote>
                  <div className="mt-4 text-right">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540]">
                      — Luciano Borges, Advogado Militar
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Confirmed Differentiators List */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="space-y-4">
                <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  Pontos Confirmados de Atuação
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {siteConfig.about.differentials.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-slate-200/90 flex items-center gap-3.5 hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                        {getDifferentialIcon(idx)}
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Optional OAB Block (Only displayed if filled, as instructed) */}
            {siteConfig.lawyer.oab && siteConfig.lawyer.oab.trim() !== "" && (
              <div
                id="about-oab-badge"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-xs"
              >
                <Shield className="w-4 h-4 text-[#1D4ED8]" />
                <span>{siteConfig.lawyer.oab}</span>
              </div>
            )}

            {/* Quick Contact Link */}
            <ScrollReveal direction="up" delay={0.25}>
              <div className="pt-2">
                <a
                  href={siteConfig.lawyer.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-contact-btn"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0A2540] to-[#1D4ED8] hover:from-[#081C30] hover:to-[#1E40AF] transition-all shadow-md shadow-blue-950/15 active:scale-98 group"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-300" />
                  <span>Apresentar sua situação no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
};
