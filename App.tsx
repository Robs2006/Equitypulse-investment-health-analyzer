
import React, { useState } from 'react';
import { InvestmentRecommender } from './components/InvestmentRecommender';
import { CompanyAnalyzer } from './components/CompanyAnalyzer';
import { TechnicalOverview } from './components/TechnicalOverview';
import { DashboardTab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DashboardTab>(DashboardTab.RECOMMENDATIONS);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 glass border-b border-slate-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-600 p-2 rounded-lg shadow-lg shadow-emerald-500/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-black text-white tracking-tight uppercase">FinEdge</h1>
            <p className="text-[10px] text-emerald-400 font-bold tracking-[0.2em] leading-none">HNI Wealth Intelligence</p>
          </div>
        </div>

        <div className="flex gap-1 bg-slate-800/50 p-1 rounded-xl border border-slate-700">
          <button
            onClick={() => setActiveTab(DashboardTab.RECOMMENDATIONS)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === DashboardTab.RECOMMENDATIONS ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            Picks
          </button>
          <button
            onClick={() => setActiveTab(DashboardTab.ANALYZER)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === DashboardTab.ANALYZER ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            Health Analyzer
          </button>
          <button
            onClick={() => setActiveTab(DashboardTab.TECH_SPECS)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === DashboardTab.TECH_SPECS ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            Tech Specs
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4 text-slate-400">
          <div className="text-right">
            <p className="text-xs font-bold text-white">Platinum Member</p>
            <p className="text-[10px]">Active Session</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-white font-bold">
            JD
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
        {activeTab === DashboardTab.RECOMMENDATIONS && <InvestmentRecommender />}
        {activeTab === DashboardTab.ANALYZER && <CompanyAnalyzer />}
        {activeTab === DashboardTab.TECH_SPECS && <TechnicalOverview />}
      </main>

      {/* Sticky Quick Actions Footer for HNI Users */}
      <footer className="fixed bottom-6 right-6 z-50 flex gap-2">
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 transition-transform hover:scale-110 flex items-center gap-2 group">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold text-sm whitespace-nowrap">Talk to Analyst</span>
        </button>
      </footer>
    </div>
  );
};

export default App;
