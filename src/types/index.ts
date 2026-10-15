export type Language = 'en' | 'yo' | 'fr';

export type PageView =
  | 'home'
  | 'work'
  | 'services'
  | 'quote-wizard'
  | 'book'
  | 'about'
  | 'skills'
  | 'hire-me'
  | 'training'
  | 'articles'
  | 'resume'
  | 'contact'
  | 'admin';

export type ProjectStatus = 'Live' | 'In development' | 'Prototype' | 'Planned';
export type CodeMode = 'off' | 'github' | 'inline';

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  stack: string[];
  status: ProjectStatus;
  problem: string;
  role: string;
  result: string;
  liveUrl?: string;
  repoUrl?: string;
  codeMode: CodeMode;
  codeSnippet?: string;
  image: string;
  featured: boolean;
}

export type PricingModel = 'Fixed Package' | 'Starting From' | 'Custom Quotation';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  pricingModel: PricingModel;
  priceFromNgn?: number;
  priceFromUsd?: number;
  likelyBuyer: string;
  deliverables: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
}

export interface AppointmentType {
  id: string;
  name: string;
  durationMin: number;
  priceNgn: number;
  priceUsd: number;
  requirePayment: boolean;
  bestFor: string;
  description: string;
}

export type MeetingTool = 'Google Meet' | 'Zoom' | 'WhatsApp Call';

export interface Booking {
  id: string;
  typeId: string;
  typeName: string;
  date: string;
  timeSlot: string;
  timezone: string;
  visitorName: string;
  visitorEmail: string;
  visitorCompany?: string;
  notes?: string;
  meetingTool: MeetingTool;
  meetingUrl?: string;
  whatsappNumber?: string;
  paymentStatus: 'free' | 'paid' | 'pending';
  amountNgn?: number;
  amountUsd?: number;
  status: 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface Inquiry {
  id: string;
  kind: 'project' | 'quotation' | 'hire' | 'training' | 'speaking' | 'contact' | 'chatbot';
  name: string;
  email: string;
  company?: string;
  phone?: string;
  details: Record<string, any>;
  aiTags: {
    service: string;
    urgency: 'high' | 'medium' | 'normal';
    projectType: string;
  };
  generatedBrief?: string;
  status: 'new' | 'contacted' | 'in discussion' | 'won' | 'lost';
  notes?: string;
  createdAt: string;
}

export interface Quotation {
  id: string;
  inquiryId?: string;
  clientName: string;
  clientEmail: string;
  projectTitle: string;
  scope: string;
  timeline: string;
  amount: number;
  currency: 'NGN' | 'USD';
  validUntil: string;
  status: 'draft' | 'sent' | 'accepted' | 'declined';
  sentAt?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  projectTitle: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  summary: string;
  audience: string;
  duration: string;
  pricing: string;
  topics: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
}

export interface Subscriber {
  id: string;
  email: string;
  confirmedAt: string;
}
