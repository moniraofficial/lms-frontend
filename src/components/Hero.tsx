'use client';


import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50/60 via-teal-100/30 to-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          

          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            

            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-teal-100 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 tracking-wide">
                Learn • Grow • Achieve
              </span>
            </div>


            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Grow your skills with <br className="hidden sm:inline" />
              <span className="text-teal-700">our Online Courses</span>
            </h1>


            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Build your knowledge with high-quality courses from industry experts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
    
              <Link
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-amber-600 transition-all group text-base"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

  
              <button
                onClick={() => alert('Video player modal coming soon!')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 bg-white border border-slate-200 text-slate-800 font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm text-base"
              >
                <div className="w-8 h-8 rounded-full bg-teal-900 text-white flex items-center justify-center shadow-sm">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>

          </div>

         
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
          
              <div className="absolute inset-0 bg-teal-200/40 rounded-3xl filter blur-2xl -z-10 transform scale-90"></div>

        
              <div className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-teal-100/60 shadow-xl shadow-teal-900/5 flex flex-col items-center text-center space-y-4">
                
   
                <div className="w-full py-8 bg-gradient-to-b from-teal-50 to-slate-100/50 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden border border-teal-100/40">
                  

                  <div className="text-6xl sm:text-7xl mb-3 select-none">🎓</div>
                  

                  <div className="w-3/4 h-16 bg-slate-800 rounded-t-xl border-4 border-slate-900 flex items-center justify-center shadow-md relative">
                    <div className="w-4 h-4 rounded-full bg-teal-500 flex items-center justify-center text-white text-[10px]">▶</div>
                  </div>
                  <div className="w-5/6 h-2 bg-slate-300 rounded-b-md shadow-inner"></div>

                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-slate-800 text-lg">Interactive Learning Hub</h3>
                  <p className="text-xs text-slate-500">Access video lectures & structured course content anytime.</p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}