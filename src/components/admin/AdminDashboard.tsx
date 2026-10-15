import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  FOUNDER_INFO,
  PROJECTS,
  SERVICES,
  SKILLS_DATA,
  TESTIMONIALS,
  TRAINING_PROGRAMS,
  APPOINTMENT_TYPES
} from '../../data/mockData';
import { ScrollReveal } from '../common/ScrollReveal';
import { AnimatedCounter } from '../common/AnimatedCounter';
import {
  LayoutDashboard,
  Inbox,
  Calendar,
  FileCheck2,
  FolderGit2,
  Briefcase,
  Layers,
  MessageSquareQuote,
  GraduationCap,
  Users,
  Settings,
  Sparkles,
  Download,
  Plus,
  CheckCircle2,
  Clock,
  AlertCircle,
  ExternalLink,
  Shield,
  Send,
  Eye
} from 'lucide-react';
import { Inquiry, Quotation, Booking } from '../../types';

export const AdminDashboard: React.FC = () => {
  const {
    inquiries,
    quotations,
    addQuotation,
    updateQuotationStatus,
    bookings,
    subscribers
  } = useApp();

  const [activeModule, setActiveModule] = useState<
    | 'overview'
    | 'inbox'
    | 'quotations'
    | 'appointments'
    | 'projects'
    | 'services'
    | 'skills'
    | 'testimonials'
    | 'training'
    | 'subscribers'
    | 'settings'
  >('overview');

  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(inquiries[0] || null);
  const [draftReply, setDraftReply] = useState<string>('');
  const [replySentSuccess, setReplySentSuccess] = useState<boolean>(false);

  // New Quotation Form modal state
  const [showQuoModal, setShowQuoModal] = useState<boolean>(false);
  const [quoClientName, setQuoClientName] = useState<string>('');
  const [quoClientEmail, setQuoClientEmail] = useState<string>('');
  const [quoProjectTitle, setQuoProjectTitle] = useState<string>('');
  const [quoScope, setQuoScope] = useState<string>('');
  const [quoTimeline, setQuoTimeline] = useState<string>('3 Weeks');
  const [quoAmount, setQuoAmount] = useState<number>(750000);
  const [quoCurrency, setQuoCurrency] = useState<'NGN' | 'USD'>('NGN');

  // Trigger AI Response Assistant for selected inquiry
  const handleGenerateAiReply = () => {
    if (!selectedInquiry) return;
    setDraftReply(
      `Hi ${selectedInquiry.name},\n\nThank you for reaching out to John Adeagbo & Delight Tech Network regarding your ${selectedInquiry.aiTags.service} project.\n\nI have reviewed your requirements: "${selectedInquiry.details.description || selectedInquiry.details.message || 'your scope'}". Our team can deliver this with production-grade architecture, low-latency performance, and strict security hardening.\n\nWould you have 15 minutes this week for a discovery call so we can finalize milestones?\n\nBest regards,\nJohn Adeagbo\nDelight Tech Network`
    );
  };

  const handleSendReply = () => {
    if (!draftReply.trim()) return;
    setReplySentSuccess(true);
    setTimeout(() => setReplySentSuccess(false), 3000);
  };

  const handleCreateQuotation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoClientName.trim() || !quoProjectTitle.trim()) return;

    addQuotation({
      clientName: quoClientName,
      clientEmail: quoClientEmail,
      projectTitle: quoProjectTitle,
      scope: quoScope,
      timeline: quoTimeline,
      amount: quoAmount,
      currency: quoCurrency,
      validUntil: '2026-11-30',
      status: 'sent',
      sentAt: new Date().toISOString()
    });

    setShowQuoModal(false);
    setQuoClientName('');
    setQuoClientEmail('');
    setQuoProjectTitle('');
    setQuoScope('');
  };

  // Export subscribers to CSV
  const exportSubscribersCSV = () => {
    const headers = 'ID,Email,ConfirmedAt\n';
    const rows = subscribers.map((s) => `${s.id},"${s.email}",${s.confirmedAt}`).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dtn-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-24">
      
      {/* Admin Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-slate-900 text-white rounded-2xl shadow-lg">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-600 text-white">
              ROLE: OWNER
            </span>
            <span className="text-xs text-slate-400">· Supabase RLS Protected</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            DTN Operations & CRM Dashboard
          </h1>
          <p className="text-xs text-slate-400">
            Authenticated as <strong>John Adeagbo</strong> (adeagbojohnluj@gmail.com)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowQuoModal(true)}
            className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-1.5 cursor-pointer shadow"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Quotation</span>
          </button>
        </div>
      </div>

      {/* Main CRM Layout: Nav Sidebar + Content Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Module Nav Pills (Sidebar on desktop) */}
        <div className="lg:col-span-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-sm space-y-1">
          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            CRM Modules
          </div>

          {[
            { id: 'overview', label: 'Overview & Funnel', icon: LayoutDashboard, badge: `${bookings.length} calls` },
            { id: 'inbox', label: 'Lead Inbox & AI Tags', icon: Inbox, badge: `${inquiries.length}` },
            { id: 'quotations', label: 'Formal Quotations', icon: FileCheck2, badge: `${quotations.length}` },
            { id: 'appointments', label: 'Bookings Calendar', icon: Calendar, badge: '9 types' },
            { id: 'projects', label: 'Projects Showcase', icon: FolderGit2, badge: `${PROJECTS.length}` },
            { id: 'services', label: 'Services & Pricing', icon: Briefcase, badge: '10 services' },
            { id: 'skills', label: 'Skills & Stack', icon: Layers, badge: '8 domains' },
            { id: 'testimonials', label: 'Testimonials', icon: MessageSquareQuote, badge: `${TESTIMONIALS.length}` },
            { id: 'training', label: 'Training Programs', icon: GraduationCap, badge: `${TRAINING_PROGRAMS.length}` },
            { id: 'subscribers', label: 'Newsletter Subscribers', icon: Users, badge: `${subscribers.length}` },
            { id: 'settings', label: 'Settings & Security', icon: Settings, badge: 'RBAC' }
          ].map((m) => {
            const Icon = m.icon;
            const isActive = activeModule === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActiveModule(m.id as any)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{m.label}</span>
                </div>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isActive
                      ? 'bg-blue-700 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {m.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Pane */}
        <div className="lg:col-span-9 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm min-h-[600px]">
          
          {/* MODULE 1: OVERVIEW & FUNNEL */}
          {activeModule === 'overview' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  Conversion & Funnel Overview
                </h2>
                <span className="text-xs font-mono text-slate-400">
                  Target: 15 calls & 25 inquiries/mo
                </span>
              </div>

              {/* KPI Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs text-slate-500 font-medium">Inquiries Captured</div>
                  <div className="text-2xl font-mono font-bold text-slate-900 dark:text-white">
                    <AnimatedCounter value={inquiries.length} duration={1.2} />
                  </div>
                  <div className="text-[10px] text-emerald-600 font-medium">
                    100% replied &lt; 24h
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs text-slate-500 font-medium">Booked Appointments</div>
                  <div className="text-2xl font-mono font-bold text-blue-600 dark:text-blue-400">
                    <AnimatedCounter value={bookings.length} duration={1.2} />
                  </div>
                  <div className="text-[10px] text-slate-500">Google Calendar Synced</div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs text-slate-500 font-medium">Quotations Sent</div>
                  <div className="text-2xl font-mono font-bold text-slate-900 dark:text-white">
                    <AnimatedCounter value={quotations.length} duration={1.2} />
                  </div>
                  <div className="text-[10px] text-emerald-600 font-medium">
                    ₦{quotations.reduce((sum, q) => sum + (q.currency === 'NGN' ? q.amount : 0), 0).toLocaleString()} pipeline
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs text-slate-500 font-medium">Subscribers</div>
                  <div className="text-2xl font-mono font-bold text-slate-900 dark:text-white">
                    <AnimatedCounter value={subscribers.length} duration={1.2} />
                  </div>
                  <div className="text-[10px] text-slate-500">Bi-weekly technical brief</div>
                </div>
              </div>

              {/* Recent Inbound Leads Strip */}
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Recent Inbound Leads
                </h3>
                <div className="space-y-2">
                  {inquiries.slice(0, 3).map((inq) => (
                    <div
                      key={inq.id}
                      onClick={() => {
                        setSelectedInquiry(inq);
                        setActiveModule('inbox');
                      }}
                      className="p-3 bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between cursor-pointer transition-colors text-xs"
                    >
                      <div className="space-y-0.5">
                        <div className="font-bold text-slate-900 dark:text-white">
                          {inq.name} · {inq.company || inq.email}
                        </div>
                        <div className="text-slate-500 text-[11px]">
                          {inq.aiTags.service} · {inq.kind}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                          {inq.status}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {new Date(inq.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MODULE 2: INBOX & AI TOOLS */}
          {activeModule === 'inbox' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* List */}
              <div className="md:col-span-5 space-y-2 border-r border-slate-100 dark:border-slate-800 pr-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Inquiries ({inquiries.length})
                </div>
                {inquiries.map((inq) => {
                  const isSelected = selectedInquiry?.id === inq.id;
                  return (
                    <div
                      key={inq.id}
                      onClick={() => {
                        setSelectedInquiry(inq);
                        setDraftReply('');
                      }}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/50'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 dark:text-white truncate">
                          {inq.name}
                        </span>
                        <span
                          className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded uppercase ${
                            inq.aiTags.urgency === 'high'
                              ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                          }`}
                        >
                          {inq.aiTags.urgency}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 truncate mt-0.5">
                        {inq.details.service || inq.details.roleTitle || inq.details.subject || inq.kind}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selected Detail & AI Tools */}
              <div className="md:col-span-7 space-y-4">
                {selectedInquiry ? (
                  <div className="space-y-4 text-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {selectedInquiry.name}
                        </h3>
                        <p className="text-slate-500">
                          {selectedInquiry.email} {selectedInquiry.phone && `· ${selectedInquiry.phone}`}
                        </p>
                      </div>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                        {selectedInquiry.kind.toUpperCase()}
                      </span>
                    </div>

                    {/* AI Classifier Tags */}
                    <div className="p-3 bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 rounded-xl space-y-1.5">
                      <div className="text-[11px] font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>AI Inquiry Classifier Tags</span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                        <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800">
                          Domain: {selectedInquiry.aiTags.service}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800">
                          Type: {selectedInquiry.aiTags.projectType}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800">
                          Urgency: {selectedInquiry.aiTags.urgency}
                        </span>
                      </div>
                    </div>

                    {/* Details Dump */}
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="font-bold text-slate-800 dark:text-slate-200">
                        Submitted Scope / Message:
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                        {selectedInquiry.details.description ||
                          selectedInquiry.details.message ||
                          JSON.stringify(selectedInquiry.details, null, 2)}
                      </p>
                      {selectedInquiry.details.budgetRange && (
                        <div className="pt-2 text-slate-500 font-mono text-[11px]">
                          Budget: {selectedInquiry.details.budgetRange} · Timeline:{' '}
                          {selectedInquiry.details.timeline}
                        </div>
                      )}
                    </div>

                    {/* AI Response Assistant */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 dark:text-white">
                          Reply by Email
                        </span>
                        <button
                          type="button"
                          onClick={handleGenerateAiReply}
                          className="px-2.5 py-1 text-[11px] font-semibold rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 flex items-center gap-1 cursor-pointer"
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>AI Draft Response</span>
                        </button>
                      </div>

                      <textarea
                        rows={4}
                        value={draftReply}
                        onChange={(e) => setDraftReply(e.target.value)}
                        placeholder="Click 'AI Draft Response' above or type custom reply to this client..."
                        className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />

                      {replySentSuccess && (
                        <div className="p-2 text-xs text-emerald-700 bg-emerald-50 rounded border border-emerald-200">
                          Reply dispatched to {selectedInquiry.email}!
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={handleSendReply}
                        className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-1.5 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Email Reply</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-slate-400 text-center py-12">Select an inquiry to view details.</div>
                )}
              </div>
            </div>
          )}

          {/* MODULE 3: FORMAL QUOTATIONS */}
          {activeModule === 'quotations' && (
            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    Issued Project Quotations
                  </h2>
                  <p className="text-slate-500">
                    Formal quotes issued directly to prospective clients with accept/decline tracking.
                  </p>
                </div>
                <button
                  onClick={() => setShowQuoModal(true)}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Draft Quotation</span>
                </button>
              </div>

              <div className="space-y-3">
                {quotations.map((quo) => (
                  <div
                    key={quo.id}
                    className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white text-sm">
                          {quo.projectTitle}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                            quo.status === 'accepted'
                              ? 'bg-emerald-100 text-emerald-800'
                              : quo.status === 'sent'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {quo.status}
                        </span>
                      </div>
                      <div className="text-slate-600 dark:text-slate-400">
                        Client: <strong>{quo.clientName}</strong> ({quo.clientEmail}) · Timeline: {quo.timeline}
                      </div>
                      <div className="text-[11px] text-slate-500 max-w-xl">
                        Scope: {quo.scope}
                      </div>
                    </div>

                    <div className="text-right shrink-0 space-y-2">
                      <div className="text-lg font-mono font-bold text-slate-900 dark:text-white">
                        {quo.currency === 'NGN' ? '₦' : '$'}
                        {quo.amount.toLocaleString()}
                      </div>

                      <div className="flex items-center gap-1 justify-end">
                        {quo.status === 'sent' && (
                          <>
                            <button
                              onClick={() => updateQuotationStatus(quo.id, 'accepted')}
                              className="px-2 py-1 text-[10px] font-semibold bg-emerald-600 text-white rounded hover:bg-emerald-700 cursor-pointer"
                            >
                              Simulate Accept
                            </button>
                            <button
                              onClick={() => updateQuotationStatus(quo.id, 'declined')}
                              className="px-2 py-1 text-[10px] font-semibold bg-rose-600 text-white rounded hover:bg-rose-700 cursor-pointer"
                            >
                              Decline
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 4: APPOINTMENTS & CALENDAR */}
          {activeModule === 'appointments' && (
            <div className="space-y-6 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    Booked Appointments ({bookings.length})
                  </h2>
                  <p className="text-slate-500">
                    Live schedule operating Mon–Fri 8:00 AM – 5:00 PM WAT.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white text-sm">
                          {b.visitorName}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold uppercase">
                          {b.status}
                        </span>
                      </div>
                      <div className="text-slate-600 dark:text-slate-400">
                        {b.typeName} · {b.visitorEmail}
                      </div>
                      <div className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                        {b.date} at {b.timeSlot} ({b.timezone}) via {b.meetingTool}
                      </div>
                      {b.notes && (
                        <div className="text-[11px] text-slate-500 italic">Note: &ldquo;{b.notes}&rdquo;</div>
                      )}
                    </div>

                    <div className="shrink-0">
                      {b.meetingUrl && (
                        <a
                          href={b.meetingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 text-xs font-semibold rounded bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-1 cursor-pointer"
                        >
                          <span>Open {b.meetingTool}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 5: PROJECTS MANAGER */}
          {activeModule === 'projects' && (
            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  Projects Catalog ({PROJECTS.length})
                </h2>
                <span className="text-slate-400">Code Explorer & Status Config</span>
              </div>

              <div className="space-y-2">
                {PROJECTS.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{proj.title}</div>
                      <div className="text-slate-500 text-[11px]">
                        Client: {proj.client} · Status: <strong>{proj.status}</strong> · Code Mode:{' '}
                        <strong>{proj.codeMode}</strong>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800">
                      {proj.industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 6: SERVICES & PRICING */}
          {activeModule === 'services' && (
            <div className="space-y-4 text-xs">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Active Services & Pricing Models
              </h2>
              <div className="space-y-2">
                {SERVICES.map((s) => (
                  <div
                    key={s.id}
                    className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{s.title}</div>
                      <div className="text-slate-500 text-[11px]">
                        Model: <strong>{s.pricingModel}</strong> · Likely Buyer: {s.likelyBuyer}
                      </div>
                    </div>
                    <div className="font-mono font-bold text-slate-900 dark:text-white">
                      {s.priceFromNgn ? `₦${s.priceFromNgn.toLocaleString()}` : 'Custom Quote'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 7: SKILLS */}
          {activeModule === 'skills' && (
            <div className="space-y-4 text-xs">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Honest Skill Rating Matrix
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SKILLS_DATA.map((sk) => (
                  <div
                    key={sk.name}
                    className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800"
                  >
                    <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                      <span>{sk.name}</span>
                      <span className="text-blue-600">{sk.level}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">{sk.stack.join(', ')}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 8: TESTIMONIALS */}
          {activeModule === 'testimonials' && (
            <div className="space-y-4 text-xs">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Client Testimonials & Endorsements
              </h2>
              <div className="space-y-3">
                {TESTIMONIALS.map((t) => (
                  <div
                    key={t.id}
                    className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2"
                  >
                    <p className="italic text-slate-700 dark:text-slate-300">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="font-bold text-slate-900 dark:text-white">
                      {t.author} · {t.role}, {t.company} ({t.industry})
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 9: TRAINING */}
          {activeModule === 'training' && (
            <div className="space-y-4 text-xs">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Training & Cohort Programs
              </h2>
              <div className="space-y-3">
                {TRAINING_PROGRAMS.map((p) => (
                  <div
                    key={p.id}
                    className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{p.title}</div>
                      <div className="text-slate-500">{p.audience} · {p.duration}</div>
                    </div>
                    <div className="font-mono font-bold text-slate-900 dark:text-white">
                      {p.pricing}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 10: SUBSCRIBERS */}
          {activeModule === 'subscribers' && (
            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    Newsletter Subscribers ({subscribers.length})
                  </h2>
                  <p className="text-slate-500">Opted in for bi-weekly engineering briefs.</p>
                </div>
                <button
                  onClick={exportSubscribersCSV}
                  className="px-3 py-1.5 bg-slate-900 text-white rounded-lg flex items-center gap-1.5 hover:bg-slate-800 cursor-pointer font-bold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>

              <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 uppercase font-mono text-[10px]">
                    <tr>
                      <th className="p-3">Subscriber Email</th>
                      <th className="p-3">Confirmed Date</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {subscribers.map((s) => (
                      <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{s.email}</td>
                        <td className="p-3 font-mono text-slate-500">{s.confirmedAt}</td>
                        <td className="p-3">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                            Active
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* MODULE 11: SETTINGS & ROLES */}
          {activeModule === 'settings' && (
            <div className="space-y-6 text-xs">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Website Settings, Security & RBAC Roles
              </h2>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>Role-Based Access Control (RBAC)</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Enforced at the database row-level. Currently registered roles:
                </p>
                <div className="space-y-1.5 font-mono">
                  <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span>adeagbojohnluj@gmail.com</span>
                    <span className="text-blue-600 font-bold">Owner (Full Admin)</span>
                  </div>
                  <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-slate-400">
                    <span>dtn-assistant@delighttechnetwork.com</span>
                    <span>Assistant (View / Draft only)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="font-bold text-slate-900 dark:text-white">
                  Payment Webhooks (Paystack & Stripe)
                </div>
                <div className="text-slate-500">
                  Global Require-Payment Switch: <strong className="text-amber-600">OFF (Free at launch per PRD)</strong>.
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Draft Quotation Modal */}
      {showQuoModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4 text-xs">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Draft & Issue Formal Quotation
            </h3>

            <form onSubmit={handleCreateQuotation} className="space-y-3">
              <div>
                <label className="block font-semibold mb-1">Client Full Name *</label>
                <input
                  type="text"
                  required
                  value={quoClientName}
                  onChange={(e) => setQuoClientName(e.target.value)}
                  placeholder="e.g. Adebayo Ogunlesi"
                  className="w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Client Email Address</label>
                <input
                  type="email"
                  value={quoClientEmail}
                  onChange={(e) => setQuoClientEmail(e.target.value)}
                  placeholder="client@company.com"
                  className="w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  value={quoProjectTitle}
                  onChange={(e) => setQuoProjectTitle(e.target.value)}
                  placeholder="e.g. EdTech Exam Portal & Analytics"
                  className="w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Deliverables & Scope</label>
                <textarea
                  rows={3}
                  value={quoScope}
                  onChange={(e) => setQuoScope(e.target.value)}
                  placeholder="Scope breakdown, deliverables, terms..."
                  className="w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Amount</label>
                  <input
                    type="number"
                    value={quoAmount}
                    onChange={(e) => setQuoAmount(Number(e.target.value))}
                    className="w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Currency</label>
                  <select
                    value={quoCurrency}
                    onChange={(e) => setQuoCurrency(e.target.value as any)}
                    className="w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded font-mono"
                  >
                    <option value="NGN">NGN (₦)</option>
                    <option value="USD">USD ($)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowQuoModal(false)}
                  className="px-4 py-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                  Issue Formal Quotation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
