import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TRANSLATIONS } from '../../data/translations';
import { FOUNDER_INFO } from '../../data/mockData';
import {
  MessageCircle,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Sparkles,
  ArrowUp,
  ArrowDown,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { Language, PageView } from '../../types';

export const Header: React.FC = () => {
  const {
    language,
    setLanguage,
    currentPage,
    navigateTo,
    scrollProgress,
    scrollDirection,
    animationPreset,
    setAnimationPreset,
    isDarkMode,
    toggleDarkMode
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const t = TRANSLATIONS[language];

  const primaryNavItems: { key: PageView; label: string }[] = [
    { key: 'work', label: t.nav.work },
    { key: 'services', label: t.nav.services },
    { key: 'book', label: t.nav.book },
    { key: 'about', label: t.nav.about },
    { key: 'contact', label: t.nav.contact }
  ];

  const secondaryNavItems: { key: PageView; label: string }[] = [
    { key: 'skills', label: t.nav.skills },
    { key: 'training', label: t.nav.training },
    { key: 'articles', label: t.nav.articles },
    { key: 'resume', label: t.nav.resume },
    { key: 'hire-me', label: t.nav.hireMe },
    { key: 'quote-wizard', label: 'Inquiry Wizard' },
    { key: 'admin', label: t.nav.admin }
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'yo', label: 'Yorùbá' },
    { code: 'fr', label: 'Français' }
  ];

  return (
    <>
      {/* Top Scroll Indicator Line */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 z-50 overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Kinetic Scroll HUD */}
      <div
        className={`fixed top-14 right-4 z-40 transition-all duration-300 pointer-events-none hidden lg:flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-md border shadow-sm backdrop-blur-md ${
          scrollProgress > 3
            ? 'opacity-100 translate-y-0 bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
            : 'opacity-0 -translate-y-2'
        }`}
      >
        {scrollDirection === 'down' ? (
          <ArrowDown className="w-3.5 h-3.5 text-blue-600 animate-bounce" />
        ) : (
          <ArrowUp className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
        )}
        <span className="tabular-nums">{Math.round(scrollProgress)}%</span>
        <span className="text-slate-400">·</span>
        <span className="capitalize">{scrollDirection}</span>
      </div>

      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text wordmark */}
          <button
            onClick={() => navigateTo('home')}
            className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          >
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap group-hover:text-blue-600 transition-colors">
              John Adeagbo
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              · Delight Tech Network
            </span>
          </button>

          {/* Zone 2: 4-5 concise single-line nav links + More dropdown */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {primaryNavItems.map((item) => (
              <button
                key={item.key}
                onClick={() => navigateTo(item.key)}
                className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
                  currentPage === item.key
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.label}
                {currentPage === item.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            ))}

            {/* More Menu Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                onBlur={() => setTimeout(() => setMoreDropdownOpen(false), 200)}
                className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer whitespace-nowrap py-1"
              >
                <span>More</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800 py-1.5 z-50">
                  {secondaryNavItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => {
                        navigateTo(item.key);
                        setMoreDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs transition-colors cursor-pointer flex items-center justify-between ${
                        currentPage === item.key
                          ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.key === 'admin' && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
                          CRM
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: 1 Primary Action + Quick Utilities */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                onBlur={() => setTimeout(() => setLangDropdownOpen(false), 200)}
                className="px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
                title="Switch Language"
              >
                <span>{language}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-slate-900 rounded-md shadow-lg border border-slate-200 dark:border-slate-800 py-1 z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        language === l.code
                          ? 'font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/40'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>{l.label}</span>
                      <span className="uppercase text-[10px] text-slate-400">{l.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Animation Intensity Toggle (Scroll preset) */}
            <button
              onClick={() => {
                const next = animationPreset === 'kinetic' ? 'smooth' : animationPreset === 'smooth' ? 'snappy' : 'kinetic';
                setAnimationPreset(next);
              }}
              className="hidden xl:flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
              title="Animation Transition Preset"
            >
              <Sparkles className="w-3 h-3 text-blue-500" />
              <span className="capitalize">{animationPreset}</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* WhatsApp Direct Action */}
            <a
              href={`https://wa.me/2347089627177?text=${encodeURIComponent('Hello John Adeagbo, I would like to inquire about a project through Delight Tech Network.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-lg hover:bg-emerald-100 transition-colors cursor-pointer"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Action CTA: Book a call */}
            <button
              onClick={() => navigateTo('book')}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-lg transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.book}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 focus-visible:outline-none cursor-pointer"
              aria-label="Toggle mobile navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              {[...primaryNavItems, ...secondaryNavItems].map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    navigateTo(item.key);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-md transition-colors cursor-pointer ${
                    currentPage === item.key
                      ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Language:</span>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-2 py-1 text-xs uppercase font-semibold rounded cursor-pointer ${
                      language === l.code
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {l.code}
                  </button>
                ))}
              </div>

              <a
                href={`https://wa.me/2347089627177?text=${encodeURIComponent('Hello John Adeagbo, I saw your portfolio and want to connect.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-600 flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>+234 708 962 7177</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
