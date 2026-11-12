'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          

          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
   
              <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                DataPollex <span className="text-teal-600 font-extrabold">LMS</span>
              </span>
            </Link>
          </div>


          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="#courses" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">
              Courses
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

   
          <div className="flex items-center gap-4">
     
            <button 
              aria-label="Search"
              className="p-2.5 text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-full transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>


            <Link 
              href="/admin/login" 
              className="px-5 py-2.5 text-slate-700 hover:text-teal-600 font-medium border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-sm"
            >
              Login
            </Link>


            <Link 
              href="/admin/register" 
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-xl shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-amber-600 transition-all text-sm"
            >
              Register
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}