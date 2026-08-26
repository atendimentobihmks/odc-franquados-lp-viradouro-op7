export interface UnitData {
  id: string;
  name: string;
  cnpj?: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  instagramUrl: string;
  facebookUrl: string;
  croCl: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  clinicalDirector: {
    name: string;
    cro: string;
    role: string;
  };
  treatments: Array<{
    id: string;
    title: string;
    description: string;
    iconName: string;
    imageUrl?: string;
  }>;
  images: {
    facade: string;
  };
  dentists: Array<{
    name: string;
    specialty: string;
    cro: string;
    photoUrl: string;
  }>;
  testimonials: Array<{
    name: string;
    rating: number;
    text: string;
    treatment: string;
  }>;
}

export const UNITS_DATA: Record<string, UnitData> = {
  viradouro: {
    id: 'viradouro',
    name: 'Viradouro',
    phone: '(17) 99669-8549',
    whatsapp: '5517996698549',
    whatsappMessage: 'Olá! Gostaria de agendar uma consulta de avaliação na OdontoCompany Viradouro.',
    instagramUrl: 'https://www.instagram.com/odontocompanyviradouro/',
    facebookUrl: 'https://www.facebook.com/people/OdontoCompany-ViradouroSP/100063990499692/',
    croCl: 'CRO-SP 130.862',
    address: {
      street: 'Rua Cel. Valter',
      number: '138',
      neighborhood: 'Centro',
      city: 'Viradouro',
      state: 'SP',
      zipCode: '14740-000'
    },
    clinicalDirector: {
      name: 'Dra. Marília Borges Costa',
      cro: 'CRO-SP 130862',
      role: 'Responsável Técnico(a) / Direção Clínica'
    },
    treatments: [
      {
        id: '1',
        title: 'Implantes Dentários',
        description: 'Recupere sua autoestima e a capacidade mastigatória com procedimentos modernos, seguros e parcelamento facilitado.',
        iconName: 'Tooth',
        imageUrl: '/images/treatments/implantes.webp'
      },
      {
        id: '2',
        title: 'Ortodontia (Aparelhos)',
        description: 'Alinhamento dentário com aparelhos fixos metálicos, estéticos e os modernos alinhadores transparentes.',
        iconName: 'Sparkles',
        imageUrl: '/images/treatments/aparelhos.webp'
      },
      {
        id: '3',
        title: 'Lentes de Contato Dental',
        description: 'Harmonia, brilho e alinhamento impecável com facetas e lentes de porcelana de alta durabilidade.',
        iconName: 'Diamond',
        imageUrl: '/images/treatments/lentes.webp'
      },
      {
        id: '4',
        title: 'Clareamento Dental',
        description: 'Dentes mais brancos e radiantes com técnicas a laser em consultório ou moldeira caseira supervisionada.',
        iconName: 'Sun',
        imageUrl: '/images/treatments/clareamento.webp'
      },
      {
        id: '5',
        title: 'Próteses Dentárias',
        description: 'Soluções fixas e removíveis com materiais de alto padrão para restabelecer seu sorriso e conforto.',
        iconName: 'Crown',
        imageUrl: '/images/treatments/proteses.webp'
      },
      {
        id: '6',
        title: 'Clínico Geral & Limpeza',
        description: 'Prevenção, profilaxia, restaurações e diagnóstico completo para a manutenção da sua saúde bucal.',
        iconName: 'Stethoscope',
        imageUrl: '/images/treatments/limpeza.webp'
      }
    ],
    images: {
      facade: '/images/fachada.webp'
    },
    dentists: [
      {
        name: 'Dra. Marília Borges Costa',
        specialty: 'Responsável Técnico(a) & Cirurgião(ã) Dentista',
        cro: 'CRO-SP 130862',
        photoUrl: '/images/dentistas/dra-marilia-costa.webp'
      }
    ],
    testimonials: [
      {
        name: 'Carlos Alberto M.',
        rating: 5,
        text: 'Excelente atendimento na OdontoCompany Viradouro! A clínica é muito bonita, os profissionais super atenciosos e o tratamento de implante foi super tranquilo.',
        treatment: 'Implante Dentário'
      },
      {
        name: 'Mariana Silveira',
        rating: 5,
        text: 'Coloquei meu aparelho na OdontoCompany Viradouro e já vejo muita diferença no meu sorriso. Facilidade no pagamento e equipe maravilhosa!',
        treatment: 'Ortodontia'
      },
      {
        name: 'Luciana Ramos',
        rating: 5,
        text: 'Fiz clareamento e limpeza preventiva na unidade. Atendimento pontual, ambiente muito limpo e profissionais que passam muita segurança. Recomendo a todos de Viradouro e região.',
        treatment: 'Clareamento Dental'
      }
    ]
  }
};

export const getUnitFromUrl = (): UnitData => {
  return UNITS_DATA.viradouro;
};
