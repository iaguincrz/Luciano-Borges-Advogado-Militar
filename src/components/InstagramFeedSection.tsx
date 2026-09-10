import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Instagram, ExternalLink, Shield } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const InstagramFeedSection: React.FC = () => {
  // Feed preview items highlighting verified topics
  const feedItems = [
    {
      id: 1,
      title: "Militar também perde direito pelo tempo?",
      tag: "Prazos & Lei",
    },
    {
      id: 2,
      title: "Reserva remunerada e convocação na PM",
      tag: "Carreira Militar",
    },
    {
      id: 3,
      title: "Desincorporação das Forças: Direitos",
      tag: "Vida Funcional",
    },
    {
      id: 4,
      title: "Segunda carreira e cumulação para militares",
      tag: "Carreira & Normas",
    },
    {
      id: 5,
      title: "Desvio funcional e trabalho superior",
      tag: "Remuneração",
    },
    {
      id: 6,
      title: "Orientações para militares temporários",
      tag: "Temporários",
    },
  ];

  return (
    <section
      id="instagram"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F8FAFC] relative border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Instagram Profile Card Header */}
        <ScrollReveal direction="up">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 mb-12 sm:mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
            
            <div className="flex items-center gap-4 sm:gap-5 w-full md:w-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shrink-0 shadow-md">
                <div className="w-full h-full rounded-full bg-white p-[2px] overflow-hidden">
                  {siteConfig.images.portrait ? (
                    <img
                      src={siteConfig.images.portrait}
                      alt={siteConfig.lawyer.name}
                      className="w-full h-full rounded-full object-cover object-top"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/luciano_borges.png";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center text-[#1D4ED8]">
                      <Shield className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0A2540] tracking-tight">
                    {siteConfig.lawyer.name}
                  </h3>
                  <span className="w-4 h-4 rounded-full bg-[#1D4ED8] text-[10px] text-white flex items-center justify-center font-bold">
                    ✓
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#1D4ED8] font-bold font-mono">
                  {siteConfig.lawyer.instagramHandle}
                </p>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  {siteConfig.lawyer.profession} • Atuação em todo o Brasil
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
              <a
                href={siteConfig.lawyer.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="instagram-profile-cta-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0A2540] to-[#1D4ED8] hover:from-[#081C30] hover:to-[#1E40AF] transition-all shadow-md shadow-blue-950/15"
              >
                <Instagram className="w-4 h-4 text-rose-300" />
                <span>{siteConfig.instagramSection.buttonText}</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Title & Subtitle */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-2xl mb-10">
            <h2
              id="instagram-title"
              className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight leading-snug mb-3"
            >
              {siteConfig.instagramSection.title}
            </h2>
            <p
              id="instagram-text"
              className="text-base text-slate-600 leading-relaxed"
            >
              {siteConfig.instagramSection.text}
            </p>
          </div>
        </ScrollReveal>

        {/* Feed Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {feedItems.map((item, idx) => (
            <ScrollReveal key={item.id} direction="up" delay={idx * 0.08}>
              <a
                href={siteConfig.lawyer.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group aspect-square rounded-2xl bg-white border border-slate-200 hover:border-blue-300 p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-xl hover:shadow-blue-900/10 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-wider text-[#1D4ED8] uppercase">
                    {item.tag}
                  </span>
                  <Instagram className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-500 transition-colors" />
                </div>

                <p className="text-xs font-bold text-[#0A2540] group-hover:text-[#1D4ED8] transition-colors leading-snug my-auto">
                  {item.title}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 group-hover:text-slate-600 font-semibold">
                  <span>Ver post</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
