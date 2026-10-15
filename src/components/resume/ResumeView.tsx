import React from 'react';
import { FOUNDER_INFO, SKILLS_DATA, EXPERIENCE_TIMELINE } from '../../data/mockData';
import { ScrollReveal } from '../common/ScrollReveal';
import {
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Award,
  GraduationCap,
  Briefcase,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ResumeView: React.FC = () => {
  const { navigateTo } = useApp();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 pb-24">
      
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Curriculum Vitae
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            John Adeagbo — Professional Resume
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>
          <button
            onClick={() => navigateTo('hire-me')}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 cursor-pointer"
          >
            Hire Me
          </button>
        </div>
      </div>

      {/* CV Paper Container */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-12 shadow-sm space-y-10 text-slate-800 dark:text-slate-200 print:border-none print:shadow-none print:p-0">
        
        {/* Header Block */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {FOUNDER_INFO.name}
              </h2>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {FOUNDER_INFO.title}
              </p>
            </div>
            <div className="text-xs text-slate-500 font-mono text-left sm:text-right">
              Delight Tech Network (DTN)
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 dark:text-slate-400 pt-1">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>Ibadan, Nigeria (WAT / UTC+1)</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span>{FOUNDER_INFO.email}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-blue-500" />
              <span>{FOUNDER_INFO.phone}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Github className="w-3.5 h-3.5 text-blue-500" />
              <span>github.com/adeagbojohn</span>
            </span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <span>Executive Profile</span>
            <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Software Developer, AI Engineer, and Cybersecurity Professional with 4+ years of hands-on delivery across full-stack TypeScript/Next.js architectures, LLM multi-agent workflows, and database security hardening. Founder of Delight Tech Network. Proven track record deploying fault-tolerant web applications for thousands of concurrent users in low-bandwidth environments.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <span>Professional Experience</span>
            <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          </h3>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  Founder & Principal Systems Engineer
                </span>
                <span className="font-mono text-slate-500">2023 — Present · Ibadan, Nigeria</span>
              </div>
              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                Delight Tech Network (DTN)
              </div>
              <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1 pt-1">
                <li>Architected and delivered 28+ custom web applications, SaaS MVPs, and automated workflows.</li>
                <li>Designed and deployed DelightPrep, a high-concurrency CBT exam simulation platform with zero-drift client timers and offline state caching for 2,400+ simultaneous test sessions.</li>
                <li>Engineered autonomous AI lead processing pipelines reducing client response time from 48 hours to under 2 hours.</li>
                <li>Conducted white-box and black-box penetration tests, remediating OWASP Top 10 vulnerabilities across Nigerian SME client applications.</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  Founder & Creative Lead
                </span>
                <span className="font-mono text-slate-500">2022 — Present · Ibadan, Nigeria</span>
              </div>
              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                Delight Media Studio
              </div>
              <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1 pt-1">
                <li>Designed brand identities, Figma design systems, and marketing materials for 35+ growing businesses.</li>
                <li>Assisted startups with corporate compliance, CAC registration filings, and digital asset packaging.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <span>Education</span>
            <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          </h3>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
            <div>
              <div className="font-bold text-sm text-slate-900 dark:text-white">
                University of Ibadan (UI)
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Bachelor of Science Candidate (Final Year, Class of 2027)
              </div>
            </div>
            <span className="font-mono text-slate-500 mt-1 sm:mt-0">Expected Graduation: 2027</span>
          </div>
        </div>

        {/* Technical Competencies Matrix */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <span>Skills & Honest Competencies</span>
            <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg">
              <span className="font-bold text-slate-900 dark:text-white">Full-Stack Web (Advanced):</span>
              <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                TypeScript, Next.js 14 (App Router), React, Tailwind CSS, PostgreSQL, Supabase RLS, Node.js, REST APIs.
              </p>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg">
              <span className="font-bold text-slate-900 dark:text-white">AI Automation (Advanced):</span>
              <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                Claude 3.5 Sonnet, Gemini 1.5 Pro, LangChain, RAG Pipelines, Autonomous Multi-Agent Workflows, OCR Parsing.
              </p>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg">
              <span className="font-bold text-slate-900 dark:text-white">Cybersecurity (Advanced):</span>
              <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                OWASP Top 10 Hardening, Penetration Testing, Burp Suite, Network Topology Review, NDPA 2023 Compliance.
              </p>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg">
              <span className="font-bold text-slate-900 dark:text-white">Payment & Operations (Professional):</span>
              <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                Paystack (NGN), Stripe (USD), Figma Prototyping, Technical Documentation, Executive Coordination.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
