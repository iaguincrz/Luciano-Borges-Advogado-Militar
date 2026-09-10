import React from "react";
import { Shield, ShieldCheck, Users, Mouse, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "motion/react";

// Ícone de Asas Militares (estilo insígnia FAB)
const FabWingsIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2L13.6 5.8L17.5 4.5L16 8.5L20.5 9.2L17 12.2L21.5 14.8L15.5 15.2L16.5 18.8L12 16.2L7.5 18.8L8.5 15.2L2.5 14.8L7 12.2L3.5 9.2L8 8.5L6.5 4.5L10.4 5.8L12 2Z" fillOpacity="0.25" />
    <path d="M12 4.2c.4 0 .8.3 1 .7.6.2 1.3.4 1.9.7 1.2-.7 2.6-1.1 4-1.1.2 0 .5.1.6.4.1.2 0 .5-.2.6-1.2.8-2.2 1.9-2.7 3.2 1.3.2 2.5.8 3.5 1.7.2.2.2.4.2.6s-.3.3-.6.3c-1.5-.1-2.9.3-4.1 1.1.2 1.3.2 2.7-.2 4-.1.2-.3.4-.6.4s-.5-.2-.6-.4c-.2-1.1-.2-2.3.2-3.4-1.1-.7-1.8-1.9-2-3.1-.2 1.2-.9 2.4-2 3.1.3 1.1.3 2.3.2 3.4-.1.2-.3.4-.6.4s-.5-.2-.6-.4c-.4-1.3-.4-2.7-.2-4-1.2-.8-2.6-1.2-4.1-1.1-.3 0-.5-.1-.6-.3s0-.5.2-.6c1-.9 2.2-1.5 3.5-1.7-.5-1.3-1.5-2.4-2.7-3.2-.2-.2-.3-.4-.2-.6.1-.3.4-.4.6-.4 1.4 0 2.8.4 4 1.1.6-.3 1.3-.5 1.9-.7.2-.4.6-.7 1-.7z" />
  </svg>
);

