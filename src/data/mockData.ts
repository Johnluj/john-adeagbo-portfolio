import {
  Project,
  ServiceItem,
  AppointmentType,
  Testimonial,
  TrainingProgram,
  Article,
  Inquiry,
  Quotation,
  Booking
} from '../types';

export const FOUNDER_INFO = {
  name: 'John Adeagbo',
  title: 'Software Developer, AI Engineer & Cybersecurity Professional',
  company: 'Delight Tech Network (DTN)',
  motto: 'Lighting Through Technology',
  location: 'Heritage Mall, Cocoa House, Dugbe, Ibadan, Oyo State, Nigeria',
  email: 'adeagbojohnluj@gmail.com',
  phone: '+234 903 807 0539',
  whatsapp: '+234 708 962 7177',
  github: 'https://github.com/adeagbojohn',
  linkedin: 'https://linkedin.com/in/john-adeagbo',
  photo: '/src/assets/images/john_adeagbo_real_photo_1792097623612.jpg',
  bio: 'Final-year student at University of Ibadan (Class of 2027) and founder of Delight Tech Network and Delight Media Studio. John engineers end-to-end web applications, resilient AI agent pipelines, and enterprise-grade security hardening for SMEs, startups, and international companies.',
  stats: {
    projectsShipped: 28,
    industriesServed: 6,
    yearsActive: 4,
    auditSuccessRate: '100%'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'delightprep',
    slug: 'delightprep',
    title: 'DelightPrep — EdTech Computer-Based Testing Platform',
    client: 'Delight Education Initiative',
    industry: 'Education & Examination',
    services: ['Web Apps', 'SaaS and MVPs'],
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase Auth'],
    status: 'Live',
    problem: 'Secondary schools and UTME/WAEC candidates across Oyo State suffered from unreliable exam simulations, frequent server timeouts during timed tests, and lack of real-time subject weakness diagnostics.',
    role: 'Lead Full-Stack Architect & Core Developer',
    result: 'Delivered an ultra-low-bandwidth, high-concurrency CBT platform handling 2,400+ simultaneous test sessions with 0ms clock drift and immediate automated score breakdowns.',
    liveUrl: 'https://delightprep.example.com',
    repoUrl: 'https://github.com/adeagbojohn/delightprep-core',
    codeMode: 'inline',
    codeSnippet: `// DelightPrep Exam Engine: Zero-drift timer & offline sync buffer
export function useExamTimer(durationSeconds: number, onTimeout: () => void) {
  const [remaining, setRemaining] = useState(durationSeconds);
  const targetTime = useRef(Date.now() + durationSeconds * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Math.max(0, Math.round((targetTime.current - Date.now()) / 1000));
      setRemaining(diff);
      if (diff <= 0) {
        clearInterval(interval);
        onTimeout();
      }
    }, 250);
    return () => clearInterval(interval);
  }, [onTimeout]);

  return { remaining };
}`,
    image: '/src/assets/images/delightprep_edtech_preview_1792096431116.jpg',
    featured: true
  },
  {
    id: 'ai-enterprise-pipeline',
    slug: 'ai-enterprise-pipeline',
    title: 'Enterprise AI Autonomous Workflow & Lead Engine',
    client: 'Pan-African Logistics & SME Consortium',
    industry: 'Logistics & Professional Services',
    services: ['AI Engineering & Automation', 'Web Apps'],
    stack: ['Python', 'FastAPI', 'LangChain', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro', 'React'],
    status: 'Live',
    problem: 'Manual processing of 450+ daily unstructured invoice inquiries, WhatsApp order messages, and quotation briefs was causing 48-hour response bottlenecks and lost deals.',
    role: 'AI System Engineer & Workflow Orchestrator',
    result: 'Engineered an asynchronous multi-agent pipeline that extracts invoice metadata, parses CRM leads with 99.4% accuracy, and automatically populates draft quotations for human sign-off.',
    liveUrl: 'https://ai-orchestrator.example.com',
    repoUrl: 'https://github.com/adeagbojohn/dtn-ai-pipeline',
    codeMode: 'inline',
    codeSnippet: `// Asynchronous multi-tier AI parsing workflow
export async function parseInboundInquiry(rawPrompt: string) {
  const classified = await aiClient.generateContent({
    model: 'gemini-1.5-flash',
    contents: [{ text: \`Extract client requirements, urgency, and budget: \${rawPrompt}\` }],
    config: { responseMimeType: 'application/json' }
  });
  return JSON.parse(classified.text);
}`,
    image: '/src/assets/images/ai_automation_preview_1792096430965.jpg',
    featured: true
  },
  {
    id: 'cybersecurity-threat-lab',
    slug: 'cybersecurity-threat-lab',
    title: 'Cybersecurity Threat Mitigation & Web Hardening Suite',
    client: 'Fintech Micro-Lending Firm',
    industry: 'Fintech & Security',
    services: ['Cybersecurity', 'Web Apps'],
    stack: ['OWASP ZAP', 'Burp Suite', 'TypeScript', 'Node.js', 'PostgreSQL RLS', 'Docker'],
    status: 'Live',
    problem: 'Client experienced credential stuffing attempts, unauthenticated API endpoint scraping, and insecure direct object reference (IDOR) vulnerabilities on legacy PHP portals.',
    role: 'Cybersecurity Auditor & Security Engineer',
    result: 'Conducted rigorous black-box and white-box penetration tests, established Row-Level Security policies, eliminated all critical vulnerabilities, and implemented NDPA-compliant audit logging.',
    liveUrl: 'https://security-audit.example.com',
    repoUrl: 'https://github.com/adeagbojohn/sec-hardening-toolkit',
    codeMode: 'inline',
    codeSnippet: `-- Row-level security enforcement for financial transactions
ALTER TABLE user_wallets ENABLE ROW LEVEL SECURITY;

CREATE POLICY user_wallet_isolation ON user_wallets
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);`,
    image: '/src/assets/images/cybersecurity_lab_preview_1792096432125.jpg',
    featured: true
  },
  {
    id: 'delight-academy-lms',
    slug: 'delight-academy-lms',
    title: 'Delight Academy — Interactive Learning Management System',
    client: 'Delight Media Studio & Tech Hub',
    industry: 'Education & EdTech',
    services: ['Web Apps', 'Training, Coaching & Speaking'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Supabase'],
    status: 'In development',
    problem: 'Needed a scalable community learning portal for tech students and youth in Ibadan to access video lectures, interactive coding quizzes, and downloadable resources.',
    role: 'Full-Stack Developer & Product Manager',
    result: 'Streamlined course enrollments, cohort management, and instant certificate generation for over 500 enrolled learners.',
    liveUrl: 'https://academy.delighttechnetwork.com',
    repoUrl: 'https://github.com/adeagbojohn/delight-academy',
    codeMode: 'github',
    image: '/src/assets/images/delightprep_edtech_preview_1792096431116.jpg',
    featured: false
  },
  {
    id: 'dtn-corporate-site',
    slug: 'dtn-corporate-site',
    title: 'Delight Tech Network Corporate Platform',
    client: 'Delight Tech Network',
    industry: 'Corporate & Technology',
    services: ['Web Apps', 'Branding', 'Design'],
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    status: 'Live',
    problem: 'DTN required a high-speed corporate web presence conveying "Lighting Through Technology", showcasing technical service lines, and generating B2B leads.',
    role: 'Founder & Principal Engineer',
    result: 'Achieved 98/100 Google Lighthouse score on mobile, 45% increase in monthly client inquiries, and seamless service booking.',
    liveUrl: 'https://delighttechnetwork.com',
    codeMode: 'github',
    image: '/src/assets/images/ai_automation_preview_1792096430965.jpg',
    featured: false
  },
  {
    id: 'dlcm-ibarapa-website',
    slug: 'dlcm-ibarapa-website',
    title: 'DLCM Ibarapa Ministry Portal & Audio Streaming Hub',
    client: 'Deeper Life Campus Ministry Ibarapa',
    industry: 'Faith & Community',
    services: ['Web Apps', 'Design'],
    stack: ['React', 'Tailwind CSS', 'Cloudinary Media API', 'Supabase'],
    status: 'Live',
    problem: 'Members and students across campuses in Ibarapa region had no central platform to stream live audio sermons, access study archives, or register for regional retreats.',
    role: 'Full-Stack Developer',
    result: 'Deployed a lightweight, mobile-first audio player and event registry that consumes minimal mobile data, serving 1,200+ active weekly campus members.',
    liveUrl: 'https://dlcm-ibarapa.org.example',
    codeMode: 'off',
    image: '/src/assets/images/delightprep_edtech_preview_1792096431116.jpg',
    featured: false
  },
  {
    id: 'agri-data-analytics',
    slug: 'agri-data-analytics',
    title: 'AgriBusiness Inventory & Yield Analytics Dashboard',
    client: 'Oyo State Agribusiness Cooperative',
    industry: 'Agribusiness & FMCG',
    services: ['Data Analysis', 'Web Apps'],
    stack: ['Python', 'Pandas', 'Next.js', 'Chart.js', 'PostgreSQL'],
    status: 'Prototype',
    problem: 'Dispersed farmer clusters suffered inventory wastage and lack of pricing transparency across rural aggregation centres.',
    role: 'Data Analyst & Full-Stack Developer',
    result: 'Built an interactive dashboard providing harvest yield predictions, storage shelf-life alerts, and real-time wholesale price tracking.',
    codeMode: 'off',
    image: '/src/assets/images/cybersecurity_lab_preview_1792096432125.jpg',
    featured: false
  },
  {
    id: 'branding-cac-suite',
    slug: 'branding-cac-suite',
    title: 'Delight Brand Identity & CAC Compliance Hub',
    client: 'Multiple Emerging Nigerian Startups',
    industry: 'Legal, CAC & Branding',
    services: ['Branding', 'Design', 'Virtual Assistance'],
    stack: ['Figma', 'Adobe Illustrator', 'Corporate Affairs Commission Portal'],
    status: 'Live',
    problem: 'New Nigerian founders struggle with disjointed corporate identities, delayed CAC registrations, and non-compliant tax filings.',
    role: 'Brand Designer & Operations Lead',
    result: 'Successfully registered and branded 35+ Nigerian SMEs with complete vector brand toolkits, CAC certificates, and SCUML/TIN compliance.',
    codeMode: 'off',
    image: '/src/assets/images/ai_automation_preview_1792096430965.jpg',
    featured: false
  },
  {
    id: 'web3-smart-escrow',
    slug: 'web3-smart-escrow',
    title: 'Decentralized Milestone Escrow Contract & UI',
    client: 'Pan-African Freelance Collective',
    industry: 'Web3 & Fintech',
    services: ['Web3', 'Web Apps'],
    stack: ['Solidity', 'Ethers.js', 'React', 'Hardhat'],
    status: 'Prototype',
    problem: 'Cross-border freelance talent in Africa faces frequent payment disputes, delayed international wire transfers, and prohibitive FX commissions.',
    role: 'Smart Contract Developer & Frontend Engineer',
    result: 'Designed a dual-signature milestone release smart contract reducing escrow transaction costs by 80% with transparent on-chain arbitration.',
    codeMode: 'github',
    repoUrl: 'https://github.com/adeagbojohn/web3-escrow-contracts',
    image: '/src/assets/images/cybersecurity_lab_preview_1792096432125.jpg',
    featured: false
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-apps',
    slug: 'web-apps',
    title: 'Web Apps & Fast Dashboards',
    summary: 'High-speed, rock-solid web applications and administrative dashboards built on Next.js, React, and Supabase.',
    pricingModel: 'Starting From',
    priceFromNgn: 350000,
    priceFromUsd: 450,
    likelyBuyer: 'SMEs, schools, ministries, businesses seeking custom digital systems',
    deliverables: ['Custom Next.js/React frontend', 'Supabase/PostgreSQL backend & auth', 'Mobile-first responsive UI', 'SEO & OpenGraph configuration', '30-day post-launch support'],
    process: ['Discovery & user requirements scoping', 'Interactive UX wireframing', 'Sprint development & API integration', 'Security audit & QA testing', 'Production deployment & staff handover'],
    faqs: [
      { question: 'How long does a typical web app take to ship?', answer: 'Most standard web applications and operational dashboards are delivered within 2 to 4 weeks with weekly staging demos.' },
      { question: 'Will it work smoothly on slow mobile connections in Nigeria?', answer: 'Yes. Every project is optimized for low-bandwidth mobile networks, minimal payload bundle sizes, and quick initial paint times.' }
    ]
  },
  {
    id: 'saas-mvps',
    slug: 'saas-mvps',
    title: 'SaaS & MVP Engineering',
    summary: 'From product requirements document (PRD) to a live, monetizable software product in market under 4 weeks.',
    pricingModel: 'Custom Quotation',
    priceFromNgn: 750000,
    priceFromUsd: 950,
    likelyBuyer: 'Startup founders, tech innovators, product teams validating hypotheses',
    deliverables: ['Product architecture & data schema', 'Complete user auth, billing & onboarding flows', 'Paystack & Stripe automated subscriptions', 'Admin analytics console', 'CI/CD pipeline'],
    process: ['PRD breakdown & feature prioritization', 'Database schema & core entity modeling', 'Core user journey engineering', 'Payment gateway integration', 'Beta launch with telemetry'],
    faqs: [
      { question: 'Can you help refine the PRD before writing code?', answer: 'Absolutely. We review and harden your PRD to ensure the MVP focuses strictly on high-impact validation metrics.' },
      { question: 'Do you build with both Nigerian and international payment gateways?', answer: 'Yes, we integrate Paystack for Naira cards, USSD and bank transfers, and Stripe for USD credit cards.' }
    ]
  },
  {
    id: 'ai-engineering',
    slug: 'ai-engineering',
    title: 'AI Engineering & Automation',
    summary: 'Custom intelligent assistants, automated document processors, and multi-agent workflow systems.',
    pricingModel: 'Starting From',
    priceFromNgn: 400000,
    priceFromUsd: 500,
    likelyBuyer: 'Growing businesses, agencies, and operations teams drowning in repetitive tasks',
    deliverables: ['Custom LLM integration (Claude / Gemini)', 'Automated WhatsApp & CRM notification bots', 'Document extraction & OCR workflows', 'Prompt engineering & guardrail auditing', 'Self-hosted API proxy routes'],
    process: ['Workflow bottleneck audit', 'Model selection & prompt prototyping', 'Agent pipeline engineering & validation', 'Integration into existing business tools', 'Guardrail testing & deployment'],
    faqs: [
      { question: 'Will the AI hallucinate sensitive business information?', answer: 'We implement strict Retrieval-Augmented Generation (RAG) and zero-shot guardrails, restricting responses only to your approved business knowledge base.' }
    ]
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    title: 'Cybersecurity Assessments & Hardening',
    summary: 'Vulnerability audits, penetration testing, server hardening, and NDPA 2023 compliance consulting.',
    pricingModel: 'Custom Quotation',
    priceFromNgn: 300000,
    priceFromUsd: 400,
    likelyBuyer: 'Institutions, financial platforms, schools, health portals handling sensitive customer data',
    deliverables: ['Comprehensive Vulnerability Assessment Report', 'OWASP Top 10 remediation plan', 'PostgreSQL RLS & API security audit', 'Security headers & SSL configuration', 'NDPA data protection checklist'],
    process: ['Scope definition & authorization agreement', 'Passive and active vulnerability scanning', 'Exploit verification & threat modeling', 'Detailed mitigation blueprint delivery', 'Retest after patch application'],
    faqs: [
      { question: 'Do you provide fixed-price small audits?', answer: 'Yes, for small web platforms and APIs, we offer structured flat-rate security hardening packages.' }
    ]
  },
  {
    id: 'data-analysis',
    slug: 'data-analysis',
    title: 'Data Analysis & Decision Dashboards',
    summary: 'Transforming messy spreadsheets and transactional databases into executive dashboards and automated KPI reports.',
    pricingModel: 'Starting From',
    priceFromNgn: 250000,
    priceFromUsd: 320,
    likelyBuyer: 'SMEs, NGOs, agribusinesses, institutions seeking clarity on revenue and operational metrics',
    deliverables: ['Data cleansing and pipeline ETL', 'Interactive web dashboard with filterable charts', 'Automated weekly PDF/Excel summary report', 'Trend analysis and anomaly detection', 'Data dictionary & documentation'],
    process: ['Data audit & ingestion', 'Data cleaning & standardization', 'Metric modeling & KPI definition', 'Visual dashboard implementation', 'Stakeholder review and training'],
    faqs: [
      { question: 'What formats can my data be in?', answer: 'We ingest data from Google Sheets, Microsoft Excel, CSVs, PostgreSQL, MySQL, and REST APIs.' }
    ]
  },
  {
    id: 'virtual-assistance',
    slug: 'virtual-assistance',
    title: 'Virtual Assistance & Tech Operations',
    summary: 'Reliable, high-trust administrative, technical documentation, and remote operations execution.',
    pricingModel: 'Fixed Package',
    priceFromNgn: 150000,
    priceFromUsd: 200,
    likelyBuyer: 'Busy startup founders, executives, diaspora professionals needing trustworthy boots on ground',
    deliverables: ['Calendar and meeting coordination', 'Customer support & CRM inquiry response', 'Technical documentation & research briefs', 'Data entry & digital file organization', 'Dedicated weekly progress reports'],
    process: ['Onboarding & task scope alignment', 'Access provisioning with password security', 'Daily task execution & real-time sync', 'Weekly wrap-up & KPI review'],
    faqs: [
      { question: 'What timezones do you support?', answer: 'We operate primarily in West Africa Time (WAT / UTC+1) with flexible alignment for GMT, CET, and US Eastern hours.' }
    ]
  },
  {
    id: 'web3',
    slug: 'web3',
    title: 'Web3 & Smart Contract Advisory',
    summary: 'Decentralized escrow systems, token integrations, and Web3 technical feasibility consulting.',
    pricingModel: 'Custom Quotation',
    priceFromNgn: 500000,
    priceFromUsd: 650,
    likelyBuyer: 'Startups, creative communities, fintech pioneers exploring decentralized architecture',
    deliverables: ['Solidity smart contract development', 'Test suite coverage via Hardhat', 'Frontend Web3 wallet connection (Ethers/Wagmi)', 'Contract deployment on testnets/mainnet', 'Security review'],
    process: ['Contract architecture & state design', 'Solidity coding & local simulation', 'Automated security test coverage', 'Testnet deployment & verification', 'Frontend integration'],
    faqs: [
      { question: 'Do you help decide if Web3 is genuinely needed for our idea?', answer: 'Yes. We give honest technical guidance and will advise against blockchain if a standard relational database solves your problem faster and cheaper.' }
    ]
  },
  {
    id: 'branding',
    slug: 'branding',
    title: 'Branding & Corporate Identity',
    summary: 'Complete brand kits, vector identity design, corporate stationery, and Nigerian CAC/TIN business registration guidance.',
    pricingModel: 'Fixed Package',
    priceFromNgn: 180000,
    priceFromUsd: 220,
    likelyBuyer: 'New ventures, tech startups, rebranding businesses wanting instant market credibility',
    deliverables: ['Primary & secondary logo marks (vector SVG/PNG)', 'Typography rules & official color palette', 'Brand guidelines PDF', 'Social media kits & letterhead stationery', 'CAC corporate registration guidance'],
    process: ['Brand discovery & moodboard curation', '3 distinct creative concepts presented', 'Revision & polish of chosen concept', 'Comprehensive asset packaging', 'Handoff with full copyright ownership'],
    faqs: [
      { question: 'Do you handle the actual CAC business name registration?', answer: 'Yes, through Delight Tech Network we guide and process registration with the Corporate Affairs Commission in Nigeria.' }
    ]
  },
  {
    id: 'design',
    slug: 'design',
    title: 'UI/UX & Graphic Design',
    summary: 'High-conversion interface mockups, user flow prototypes, marketing flyers, and publication layouts.',
    pricingModel: 'Fixed Package',
    priceFromNgn: 200000,
    priceFromUsd: 250,
    likelyBuyer: 'Agencies, software startups, marketing teams needing premium visual design assets',
    deliverables: ['Figma design system with reusable components', 'High-fidelity mobile and desktop screens', 'Clickable interactive prototype', 'Developer handoff specs with redlines', 'Exported vector iconography and assets'],
    process: ['User flow mapping', 'Low-fidelity wireframe alignment', 'High-fidelity visual design in Figma', 'Interactive prototyping', 'Developer handoff review'],
    faqs: [
      { question: 'Do you design specifically for mobile screens?', answer: 'Yes, every layout is designed mobile-first to ensure flawless usability on smartphones.' }
    ]
  },
  {
    id: 'training-speaking',
    slug: 'training-speaking',
    title: 'Training, Coaching & Speaking',
    summary: 'Practical coding bootcamps, vibe coding workshops, computer-based test (CBT) training, and tech keynote talks.',
    pricingModel: 'Fixed Package',
    priceFromNgn: 150000,
    priceFromUsd: 200,
    likelyBuyer: 'Schools, universities, churches, youth organizations, conferences, corporate tech teams',
    deliverables: ['Custom curriculum tailored to audience level', 'Hands-on practical exercises and project templates', 'Live interactive instruction & Q&A', 'Recorded session access & code repos', 'Certificate of completion for attendees'],
    process: ['Audience assessment & goal setting', 'Syllabus design & exercise preparation', 'Session delivery (in-person or remote)', 'Follow-up resources & Q&A forum'],
    faqs: [
      { question: 'Can John travel for in-person workshops outside Ibadan?', answer: 'Yes, John is available for speaking engagements and workshops in Lagos, Abuja, and across Nigeria, as well as virtual global summits.' }
    ]
  }
];

export const APPOINTMENT_TYPES: AppointmentType[] = [
  {
    id: 'free-discovery',
    name: 'Free Discovery Call',
    durationMin: 15,
    priceNgn: 0,
    priceUsd: 0,
    requirePayment: false,
    bestFor: 'First contact, quick fit check, project scope exploration',
    description: 'A focused 15-minute introductory video or audio call to discuss your goals, determine technical feasibility, and see if working together makes sense.'
  },
  {
    id: 'paid-technical-consultation',
    name: 'Paid Technical Consultation',
    durationMin: 45,
    priceNgn: 35000,
    priceUsd: 45,
    requirePayment: false,
    bestFor: 'In-depth advice, codebase audits, technical architecture review',
    description: '45 minutes of direct one-on-one technical consultation covering database architecture, security hardening, or troubleshooting existing software systems.'
  },
  {
    id: 'saas-mvp-planning',
    name: 'SaaS & MVP Planning Session',
    durationMin: 60,
    priceNgn: 50000,
    priceUsd: 65,
    requirePayment: false,
    bestFor: 'Founders planning a software product, scoping PRD and tech stack',
    description: 'Deep-dive session to review your product concept, strip away bloated features, map entity models, and formulate a 4-week launch timeline.'
  },
  {
    id: 'ai-automation-consultation',
    name: 'AI Automation Consultation',
    durationMin: 45,
    priceNgn: 40000,
    priceUsd: 50,
    requirePayment: false,
    bestFor: 'Workflows, autonomous AI assistants, CRM lead routing',
    description: 'Detailed analysis of your repetitive business bottlenecks to design custom automated workflows using Claude, Gemini, or local models.'
  },
  {
    id: 'cybersecurity-consultation',
    name: 'Cybersecurity & Hardening Review',
    durationMin: 45,
    priceNgn: 45000,
    priceUsd: 60,
    requirePayment: false,
    bestFor: 'Risk assessment, penetration test scoping, compliance review',
    description: 'Review your current server topology, API authentication policies, and data storage to pinpoint high-risk vulnerabilities.'
  },
  {
    id: 'career-discussion',
    name: 'Career & Mentorship Discussion',
    durationMin: 30,
    priceNgn: 0,
    priceUsd: 0,
    requirePayment: false,
    bestFor: 'Employers, recruiters, aspiring student developers',
    description: 'Connect regarding full-time, contract, or remote engineering opportunities, or practical guidance on breaking into tech.'
  },
  {
    id: 'corporate-training-consultation',
    name: 'Corporate Training Consultation',
    durationMin: 30,
    priceNgn: 0,
    priceUsd: 0,
    requirePayment: false,
    bestFor: 'Schools, training institutions, team managers',
    description: 'Discuss curriculum needs for coding bootcamps, student CBT training, or workforce digital literacy programs.'
  },
  {
    id: 'speaking-engagement-inquiry',
    name: 'Speaking Engagement Inquiry',
    durationMin: 30,
    priceNgn: 0,
    priceUsd: 0,
    requirePayment: false,
    bestFor: 'Event organizers, conferences, youth summits',
    description: 'Coordination meeting for keynote talks, panel discussions, or technical breakout sessions on AI, cybersecurity, and African tech.'
  },
  {
    id: 'general-business-meeting',
    name: 'General Business & Partnership Meeting',
    durationMin: 30,
    priceNgn: 0,
    priceUsd: 0,
    requirePayment: false,
    bestFor: 'Partnerships, investors, DTN startup collaborations',
    description: 'Open discussion for prospective collaborative ventures, agency syndication, or investment conversations with Delight Tech Network.'
  }
];

export const SKILLS_DATA = [
  { category: 'Core Development', name: 'Web Development', level: 'Advanced', stack: ['TypeScript', 'Next.js 14', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Supabase', 'REST & GraphQL APIs'] },
  { category: 'Artificial Intelligence', name: 'AI Engineering & Automation', level: 'Advanced', stack: ['Claude 3.5 Sonnet', 'Gemini 1.5 Pro', 'LangChain', 'Prompt Optimization', 'RAG Pipelines', 'Autonomous Agents', 'Voice/Audio APIs'] },
  { category: 'Security & Systems', name: 'Cybersecurity & Auditing', level: 'Advanced', stack: ['OWASP Top 10 Mitigation', 'Penetration Testing', 'Row-Level Security (RLS)', 'Burp Suite', 'Network Hardening', 'NDPA 2023 Compliance', 'JWT & OAuth2 Architecture'] },
  { category: 'Product Strategy', name: 'SaaS & MVP Engineering', level: 'Intermediate', stack: ['PRD Scoping', 'Entity Relationship Modeling', 'Paystack & Stripe Integration', 'Rapid Prototyping', 'CI/CD Pipelines'] },
  { category: 'Data & Analytics', name: 'Data Analysis & BI', level: 'Intermediate', stack: ['Python (Pandas, NumPy)', 'SQL Query Optimization', 'Tableau & Chart.js', 'Spreadsheet Automation', 'Statistical Modeling'] },
  { category: 'Decentralized Tech', name: 'Web3 & Smart Contracts', level: 'Intermediate', stack: ['Solidity', 'Ethers.js', 'Hardhat', 'Escrow State Machines', 'Smart Contract Auditing'] },
  { category: 'Creative & Visual', name: 'Graphics Design, UI & UX', level: 'Professional', stack: ['Figma', 'Adobe Creative Suite', 'Design Systems', 'Micro-Interactions', 'Vector Typography', 'Brand Guidelines'] },
  { category: 'Operations & Support', name: 'Virtual Assistance & Tech Ops', level: 'Professional', stack: ['Executive Calendar Management', 'Technical Writing', 'Customer Support Workflows', 'CAC Registration Support', 'Remote Team Coordination'] }
];

export const EXPERIENCE_TIMELINE = [
  {
    role: 'Founder & Principal Engineer',
    org: 'Delight Tech Network (DTN)',
    period: '2023 — Present',
    location: 'Ibadan, Nigeria',
    description: 'Spearheading product engineering, cybersecurity audits, and AI automation workflows for startups, institutions, and SMEs across Nigeria and abroad.'
  },
  {
    role: 'Founder & Creative Lead',
    org: 'Delight Media Studio',
    period: '2022 — Present',
    location: 'Ibadan, Nigeria',
    description: 'Directing brand identity development, UI/UX prototyping, CAC corporate registrations, and multimedia digital assets for commercial brands.'
  },
  {
    role: 'B.Sc. Candidate (Final Year, Class of 2027)',
    org: 'University of Ibadan',
    period: '2022 — 2027 (Expected)',
    location: 'Ibadan, Nigeria',
    description: 'Pursuing undergraduate degree at Nigeria’s premier university; conducting research in computational logic, algorithm design, and security engineering.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Pastor Emmanuel O.',
    role: 'Youth Ministry Coordinator',
    company: 'DLCM Ibarapa Ministry',
    industry: 'Faith & Community',
    quote: 'John built our campus portal and audio player from the ground up. What impressed us most was how smoothly it streams audio even on weak 3G networks in rural campuses. He is trustworthy, prompt, and delivers with remarkable precision.',
    projectTitle: 'DLCM Ibarapa Ministry Portal'
  },
  {
    id: 't2',
    author: 'Engr. Dapo Alabi',
    role: 'Managing Director',
    company: 'AgriHarvest Solutions',
    industry: 'Agribusiness',
    quote: 'Working with John and Delight Tech Network gave us a modern inventory dashboard that stopped our grain warehouse losses within four weeks. He understands real business economics, not just theoretical code.',
    projectTitle: 'AgriBusiness Inventory & Analytics'
  },
  {
    id: 't3',
    author: 'Mrs. F. Adebayo',
    role: 'Proprietress & Educator',
    company: 'Crown Excellence Schools',
    industry: 'Education',
    quote: 'The DelightPrep CBT testing system transformed our WAEC mock examinations. Our 300+ students sat for tests simultaneously without a single glitch or network hang. John Adeagbo is an extraordinary developer.',
    projectTitle: 'DelightPrep EdTech Platform'
  },
  {
    id: 't4',
    author: 'Tobi Daniels',
    role: 'Co-founder & Head of Product',
    company: 'PayFlex FinTech Labs',
    industry: 'FinTech',
    quote: 'John identified two critical authorization bypasses during our pre-launch security review that could have been disastrous. His penetration testing report was as thorough as top international cybersecurity firms.',
    projectTitle: 'Fintech Security Hardening'
  }
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'prog-1',
    title: 'Full-Stack Web Development Bootcamp',
    summary: 'From HTML/CSS fundamentals to production Next.js, Supabase, and real-world deployment on modern cloud platforms.',
    audience: 'Beginners, university students, and career switchers',
    duration: '8 Weeks (In-Person / Remote)',
    pricing: '₦120,000 / $150 per student',
    topics: ['Modern JavaScript & TypeScript', 'React component architecture', 'Tailwind CSS styling', 'Databases & PostgreSQL RLS', 'Authentication & Paystack Checkout', 'Live Project Deployment']
  },
  {
    id: 'prog-2',
    title: 'Vibe Coding & AI-Assisted Engineering Workshop',
    summary: 'Master AI-accelerated programming using Claude, Gemini, and modern agents to build full-scale software 5x faster with engineering discipline.',
    audience: 'Junior developers, founders, tech-curious professionals',
    duration: '2 Weeks Intensive (Weekends)',
    pricing: '₦65,000 / $80 per attendee',
    topics: ['Effective AI prompting for software architecture', 'Debugging LLM-generated code', 'System prompt engineering', 'API proxying & security hygiene', 'Building autonomous agent workflows']
  },
  {
    id: 'prog-3',
    title: 'Computer-Based Testing (CBT) & Digital Literacy for Schools',
    summary: 'Comprehensive training for school teachers and administrators on setting up, managing, and scoring CBT examinations.',
    audience: 'Secondary schools, tutorial centres, educational institutions',
    duration: '3 Days On-Site Workshop',
    pricing: '₦180,000 per institution (up to 20 staff)',
    topics: ['Question bank formatting & upload', 'Exam time configuration & anti-cheat monitoring', 'Candidate credential generation', 'Instant result analytics & parent SMS reporting']
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'building-zero-downtime-web-apps-in-nigeria',
    title: 'Architecting Web Applications for the Realities of the Nigerian Internet',
    summary: 'How to design low-bandwidth responsive web applications that survive intermittent 3G drops, mobile data constraints, and unpredictable latency spikes.',
    readTime: '6 min read',
    publishedAt: 'Oct 8, 2026',
    tags: ['Web Development', 'Performance', 'Nigeria Tech'],
    content: `When building software for the Nigerian market, testing exclusively on high-speed fiber Wi-Fi in an office creates a false sense of security. The overwhelming majority of your active users are browsing on Android smartphones over 3G or variable 4G mobile networks where data is purchased in megabytes.

Key architectural rules we enforce at Delight Tech Network:
1. Low-overhead payloads: Strip unused heavy icon packages and polyfills. Next.js automatic image optimization and modern AVIF/WebP formats slash initial page weight by up to 70%.
2. Optimistic UI states: Users must receive immediate visual acknowledgment upon interaction rather than staring at frozen buttons while waiting for an HTTP round trip.
3. Resilient offline session buffering: For critical workflows like examinations (DelightPrep) or financial payment confirmations, answers and state are cached in IndexedDB or localStorage so a transient network blackout never wipes candidate progress.

Shipping fast code is not merely a design preference; in emerging markets, performance is directly tied to retention and conversion.`
  },
  {
    id: 'art-2',
    slug: 'essential-security-hardening-for-african-startups',
    title: 'Practical Cybersecurity Hardening: What Nigerian Startups Must Implement Today',
    summary: 'A developer-first breakdown of Row-Level Security, OWASP vulnerabilities, API token hygiene, and compliance with the Nigeria Data Protection Act (NDPA 2023).',
    readTime: '8 min read',
    publishedAt: 'Sep 24, 2026',
    tags: ['Cybersecurity', 'NDPA', 'PostgreSQL'],
    content: `Security is often relegated to "something we will worry about after Series A". Unfortunately, automated bot scanners and credential stuffers do not wait for your startup to raise institutional capital.

Three urgent security remediations every Nigerian web platform should deploy:
1. Row-Level Security (RLS) on your database: Do not rely solely on your frontend or backend application code to restrict tenant access. In PostgreSQL and Supabase, enforcing RLS ensures that even if an API route has an edge-case bug, database queries physically cannot return rows belonging to another organization.
2. Rate-limiting public webhooks and auth endpoints: Public login and OTP verification endpoints should be throttled using Redis or edge middleware to eliminate automated SMS bombing and credential dictionary attacks.
3. NDPA 2023 audit readiness: Ensure clear user consent banners, encrypted sensitive PII at rest, and an explicit mechanism allowing users to request complete data deletion.`
  },
  {
    id: 'art-3',
    slug: 'leveraging-autonomous-ai-agents-for-sme-operations',
    title: 'Beyond Chatbots: How AI Agents Run Real Operations for Growing Businesses',
    summary: 'Moving past simple Q&A chat widgets to autonomous workflow pipelines that categorize inquiries, generate formal quotations, and sync CRM data automatically.',
    readTime: '5 min read',
    publishedAt: 'Sep 11, 2026',
    tags: ['AI Automation', 'Workflows', 'Business Growth'],
    content: `Most companies today have experimented with adding a simple chat bubble on their website. However, real operational leverage comes from multi-step autonomous pipelines.

In our production implementations at Delight Tech Network:
- Step 1: Inbound inquiry is classified by urgency, service line, and estimated project size.
- Step 2: The model transforms fragmented client requirements into a structured technical brief outlining objectives, recommended tech stack, and questions for clarification.
- Step 3: A draft quotation is pre-populated in the admin dashboard for human sign-off.

Notice the key safeguard: the AI prepares the work, but a human engineer verifies the quotation before it ever reaches the client. This maintains 100% human accountability while reducing response time from 36 hours to under 2 hours.`
  }
];

export const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'inq-101',
    kind: 'project',
    name: 'Adebayo Ogunlesi',
    email: 'a.ogunlesi@primecapng.com',
    company: 'PrimeCap Investments',
    phone: '+234 802 345 6789',
    details: {
      service: 'Web Apps & Fast Dashboards',
      description: 'We need an internal investment deal-flow tracker and client reporting dashboard for 40 high-net-worth investors with real-time portfolio returns.',
      budgetRange: '₦1,500,000 — ₦3,000,000',
      timeline: '4 weeks',
      preferredChannel: 'WhatsApp'
    },
    aiTags: {
      service: 'Web Apps',
      urgency: 'high',
      projectType: 'Fintech Portal'
    },
    generatedBrief: 'Build a secure multi-tenant investor reporting portal with PostgreSQL RLS, automated monthly PDF statement generation, and Paystack dividend audit logging.',
    status: 'new',
    createdAt: '2026-10-15T10:14:00Z'
  },
  {
    id: 'inq-102',
    kind: 'quotation',
    name: 'Dr. Sarah Jenkins',
    email: 'sarah.j@globaledu.org',
    company: 'Global Education Africa',
    phone: '+1 415 555 0192',
    details: {
      service: 'AI Engineering & Automation',
      description: 'Seeking an automated WhatsApp and web chatbot for 10,000 rural teachers to access lesson plan guidance and report school attendance.',
      budgetRange: '$2,000 — $5,000 USD',
      timeline: '6 weeks',
      preferredChannel: 'Email'
    },
    aiTags: {
      service: 'AI Engineering',
      urgency: 'high',
      projectType: 'AI Agent & WhatsApp'
    },
    generatedBrief: 'Develop a low-latency Claude-powered WhatsApp assistant with webhook integration, teacher registration, and weekly automated CSV summary sync.',
    status: 'in discussion',
    createdAt: '2026-10-14T15:20:00Z'
  },
  {
    id: 'inq-103',
    kind: 'hire',
    name: 'Marcus Vance',
    email: 'm.vance@techbridge.co.uk',
    company: 'TechBridge Ventures UK',
    details: {
      roleTitle: 'Senior Full-Stack & AI Engineer (Remote)',
      employmentType: 'Contract (6 months with extension)',
      startDate: 'November 2026',
      message: 'Impressed by your DelightPrep architecture and security background. We are building a B2B SaaS in London and would love to interview you for a remote lead role.'
    },
    aiTags: {
      service: 'SaaS and MVPs',
      urgency: 'high',
      projectType: 'Remote Developer Hire'
    },
    generatedBrief: 'Contract engineering role offering competitive USD/GBP compensation for UK venture. Review resume and availability for interview.',
    status: 'contacted',
    createdAt: '2026-10-13T09:00:00Z'
  }
];

export const INITIAL_QUOTATIONS: Quotation[] = [
  {
    id: 'quo-501',
    inquiryId: 'inq-101',
    clientName: 'Adebayo Ogunlesi',
    clientEmail: 'a.ogunlesi@primecapng.com',
    projectTitle: 'PrimeCap Internal Investment Deal-Flow Dashboard',
    scope: 'Next.js 14 client dashboard, PostgreSQL RLS security, multi-role auth, automated financial PDF generator, 30-day support',
    timeline: '4 Weeks',
    amount: 1850000,
    currency: 'NGN',
    validUntil: '2026-11-15',
    status: 'sent',
    sentAt: '2026-10-15T11:00:00Z'
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'b-901',
    typeId: 'free-discovery',
    typeName: 'Free Discovery Call',
    date: '2026-10-19',
    timeSlot: '10:00 AM',
    timezone: 'Africa/Lagos (WAT, UTC+1)',
    visitorName: 'Folake Adeleke',
    visitorEmail: 'folake@adelekegroup.ng',
    visitorCompany: 'Adeleke Group',
    notes: 'Planning to build a custom logistics tracking portal for our delivery fleet in Ibadan and Lagos.',
    meetingTool: 'Google Meet',
    meetingUrl: 'https://meet.google.com/xyz-dtn-meet',
    paymentStatus: 'free',
    status: 'confirmed',
    createdAt: '2026-10-15T08:30:00Z'
  }
];
