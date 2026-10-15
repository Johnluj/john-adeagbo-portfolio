import { Language } from '../types';

export const TRANSLATIONS: Record<Language, {
  brandTitle: string;
  brandTagline: string;
  nav: {
    work: string;
    services: string;
    book: string;
    about: string;
    skills: string;
    training: string;
    articles: string;
    resume: string;
    contact: string;
    hireMe: string;
    admin: string;
  };
  hero: {
    kicker: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    bookCta: string;
    quoteCta: string;
    whatsappCta: string;
    projectsShippedLabel: string;
    industriesLabel: string;
    yearsLabel: string;
    securityRecordLabel: string;
  };
  work: {
    title: string;
    subtitle: string;
    filterAll: string;
    statusLive: string;
    statusInDev: string;
    statusProto: string;
    viewCaseStudy: string;
    codeExplorer: string;
  };
  services: {
    title: string;
    subtitle: string;
    bookConsult: string;
    requestQuote: string;
    startingFrom: string;
    fixedPrice: string;
    customQuote: string;
  };
  book: {
    title: string;
    subtitle: string;
    selectType: string;
    selectDate: string;
    selectTime: string;
    yourTimezone: string;
    confirmHeading: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    notesPlaceholder: string;
    meetingTool: string;
    confirmButton: string;
    bookedSuccess: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    officeHeading: string;
    fastResponseBadge: string;
  };
  assistant: {
    title: string;
    greeting: string;
    disclaimer: string;
    inputPlaceholder: string;
    quickPrompts: string[];
  };
}> = {
  en: {
    brandTitle: 'John Adeagbo',
    brandTagline: 'Lighting Through Technology · Delight Tech Network',
    nav: {
      work: 'Work',
      services: 'Services',
      book: 'Book a Call',
      about: 'About',
      skills: 'Skills',
      training: 'Training',
      articles: 'Articles',
      resume: 'Resume',
      contact: 'Contact',
      hireMe: 'Hire Me',
      admin: 'Admin CRM'
    },
    hero: {
      kicker: 'Software Developer · AI Engineer · Cybersecurity Professional',
      titleStart: 'Architecting fast web apps, intelligent AI agents &',
      titleHighlight: 'hardened digital systems',
      titleEnd: 'that convert.',
      subtitle: 'Based in Ibadan, Nigeria. Founder of Delight Tech Network. Shipping end-to-end solutions from idea and design to live, secure, revenue-driving products for local businesses and global teams.',
      bookCta: 'Book a Discovery Call',
      quoteCta: 'Request a Project Quotation',
      whatsappCta: 'Chat on WhatsApp',
      projectsShippedLabel: 'Shipped Projects',
      industriesLabel: 'Sectors Served',
      yearsLabel: 'Years Building',
      securityRecordLabel: 'Security Track Record'
    },
    work: {
      title: 'Featured Work & Case Studies',
      subtitle: 'Explore vetted case studies with live links, verifiable architecture, and optional inline code inspection.',
      filterAll: 'All Domains',
      statusLive: 'Live',
      statusInDev: 'In Development',
      statusProto: 'Prototype',
      viewCaseStudy: 'View Case Study',
      codeExplorer: 'Code Explorer'
    },
    services: {
      title: 'Services & Engineering Capabilities',
      subtitle: 'Ten specialized service lines across modern web, AI automation, cybersecurity, and business operations.',
      bookConsult: 'Book Consultation',
      requestQuote: 'Request Quotation',
      startingFrom: 'Starting from',
      fixedPrice: 'Fixed Package',
      customQuote: 'Custom Quotation'
    },
    book: {
      title: 'Book a Call with John',
      subtitle: 'Self-serve scheduling synchronized with Google Calendar in your local timezone. Monday to Friday, 8am - 5pm WAT.',
      selectType: '1. Select Consultation Type',
      selectDate: '2. Choose Date',
      selectTime: '3. Select Time Slot',
      yourTimezone: 'Times displayed in your timezone',
      confirmHeading: '4. Contact Details & Meeting Tool',
      namePlaceholder: 'Your Full Name',
      emailPlaceholder: 'you@company.com',
      companyPlaceholder: 'Company or Project Name (Optional)',
      notesPlaceholder: 'What would you like to discuss? Any context helps...',
      meetingTool: 'Preferred Meeting Tool',
      confirmButton: 'Confirm Appointment',
      bookedSuccess: 'Appointment Confirmed! Check your inbox for the calendar invite and meeting link.'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Direct contact with John Adeagbo for new projects, consultations, or DTN partnerships.',
      nameLabel: 'Your Name',
      emailLabel: 'Email Address',
      messageLabel: 'How can John or DTN help you?',
      sendButton: 'Send Message',
      officeHeading: 'Delight Tech Network Office',
      fastResponseBadge: 'First reply within 24 business hours'
    },
    assistant: {
      title: 'John’s AI Portfolio Assistant',
      greeting: 'Hello! I am John Adeagbo’s portfolio assistant. I can answer questions about his software projects, AI engineering, cybersecurity services, and help you schedule a call.',
      disclaimer: 'Official AI assistant · Answers grounded in verified portfolio data',
      inputPlaceholder: 'Ask about John’s stack, projects, or services...',
      quickPrompts: [
        'What tech stack does John use for web apps?',
        'Tell me about DelightPrep CBT platform',
        'How can I book a discovery call?',
        'What are John’s cybersecurity services?'
      ]
    }
  },
  yo: {
    brandTitle: 'John Adeagbo',
    brandTagline: 'Mímú Ìmọ́lẹ̀ Wá Nípasẹ̀ Ìmọ̀-Ẹ̀rọ · Delight Tech Network',
    nav: {
      work: 'Iṣẹ́ Wa',
      services: 'Àwọn Iṣẹ́',
      book: 'Gba Àkókò Ìpàdé',
      about: 'Nípa John',
      skills: 'Ọgbọ́n & Ìmọ̀',
      training: 'Ẹ̀kọ́ & Ìdánilẹ́kọ̀ọ́',
      articles: 'Àwọn Àkọsílẹ̀',
      resume: 'Ìwé Ìrírí (CV)',
      contact: 'Kàn sí Mi',
      hireMe: 'Bẹ̀wẹ̀ Mi',
      admin: 'Àkóso (CRM)'
    },
    hero: {
      kicker: 'Oníṣẹ́ Ìmọ̀-Ẹ̀rọ Kọ̀mpútà · Onímọ̀ AI · Onímọ̀ Ààbò Cyber',
      titleStart: 'Kíkọ́ àwọn ohun-èlò wẹ́ẹ̀bù tó yára, àwọn ẹ̀rọ AI tó gbọ́n, àti',
      titleHighlight: 'àwọn ètò ààbò tó lágbára',
      titleEnd: 'tó ń mú èrè wá.',
      subtitle: 'Ní Ìlú Ìbàdàn, Nàìjíríà. Olùdásílẹ̀ Delight Tech Network. Kíkọ́ iṣẹ́ láti ìbẹ̀rẹ̀ dé òpin fún àwọn ilé-iṣẹ́ ní Nàìjíríà àti kárí-ayé.',
      bookCta: 'Gba Àkókò Ìpàdé Ọ̀fẹ́',
      quoteCta: 'Béèrè Iye Owó Iṣẹ́',
      whatsappCta: 'Sọ̀rọ̀ lórí WhatsApp',
      projectsShippedLabel: 'Àwọn Iṣẹ́ Tí A Ti Parí',
      industriesLabel: 'Àwọn Ẹ̀ka Iṣẹ́',
      yearsLabel: 'Ọdún Ìrírí',
      securityRecordLabel: 'Àkọsílẹ̀ Ààbò 100%'
    },
    work: {
      title: 'Àwọn Iṣẹ́ Tí A Ti Ṣe',
      subtitle: 'Wo àwọn iṣẹ́ gidi pẹ̀lú àkọsílẹ̀ ẹ̀rọ, àti àwọn koodu tí a lò.',
      filterAll: 'Gbogbo Ẹ̀ka',
      statusLive: 'Ó ti wà lórí afẹ́fẹ́',
      statusInDev: 'Ó ń lọ lọ́wọ́',
      statusProto: 'Àkọ́wò',
      viewCaseStudy: 'Wo Ẹ̀kúnrẹ́rẹ́ Iṣẹ́',
      codeExplorer: 'Wò Koodu'
    },
    services: {
      title: 'Àwọn Iṣẹ́ Tí A Ń Ṣe',
      subtitle: 'Iṣẹ́ mẹ́wàá lórí wẹ́ẹ̀bù, AI, ààbò kọ̀mpútà, àti ìdàgbàsókè ilé-iṣẹ́.',
      bookConsult: 'Gba Àkókò Ìwádìí',
      requestQuote: 'Béèrè Iye Owó',
      startingFrom: 'Bẹ̀rẹ̀ láti',
      fixedPrice: 'Owó Àpapọ̀',
      customQuote: 'Àjọ-sọ̀rọ̀ Owó'
    },
    book: {
      title: 'Gba Àkókò Ìpàdé pẹ̀lú John',
      subtitle: 'Yan àkókò tó rọrùn fún ẹ láti Ọjọ́ Ajé dé Ọjọ́ Ẹtì, ago mẹ́jọ òwúrọ̀ sí ago márùn-ún ìrọ̀lẹ́ (WAT).',
      selectType: '1. Yan Ẹ̀yà Ìpàdé',
      selectDate: '2. Yan Ọjọ́',
      selectTime: '3. Yan Àkókò',
      yourTimezone: 'Àkókò tí ó bá agbègbè rẹ mu',
      confirmHeading: '4. Àwọn Ẹ̀kúnrẹ́rẹ́ Rẹ',
      namePlaceholder: 'Orúkọ Rẹ Lẹ́kùn-únrẹ́rẹ́',
      emailPlaceholder: 'email_re@company.com',
      companyPlaceholder: 'Orúkọ Ilé-Iṣẹ́ Rẹ (Tó bá wà)',
      notesPlaceholder: 'Kí ni o fẹ́ kí a jíròrò lórí rẹ̀?',
      meetingTool: 'Ohun èlò ìpàdé tí o fẹ́ràn',
      confirmButton: 'Fidi Ìpàdé Múlẹ̀',
      bookedSuccess: 'Ìpàdé rẹ ti fìdí múlẹ̀! Wo àpò-ìfìránṣẹ́ rẹ fún ìkésíni àti ọ̀nà àbáwọlé.'
    },
    contact: {
      title: 'Kàn sí John Adeagbo',
      subtitle: 'Sọ̀rọ̀ tààrà pẹ̀lú John fún iṣẹ́ tuntun, ìmọ̀ràn tàbí iṣẹ́-àjọṣepọ̀ DTN.',
      nameLabel: 'Orúkọ Rẹ',
      emailLabel: 'Àdírẹ́sì Ímeèlì',
      messageLabel: 'Báwo ni John ṣe lè ran ilé-iṣẹ́ rẹ lọ́wọ́?',
      sendButton: 'Fi Ìfìránṣẹ́ Ransẹ́',
      officeHeading: 'Ọ́fíìsì Delight Tech Network',
      fastResponseBadge: 'Èsì láàárín wákàtí mẹ́rìnlélógún'
    },
    assistant: {
      title: 'Olùrànlọ́wọ́ AI John Adeagbo',
      greeting: 'Ẹ ǹ lẹ́ o! Èmi ni olùrànlọ́wọ́ AI ti John Adeagbo. Mo lè dáhùn ìbéèrè rẹ nípa àwọn iṣẹ́ kọ̀mpútà, AI, ààbò cyber, àti bí o ṣe lè gba àkókò ìpàdé.',
      disclaimer: 'AI Oníṣẹ́ gidi · Dá lórí ìmọ̀ tó dájú',
      inputPlaceholder: 'Béèrè nípa iṣẹ́ John, ìmọ̀-ẹ̀rọ, tàbí àwọn àkókò...',
      quickPrompts: [
        'Àwọn ìmọ̀ wo ni John lò fún wẹ́ẹ̀bù?',
        'Sọ fún mi nípa DelightPrep',
        'Báwo ni mo ṣe lè gba àkókò ìpàdé?',
        'Àwọn iṣẹ́ ààbò cyber wo ni John ń ṣe?'
      ]
    }
  },
  fr: {
    brandTitle: 'John Adeagbo',
    brandTagline: 'Éclairer par la Technologie · Delight Tech Network',
    nav: {
      work: 'Réalisations',
      services: 'Services',
      book: 'Prendre RDV',
      about: 'À propos',
      skills: 'Compétences',
      training: 'Formations',
      articles: 'Articles',
      resume: 'CV',
      contact: 'Contact',
      hireMe: 'Recrutez-moi',
      admin: 'Admin CRM'
    },
    hero: {
      kicker: 'Développeur Logiciel · Ingénieur IA · Expert en Cybersécurité',
      titleStart: 'Conception d’applications web réactives, d’agents IA et de',
      titleHighlight: 'systèmes sécurisés',
      titleEnd: 'à fort impact.',
      subtitle: 'Basé à Ibadan, Nigéria. Fondateur de Delight Tech Network. De l’architecture au déploiement sécurisé pour les PME et entreprises internationales.',
      bookCta: 'Réserver un Appel Découverte',
      quoteCta: 'Demander un Devis',
      whatsappCta: 'Discuter sur WhatsApp',
      projectsShippedLabel: 'Projets Déployés',
      industriesLabel: 'Secteurs Clés',
      yearsLabel: 'Années d’Expérience',
      securityRecordLabel: 'Sécurité Vérifiée 100%'
    },
    work: {
      title: 'Études de Cas & Projets',
      subtitle: 'Découvrez des solutions éprouvées en production avec code source auditable.',
      filterAll: 'Tous les domaines',
      statusLive: 'En ligne',
      statusInDev: 'En développement',
      statusProto: 'Prototype',
      viewCaseStudy: 'Voir l’étude de cas',
      codeExplorer: 'Explorateur de Code'
    },
    services: {
      title: 'Services & Expertises Techniques',
      subtitle: 'Dix pôles d’excellence couvrant le développement web moderne, l’automatisation IA et la cybersécurité.',
      bookConsult: 'Réserver une session',
      requestQuote: 'Demander un devis',
      startingFrom: 'À partir de',
      fixedPrice: 'Forfait Fixe',
      customQuote: 'Devis sur mesure'
    },
    book: {
      title: 'Planifier un Appel avec John',
      subtitle: 'Prise de rendez-vous directe synchronisée avec Google Calendar. Du lundi au vendredi, 8h à 17h (heure WAT).',
      selectType: '1. Type de consultation',
      selectDate: '2. Choisir la date',
      selectTime: '3. Sélectionner l’horaire',
      yourTimezone: 'Fuseau horaire automatiquement converti',
      confirmHeading: '4. Vos coordonnées & outil de réunion',
      namePlaceholder: 'Votre nom complet',
      emailPlaceholder: 'vous@entreprise.com',
      companyPlaceholder: 'Nom de votre entreprise',
      notesPlaceholder: 'De quoi aimeriez-vous parler ?',
      meetingTool: 'Outil de visioconférence souhaité',
      confirmButton: 'Confirmer le Rendez-vous',
      bookedSuccess: 'Rendez-vous confirmé ! Vérifiez votre boîte mail pour l’invitation d’agenda.'
    },
    contact: {
      title: 'Entrer en Contact',
      subtitle: 'Contactez John Adeagbo directement pour vos projets, audits ou partenariats DTN.',
      nameLabel: 'Votre Nom',
      emailLabel: 'Adresse E-mail',
      messageLabel: 'Comment John ou DTN peuvent-ils vous aider ?',
      sendButton: 'Envoyer le message',
      officeHeading: 'Bureau Delight Tech Network',
      fastResponseBadge: 'Réponse garantie sous 24h ouvrées'
    },
    assistant: {
      title: 'Assistant IA du Portfolio de John',
      greeting: 'Bonjour ! Je suis l’assistant virtuel de John Adeagbo. Je réponds à vos questions sur ses projets, son expertise IA et cybersécurité, et vous aide à réserver un rendez-vous.',
      disclaimer: 'IA officielle · Réponses basées sur le portfolio vérifié',
      inputPlaceholder: 'Posez une question sur les compétences ou projets...',
      quickPrompts: [
        'Quelle est la stack technique de John ?',
        'Présentez-moi la plateforme DelightPrep',
        'Comment réserver un appel découverte ?',
        'Quels sont ses services de cybersécurité ?'
      ]
    }
  }
};