// Ícone oficial WhatsApp
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-[#040A10]"
    >
      {/* =========================================================================
          VERSÃO DESKTOP (lg:flex)
          Composição fiel à referência:
          - Texto, badges e CTA alinhados à esquerda (40-45% da tela)
          - Luciano e aeronave FAB em destaque à direita (55-60% da tela)
          - Overlay com gradiente horizontal cinematográfico
          - Assinatura no canto inferior direito e indicador de rolagem no canto inferior esquerdo
         ========================================================================= */}
      <div className="hidden lg:flex relative w-full h-screen min-h-[760px] flex-col justify-between overflow-hidden">
        {/* Camada Absoluta de Fotografia de Fundo */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            src="https://i.imgur.com/6NEJgtW.png"
            alt="Luciano Borges - Advogado Militar"
            loading="eager"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[74%_top]"
          />
        </div>

        {/* Gradiente Horizontal Asimétrico Desktop */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(4, 10, 16, 0.98) 0%, rgba(4, 10, 16, 0.92) 38%, rgba(4, 10, 16, 0.50) 58%, rgba(4, 10, 16, 0.12) 76%, rgba(4, 10, 16, 0.02) 100%)",
          }}
        />

        {/* Gradiente Superior para integração suave com Header */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#040A10]/75 via-[#040A10]/30 to-transparent pointer-events-none" />

        {/* Gradiente Inferior suave */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#040A10]/85 to-transparent pointer-events-none" />

        {/* Assinatura no Rodapé Direito (Desktop) */}
        <div className="absolute bottom-8 right-16 z-20 pointer-events-none text-right">
          <span className="font-serif italic text-white/90 text-3xl block tracking-wide">
            Luciano Borges
          </span>
          <span className="text-[10px] tracking-[0.28em] uppercase text-slate-400 font-semibold block mt-0.5">
            ADVOGADO MILITAR
          </span>
        </div>

        {/* Container Central Global Desktop */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-16 my-auto pt-24 pb-8 flex items-center">
          <div className="w-full max-w-[560px] flex flex-col items-start text-left space-y-6">
            
            {/* 1. Tag de Identificação */}
            <ScrollReveal direction="down" delay={0.05}>
              <div
                id="hero-tag-desktop"
                className="flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] text-sky-300 uppercase"
              >
                <FabWingsIcon className="w-5 h-5 text-sky-300" />
                <span>DIREITO MILITAR</span>
              </div>
            </ScrollReveal>

            {/* 2. Headline com Hierarquia Visual da Referência */}
            <ScrollReveal direction="up" delay={0.12}>
              <h1
                id="hero-headline-desktop"
                className="text-5xl xl:text-[64px] font-bold text-white leading-[1.08] tracking-tight"
              >
                <span className="font-normal text-white">Eu sou</span>
                <br />
                <span className="font-extrabold text-white">Luciano Borges,</span>
                <br />
                <span className="font-bold text-[#7DD3FC]">advogado militar.</span>
              </h1>
            </ScrollReveal>

            {/* 3. Subheadline */}
            <ScrollReveal direction="up" delay={0.2}>
              <p
                id="hero-subheadline-desktop"
                className="text-base xl:text-lg text-slate-200 font-normal leading-relaxed max-w-[500px]"
              >
                Há mais de <strong className="font-bold text-white">7 anos atuando</strong> na área e levando informação jurídica para militares e suas famílias em todo o Brasil.
              </p>
            </ScrollReveal>

            {/* 4. Especialidades */}
            <ScrollReveal direction="up" delay={0.26}>
              <div
                id="hero-specialties-desktop"
                className="flex items-center gap-3 text-xs font-semibold tracking-wider text-slate-300 uppercase pt-0.5"
              >
                <span>DIREITO MILITAR</span>
                <span className="text-sky-400 font-bold">•</span>
                <span>CARREIRA</span>
                <span className="text-sky-400 font-bold">•</span>
                <span>PENSÃO</span>
              </div>
            </ScrollReveal>

            {/* 5. Botão de Conversão Estilo Referência */}
            <ScrollReveal direction="up" delay={0.32} className="w-full pt-1">
              <div className="flex flex-col items-start space-y-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/5562992035812?text=Ol%C3%A1%2C%20Luciano!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-cta-desktop"
                  className="inline-flex items-center justify-center gap-3.5 min-w-[360px] px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#0A2E44]/90 hover:bg-[#0E3D5B] border border-[#38BDF8]/60 shadow-xl shadow-sky-950/40 hover:shadow-2xl hover:shadow-sky-900/50 transition-all duration-200 group active:scale-[0.99]"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Falar com Luciano pelo WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-sky-200 group-hover:translate-x-1 transition-transform shrink-0" />
                </motion.a>

                {/* Microcopy */}
                <div
                  id="hero-microtext-desktop"
                  className="flex items-center gap-2 text-xs text-slate-300 font-medium pl-0.5"
                >
                  <ShieldCheck className="w-4 h-4 text-sky-300 shrink-0" />
                  <span>Atendimento individual • Todo o Brasil</span>
                </div>
              </div>
            </ScrollReveal>

            {/* 6. Os 3 Badges de Especialidade da Referência */}
            <ScrollReveal direction="up" delay={0.38} className="w-full pt-2">
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-800/80 w-full max-w-[480px]">
                <div className="flex flex-col items-start gap-1.5">
                  <FabWingsIcon className="w-5 h-5 text-sky-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 leading-tight">
                    FAB<br />E DEMAIS<br />FORÇAS
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <Shield className="w-5 h-5 text-sky-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 leading-tight">
                    DIREITO<br />MILITAR
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <Users className="w-5 h-5 text-sky-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 leading-tight">
                    MILITARES<br />E FAMÍLIAS
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Indicador de Scroll Desktop */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-16 pb-8">
          <a
            href="#posicionamento"
            id="hero-scroll-desktop"
            className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors group focus:outline-none"
          >
            <Mouse className="w-4 h-4 text-sky-300 animate-pulse" />
            <span>ROLE PARA DESCOBRIR MAIS</span>
          </a>
        </div>
      </div>

      {/* =========================================================================
          VERSÃO MOBILE (< lg)
          Resolução definitiva do erro relatado:
          - A foto do Luciano com a aeronave fica em destaque no topo (360px a 440px)
          - O rosto do Luciano NUNCA fica atrás da headline nem de nenhum texto
          - O gradiente inferior da foto funde perfeitamente com a cor escura #040A10
          - Os textos, headline, CTA e badges ficam organizados de forma limpa e legível abaixo
         ========================================================================= */}
      <div className="lg:hidden w-full flex flex-col bg-[#040A10]">
        
        {/* Bloco de Fotografia no Topo (Luciano + Aeronave FAB) */}
        <div className="relative w-full h-[360px] xs:h-[400px] sm:h-[460px] overflow-hidden pt-16">
          <img
            src="https://i.imgur.com/6NEJgtW.png"
            alt="Luciano Borges - Advogado Militar"
            loading="eager"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[72%_15%]"
          />

          {/* Gradiente Inferior da foto: transição perfeita para o fundo #040A10 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040A10] via-[#040A10]/35 to-transparent pointer-events-none" />

          {/* Gradiente Superior para manter legibilidade do Header fixo */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#040A10]/85 via-[#040A10]/40 to-transparent pointer-events-none" />

          {/* Assinatura sutil no canto inferior direito da foto */}
          <div className="absolute bottom-3 right-5 z-10 text-right pointer-events-none">
            <span className="font-serif italic text-white/90 text-lg block">
              Luciano Borges
            </span>
            <span className="text-[9px] tracking-[0.25em] text-slate-300 uppercase font-semibold">
              ADVOGADO MILITAR
            </span>
          </div>
        </div>

        {/* Bloco de Conteúdo Textual Mobile: zero sobreposição com o rosto */}
        <div className="relative z-10 w-full px-5 sm:px-8 -mt-6 pb-12 flex flex-col items-start space-y-5 bg-[#040A10]">
          
          {/* 1. Tag de Identificação */}
          <div
            id="hero-tag-mobile"
            className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-sky-300 uppercase"
          >
            <FabWingsIcon className="w-4 h-4 text-sky-300" />
            <span>DIREITO MILITAR</span>
          </div>

          {/* 2. Headline Mobile */}
          <h1
            id="hero-headline-mobile"
            className="text-[32px] xs:text-[36px] sm:text-[42px] font-bold text-white leading-[1.1] tracking-tight"
          >
            <span className="font-normal text-white">Eu sou</span>
            <br />
            <span className="font-extrabold text-white">Luciano Borges,</span>
            <br />
            <span className="font-bold text-[#7DD3FC]">advogado militar.</span>
          </h1>

          {/* 3. Subheadline Mobile */}
          <p
            id="hero-subheadline-mobile"
            className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed"
          >
            Há mais de <strong className="font-bold text-white">7 anos atuando</strong> na área e levando informação jurídica para militares e suas famílias em todo o Brasil.
          </p>

          {/* 4. Especialidades Mobile */}
          <div
            id="hero-specialties-mobile"
            className="flex flex-wrap items-center gap-2.5 text-xs font-semibold tracking-wider text-slate-300 uppercase"
          >
            <span>DIREITO MILITAR</span>
            <span className="text-sky-400 font-bold">•</span>
            <span>CARREIRA</span>
            <span className="text-sky-400 font-bold">•</span>
            <span>PENSÃO</span>
          </div>

          {/* 5. CTA Mobile no estilo da Referência */}
          <div className="w-full flex flex-col items-start space-y-2.5 pt-1">
            <a
              href="https://wa.me/5562992035812?text=Ol%C3%A1%2C%20Luciano!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-mobile"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm xs:text-base font-semibold text-white bg-[#0A2E44]/95 hover:bg-[#0E3D5B] border border-[#38BDF8]/70 shadow-xl shadow-sky-950/50 transition-all active:scale-[0.99]"
            >
              <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
              <span>Falar com Luciano pelo WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-sky-200 shrink-0" />
            </a>

            {/* Microcopy */}
            <div
              id="hero-microtext-mobile"
              className="flex items-center gap-2 text-xs text-slate-300 font-medium pl-0.5"
            >
              <ShieldCheck className="w-4 h-4 text-sky-300 shrink-0" />
              <span>Atendimento individual • Todo o Brasil</span>
            </div>
          </div>

          {/* 6. Os 3 Badges de Especialidade da Referência no Mobile */}
          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-800/80 w-full">
            <div className="flex flex-col items-start gap-1">
              <FabWingsIcon className="w-4 h-4 text-sky-300" />
              <span className="text-[10px] xs:text-[11px] font-bold uppercase tracking-wider text-slate-300 leading-tight">
                FAB<br />E DEMAIS<br />FORÇAS
              </span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <Shield className="w-4 h-4 text-sky-300" />
              <span className="text-[10px] xs:text-[11px] font-bold uppercase tracking-wider text-slate-300 leading-tight">
                DIREITO<br />MILITAR
              </span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <Users className="w-4 h-4 text-sky-300" />
              <span className="text-[10px] xs:text-[11px] font-bold uppercase tracking-wider text-slate-300 leading-tight">
                MILITARES<br />E FAMÍLIAS
              </span>
            </div>
          </div>

          {/* 7. Indicador de Rolagem Mobile */}
          <div className="w-full flex items-center justify-center pt-3">
            <a
              href="#posicionamento"
              id="hero-scroll-mobile"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors group focus:outline-none"
            >
              <Mouse className="w-3.5 h-3.5 text-sky-300 animate-pulse" />
              <span>ROLE PARA DESCOBRIR MAIS</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
