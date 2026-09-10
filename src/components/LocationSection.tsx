import React from "react";
import { siteConfig } from "../config/siteConfig";
import { MapPin, Navigation, ArrowUpRight, Building2, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const LocationSection: React.FC = () => {
  // Verificação de chave de API opcional do Google Maps
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

  // URL do embed: se houver chave fornecida no .env, usa a API oficial de Embed v1;
  // caso contrário, utiliza o embed direto padrão do Google Maps que funciona imediatamente sem chave.
  const encodedAddress = encodeURIComponent(
    `${siteConfig.location.street}, ${siteConfig.location.neighborhood}, ${siteConfig.location.cityState}, ${siteConfig.location.cep}`
  );

  const embedUrl = apiKey && apiKey.trim() !== ""
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey.trim()}&q=${encodedAddress}`
    : `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      id="onde-estamos"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F8FAFC] relative border-b border-slate-200/80 overflow-hidden"
    >
      {/* Luz ambiente de fundo sutil */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Lado Esquerdo: Identificação, Endereço e Ação (No mobile: primeiro) */}
          <div className="lg:col-span-5 order-1 space-y-7">
            <ScrollReveal direction="right">
              <div>
                {/* Ícone de localização minimalista & Etiqueta */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-4">
                  <MapPin className="w-4 h-4 text-[#1D4ED8]" />
                  <span>Sede & Atendimento</span>
                </div>

                {/* Título da Seção */}
                <h2
                  id="location-section-title"
                  className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-tight mb-4"
                >
                  {siteConfig.location.title}
                </h2>

                {/* Pequeno texto de atendimento presencial */}
                <p
                  id="location-attendance-notice"
                  className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed"
                >
                  {siteConfig.location.attendanceNotice}
                </p>
              </div>
            </ScrollReveal>

            {/* Cartão de Endereço Elegante */}
            <ScrollReveal direction="right" delay={0.1}>
              <div
                id="location-address-card"
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-4"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-[#1D4ED8]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Endereço Profissional
                    </span>
                    <p className="text-base font-bold text-[#0A2540] leading-snug">
                      {siteConfig.location.street}
                    </p>
                    <p className="text-sm font-medium text-slate-700 mt-0.5">
                      {siteConfig.location.neighborhood}
                    </p>
                    <p className="text-sm font-semibold text-[#1D4ED8] mt-0.5">
                      {siteConfig.location.cityState}
                    </p>
                    <p className="text-xs font-mono text-slate-500 mt-1">
                      CEP: {siteConfig.location.cep}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Ambiente reservado para atendimento individual</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Botão de Destaque: "Como chegar" */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="pt-1">
                <a
                  href={siteConfig.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-how-to-get-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#0A2540] via-[#0F3260] to-[#1D4ED8] hover:from-[#081C30] hover:via-[#0C274B] hover:to-[#1E40AF] transition-all duration-200 shadow-lg shadow-blue-950/15 active:scale-[0.99] group border border-blue-900"
                >
                  <Navigation className="w-4 h-4 text-blue-200 group-hover:rotate-45 transition-transform duration-300" />
                  <span>{siteConfig.location.buttonText}</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Lado Direito: Mapa Visual Responsivo (No mobile: abaixo) */}
          <div className="lg:col-span-7 order-2 w-full">
            <ScrollReveal direction="left" delay={0.2}>
              <div
                id="location-map-container"
                className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border-2 border-slate-200/90 shadow-xl shadow-blue-950/10 group"
              >
                {/* Header Superior do Mapa */}
                <div className="px-5 py-3.5 bg-white border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">
                      Google Maps • Anápolis, GO
                    </span>
                  </div>
                  <a
                    href={siteConfig.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:underline"
                  >
                    <span>Expandir rota</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Container Iframe do Mapa */}
                <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[450px] bg-slate-100">
                  <iframe
                    title="Localização do Escritório de Advocacia Militar - Luciano Borges em Anápolis GO"
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter saturate-[0.95] contrast-[1.02]"
                  />
                </div>

                {/* Barra Inferior com Atalho Rápido */}
                <div className="p-4 bg-slate-50/90 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
                  <span className="font-medium">
                    {siteConfig.location.street} — {siteConfig.location.neighborhood}
                  </span>
                  <a
                    href={siteConfig.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1D4ED8] font-bold hover:underline self-start sm:self-auto"
                  >
                    Abrir no aplicativo do Maps →
                  </a>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
