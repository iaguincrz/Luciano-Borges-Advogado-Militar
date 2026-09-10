/**
 * CONFIGURAÇÃO CENTRALIZADA DO SITE - LUCIANO BORGES | ADVOGADO MILITAR
 * 
 * Todas as informações, textos, links e fotos podem ser editados facilmente neste arquivo.
 * Não invente dados de OAB, prêmios ou resultados. Caso preencha o campo 'oab', ele será
 * exibido automaticamente nas seções correspondentes.
 */

export interface SiteConfig {
  lawyer: {
    name: string;
    profession: string;
    experience: string;
    coverage: string;
    oab: string; // Deixe vazio "" caso não queira exibir ou preencha com ex: "OAB/GO 12.345"
    whatsappNumber: string;
    whatsappFormatted: string;
    whatsappDefaultMessage: string;
    whatsappUrl: string;
    instagramHandle: string;
    instagramUrl: string;
  };
  images: {
    hero: string; // URL da foto principal do Luciano para o Hero. Se vazio, exibe o cartão editorial elegante
    portrait: string; // URL da foto da seção "Conheça o Luciano"
    gallery?: Array<{
      url: string;
      caption: string;
      alt: string;
    }>;
  };
  hero: {
    tag: string;
    headline: string;
    subheadline: string;
    cta: string;
    microtext: string;
  };
  positioning: {
    title: string;
    text: string;
    complement: string;
    cards: Array<{
      id: string;
      title: string;
      description: string;
      icon: 'carreira' | 'pensao' | 'direitos' | 'honra';
    }>;
  };
  about: {
    title: string;
    quote: string;
    differentials: string[];
  };
  contentAuthority: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      category: string;
      imageUrl?: string;
    }>;
  };
  differentials: {
    title: string;
    items: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  intermediateCta: {
    title: string;
    text: string;
    buttonText: string;
  };
  contactSteps: {
    title: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  instagramSection: {
    title: string;
    text: string;
    buttonText: string;
  };
  finalCta: {
    headline: string;
    subheadline: string;
    buttonText: string;
  };
  location: {
    title: string;
    street: string;
    neighborhood: string;
    cityState: string;
    cep: string;
    attendanceNotice: string;
    buttonText: string;
    mapsUrl: string;
  };
  footer: {
    disclaimer: string;
  };
}

export const siteConfig: SiteConfig = {
  lawyer: {
    name: "Luciano Borges",
    profession: "Advogado Militar",
    experience: "+7 anos",
    coverage: "Todo o Brasil",
    // Campo editável: Preencha quando disponível (ex: "OAB/GO 12345"). Se deixar vazio (""), não será exibido.
    oab: "",
    whatsappNumber: "5562992035812",
    whatsappFormatted: "(62) 99203-5812",
    whatsappDefaultMessage: "Olá, Luciano! Vim pelo seu site e gostaria de saber mais sobre o atendimento.",
    whatsappUrl: "https://wa.me/5562992035812?text=Ol%C3%A1%2C%20Luciano!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento.",
    instagramHandle: "@luciano.advmilitar",
    instagramUrl: "https://www.instagram.com/luciano.advmilitar/",
  },

  images: {
    // Fotografia profissional oficial do Luciano Borges
    hero: "https://i.imgur.com/6NEJgtW.png",
    portrait: "https://i.imgur.com/0Ib1FDs.png",
    
    // Lista de fotos para a galeria
    gallery: [
      {
        url: "https://i.imgur.com/kseSnJ6.png",
        caption: "Luciano Borges — Atuação focada no Direito Militar e na defesa funcional.",
        alt: "Luciano Borges - Advogado Militar"
      },
      {
        url: "https://i.imgur.com/kseSnJ6.png",
        caption: "Levando informação jurídica clara e acessível em todo o Brasil.",
        alt: "Atendimento e Direito Militar com Luciano Borges"
      },
      {
        url: "",
        caption: "Orientação individualizada para militares e suas famílias.",
        alt: "Orientação jurídica individualizada"
      },
      {
        url: "",
        caption: "Compromisso com a verdade, honra e a carreira militar.",
        alt: "Carreira militar e direitos"
      }
    ]
  },

  hero: {
    tag: "DIREITO MILITAR • CARREIRA • PENSÃO",
    headline: "Eu sou Luciano Borges, advogado militar.",
    subheadline: "Há mais de 7 anos atuando na área e levando informação jurídica para militares e suas famílias em todo o Brasil.",
    cta: "Falar com Luciano pelo WhatsApp",
    microtext: "Atendimento individual • Todo o Brasil",
  },

  positioning: {
    title: "Informação jurídica para quem vive a realidade militar.",
    text: "Questões relacionadas à carreira, pensão, direitos e vida funcional militar exigem atenção às particularidades de cada situação.",
    complement: "Luciano transforma temas jurídicos complexos em informação clara para quem precisa entender melhor seus direitos.",
    cards: [
      {
        id: "carreira",
        title: "CARREIRA",
        description: "Questões jurídicas relacionadas à carreira militar.",
        icon: "carreira",
      },
      {
        id: "pensao",
        title: "PENSÃO",
        description: "Informações sobre aspectos jurídicos relacionados à pensão militar.",
        icon: "pensao",
      },
      {
        id: "direitos",
        title: "DIREITOS",
        description: "Conteúdos sobre direitos e situações presentes na vida militar.",
        icon: "direitos",
      },
      {
        id: "honra",
        title: "HONRA",
        description: "Questões jurídicas relacionadas à honra e à vida funcional.",
        icon: "honra",
      },
    ],
  },

  about: {
    title: "Conheça o Luciano",
    quote: "Meu trabalho é tornar o Direito Militar mais claro para quem precisa entender seus direitos e tomar decisões com informação.",
    differentials: [
      "+7 anos de atuação",
      "Atuação voltada ao Direito Militar",
      "Conteúdo jurídico nas redes sociais",
      "Atendimento em todo o Brasil",
    ],
  },

  contentAuthority: {
    title: "Direito Militar explicado de forma simples.",
    subtitle: "No Instagram, Luciano compartilha informações sobre situações que fazem parte da realidade de militares e suas famílias.",
    items: [
      {
        id: "post-1",
        title: "Militar também perde direito pelo tempo?",
        category: "Direitos & Prazos",
      },
      {
        id: "post-2",
        title: "Pediu a reserva remunerada e a PM ainda quer que você continue trabalhando?",
        category: "Reserva & Carreira",
      },
      {
        id: "post-3",
        title: "Saiu das Forças Armadas: e agora?",
        category: "Vida Funcional",
      },
      {
        id: "post-4",
        title: "Militar pode fazer uma segunda carreira?",
        category: "Legislação & Carreira",
      },
      {
        id: "post-5",
        title: "Militar fazendo trabalho superior ao devido pode receber mais?",
        category: "Direitos Remuneratórios",
      },
      {
        id: "post-6",
        title: "Conselhos que todo militar temporário deveria ouvir",
        category: "Militares Temporários",
      },
    ],
  },

  differentials: {
    title: "Cada situação militar tem suas particularidades.",
    items: [
      {
        number: "01",
        title: "CONHECIMENTO ESPECÍFICO",
        description: "Conteúdo e atuação direcionados às questões jurídicas relacionadas ao universo militar.",
      },
      {
        number: "02",
        title: "LINGUAGEM CLARA",
        description: "Assuntos jurídicos explicados de forma objetiva e compreensível.",
      },
      {
        number: "03",
        title: "ATENDIMENTO PESSOAL",
        description: "Contato direcionado ao próprio profissional.",
      },
      {
        number: "04",
        title: "TODO O BRASIL",
        description: "Possibilidade de atendimento de pessoas de diferentes regiões do país.",
      },
    ],
  },

  intermediateCta: {
    title: "Tem uma dúvida relacionada à sua situação como militar?",
    text: "Entre em contato para apresentar sua situação e receber informações sobre o atendimento.",
    buttonText: "Falar pelo WhatsApp",
  },

  contactSteps: {
    title: "Quer entender melhor a sua situação?",
    steps: [
      {
        number: "01",
        title: "ENTRE EM CONTATO",
        description: "Clique no WhatsApp e envie uma mensagem.",
      },
      {
        number: "02",
        title: "EXPLIQUE SUA SITUAÇÃO",
        description: "Conte brevemente o que está acontecendo.",
      },
      {
        number: "03",
        title: "SAIBA COMO FUNCIONA O ATENDIMENTO",
        description: "Luciano orientará sobre os próximos passos e sobre a possibilidade de atendimento.",
      },
    ],
  },

  instagramSection: {
    title: "Mais de 7 anos de experiência e conteúdo jurídico.",
    text: "Confira também os conteúdos do Luciano sobre Direito Militar.",
    buttonText: "Conhecer o Instagram",
  },

  finalCta: {
    headline: "Informação jurídica começa com clareza.",
    subheadline: "Apresente sua situação e saiba como funciona o atendimento.",
    buttonText: "Falar com Luciano",
  },

  location: {
    title: "ONDE ESTAMOS",
    street: "Rua Quintino Bocaiúva, nº 1.504",
    neighborhood: "Centro",
    cityState: "Anápolis — Goiás",
    cep: "75024-060",
    attendanceNotice: "Atendimento presencial em Anápolis, Goiás.",
    buttonText: "Como chegar",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Quintino+Bocai%C3%BAva%2C+1504%2C+Centro%2C+An%C3%A1polis%2C+GO%2C+75024-060",
  },

  footer: {
    disclaimer: "As informações apresentadas nesta página possuem caráter informativo e não substituem uma análise jurídica individualizada.",
  },
};
