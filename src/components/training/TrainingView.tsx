import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TRAINING_PROGRAMS } from '../../data/mockData';
import { ScrollReveal } from '../common/ScrollReveal';
import {
  GraduationCap,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Mic,
  ArrowRight,
  Send
} from 'lucide-react';

export const TrainingView: React.FC = () => {
  const { addInquiry, navigateTo } = useApp();
  const [selectedProgram, setSelectedProgram] = useState<string>(TRAINING_PROGRAMS[0].title);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [audienceSize, setAudienceSize] = useState('10 – 30 Attendees');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.includes('@')) return;

    addInquiry({
      kind: 'training',
      name,
      email,
      company: org,
      details: {
        program: selectedProgram,
        audienceSize
      },
      aiTags: {
        service: 'Training & Speaking',
        urgency: 'normal',
        projectType: 'Workshop Inquiry'
      }
    });

    setSubmitted(true);
  };

  const speakingTopics = [
    {
      title: 'Architecting for Intermittent Connectivity: Lessons from Building in Nigeria',
      type: 'Keynote & Technical Deep-Dive',
      idealFor: 'Developer conferences, tech summits, university symposiums'
    },
    {
      title: 'Demystifying Autonomous AI Agents: Practical Automation for African SMEs',
      type: 'Executive Masterclass & Interactive Demo',
      idealFor: 'Business chambers, startup accelerators, leadership retreats'
    },
    {
      title: 'Practical Cybersecurity & NDPA 2023 Compliance for Emerging Tech Companies',
      type: 'Technical Workshop',
      idealFor: 'Fintech incubators, developer meetups, student hackathons'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-24">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <ScrollReveal direction="down">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Education, Workshops & Speaking
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hands-on Tech Training & Keynote Engagements
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Delivering high-energy coding bootcamps, AI automation workshops, and CBT school digitalization programs across Nigeria and virtual international stages.
          </p>
        </ScrollReveal>
      </div>

      {/* Structured Programs */}
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRAINING_PROGRAMS.map((prog, idx) => (
            <ScrollReveal key={prog.id} direction="up" delay={0.08 * idx}>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between h-full shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">
                    {prog.duration}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {prog.summary}
                  </p>

                  <div className="space-y-1.5 pt-2 text-xs">
                    <div className="text-slate-500 font-medium flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>{prog.audience}</span>
                    </div>
                    <div className="font-mono font-bold text-slate-900 dark:text-white pt-1">
                      {prog.pricing}
                    </div>
                  </div>

                  {/* Topics list */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
                    <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                      Curriculum Highlights:
                    </div>
                    <ul className="space-y-1 text-[11px] text-slate-500">
                      {prog.topics.slice(0, 4).map((t) => (
                        <li key={t} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => {
                      setSelectedProgram(prog.title);
                      const el = document.getElementById('inquiry-box');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-600 hover:text-white text-blue-700 dark:text-blue-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Inquire for Cohort</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Speaking Topics */}
      <div className="space-y-6">
        <ScrollReveal direction="down">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
            <Mic className="w-4 h-4" />
            <span>Speaking Engagements & Keynotes</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Keynote Topics for Summits & Tech Events
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {speakingTopics.map((topic, idx) => (
            <ScrollReveal key={topic.title} direction="up" delay={0.06 * idx}>
              <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2">
                <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase">
                  {topic.type}
                </span>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                  {topic.title}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Ideal for: {topic.idealFor}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Training / Speaking Inquiry Form Box */}
      <div id="inquiry-box" className="pt-6">
        <ScrollReveal direction="up">
          <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Book a Training Cohort or Speaking Engagement
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Let us know your event or school requirements. John will confirm availability and custom curriculum design within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Thank you! Your inquiry for <strong>{selectedProgram}</strong> has been logged. John will reach out via email shortly.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Select Program or Speaking Topic
                  </label>
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full p-2.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none"
                  >
                    {TRAINING_PROGRAMS.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                    {speakingTopics.map((st) => (
                      <option key={st.title} value={st.title}>
                        Keynote: {st.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Expected Audience Size
                  </label>
                  <select
                    value={audienceSize}
                    onChange={(e) => setAudienceSize(e.target.value)}
                    className="w-full p-2.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option>Under 10 Attendees (Small Team)</option>
                    <option>10 – 30 Attendees (Cohort)</option>
                    <option>30 – 100 Attendees (School / Department)</option>
                    <option>100+ Attendees (Conference Keynote)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@school.edu.ng or you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Training / Speaking Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>

    </div>
  );
};
