'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'student' | 'admin'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // ব্যাকএন্ড বেস ইউআরএল (আপনার .env ফাইল অনুযায়ী পরিবর্তন হতে পারে)
      const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://lms-backend-tfco.vercel.app';
      
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // টোকেন এবং ইউজার তথ্য লোকাল স্টোরেজে সেভ করা
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.data || data.user));

        // রোল অনুযায়ী রিডাইরেক্ট করা
        const userRole = (data.data?.role || data.user?.role || role);
        if (userRole === 'admin') {
          router.push('/dashboard/admin');
        } else {
          router.push('/dashboard');
        }
      } else {
        setError(data.message || 'Invalid email or password.');
      }
    } catch (err) {
      setError('Server connection failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-teal-50/40 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-teal-100">
        
        {/* বাম পাশের গ্রাফিক্স ও ওয়েলকাম সেকশন */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#0B3B36] via-teal-800 to-teal-700 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-3">Welcome Back!</h2>
            <p className="text-teal-100 text-sm leading-relaxed">
              Continue your learning journey with DataPollex LMS. Access your courses, track progress, and achieve your goals.
            </p>
          </div>

          {/* ইলাস্ট্রেশন কার্ড (মকআপ অনুযায়ী) */}
          <div className="my-8 relative z-10 flex flex-col items-center justify-center">
            <div className="w-48 h-48 bg-teal-900/50 backdrop-blur-sm rounded-2xl border border-teal-500/30 flex flex-col items-center justify-center p-6 shadow-inner">
              <div className="text-5xl mb-3">🎓</div>
              <div className="w-28 h-16 bg-teal-950 rounded-lg border border-teal-400/40 flex items-center justify-center shadow-md">
                <span className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs pl-0.5">
                  ▶
                </span>
              </div>
              <div className="flex gap-1 mt-3">
                <span className="w-8 h-1.5 bg-orange-400 rounded-full"></span>
                <span className="w-6 h-1.5 bg-teal-300 rounded-full"></span>
              </div>
            </div>
          </div>

          <div className="text-xs text-teal-200/80 relative z-10">
            Learn • Practice • Grow
          </div>

          {/* ব্যাকগ্রাউন্ড ডেকোরেটিভ সার্কেল */}
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-teal-600/20 rounded-full blur-2xl"></div>
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-teal-400/10 rounded-full blur-2xl"></div>
        </div>

        {/* ডান পাশের লগইন ফর্ম */}
        <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Login to Your Account</h1>
              <p className="text-gray-500 text-sm mt-1">Choose your role to continue</p>
            </div>

            {/* Role Switcher (Student / Admin) */}
            <div className="grid grid-cols-2 gap-3 p-1.5 bg-gray-100 rounded-full mb-6">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`py-2.5 px-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                  role === 'student'
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span>🎓</span> Student
              </button>
              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`py-2.5 px-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                  role === 'admin'
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span>🛡️</span> Admin
              </button>
            </div>

            {/* এরর মেসেজ */}
            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <span className="absolute inset-y-0 left-3.5 flex items-center text-gray-400 text-sm">
                  ✉️
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:bg-white focus:border-teal-600 transition-colors"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <span className="absolute inset-y-0 left-3.5 flex items-center text-gray-400 text-sm">
                  🔒
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-10 pr-11 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:bg-white focus:border-teal-600 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3.5 flex items-center text-gray-400 hover:text-gray-600 text-sm"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between text-xs text-gray-600 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-gray-300 text-teal-700 focus:ring-teal-600"
                  />
                  <span>Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-teal-700 hover:underline font-medium">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-700 hover:bg-teal-800 disabled:bg-teal-400 text-white font-semibold py-3 px-6 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 mt-2"
              >
                {loading ? 'Logging in...' : 'Login →'}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-gray-400">OR</span>
              </div>
            </div>

            {/* Register Link */}
            <p className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-teal-700 font-semibold hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}