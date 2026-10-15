import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { PROJECTS } from '../../data/mockData';
import { ScrollReveal } from '../common/ScrollReveal';
import { CaseStudyModal } from './CaseStudyModal';
import {
  Code2,
  ExternalLink,
  ArrowRight,
  Filter,
  Search,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { Project, ProjectStatus } from '../../types';

export const WorkView: React.FC = () => {
  const { selectedProject, setSelectedProject, navigateTo } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Web Apps',
    'SaaS and MVPs',
    'AI Engineering & Automation',
    'Cybersecurity',
    'Data Analysis',
    'Branding'
  ];

  const statuses = ['All', 'Live', 'In development', 'Prototype'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        project.services.some((s) => s.toLowerCase().includes(selectedCategory.toLowerCase()));

      const matchesStatus =
        selectedStatus === 'All' || project.status.toLowerCase() === selectedStatus.toLowerCase();

      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.stack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [selectedCategory, selectedStatus, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <ScrollReveal direction="down">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Portfolio & Systems Showcase
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Vetted Projects, Real Code & Proven Outgrowth
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Every project represents production software built for client operational success. Inspect live links, architecture, or inspect source code modules via the Code Explorer.
          </p>
        </ScrollReveal>
      </div>

      {/* Interactive Filter Bar */}
      <ScrollReveal direction="up" delay={0.1}>
        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm space-y-4">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by stack (Next.js, Python), client, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Status Segmented Buttons */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-x-auto">
              {statuses.map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    selectedStatus === st
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills / Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider mr-2 shrink-0">
              Service:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            No projects match the selected filter criteria. Try clearing the search or category filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedStatus('All');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={0.06 * (idx % 3)}>
              <div className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
                
                {/* Media Container */}
                <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Status Indicator */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded backdrop-blur-md border ${
                        project.status === 'Live'
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60'
                          : project.status === 'In development'
                          ? 'bg-amber-950/80 text-amber-300 border-amber-700/60'
                          : 'bg-slate-900/80 text-slate-300 border-slate-700/60'
                      }`}
                    >
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

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <span>{project.industry}</span>
                      <span>·</span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {project.client}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="px-1.5 py-0.5 text-slate-400">+{project.stack.length - 4}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 py-2 px-3 text-xs font-semibold rounded-lg bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-600 hover:text-white text-blue-700 dark:text-blue-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Case Study & Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* Case Study Modal Popup */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
};
