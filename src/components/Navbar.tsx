'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { LogIn, LogOut, LayoutDashboard, Menu, X } from "lucide-react";
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-[#0e1416]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center text-xl font-mono font-bold tracking-tighter text-white">
              C2C<span className="text-cyan-400">.SYST</span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <Link href="/onboard" className="inline-flex items-center px-1 pt-1 text-sm font-mono text-[#dde4e5]/60 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                Onboard
              </Link>
              <Link href="/assessment" className="inline-flex items-center px-1 pt-1 text-sm font-mono text-[#dde4e5]/60 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                The_Ordeal
              </Link>
              {user && (
                <Link href="/dashboard" className="inline-flex items-center px-1 pt-1 text-sm font-mono text-[#dde4e5]/60 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                  Dashboard
                </Link>
              )}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-[#dde4e5]/80 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50 transition-all group"
              >
                <LogOut className="w-4 h-4 text-red-400 transition-colors" />
                <span>LOGOUT.SYS</span>
              </button>
            ) : (
              <Link 
                href="/login" 
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-[#dde4e5]/80 hover:bg-cyan-500 hover:text-[#0e1416] hover:border-cyan-400 transition-all group"
              >
                <LogIn className="w-4 h-4 text-cyan-400 group-hover:text-[#0e1416] transition-colors" />
                <span>LOGIN.EXE</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#dde4e5]/60 hover:text-cyan-400 hover:bg-white/5 transition-colors focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#0e1416] border-b border-white/5 animate-in slide-in-from-top duration-200">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link 
              href="/onboard" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-base font-mono text-[#dde4e5]/60 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-colors"
            >
              ONBOARD
            </Link>
            <Link 
              href="/assessment" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-base font-mono text-[#dde4e5]/60 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-colors"
            >
              THE_ORDEAL
            </Link>
            {user && (
              <Link 
                href="/dashboard" 
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-mono text-[#dde4e5]/60 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-colors"
              >
                DASHBOARD
              </Link>
            )}
          </div>
          <div className="pt-4 pb-3 border-t border-white/5 px-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-2 px-3 py-2 text-base font-mono text-red-400 hover:bg-red-500/10 rounded-md transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>LOGOUT.SYS</span>
              </button>
            ) : (
              <Link 
                href="/login" 
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center gap-2 px-3 py-2 text-base font-mono text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors"
              >
                <LogIn className="w-5 h-5" />
                <span>LOGIN.EXE</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
