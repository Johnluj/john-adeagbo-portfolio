import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { TRANSLATIONS } from '../../data/translations';
import { PROJECTS, SERVICES, FOUNDER_INFO } from '../../data/mockData';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Calendar,
  User,
  Mail,
  CheckCircle2,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  showBookingCta?: boolean;
}

export const PortfolioAssistant: React.FC = () => {
  const { language, navigateTo, addInquiry } = useApp();
  const t = TRANSLATIONS[language].assistant;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Lead capture state
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize greeting on open or language switch
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          sender: 'ai',
          text: t.greeting,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          showBookingCta: true
        }
      ]);
    }
  }, [language, t.greeting]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      generateAiResponse(query);
    }, 700);
  };

  const generateAiResponse = (query: string) => {
    const q = query.toLowerCase();
    let reply = '';
    let showBooking = false;

    // Check price inquiry (PRD: Never quotes fixed prices, routes to booking/inquiry)
    if (q.includes('price') || q.includes('cost') || q.includes('how much') || q.includes('fee') || q.includes('rate') || q.includes('elo')) {
      reply =
        language === 'yo'
          ? "Iye owó iṣẹ́ kọ̀ọ̀kan dá lórí ẹ̀kúnrẹ́rẹ́ iṣẹ́ tí o fẹ́ kọ́. Ṣùgbọ́n, o lè gba àkókò ìpàdé ọ̀fẹ́ pẹ̀lú John tàbí kí o fi ẹ̀kúnrẹ́rẹ́ iṣẹ́ rẹ ránṣẹ́ láti gba iye owó tó dájú!"
          : language === 'fr'
          ? "Les tarifs dépendent du périmètre technique exact. John propose des forfaits fixes pour les audits simples et des devis sur mesure pour les architectures logicielles. Je vous invite à réserver un appel découverte ou à remplir le wizard de devis !"
          : "Pricing depends strictly on your project scope and architecture. John offers fixed packages for defined services and bespoke quotations for larger builds. To get an exact scope assessment, you can schedule a 15-minute discovery call or submit the project wizard!";
      showBooking = true;
    } else if (q.includes('stack') || q.includes('technology') || q.includes('language') || q.includes('next.js') || q.includes('react')) {
      reply =
        language === 'yo'
          ? "John ń lo TypeScript, Next.js 14, React, Tailwind CSS, Python, Claude, Gemini, PostgreSQL àti Supabase fún gbogbo àwọn iṣẹ́ wẹ́ẹ̀bù àti AI rẹ̀."
          : language === 'fr'
          ? "John développe principalement avec TypeScript, Next.js 14, React, Tailwind CSS, Python, PostgreSQL avec Supabase RLS, et orchestre des agents avec Claude 3.5 Sonnet et Gemini 1.5 Pro."
          : "John's core production stack includes TypeScript, Next.js 14 (App Router), React, Tailwind CSS, PostgreSQL with Supabase Row-Level Security, Python, and multi-agent AI pipelines using Claude 3.5 Sonnet and Gemini 1.5 Pro.";
    } else if (q.includes('delightprep') || q.includes('cbt') || q.includes('exam')) {
      reply =
        language === 'yo'
          ? "DelightPrep jẹ́ ohun-èlò CBT tí John kọ́ fún àwọn akẹ́kọ̀ọ́. Ó lè gba àwọn akẹ́kọ̀ọ́ tó lé ní ẹgbẹ̀rún méjì àti irínwó (2,400+) lẹ́ẹ̀kan náà láì sí ìdúró kọ̀mpútà!"
          : language === 'fr'
          ? "DelightPrep est une plateforme d'examens informatisés (CBT) conçue pour résister aux coupures réseau locales, gérant plus de 2 400 sessions d'examen simultanées avec calcul des scores en temps réel."
          : "DelightPrep is an EdTech computer-based testing platform engineered by John to handle 2,400+ simultaneous test sessions across Nigerian secondary schools with zero clock drift and low-bandwidth resilience.";
    } else if (q.includes('security') || q.includes('cyber') || q.includes('hack') || q.includes('audit')) {
      reply =
        language === 'yo'
          ? "John ń ṣe àyẹ̀wò ààbò cyber (OWASP Top 10), penetration testing, àti títọ́jú àwọn ìwé àṣẹ NDPA 2023 fún àwọn ilé-iṣẹ́ ní Nàìjíríà."
          : language === 'fr'
          ? "John réalise des tests d'intrusion (pentesting), des audits de vulnérabilités OWASP, le durcissement de bases de données avec PostgreSQL RLS et la mise en conformité NDPA 2023."
          : "John conducts comprehensive vulnerability audits, penetration tests, database Row-Level Security enforcement, and compliance reviews under the Nigeria Data Protection Act (NDPA 2023).";
    } else if (q.includes('book') || q.includes('call') || q.includes('meeting') || q.includes('schedule') || q.includes('ipade')) {
      reply =
        language === 'yo'
          ? "O lè yan àkókò tó rọrùn fún ẹ láti Ọjọ́ Ajé dé Ọjọ́ Ẹtì (8am - 5pm WAT) lórí Google Meet, Zoom tàbí WhatsApp call!"
          : language === 'fr'
          ? "Vous pouvez réserver directement un créneau du lundi au vendredi de 8h à 17h (heure WAT) via Google Meet, Zoom ou appel WhatsApp !"
          : "You can book directly on John's calendar between Monday and Friday, 8:00 AM – 5:00 PM WAT with Google Meet, Zoom, or WhatsApp call!";
      showBooking = true;
    } else {
      reply =
        language === 'yo'
          ? "Mo gbọ́ ọ̀rọ̀ rẹ! John Adeagbo ń kọ́ àwọn ohun-èlò wẹ́ẹ̀bù, AI àti ààbò kọ̀mpútà ní Delight Tech Network. Ṣé o fẹ́ kí a sọ̀rọ̀ tààrà lórí WhatsApp tàbí kí o gba àkókò ìpàdé?"
          : language === 'fr'
          ? "Merci pour votre message ! John Adeagbo est disponible pour vos projets web, d'automatisation IA et de cybersécurité. Souhaitez-vous planifier un appel ou discuter sur WhatsApp ?"
          : "Thank you for asking! John Adeagbo builds resilient web apps, autonomous AI pipelines, and hardened digital systems at Delight Tech Network. Would you like to schedule a 15-minute discovery call to discuss your project?";
      showBooking = true;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showBookingCta: showBooking
      }
    ]);
    setIsTyping(false);

    // If undecided, show lead form
    if (!leadCaptured && messages.length > 2) {
      setShowLeadForm(true);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName.trim() || !leadEmail.includes('@')) return;

    addInquiry({
      kind: 'chatbot',
      name: leadName,
      email: leadEmail,
      details: {
        chatHistory: messages.map((m) => `${m.sender}: ${m.text}`)
      },
      aiTags: {
        service: 'Web Apps',
        urgency: 'normal',
        projectType: 'AI Chat Lead'
      }
    });

    setLeadCaptured(true);
    setShowLeadForm(false);
    setMessages((prev) => [
      ...prev,
      {
        id: `lead-ack-${Date.now()}`,
        sender: 'ai',
        text: `Thank you, ${leadName}! I have recorded your details in John's inbox. He will follow up via ${leadEmail} within 24 business hours.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showBookingCta: true
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-5 right-5 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group px-4 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs rounded-full shadow-2xl flex items-center gap-2.5 transition-all cursor-pointer border border-blue-400/40"
            aria-label="Open AI Assistant"
          >
            <Sparkles className="w-4 h-4 text-blue-200 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Ask John&apos;s AI</span>
          </button>
        )}
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-50 w-[92vw] sm:w-[380px] max-h-[580px] h-[520px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                AI
              </div>
              <div>
                <h3 className="text-xs font-bold leading-tight">{t.title}</h3>
                <span className="text-[10px] text-blue-400">Delight Tech Network</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs bg-slate-50/50 dark:bg-slate-950/50">
            <div className="text-center">
              <span className="text-[10px] text-slate-400 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-800">
                {t.disclaimer}
              </span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p>{msg.text}</p>

                  {msg.showBookingCta && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-700 flex items-center gap-2">
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          navigateTo('book');
                        }}
                        className="px-2.5 py-1 text-[11px] font-bold rounded bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-1 cursor-pointer"
                      >
                        <Calendar className="w-3 h-3" />
                        <span>Book a Call</span>
                      </button>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          navigateTo('quote-wizard');
                        }}
                        className="px-2.5 py-1 text-[11px] font-semibold rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 cursor-pointer"
                      >
                        Request Quote
                      </button>
                    </div>
                  )}
                </div>
                <span className="text-[9px] text-slate-400 mt-0.5 px-1 font-mono">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1 text-slate-400 text-xs p-2 bg-white dark:bg-slate-800 rounded-xl max-w-[90px] border border-slate-200 dark:border-slate-800">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            {/* In-chat Lead Capture Form */}
            {showLeadForm && !leadCaptured && (
              <form
                onSubmit={handleLeadSubmit}
                className="p-3 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 rounded-xl space-y-2 text-xs"
              >
                <div className="font-bold text-blue-950 dark:text-blue-200">
                  Would you like John to email you directly?
                </div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  className="w-full p-2 bg-white dark:bg-slate-800 border rounded text-xs"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  className="w-full p-2 bg-white dark:bg-slate-800 border rounded text-xs"
                />
                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => setShowLeadForm(false)}
                    className="text-[10px] text-slate-400 hover:text-slate-600"
                  >
                    Skip
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1 bg-blue-600 text-white font-bold rounded text-xs"
                  >
                    Save & Notify John
                  </button>
                </div>
              </form>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="p-2 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex gap-1.5 overflow-x-auto text-[11px]">
            {t.quickPrompts.slice(0, 3).map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 whitespace-nowrap transition-colors cursor-pointer shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder={t.inputPlaceholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 p-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white rounded-lg transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
