import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  PageView,
  Project,
  AppointmentType,
  Inquiry,
  Quotation,
  Booking,
  Subscriber
} from '../types';
import {
  INITIAL_INQUIRIES,
  INITIAL_QUOTATIONS,
  INITIAL_BOOKINGS,
  PROJECTS,
  APPOINTMENT_TYPES
} from '../data/mockData';
import { smoothScrollTo } from '../utils/smoothScroll';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  selectedAppointment: AppointmentType | null;
  setSelectedAppointment: (type: AppointmentType | null) => void;
  inquiries: Inquiry[];
  addInquiry: (inq: {
    kind: Inquiry['kind'];
    name: string;
    email: string;
    company?: string;
    phone?: string;
    details: Record<string, any>;
    aiTags?: Inquiry['aiTags'];
  }) => Inquiry;
  quotations: Quotation[];
  addQuotation: (quo: Omit<Quotation, 'id'>) => Quotation;
  updateQuotationStatus: (id: string, status: Quotation['status']) => void;
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => Booking;
  subscribers: Subscriber[];
  addSubscriber: (email: string) => boolean;
  scrollDirection: 'up' | 'down';
  scrollProgress: number;
  animationPreset: 'kinetic' | 'smooth' | 'snappy';
  setAnimationPreset: (preset: 'kinetic' | 'smooth' | 'snappy') => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  navigateTo: (page: PageView, projectOrType?: Project | AppointmentType) => void;
  scrollToSection: (sectionId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedAppointment, setSelectedAppointment] = useState<AppointmentType | null>(
    APPOINTMENT_TYPES[0]
  );
  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    const saved = localStorage.getItem('dtn_inquiries');
    return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
  });
  const [quotations, setQuotations] = useState<Quotation[]>(() => {
    const saved = localStorage.getItem('dtn_quotations');
    return saved ? JSON.parse(saved) : INITIAL_QUOTATIONS;
  });
  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem('dtn_bookings');
    return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
  });
  const [subscribers, setSubscribers] = useState<Subscriber[]>(() => {
    const saved = localStorage.getItem('dtn_subscribers');
    return saved
      ? JSON.parse(saved)
      : [
          { id: 'sub-1', email: 'techlead@venturesafrica.com', confirmedAt: '2026-10-14' },
          { id: 'sub-2', email: 'founder@ibadanstartup.ng', confirmedAt: '2026-10-15' }
        ];
  });

  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [animationPreset, setAnimationPreset] = useState<'kinetic' | 'smooth' | 'snappy'>('kinetic');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('dtn_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('dtn_quotations', JSON.stringify(quotations));
  }, [quotations]);

  useEffect(() => {
    localStorage.setItem('dtn_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('dtn_subscribers', JSON.stringify(subscribers));
  }, [subscribers]);

  // Scroll listener for direction & progress
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (currentScrollY / totalScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      if (Math.abs(currentScrollY - lastScrollY) > 6) {
        if (currentScrollY > lastScrollY && currentScrollY > 60) {
          setScrollDirection('down');
        } else if (currentScrollY < lastScrollY) {
          setScrollDirection('up');
        }
        lastScrollY = currentScrollY;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  const navigateTo = (page: PageView, projectOrType?: Project | AppointmentType) => {
    if (projectOrType) {
      if ('slug' in projectOrType) {
        setSelectedProject(projectOrType as Project);
      } else if ('durationMin' in projectOrType) {
        setSelectedAppointment(projectOrType as AppointmentType);
      }
    }
    setCurrentPage(page);
    smoothScrollTo(0, { duration: 600 });
  };

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        smoothScrollTo(sectionId, { duration: 800, offset: -70 });
      }, 150);
    } else {
      smoothScrollTo(sectionId, { duration: 800, offset: -70 });
    }
  };

  const addInquiry = (inq: {
    kind: Inquiry['kind'];
    name: string;
    email: string;
    company?: string;
    phone?: string;
    details: Record<string, any>;
    aiTags?: Inquiry['aiTags'];
  }): Inquiry => {
    const newInquiry: Inquiry = {
      id: `inq-${Date.now()}`,
      kind: inq.kind,
      name: inq.name,
      email: inq.email,
      company: inq.company || '',
      phone: inq.phone || '',
      details: inq.details,
      aiTags: inq.aiTags || {
        service: inq.details.service || 'Web Apps',
        urgency: 'high',
        projectType: inq.kind === 'hire' ? 'Recruiting' : 'Client Project'
      },
      generatedBrief: `Automated brief generated for ${inq.name}: Project scope encompasses ${inq.details.service || 'tailored software'}. Urgency: high priority response within 24h.`,
      status: 'new',
      createdAt: new Date().toISOString()
    };
    setInquiries((prev) => [newInquiry, ...prev]);
    return newInquiry;
  };

  const addQuotation = (quo: Omit<Quotation, 'id'>): Quotation => {
    const newQuo: Quotation = {
      ...quo,
      id: `quo-${Date.now()}`
    };
    setQuotations((prev) => [newQuo, ...prev]);
    return newQuo;
  };

  const updateQuotationStatus = (id: string, status: Quotation['status']) => {
    setQuotations((prev) =>
      prev.map((q) => (q.id === id ? { ...q, status } : q))
    );
  };

  const addBooking = (bookingData: Omit<Booking, 'id' | 'createdAt' | 'status'>): Booking => {
    const newBooking: Booking = {
      ...bookingData,
      id: `b-${Date.now()}`,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };
    setBookings((prev) => [newBooking, ...prev]);
    return newBooking;
  };

  const addSubscriber = (email: string): boolean => {
    if (subscribers.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
      return false;
    }
    const newSub: Subscriber = {
      id: `sub-${Date.now()}`,
      email,
      confirmedAt: new Date().toISOString().split('T')[0]
    };
    setSubscribers((prev) => [newSub, ...prev]);
    return true;
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        currentPage,
        setCurrentPage,
        selectedProject,
        setSelectedProject,
        selectedAppointment,
        setSelectedAppointment,
        inquiries,
        addInquiry,
        quotations,
        addQuotation,
        updateQuotationStatus,
        bookings,
        addBooking,
        subscribers,
        addSubscriber,
        scrollDirection,
        scrollProgress,
        animationPreset,
        setAnimationPreset,
        isDarkMode,
        toggleDarkMode,
        navigateTo,
        scrollToSection
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
