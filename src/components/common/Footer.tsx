import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FOUNDER_INFO } from '../../data/mockData';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  CheckCircle2,
  ArrowRight,
  Shield
} from 'lucide-react';
import { PageView } from '../../types';

export const Footer: React.FC = () => {
  const { navigateTo, addSubscriber } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    const success = addSubscriber(email);
    if (success) {
      setSubscribed(true);
      setError('');
      setEmail('');
    } else {
      setError('This email is already subscribed.');
    }
  };

  const navLinks: { label: string; page: PageView }[] = [
    { label: 'Featured Work', page: 'work' },
    { label: 'Engineering Services', page: 'services' },
    { label: 'Book a Consultation', page: 'book' },
    { label: 'Project Inquiry Wizard', page: 'quote-wizard' },
    { label: 'Hire Me (Employers)', page: 'hire-me' },
    { label: 'Skills & Stack', page: 'skills' },
    { label: 'Training & Workshops', page: 'training' },
    { label: 'Technical Articles', page: 'articles' },
    { label: 'Curriculum Vitae', page: 'resume' },
    { label: 'Admin CRM Portal', page: 'admin' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
                DTN
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">John Adeagbo</h3>
                <p className="text-xs text-blue-400 font-medium">Delight Tech Network</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              &ldquo;Lighting Through Technology&rdquo; — Delivering resilient web applications, autonomous AI workflows, and uncompromising cybersecurity audits for Nigerian businesses and international partners.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Heritage Mall, Cocoa House, Dugbe, Ibadan, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${FOUNDER_INFO.email}`} className="hover:text-white transition-colors">
                  {FOUNDER_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+234 903 807 0539 · +234 708 962 7177 (WhatsApp)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href={FOUNDER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/2347089627177?text=${encodeURIComponent('Hello John, I want to talk about a project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {navLinks.slice(0, 5).map((l) => (
                <li key={l.page}>
                  <button
                    onClick={() => navigateTo(l.page)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Capabilities</h4>
            <ul className="space-y-2 text-xs">
              {navLinks.slice(5).map((l) => (
                <li key={l.page}>
                  <button
                    onClick={() => navigateTo(l.page)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Newsletter & Security */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Engineering Notes
            </h4>
            <p className="text-xs text-slate-400">
              Bi-weekly technical articles on building resilient software, AI workflows, and cybersecurity for African markets.
            </p>

            {subscribed ? (
              <div className="p-3 rounded bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-xs flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                <span>Thank you! You are subscribed to John&apos;s technical briefing.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 text-xs bg-slate-800 border border-slate-700 rounded-l text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-r transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-[11px] text-rose-400">{error}</p>}
                <p className="text-[10px] text-slate-500">Zero spam. Unsubscribe anytime.</p>
              </form>
            )}

            <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
              <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>NDPA 2023 Compliant · WCAG 2.1 AA</span>
            </div>
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} John Adeagbo · Delight Tech Network. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Ibadan, Nigeria</span>
            <span>·</span>
            <button
              onClick={() => navigateTo('admin')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Admin CRM Login
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
