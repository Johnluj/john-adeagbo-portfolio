import React from 'react';
import { useApp } from '../../context/AppContext';
import { FOUNDER_INFO, PROJECTS, SERVICES, TESTIMONIALS } from '../../data/mockData';
import { TRANSLATIONS } from '../../data/translations';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { AnimatedCounter } from '../common/AnimatedCounter';
import {
  Calendar,
  FileText,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Code2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Award,
  CheckCircle2
} from 'lucide-react';
import { Project } from '../../types';

export const HomeView: React.FC = () => {
  const { language, navigateTo, setSelectedProject } = useApp();
  const t = TRANSLATIONS[language];

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      
      {/* 1. HERO SECTION (Split Screen with Portrait & Proof Strip) */}
      <section className="relative pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Typographic Column */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="down" delay={0.1}>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1.5 rounded-md border border-blue-100 dark:border-blue-900/60">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t.hero.kicker}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] text-balance">
                  {t.hero.titleStart}{' '}
                  <span className="text-blue-600 dark:text-blue-400 underline decoration-blue-200 dark:decoration-blue-900 underline-offset-4">
                    {t.hero.titleHighlight}
                  </span>{' '}
                  {t.hero.titleEnd}
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  {t.hero.subtitle}
                </p>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => navigateTo('book')}
                    className="px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{t.hero.bookCta}</span>
                  </button>

                  <button
                    onClick={() => navigateTo('quote-wizard')}
                    className="px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 active:scale-95 rounded-lg transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>{t.hero.quoteCta}</span>
                  </button>

                  <a
                    href={`https://wa.me/2347089627177?text=${encodeURIComponent('Hello John, I would like to discuss a project with Delight Tech Network.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-sm font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 border border-emerald-200 dark:border-emerald-800/60 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">{t.hero.whatsappCta}</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Trust Tagline */}
              <ScrollReveal direction="up" delay={0.45}>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Available for high-stakes projects & remote senior engineering roles · Mon–Fri 8am–5pm WAT</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Media Column: Founder Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <ScrollReveal direction="left" delay={0.25} className="w-full max-w-md">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
                    <img
                      src={FOUNDER_INFO.photo}
                      alt={FOUNDER_INFO.name}
                      referrerPolicy="no-referrer"
                      className="w-full aspect-square object-cover object-top hover:scale-102 transition-transform duration-500"
                    />
                    <div className="p-4 bg-white/95 dark:bg-slate-900/95 border-t border-slate-100 dark:border-slate-800 backdrop-blur flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          {FOUNDER_INFO.name}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Founder, Delight Tech Network
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                        Available Q4 2026
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Full-Width Proof Strip (KPIs) */}
          <ScrollReveal direction="up" delay={0.3} className="mt-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
                  <AnimatedCounter value={28} suffix="+" duration={1.8} />
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {t.hero.projectsShippedLabel}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                  <AnimatedCounter value={6} duration={1.4} />
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {t.hero.industriesLabel}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                  <AnimatedCounter value={4} suffix="+" duration={1.4} />
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {t.hero.yearsLabel}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono tabular-nums">
                  <AnimatedCounter value={100} suffix="%" duration={2.0} />
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {t.hero.securityRecordLabel}
                </div>
              </div>
            </div>

            {/* Smooth In-Page Section Quick Jump Bar */}
            <div className="flex items-center justify-center gap-2 pt-6 overflow-x-auto text-xs">
              <span className="text-slate-400 font-medium mr-1 text-[11px] uppercase tracking-wider hidden sm:inline">
                Jump To:
              </span>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('case-studies');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/60 hover:text-blue-600 font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                Featured Work ↓
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('services');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/60 hover:text-blue-600 font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                10 Services ↓
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('testimonials');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/60 hover:text-blue-600 font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                Client Proof ↓
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('cta');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/60 hover:text-blue-600 font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                Get Started ↓
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. FEATURED CASE STUDIES WITH STATUS BADGES & CODE EXPLORER */}
      <section id="case-studies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <ScrollReveal direction="right">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Verifiable Case Studies
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
                Engineered for High Concurrency & Resilient Security
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <button
              onClick={() => navigateTo('work')}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
            >
              <span>Explore all {PROJECTS.length} projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={0.15 * (idx + 1)}>
              <div className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                
                {/* Project Image Preview */}
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
                      {project.status}
                    </span>
                  </div>
                  {project.codeMode !== 'off' && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-600 text-white font-medium flex items-center gap-1 shadow-sm">
                        <Code2 className="w-3 h-3" />
                        <span>Code Available</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <span>{project.industry}</span>
                      <span>·</span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{project.client}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Tech Stack Preview */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600 dark:text-slate-400 mb-3">
                      {project.stack.slice(0, 3).map((st) => (
                        <span key={st} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                          {st}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="px-1.5 py-0.5 text-slate-400">+{project.stack.length - 3}</span>
                      )}
                    </div>

                    <button
                      onClick={() => navigateTo('work', project)}
                      className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-slate-50 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white text-slate-800 dark:text-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES OVERVIEW */}
      <section id="services" className="bg-slate-100/70 dark:bg-slate-900/40 py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal direction="down">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                End-to-End Capabilities
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
                {t.services.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
                {t.services.subtitle}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, idx) => (
              <ScrollReveal key={service.id} direction="up" delay={0.08 * (idx + 1)}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-sm">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                        {service.pricingModel}
                      </span>
                      {service.priceFromNgn && (
                        <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                          from ₦{service.priceFromNgn.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.summary}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                        Key Deliverables:
                      </div>
                      <ul className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
                        {service.deliverables.slice(0, 2).map((d) => (
                          <li key={d} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => navigateTo('services')}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Details & FAQs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => navigateTo('quote-wizard')}
                      className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.3} className="text-center mt-8">
            <button
              onClick={() => navigateTo('services')}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span>View all 10 specialized services including Web3, Branding & Training</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. VERIFIED TESTIMONIALS */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" className="text-center max-w-xl mx-auto mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Client Proof
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            Endorsed by Founders, Educators & Pastors
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <ScrollReveal key={t.id} direction="up" delay={0.1 * (idx + 1)}>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex flex-col justify-between h-full shadow-sm">
                <div className="space-y-3">
                  <div className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
                    {t.projectTitle}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{t.author}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. HIGH-CONVERSION CTA BAND */}
      <section id="cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="zoom" delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 sm:p-12 shadow-xl">
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="text-xs font-bold tracking-wider uppercase text-blue-200">
                Fast Turnaround · Mon–Fri 8am–5pm WAT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Ready to ship your next web app, AI system or MVP?
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Whether you need John personally as a lead engineer or Delight Tech Network as your technical delivery partner, we turn complex requirements into live, secure, monetizable software.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => navigateTo('book')}
                  className="px-5 py-3 text-xs sm:text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 active:scale-95 rounded-lg shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>Book 15-Min Discovery Call</span>
                </button>

                <button
                  onClick={() => navigateTo('quote-wizard')}
                  className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600/50 hover:bg-blue-600 border border-white/20 active:scale-95 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Use 5-Step Inquiry Wizard</span>
                </button>
              </div>
            </div>

            {/* Subtle background graphic */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 flex items-center justify-center pointer-events-none">
              <Code2 className="w-96 h-96 text-white" />
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
