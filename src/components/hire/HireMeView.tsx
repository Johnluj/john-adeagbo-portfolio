import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FOUNDER_INFO } from '../../data/mockData';
import { ScrollReveal } from '../common/ScrollReveal';
import {
  Briefcase,
  CheckCircle2,
  Clock,
  Download,
  Send,
  Calendar,
  Globe,
  ShieldCheck
} from 'lucide-react';

export const HireMeView: React.FC = () => {
  const { addInquiry, navigateTo } = useApp();

  const [roleTitle, setRoleTitle] = useState('');
  const [company, setCompany] = useState('');
  const [employmentType, setEmploymentType] = useState('Full-Time (Remote)');
  const [locationType, setLocationType] = useState('Worldwide Remote');
  const [startDate, setStartDate] = useState('Immediately / Q4 2026');
  const [jobPostUrl, setJobPostUrl] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!roleTitle.trim() || !company.trim() || !contactName.trim()) {
      setError('Please fill in your name, company, and role title.');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid work email.');
      return;
    }

    addInquiry({
      kind: 'hire',
      name: contactName,
      email: email,
      company: company,
      details: {
        roleTitle,
        employmentType,
        locationType,
        startDate,
        jobPostUrl,
        message
      },
      aiTags: {
        service: 'SaaS and MVPs',
        urgency: 'high',
        projectType: 'Engineering Hire'
      }
    });

    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <ScrollReveal direction="down">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            For Employers & Tech Recruiters
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hire John Adeagbo for Senior & Lead Roles
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Specializing in Full-Stack TypeScript/Next.js systems, autonomous AI agent pipelines, and web security engineering. 24-business-hour reply guaranteed.
          </p>
        </ScrollReveal>
      </div>

      {submitted ? (
        <ScrollReveal direction="zoom">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-xl max-w-lg mx-auto">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Application Received!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Thank you, <strong>{contactName}</strong> at <strong>{company}</strong>. John will review the role specifics and respond via <strong>{email}</strong> within 24 business hours.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => navigateTo('resume')}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV PDF</span>
              </button>
              <button
                onClick={() => navigateTo('book')}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg cursor-pointer"
              >
                Schedule Career Call
              </button>
            </div>
          </div>
        </ScrollReveal>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="up">
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5"
              >
                {error && (
                  <div className="p-3 text-xs text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-lg">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                      Role Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Senior Full-Stack Engineer / AI Engineer"
                      value={roleTitle}
                      onChange={(e) => setRoleTitle(e.target.value)}
                      className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Stripe, Paystack, Vercel partner"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                      Employment Type
                    </label>
                    <select
                      value={employmentType}
                      onChange={(e) => setEmploymentType(e.target.value)}
                      className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none"
                    >
                      <option>Full-Time (Remote)</option>
                      <option>Contract (3–6 Months)</option>
                      <option>Contract (Long-term / 12 Months)</option>
                      <option>Part-Time / Technical Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                      Earliest Desired Start Date
                    </label>
                    <input
                      type="text"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      placeholder="e.g. Immediately / November 2026"
                      className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                      Your Name & Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan, VP of Engineering"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    Job Description / LinkedIn Job Post Link
                  </label>
                  <input
                    type="url"
                    placeholder="https://company.lever.co/jobs/... or https://linkedin.com/jobs/..."
                    value={jobPostUrl}
                    onChange={(e) => setJobPostUrl(e.target.value)}
                    className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    Message / Highlights of the Opportunity
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell John a bit about the team, tech stack, and primary technical challenges you are tackling..."
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
                  <span>Send Recruitment Inquiry</span>
                </button>
              </form>
            </ScrollReveal>
          </div>

          {/* Quick Info Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <ScrollReveal direction="left" delay={0.15}>
              <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 text-xs">
                <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Candidate Snapshot
                </h3>

                <div className="space-y-3 text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Based in West Africa (WAT / UTC+1). Seamless overlap with UK/Europe and US East Coast.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Guaranteed first reply within 24 business hours.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Clean track record across 28+ shipped client and institutional software projects.</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => navigateTo('resume')}
                    className="w-full py-2.5 px-3 text-xs font-bold rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 text-slate-800 dark:text-slate-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-blue-600" />
                    <span>View Full Interactive CV</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      )}

    </div>
  );
};
