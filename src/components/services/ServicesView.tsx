import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SERVICES } from '../../data/mockData';
import { ScrollReveal } from '../common/ScrollReveal';
import {
  CheckCircle2,
  Calendar,
  FileText,
  ChevronDown,
  ArrowRight,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react';
import { ServiceItem } from '../../types';

export const ServicesView: React.FC = () => {
  const { navigateTo } = useApp();
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-24">
      
      {/* Header Banner */}
      <div className="max-w-3xl space-y-4">
        <ScrollReveal direction="down">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Services & Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Engineering, AI & Security Delivery
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Every service is backed by direct code production, rigorous security principles, and clear delivery timelines. Choose between fixed packages, starting-from scopes, or tailored custom quotations.
          </p>
        </ScrollReveal>
      </div>

      {/* Services List with Detailed Breakdown */}
      <div className="space-y-12">
        {SERVICES.map((service, idx) => (
          <ScrollReveal key={service.id} direction="up" delay={0.06 * (idx % 4)}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      {service.pricingModel}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Ideal for: {service.likelyBuyer}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* Pricing Display & Direct CTAs */}
                <div className="lg:text-right shrink-0 space-y-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 font-medium">Pricing Structure</div>
                  {service.priceFromNgn ? (
                    <div>
                      <div className="text-xl font-mono font-bold text-slate-900 dark:text-white">
                        ₦{service.priceFromNgn.toLocaleString()}
                      </div>
                      <div className="text-xs font-mono text-slate-500">
                        approx. ${service.priceFromUsd} USD
                      </div>
                    </div>
                  ) : (
                    <div className="text-base font-bold text-slate-900 dark:text-white">
                      Scope-Based Quote
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-2 pt-2">
                    <button
                      onClick={() => navigateTo('book')}
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Consultation</span>
                    </button>
                    <button
                      onClick={() => navigateTo('quote-wizard')}
                      className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Request Quotation</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Grid: Deliverables, 5-Step Process & FAQs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                
                {/* Deliverables */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Included Deliverables</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Delivery Process */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Execution Process</span>
                  </h3>
                  <ol className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                    {service.process.map((step, sIdx) => (
                      <li key={step} className="flex items-start gap-2">
                        <span className="font-mono text-slate-400 font-bold">{sIdx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Frequently Asked Questions */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Service FAQs</span>
                  </h3>
                  <div className="space-y-2">
                    {service.faqs.map((faq, fIdx) => {
                      const faqKey = `${service.id}-${fIdx}`;
                      const isExpanded = expandedFaq === faqKey;
                      return (
                        <div
                          key={fIdx}
                          className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => toggleFaq(faqKey)}
                            className="w-full p-2.5 text-left text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-between gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                                isExpanded ? 'rotate-180 text-blue-600' : 'text-slate-400'
                              }`}
                            />
                          </button>
                          {isExpanded && (
                            <div className="p-2.5 pt-0 text-xs text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-900/50 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>

    </div>
  );
};
