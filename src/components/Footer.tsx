'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-teal-50/50 pt-16 border-t border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ফুটারের মূল গ্রিড সেকশন */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          
          {/* লোগো এবং সংক্ষিপ্ত বিবরণ */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-teal-600 text-white p-2 rounded-xl font-bold text-xl">
                📚
              </div>
              <span className="text-xl font-bold text-gray-900">DataPollex LMS</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Learn at your own pace, build new skills, and achieve your goals with our online courses.
            </p>
            
            {/* সোশ্যাল মিডিয়া আইকন */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">f</a>
              <a href="#" className="w-9 h-9 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">▶</a>
              <a href="#" className="w-9 h-9 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">in</a>
              <a href="#" className="w-9 h-9 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">💬</a>
            </div>
          </div>

          {/* কুইক লিংকস */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">🎓 Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-teal-700 transition-colors">› Home</Link></li>
              <li><Link href="/courses" className="hover:text-teal-700 transition-colors">› Courses</Link></li>
              <li><Link href="/about" className="hover:text-teal-700 transition-colors">› About Us</Link></li>
              <li><Link href="/contact" className="hover:text-teal-700 transition-colors">› Contact</Link></li>
              <li><Link href="/faq" className="hover:text-teal-700 transition-colors">› FAQ</Link></li>
            </ul>
          </div>

          {/* রিসোর্সেস */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">🗂️ Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/blog" className="hover:text-teal-700 transition-colors">› Blog</Link></li>
              <li><Link href="/help" className="hover:text-teal-700 transition-colors">› Help Center</Link></li>
              <li><Link href="/terms" className="hover:text-teal-700 transition-colors">› Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-teal-700 transition-colors">› Privacy Policy</Link></li>
              <li><Link href="/support" className="hover:text-teal-700 transition-colors">› Support</Link></li>
            </ul>
          </div>

          {/* সাপোর্ট */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">🎧 Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/contact-us" className="hover:text-teal-700 transition-colors">› Contact Us</Link></li>
              <li><Link href="/live-chat" className="hover:text-teal-700 transition-colors">› Live Chat</Link></li>
              <li><Link href="/faqs" className="hover:text-teal-700 transition-colors">› FAQs</Link></li>
              <li><Link href="/report" className="hover:text-teal-700 transition-colors">› Report Issue</Link></li>
              <li><Link href="/feedback" className="hover:text-teal-700 transition-colors">› Feedback</Link></li>
            </ul>
          </div>

          {/* নিউজলেটার সাবস্ক্রিপশন */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">✉️ Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get the latest courses, updates and learning resources straight to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal-600"
              />
              <button 
                type="submit" 
                className="w-full bg-teal-800 hover:bg-teal-900 text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* কপিরাইট বার */}
      <div className="bg-[#0B3B36] text-teal-100 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm gap-4">
          <p>© 2026 DataPollex LMS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> for Learners
          </p>
        </div>
      </div>
    </footer>
  );
}