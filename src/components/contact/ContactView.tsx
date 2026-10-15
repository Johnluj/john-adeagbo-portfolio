import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FOUNDER_INFO } from '../../data/mockData';
import { ScrollReveal } from '../common/ScrollReveal';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  ShieldCheck
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { addInquiry, navigateTo } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('New Project Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (message.trim().length < 10) {
      setError('Please provide a short description of what you need (at least 10 characters).');
      return;
    }

    addInquiry({
      kind: 'contact',
      name,
      email,
      phone,
      details: {
        subject,
        message
      },
      aiTags: {
        service: 'Web Apps',
        urgency: 'normal',
        projectType: 'General Inquiry'
      }
    });

    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-24">
      
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <ScrollReveal direction="down">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Direct Communications
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect Directly with John Adeagbo
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Reach out regarding bespoke software builds, cybersecurity audits, corporate DTN partnerships, or speaking invitations. You will receive a personal response within 24 business hours.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="up">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Send a Direct Message
              </h2>

              {submitted ? (
                <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl space-y-3 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400">
                    Thank you, <strong>{name}</strong>. Your message is recorded in John&apos;s CRM inbox. Expect a reply to <strong>{email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="mt-2 px-4 py-2 text-xs font-semibold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 text-xs text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-lg">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Samuel Ajayi"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+234 800 000 0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Subject
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none"
                      >
                        <option>New Project Inquiry</option>
                        <option>Technical Consultation Request</option>
                        <option>Cybersecurity Audit</option>
                        <option>Delight Tech Network Partnership</option>
                        <option>Speaking or Training Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="How can John or Delight Tech Network help you succeed?..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to John</span>
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Channels & Office Card */}
        <div className="lg:col-span-5 space-y-4">
          <ScrollReveal direction="left" delay={0.15}>
            <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-5 text-xs">
              <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                Direct Channels & Coordinates
              </h3>

              {/* WhatsApp highlight button */}
              <a
                href={`https://wa.me/2347089627177?text=${encodeURIComponent('Hello John Adeagbo, I am reaching out from your portfolio website.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp (+234 708 962 7177)</span>
              </a>

              <div className="space-y-3 pt-2 text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Delight Tech Network Office</div>
                    <div className="text-slate-500 mt-0.5">Heritage Mall, Cocoa House, Dugbe, Ibadan, Oyo State, Nigeria</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Email Address</div>
                    <a href={`mailto:${FOUNDER_INFO.email}`} className="text-blue-600 hover:underline">
                      {FOUNDER_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Direct Telephone</div>
                    <div className="text-slate-500">{FOUNDER_INFO.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Operating Window</div>
                    <div className="text-slate-500">Monday – Friday: 8:00 AM – 5:00 PM WAT (West Africa Time)</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('book')}
                  className="w-full py-2.5 px-3 text-xs font-bold rounded-lg bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 text-blue-700 dark:text-blue-300 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Prefer a 15-Minute Video Call? Book Here</span>
                </button>
              </div>

            </div>
          </ScrollReveal>
        </div>

      </div>

    </div>
  );
};
