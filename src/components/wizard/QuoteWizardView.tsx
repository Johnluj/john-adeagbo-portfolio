import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SERVICES } from '../../data/mockData';
import { ScrollReveal } from '../common/ScrollReveal';
import {
  CheckCircle2,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Send,
  MessageCircle,
  FileText
} from 'lucide-react';

export const QuoteWizardView: React.FC = () => {
  const { addInquiry, navigateTo } = useApp();

  const [step, setStep] = useState<number>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(['Web Apps & Fast Dashboards']);
  const [description, setDescription] = useState<string>('');
  const [fileLink, setFileLink] = useState<string>('');
  const [budgetRange, setBudgetRange] = useState<string>('₦500,000 — ₦1,500,000 (Standard Project)');
  const [timeline, setTimeline] = useState<string>('2 to 4 Weeks');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [preferredChannel, setPreferredChannel] = useState<'WhatsApp' | 'Email' | 'Phone Call' | 'Video Meeting'>('WhatsApp');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [generatedBrief, setGeneratedBrief] = useState<string>('');
  const [error, setError] = useState<string>('');

  const budgetOptions = [
    'Under ₦350,000 / $450 (Small Audit / Fixed Package)',
    '₦500,000 — ₦1,500,000 (Standard Web App / System)',
    '₦1,500,000 — ₦3,500,000 (Full SaaS MVP / Enterprise Pipeline)',
    '₦3,500,000+ / $5,000+ USD (Complex Scaled Architecture)',
    'Undecided / Need Technical Consultation First'
  ];

  const timelineOptions = [
    'Urgent (Under 2 Weeks)',
    '2 to 4 Weeks (Standard Sprint)',
    '1 to 2 Months (Phased Release)',
    'Flexible / Planning Phase'
  ];

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== title));
      }
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleNext = () => {
    setError('');
    if (step === 1 && selectedServices.length === 0) {
      setError('Please select at least one service category.');
      return;
    }
    if (step === 2 && description.trim().length < 15) {
      setError('Please describe your project or requirements in a bit more detail (at least 15 characters).');
      return;
    }
    if (step === 4) {
      if (!fullName.trim()) {
        setError('Please enter your name.');
        return;
      }
      if (!email.includes('@')) {
        setError('Please enter a valid email address.');
        return;
      }
      handleSubmit();
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = () => {
    const brief = `Structured brief for ${fullName}: Needs ${selectedServices.join(', ')}. Scope: "${description}". Budget: ${budgetRange}. Target timeline: ${timeline}. Response channel: ${preferredChannel}.`;
    setGeneratedBrief(brief);

    addInquiry({
      kind: 'quotation',
      name: fullName,
      email: email,
      company: company,
      phone: phone,
      details: {
        services: selectedServices,
        description,
        fileLink,
        budgetRange,
        timeline,
        preferredChannel
      },
      aiTags: {
        service: selectedServices[0] || 'Web Apps',
        urgency: timeline.includes('Urgent') ? 'high' : 'normal',
        projectType: selectedServices.some(s => s.includes('SaaS') || s.includes('MVP')) ? 'SaaS MVP' : 'Custom Build'
      }
    });

    setIsSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-24">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <ScrollReveal direction="down">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Project Inquiry Wizard
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Scope Your Project in Under 2 Minutes
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Tell us about your project. John Adeagbo will review your brief and issue a formal quotation or schedule a planning call within 24 business hours.
          </p>
        </ScrollReveal>
      </div>

      {isSubmitted ? (
        <ScrollReveal direction="zoom">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-10 shadow-lg text-center space-y-6">
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Inquiry Received & Brief Generated!
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                Thank you, <strong className="text-slate-800 dark:text-slate-200">{fullName}</strong>. A copy has been saved directly to John Adeagbo&apos;s CRM dashboard.
              </p>
            </div>

            {/* Generated Brief Box */}
            <div className="text-left p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>AI Pre-Processed Project Brief:</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
                {generatedBrief}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => navigateTo('book')}
                className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Discovery Call Now</span>
              </button>
              <button
                onClick={() => navigateTo('home')}
                className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Return to Portfolio
              </button>
            </div>
          </div>
        </ScrollReveal>
      ) : (
        <ScrollReveal direction="up">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Step Progress Bar */}
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pb-2 border-b border-slate-100 dark:border-slate-800">
              <span>Step {step} of 4</span>
              <span className="text-blue-600 dark:text-blue-400 font-mono">
                {step === 1 && 'Select Services'}
                {step === 2 && 'Project Description'}
                {step === 3 && 'Budget & Timeline'}
                {step === 4 && 'Contact Information'}
              </span>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 text-xs text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 rounded-lg">
                {error}
              </div>
            )}

            {/* STEP 1: Services Multiple Choice */}
            {step === 1 && (
              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-900 dark:text-white">
                  1. Which service(s) do you require?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((s) => {
                    const isSelected = selectedServices.includes(s.title);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggleService(s.title)}
                        className={`p-3 text-left text-xs rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-950 dark:text-blue-200 font-semibold'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span>{s.title}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: Description & Optional File Link */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-900 dark:text-white mb-1">
                    2. Describe your project and goals
                  </label>
                  <p className="text-xs text-slate-500 mb-2">
                    What are you building? Who will use it? What is the main problem you want solved?
                  </p>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="We need a web application to streamline student examination registrations with automated Paystack fee collection..."
                    className="w-full p-3 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Optional Figma, PRD, or Document Link (Google Drive / Notion)
                  </label>
                  <input
                    type="url"
                    value={fileLink}
                    onChange={(e) => setFileLink(e.target.value)}
                    placeholder="https://www.figma.com/file/... or https://docs.google.com/..."
                    className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            )}

            {/* STEP 3: Budget Range & Timeline */}
            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                    3. Estimated Budget Range
                  </label>
                  <div className="space-y-2">
                    {budgetOptions.map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                          budgetRange === opt
                            ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-950 dark:text-blue-200 font-semibold'
                            : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={opt}
                          checked={budgetRange === opt}
                          onChange={(e) => setBudgetRange(e.target.value)}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                    Target Completion Timeline
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {timelineOptions.map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-2 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                          timeline === opt
                            ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-950 dark:text-blue-200 font-semibold'
                            : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeline"
                          value={opt}
                          checked={timeline === opt}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: Contact Details & Channel */}
            {step === 4 && (
              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-900 dark:text-white">
                  4. Your Contact Details & Preferred Communication
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Segun Oladipo"
                      className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="segun@company.ng"
                      className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Lagos Tech Hub"
                      className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                      className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Preferred Response Channel
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['WhatsApp', 'Email', 'Phone Call', 'Video Meeting'] as const).map((ch) => (
                      <button
                        key={ch}
                        type="button"
                        onClick={() => setPreferredChannel(ch)}
                        className={`p-2 text-xs rounded-lg border text-center transition-all cursor-pointer ${
                          preferredChannel === ch
                            ? 'bg-blue-600 text-white font-semibold border-blue-600'
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>{step === 4 ? 'Submit Project Brief' : 'Next Step'}</span>
                {step === 4 ? <Send className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>

          </div>
        </ScrollReveal>
      )}

    </div>
  );
};
