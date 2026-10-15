import React from 'react';
import { useApp } from '../../context/AppContext';
import { FOUNDER_INFO, EXPERIENCE_TIMELINE } from '../../data/mockData';
import { ScrollReveal } from '../common/ScrollReveal';
import {
  GraduationCap,
  Briefcase,
  Award,
  Globe,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Code
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-24">
      
      {/* Header & Bio Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <ScrollReveal direction="down">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Founder & Systems Engineer
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Engineering Resilient Technology for Nigeria and Beyond
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              John Adeagbo is a software developer, AI engineer, and cybersecurity practitioner based in Ibadan, Nigeria. As the founder of <strong>Delight Tech Network (DTN)</strong> and <strong>Delight Media Studio</strong>, he bridges the gap between ambitious product design and robust, production-grade engineering.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently in his final year at Nigeria’s premier institution, the <strong>University of Ibadan (Class of 2027)</strong>, John merges computer science theory with relentless pragmatic shipping. Whether building exam software for hundreds of secondary school students or hardening micro-lending portals against cyber exploits, his code is built to perform under constraints.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => navigateTo('book')}
                className="px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Discovery Call</span>
              </button>
              <button
                onClick={() => navigateTo('resume')}
                className="px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                View Curriculum Vitae
              </button>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <ScrollReveal direction="left" delay={0.2} className="w-full max-w-sm">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
              <img
                src={FOUNDER_INFO.photo}
                alt={FOUNDER_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full aspect-square object-cover object-top"
              />
              <div className="p-4 bg-white/95 dark:bg-slate-900/95 border-t border-slate-100 dark:border-slate-800 space-y-1">
                <div className="text-sm font-bold text-slate-900 dark:text-white">John Adeagbo</div>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {FOUNDER_INFO.company} · &ldquo;{FOUNDER_INFO.motto}&rdquo;
                </div>
                <div className="text-[11px] text-slate-500 flex items-center gap-1 pt-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>Cocoa House, Dugbe, Ibadan, Nigeria</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* The DTN Ecosystem */}
      <ScrollReveal direction="up" delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-2xl bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Primary Enterprise
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Delight Tech Network (DTN)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Motto: <em>&ldquo;Lighting Through Technology&rdquo;</em>. DTN operates as the technical vehicle delivering bespoke software solutions, cloud migrations, AI automation pipelines, and digital infrastructure for Nigerian institutions and international businesses.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Creative Division
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Delight Media Studio
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              The design and branding arm powering corporate identity systems, vector brand toolkits, high-conversion UI/UX mockups in Figma, and Corporate Affairs Commission (CAC) and TIN registration assistance for new Nigerian founders.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Experience & Education Timeline */}
      <div className="space-y-8">
        <ScrollReveal direction="down">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Track Record & Education
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Professional Experience & Academic Rigor
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {EXPERIENCE_TIMELINE.map((item, idx) => (
            <ScrollReveal key={item.role} direction="up" delay={0.1 * idx}>
              <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </div>
                  <div className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {item.org} · {item.location}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md shrink-0 self-start">
                  {item.period}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Languages & Working Style */}
      <ScrollReveal direction="up" delay={0.2}>
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Spoken Languages & Remote Work Readiness
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg space-y-1">
              <div className="font-bold text-slate-900 dark:text-white">English</div>
              <div className="text-slate-500">Native / Full Professional Proficiency</div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg space-y-1">
              <div className="font-bold text-slate-900 dark:text-white">Yorùbá</div>
              <div className="text-slate-500">Native / Fluent Speaker</div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg space-y-1">
              <div className="font-bold text-slate-900 dark:text-white">French</div>
              <div className="text-slate-500">Conversational / Working Knowledge</div>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
};
