import React from 'react';
import { useApp } from '../../context/AppContext';
import { SKILLS_DATA, FOUNDER_INFO } from '../../data/mockData';
import { ScrollReveal } from '../common/ScrollReveal';
import {
  Code2,
  ShieldCheck,
  Cpu,
  Layers,
  Award,
  Github,
  CheckCircle2,
  ExternalLink,
  Download
} from 'lucide-react';

export const SkillsView: React.FC = () => {
  const { navigateTo } = useApp();

  const certificates = [
    {
      title: 'OWASP Top 10 Web Application Vulnerabilities & Remediation',
      issuer: 'Cybersecurity Defense Institute',
      year: '2025',
      id: 'SEC-8821-CERT'
    },
    {
      title: 'Full-Stack Software Architecture & Next.js Systems',
      issuer: 'Modern Web Engineering Consortium',
      year: '2024',
      id: 'DEV-4109-ARCH'
    },
    {
      title: 'Multi-Agent LLM Orchestration & Prompt Engineering',
      issuer: 'Applied AI Institute',
      year: '2025',
      id: 'AI-9023-AGNT'
    },
    {
      title: 'Nigeria Data Protection Act (NDPA 2023) Compliance Specialist',
      issuer: 'Regulatory Tech Compliance Board',
      year: '2025',
      id: 'NDPA-7120-NIG'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-24">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <ScrollReveal direction="down">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Skills & Honest Competencies
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Transparent Skill Levels & Technical Stack
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Rated with honest qualitative labels rather than arbitrary percentage bars. Clear, candid evaluation builds higher client and employer trust.
          </p>
        </ScrollReveal>
      </div>

      {/* Honest Skill Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS_DATA.map((skill, idx) => (
          <ScrollReveal key={skill.name} direction="up" delay={0.06 * idx}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {skill.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>

                {/* Honest Qualitative Label (No percentage bar!) */}
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${
                    skill.level === 'Advanced'
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900'
                      : skill.level === 'Professional'
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {skill.level}
                </span>
              </div>

              {/* Technologies in this stack */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="text-[11px] font-semibold text-slate-500 mb-2">Technologies & Tools:</div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.stack.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Verified Certificates & Credentials */}
      <div className="space-y-6">
        <ScrollReveal direction="down">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Formal Credentials
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Certificates & Specialized Auditing Accreditations
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificates.map((cert, idx) => (
            <ScrollReveal key={cert.id} direction="up" delay={0.08 * idx}>
              <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h4>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {cert.issuer} · {cert.year}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    Verification ID: {cert.id}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Direct GitHub & CV Action Strip */}
      <ScrollReveal direction="up" delay={0.2}>
        <div className="p-6 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Want to inspect real commits and open-source contributions?
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Explore public repositories, architectural discussions, and code samples on GitHub.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={FOUNDER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 flex items-center gap-1.5 cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Profile</span>
            </a>

            <button
              onClick={() => navigateTo('resume')}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </button>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
};
