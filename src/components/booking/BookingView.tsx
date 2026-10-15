import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { APPOINTMENT_TYPES } from '../../data/mockData';
import { ScrollReveal } from '../common/ScrollReveal';
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  CheckCircle2,
  Globe,
  CreditCard,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { AppointmentType, MeetingTool } from '../../types';

export const BookingView: React.FC = () => {
  const { selectedAppointment, setSelectedAppointment, addBooking, navigateTo } = useApp();

  const [currentType, setCurrentType] = useState<AppointmentType>(
    selectedAppointment || APPOINTMENT_TYPES[0]
  );

  // Date selection state: next 14 days (excluding weekends)
  const availableDates = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  }).filter((d) => d.getDay() !== 0 && d.getDay() !== 6);

  const [selectedDate, setSelectedDate] = useState<string>(
    availableDates[0].toISOString().split('T')[0]
  );

  // Time slots Mon-Fri 8am-5pm WAT
  const timeSlots = [
    '08:30 AM', '09:15 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:15 PM', '04:00 PM'
  ];

  const [selectedSlot, setSelectedSlot] = useState<string>(timeSlots[1]);
  const [selectedTimezone, setSelectedTimezone] = useState<string>('WAT (West Africa Time, UTC+1)');
  const [meetingTool, setMeetingTool] = useState<MeetingTool>('Google Meet');
  const [visitorName, setVisitorName] = useState<string>('');
  const [visitorEmail, setVisitorEmail] = useState<string>('');
  const [visitorCompany, setVisitorCompany] = useState<string>('');
  const [whatsappNumber, setWhatsappNumber] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [paymentCurrency, setPaymentCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [paymentProcessing, setPaymentProcessing] = useState<boolean>(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState<string>('');
  const [error, setError] = useState<string>('');

  const timezones = [
    'WAT (West Africa Time, UTC+1 - Local)',
    'GMT / London (UTC+0)',
    'CET / Berlin, Paris (UTC+1)',
    'EST / New York, Toronto (UTC-5)',
    'PST / San Francisco (UTC-8)'
  ];

  const handleConfirm = () => {
    setError('');
    if (!visitorName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!visitorEmail.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (meetingTool === 'WhatsApp Call' && !whatsappNumber.trim()) {
      setError('Please enter your WhatsApp phone number.');
      return;
    }

    // Check if this appointment requires payment
    if (currentType.requirePayment && currentType.priceNgn > 0) {
      setPaymentProcessing(true);
      setTimeout(() => {
        finalizeBooking('paid');
        setPaymentProcessing(false);
      }, 1200);
    } else {
      finalizeBooking('free');
    }
  };

  const finalizeBooking = (paymentStatus: 'free' | 'paid') => {
    const meetUrl =
      meetingTool === 'Google Meet'
        ? `https://meet.google.com/dtn-${Math.random().toString(36).substring(7)}`
        : meetingTool === 'Zoom'
        ? `https://zoom.us/j/${Math.floor(1000000000 + Math.random() * 9000000000)}`
        : `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

    const newBooking = addBooking({
      typeId: currentType.id,
      typeName: currentType.name,
      date: selectedDate,
      timeSlot: selectedSlot,
      timezone: selectedTimezone,
      visitorName,
      visitorEmail,
      visitorCompany,
      notes,
      meetingTool,
      meetingUrl: meetUrl,
      whatsappNumber,
      paymentStatus,
      amountNgn: currentType.priceNgn,
      amountUsd: currentType.priceUsd
    });

    setConfirmedBookingId(newBooking.id);
    setBookingConfirmed(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <ScrollReveal direction="down">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Scheduling & Discovery Engine
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Schedule a Direct Video or Audio Session
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Synchronized with John Adeagbo&apos;s Google Calendar. Operating Monday through Friday, 8:00 AM – 5:00 PM WAT with automatic timezone adjustment.
          </p>
        </ScrollReveal>
      </div>

      {bookingConfirmed ? (
        <ScrollReveal direction="zoom">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-xl max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded">
                Ref: {confirmedBookingId} · Confirmed
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                You&apos;re Booked with John Adeagbo!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                A calendar invitation with your <strong>{meetingTool}</strong> link has been dispatched to <strong>{visitorEmail}</strong>.
              </p>
            </div>

            {/* Appointment Summary Box */}
            <div className="text-left p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700/60 pb-2">
                <span className="text-slate-500">Session Type:</span>
                <span className="font-bold text-slate-900 dark:text-white">{currentType.name}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700/60 pb-2">
                <span className="text-slate-500">Date & Slot:</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {selectedDate} at {selectedSlot}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700/60 pb-2">
                <span className="text-slate-500">Timezone:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedTimezone}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Meeting Channel:</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">{meetingTool}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setBookingConfirmed(false);
                  setVisitorName('');
                  setVisitorEmail('');
                  setNotes('');
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 rounded-lg cursor-pointer"
              >
                Book Another Time
              </button>
              <button
                onClick={() => navigateTo('home')}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer"
              >
                Return to Portfolio
              </button>
            </div>
          </div>
        </ScrollReveal>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Pick Appointment Type (9 Types) */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="right">
              <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    1. Select Consultation Type
                  </h3>
                  <span className="text-[11px] text-slate-400 font-mono">9 options</span>
                </div>

                <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
                  {APPOINTMENT_TYPES.map((type) => {
                    const isSelected = currentType.id === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setCurrentType(type)}
                        className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/40 shadow-sm'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 dark:text-white">
                            {type.name}
                          </span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                            {type.durationMin}m
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                          {type.bestFor}
                        </p>

                        <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                          <span className="text-slate-400">Fee:</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200 font-mono">
                            {type.priceNgn === 0 ? 'Free' : `₦${type.priceNgn.toLocaleString()} / $${type.priceUsd}`}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Calendar, Time Slots & Details Form */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
                
                {/* Timezone Selector */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span>Timezone:</span>
                  </div>
                  <select
                    value={selectedTimezone}
                    onChange={(e) => setSelectedTimezone(e.target.value)}
                    className="text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 text-slate-800 dark:text-slate-200 focus:outline-none"
                  >
                    {timezones.map((tz) => (
                      <option key={tz} value={tz}>
                        {tz}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Select Date (Horizontal Scroll Carousel) */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    2. Choose Date (Monday – Friday)
                  </label>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {availableDates.map((dateObj) => {
                      const dateStr = dateObj.toISOString().split('T')[0];
                      const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
                      const dayNum = dateObj.getDate();
                      const isSelected = selectedDate === dateStr;

                      return (
                        <button
                          key={dateStr}
                          type="button"
                          onClick={() => setSelectedDate(dateStr)}
                          className={`flex-1 min-w-[70px] p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-sm'
                              : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          <div className="text-[10px] uppercase font-semibold opacity-80">{dayName}</div>
                          <div className="text-base font-extrabold">{dayNum}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Select Time Slot */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    3. Select Time Slot
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-2.5 text-xs rounded-lg border text-center font-mono font-medium transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-sm'
                              : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Contact Details & Meeting Tool */}
                <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    4. Details & Preferred Tool
                  </label>

                  {error && (
                    <div className="p-3 text-xs text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-lg">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      className="p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    <input
                      type="email"
                      required
                      placeholder="Work Email Address *"
                      value={visitorEmail}
                      onChange={(e) => setVisitorEmail(e.target.value)}
                      className="p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    <input
                      type="text"
                      placeholder="Company or Organization (Optional)"
                      value={visitorCompany}
                      onChange={(e) => setVisitorCompany(e.target.value)}
                      className="p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    {/* Meeting tool selector */}
                    <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      {(['Google Meet', 'Zoom', 'WhatsApp Call'] as MeetingTool[]).map((tool) => (
                        <button
                          key={tool}
                          type="button"
                          onClick={() => setMeetingTool(tool)}
                          className={`flex-1 py-1.5 text-[11px] font-semibold rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                            meetingTool === tool
                              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                              : 'text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {tool}
                        </button>
                      ))}
                    </div>
                  </div>

                  {meetingTool === 'WhatsApp Call' && (
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Phone Number with country code (+234...) *"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  )}

                  <textarea
                    rows={2}
                    placeholder="Short agenda or project summary (optional)..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />

                  {/* Payment Switch Note (PRD: Launches free by default, require-payment switch configurable) */}
                  {currentType.requirePayment && currentType.priceNgn > 0 && (
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl space-y-2 text-xs">
                      <div className="flex items-center justify-between font-bold text-amber-900 dark:text-amber-200">
                        <span>Paid Consultation (Simulation Mode)</span>
                        <span className="font-mono">₦{currentType.priceNgn.toLocaleString()} / ${currentType.priceUsd}</span>
                      </div>
                      <p className="text-[11px] text-amber-700 dark:text-amber-400">
                        Paystack (Naira) & Stripe (USD) gateway test integration. Slot is held for 15 minutes upon confirmation.
                      </p>
                    </div>
                  )}

                  {/* Submission Button */}
                  <button
                    type="button"
                    disabled={paymentProcessing}
                    onClick={handleConfirm}
                    className="w-full py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 disabled:opacity-60 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {paymentProcessing ? (
                      <span>Verifying slot hold & securing invitation...</span>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Confirm Appointment ({currentType.name})</span>
                      </>
                    )}
                  </button>

                  <div className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>No double bookings guaranteed · Reschedule link included in invite</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      )}

    </div>
  );
};
